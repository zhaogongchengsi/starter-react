import { useTheme } from "@/store";

export default function Home() {
  const [theme, setTheme] = useTheme();

  return (
    <div>
      <h3 className="py-3">{theme}</h3>
      <button className="border py-2 px-3 dark:text-red" onClick={() => setTheme()}>
        主题切换
      </button>
    </div>
  );
}
