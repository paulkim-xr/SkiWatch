import { NavLink, BrowserRouter, Routes, Route } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";
import Webcam from "@/components/Webcam";
import Slopes from "@/components/Slopes";
import { useDarkMode } from "@/hooks/useDarkMode";
import { useI18n } from "@/lib/i18n/context";
import { strings } from "@/lib/i18n/strings";
import { Locale, localeLabels, locales } from "@/lib/i18n/locales";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function App() {
  const { isDark, toggle } = useDarkMode();
  const { t, locale, setLocale } = useI18n();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "px-3 py-1 text-sm font-medium rounded-md transition-colors",
      isActive
        ? "bg-slate-200 text-slate-900 dark:bg-slate-700 dark:text-slate-100 shadow-sm"
        : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100",
    ].join(" ");

  const handleLocaleChange = (value: string) => {
    setLocale(value as Locale);
  };

  return (
    <BrowserRouter basename="/SkiWatch">
      <div className="h-screen flex flex-col bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors overflow-hidden">
        <header className="sticky top-0 z-20 border-b border-slate-200/70 dark:border-slate-700/60 bg-white/80 dark:bg-slate-900/80 backdrop-blur">
          <div className="flex h-14 items-center justify-between px-4">
            <div className="flex items-center gap-6">
              {/* <span className="text-lg font-semibold tracking-tight">SkiWatch</span> */}
              <nav className="flex items-center gap-2">
                <NavLink to="/" end className={navLinkClass}>
                  {t(strings.nav.webcams)}
                </NavLink>
                <NavLink to="/slopes" className={navLinkClass}>
                  {t(strings.nav.slopes)}
                </NavLink>
              </nav>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="language-select" className="sr-only">
                {t(strings.language.label)}
              </label>
              <Select value={locale} onValueChange={handleLocaleChange}>
                <SelectTrigger id="language-select" className="h-9 w-28 justify-between">
                  <SelectValue placeholder={t(strings.language.label)} />
                </SelectTrigger>
                <SelectContent>
                  {locales.map((code) => (
                    <SelectItem key={code} value={code}>
                      {localeLabels[code]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <button
                type="button"
                onClick={toggle}
                aria-pressed={isDark}
                aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
                className="inline-flex items-center gap-2 rounded-md border border-slate-300/70 dark:border-slate-600/70 bg-white/80 dark:bg-slate-800/80 px-3 py-1 text-sm font-medium text-slate-700 hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                {isDark ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
                <span>{isDark ? t(strings.themeToggle.light) : t(strings.themeToggle.dark)}</span>
              </button>
            </div>
          </div>
        </header>
        <div className="flex-1 min-h-0 flex overflow-hidden">
          <Routes>
            <Route path="/slopes" element={<Slopes />} />
            <Route path="/" element={<Webcam />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
