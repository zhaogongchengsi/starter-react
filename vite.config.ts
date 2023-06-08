import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import UnoCSS from "unocss/vite";
import presetAttributify from "unocss/preset-attributify";
import presetIcons from "unocss/preset-icons";
import presetUno from "unocss/preset-uno";
import { fileURLToPath } from "url";
import { viteMockServe } from "vite-plugin-mock";
import Pages from 'vite-plugin-pages'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const dark = "class",
    proxyprefix = env.VITE_PROXY,
    proxytraget = env.VITE_TARGET,
    usemock = env.VITE_USE_MOCK === "true";

  return {
    server: {
      port: 3531,
      proxy: {
        [`^${proxyprefix}/.*`]: {
          target: proxytraget + proxyprefix,
          changeOrigin: true,
          rewrite: (path: string) => {
            const reg = new RegExp("^\\" + proxyprefix + "/");
            return path.replace(reg, "");
          },
        },
      },
    },

    plugins: [
      UnoCSS({
        presets: [presetUno({ dark }), presetAttributify({ dark }), presetIcons({})],
      }),
      react(),
      usemock &&
        viteMockServe({
          mockPath: "mock", //mock文件路径，在根路径下创建一个mock文件
          prodEnabled: false, //生产环境下为false，这样就不会被打包到生产包中
          ignore: /^\_/, //忽略开始_路径
        }),
      Pages()
    ],

    resolve: {
      alias: {
        "@": fileURLToPath(new URL("src", import.meta.url)),
      },
    },
  };
});
