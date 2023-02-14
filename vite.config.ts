import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import UnoCSS from "unocss/vite";
import presetAttributify from "unocss/preset-attributify";
import presetIcons from "unocss/preset-icons";
import presetUno from "unocss/preset-uno";
import { fileURLToPath } from "url";

export default defineConfig(() => {
  const dark = "class";

  return {
    plugins: [
      UnoCSS({
        presets: [presetUno({ dark }), presetAttributify({ dark }), presetIcons({})],
      }),
      react(),
    ],

    resolve: {
      alias: {
        "@": fileURLToPath(new URL("src", import.meta.url)),
      },
    },
  };
});
