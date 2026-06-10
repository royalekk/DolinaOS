import { jsxs, jsx } from "react/jsx-runtime";
import { Download, ArrowRight, Zap, Gamepad2, Monitor, Cpu, Github, MessageCircle, FileText } from "lucide-react";
function BackgroundFX() {
  return /* @__PURE__ */ jsxs("div", { className: "pointer-events-none fixed inset-0 z-0 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-[-10%] h-[800px] w-[1100px] -translate-x-1/2 rounded-full bg-primary/25 blur-[140px]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-[20%] h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary-glow/15 blur-[120px]" })
  ] });
}
const features = [{
  icon: Zap,
  title: "Wydajność Arch Linux",
  desc: "Rolling release, najnowsze pakiety, zero kompromisów. Stabilna baza Arch z naszą optymalizacją."
}, {
  icon: Gamepad2,
  title: "Gotowy stos gamingowy",
  desc: "Steam, Proton-GE, Lutris, Gamescope, MangoHud — wszystko działa od pierwszego uruchomienia."
}, {
  icon: Monitor,
  title: "GNOME lub Hyprland",
  desc: "Wybierz znajome GNOME albo tiling z Hyprland. Twój workflow, Twoja decyzja."
}, {
  icon: Cpu,
  title: "Zoptymalizowany kernel",
  desc: "Linux-zen z patchami pod low-latency, BBR i schedulerem zoptymalizowanym pod gaming."
}];
function Landing() {
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen overflow-hidden text-foreground", children: [
    /* @__PURE__ */ jsx(BackgroundFX, {}),
    /* @__PURE__ */ jsxs("header", { className: "relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-5", children: [
      /* @__PURE__ */ jsxs("a", { href: "#", className: "flex items-center gap-2 font-semibold tracking-tight", children: [
        /* @__PURE__ */ jsx("div", { className: "grid h-7 w-7 place-items-center rounded-full bg-primary/15", children: /* @__PURE__ */ jsx("div", { className: "h-2.5 w-2.5 rounded-full bg-primary" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-base", children: "DolinaOS" })
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: "hidden gap-8 text-sm text-muted-foreground md:flex", children: [
        /* @__PURE__ */ jsx("a", { href: "#features", className: "transition hover:text-foreground", children: "Funkcje" }),
        /* @__PURE__ */ jsx("a", { href: "#philosophy", className: "transition hover:text-foreground", children: "Filozofia" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "transition hover:text-foreground", children: "GitHub" })
      ] }),
      /* @__PURE__ */ jsx("a", { href: "#download", className: "rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90", children: "Pobierz" })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-32 md:pt-36 md:pb-40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-3xl flex-col items-center text-center animate-fade-up", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur", children: [
        /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
        "v1.0 Now Available"
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "text-5xl font-bold leading-[1.05] tracking-tighter md:text-7xl lg:text-8xl", children: [
        "Twój system,",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Twoje zasady." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg", children: "Lekka dystrybucja Arch Linux, która łączy elegancję z surową wydajnością. Skrojona pod gaming i codzienną pracę — gotowa do działania w kilka minut." }),
      /* @__PURE__ */ jsxs("div", { id: "download", className: "mt-10 flex flex-col items-center gap-3 sm:flex-row", children: [
        /* @__PURE__ */ jsxs("a", { href: "#", className: "inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_60px_-10px_oklch(0.68_0.22_305/0.6)] transition hover:bg-primary/90", children: [
          /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }),
          "Pobierz ISO"
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#features", className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-7 py-3 text-sm font-medium text-foreground transition hover:bg-card", children: [
          "Dokumentacja",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { id: "features", className: "relative z-10 mx-auto max-w-6xl px-6 py-24", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-16 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold tracking-tighter md:text-5xl", children: "Dlaczego DolinaOS?" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-xl text-muted-foreground", children: "Wszystko, czego potrzebujesz. Nic, czego nie chcesz." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: features.map((f) => /* @__PURE__ */ jsxs("div", { className: "group rounded-2xl border border-border bg-card/40 p-6 transition hover:border-primary/40 hover:bg-card/70", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-5 grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary/20", children: /* @__PURE__ */ jsx(f.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold tracking-tight", children: f.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: f.desc })
      ] }, f.title)) })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "philosophy", className: "relative z-10 mx-auto max-w-6xl px-6 py-24", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-2 lg:gap-20", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "mb-4 text-xs uppercase tracking-widest text-primary", children: "Filozofia" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold leading-[1.1] tracking-tighter md:text-5xl", children: "System dla tych, którzy nie akceptują kompromisów." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: "DolinaOS powstało z potrzeby" }),
          " — systemu, który daje pełną kontrolę, nie pyta o pozwolenie i nie ukrywa swojej mocy za warstwami abstrakcji."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Każda decyzja architektoniczna podejmowana jest z myślą o jednym użytkowniku — entuzjaście, który wie, czego chce. Domyślne ustawienia są opinionated, ale wszystko da się zmienić." }),
        /* @__PURE__ */ jsx("p", { className: "border-l-2 border-primary pl-5 text-foreground", children: 'Nie budujemy systemu „dla wszystkich". Budujemy system dla siebie — i dzielimy się nim.' })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("footer", { className: "relative z-10 mt-16 border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsx("div", { className: "grid h-6 w-6 place-items-center rounded-full bg-primary/15", children: /* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-primary" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "DolinaOS" }),
        /* @__PURE__ */ jsx("span", { children: "© 2026 · GPL v3" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "GitHub", className: "grid h-9 w-9 place-items-center rounded-full border border-border bg-card/40 text-muted-foreground transition hover:border-primary/40 hover:text-primary", children: /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "Discord", className: "grid h-9 w-9 place-items-center rounded-full border border-border bg-card/40 text-muted-foreground transition hover:border-primary/40 hover:text-primary", children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "Dokumentacja", className: "grid h-9 w-9 place-items-center rounded-full border border-border bg-card/40 text-muted-foreground transition hover:border-primary/40 hover:text-primary", children: /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" }) })
      ] })
    ] }) })
  ] });
}
export {
  Landing as component
};
