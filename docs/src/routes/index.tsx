import { createFileRoute } from "@tanstack/react-router";
import { Download, Zap, Gamepad2, Monitor, Cpu, Github, MessageCircle, FileText, ArrowRight } from "lucide-react";
import { BackgroundFX } from "@/components/BackgroundFX";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DolinaOS — Arch Linux dla graczy" },
      { name: "description", content: "DolinaOS to dystrybucja oparta na Archu, zoptymalizowana pod gaming i codzienne użytkowanie. Twój system, Twoje zasady." },
      { property: "og:title", content: "DolinaOS — Arch Linux dla graczy" },
      { property: "og:description", content: "Elegancka dystrybucja Arch Linux skrojona pod wydajność w grach." },
    ],
  }),
  component: Landing,
});

const features = [
  { icon: Zap, title: "Wydajność Arch Linux", desc: "Rolling release, najnowsze pakiety, zero kompromisów. Stabilna baza Arch z naszą optymalizacją." },
  { icon: Gamepad2, title: "Gotowy stos gamingowy", desc: "Steam, Proton-GE, Lutris, Gamescope, MangoHud — wszystko działa od pierwszego uruchomienia." },
  { icon: Monitor, title: "GNOME lub Hyprland", desc: "Wybierz znajome GNOME albo tiling z Hyprland. Twój workflow, Twoja decyzja." },
  { icon: Cpu, title: "Zoptymalizowany kernel", desc: "Linux-zen z patchami pod low-latency, BBR i schedulerem zoptymalizowanym pod gaming." },
];

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden text-foreground">
      <BackgroundFX />

      {/* Nav */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <div className="grid h-7 w-7 place-items-center rounded-full bg-primary/15">
            <div className="h-2.5 w-2.5 rounded-full bg-primary" />
          </div>
          <span className="text-base">DolinaOS</span>
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="transition hover:text-foreground">Funkcje</a>
          <a href="#philosophy" className="transition hover:text-foreground">Filozofia</a>
          <a href="#" className="transition hover:text-foreground">GitHub</a>
        </nav>
        <a href="#download" className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90">
          Pobierz
        </a>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-32 md:pt-36 md:pb-40">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center animate-fade-up">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            v1.0 Now Available
          </div>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tighter md:text-7xl lg:text-8xl">
            Twój system,
            <br />
            <span className="text-gradient">Twoje zasady.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Lekka dystrybucja Arch Linux, która łączy elegancję z surową wydajnością.
            Skrojona pod gaming i codzienną pracę — gotowa do działania w kilka minut.
          </p>
          <div id="download" className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_60px_-10px_oklch(0.68_0.22_305/0.6)] transition hover:bg-primary/90">
              <Download className="h-4 w-4" />
              Pobierz ISO
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-7 py-3 text-sm font-medium text-foreground transition hover:bg-card">
              Dokumentacja
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tighter md:text-5xl">Dlaczego DolinaOS?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Wszystko, czego potrzebujesz. Nic, czego nie chcesz.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-border bg-card/40 p-6 transition hover:border-primary/40 hover:bg-card/70">
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary/20">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-4 text-xs uppercase tracking-widest text-primary">Filozofia</div>
            <h2 className="text-4xl font-bold leading-[1.1] tracking-tighter md:text-5xl">
              System dla tych, którzy nie akceptują kompromisów.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              <span className="font-medium text-foreground">DolinaOS powstało z potrzeby</span> — systemu, który daje pełną kontrolę, nie pyta o pozwolenie i nie ukrywa swojej mocy za warstwami abstrakcji.
            </p>
            <p>
              Każda decyzja architektoniczna podejmowana jest z myślą o jednym użytkowniku — entuzjaście, który wie, czego chce. Domyślne ustawienia są opinionated, ale wszystko da się zmienić.
            </p>
            <p className="border-l-2 border-primary pl-5 text-foreground">
              Nie budujemy systemu „dla wszystkich". Budujemy system dla siebie — i dzielimy się nim.
            </p>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="relative z-10 mt-16 border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="grid h-6 w-6 place-items-center rounded-full bg-primary/15">
              <div className="h-2 w-2 rounded-full bg-primary" />
            </div>
            <span className="text-foreground">DolinaOS</span>
            <span>© 2026 · GPL v3</span>
          </div>
          <div className="flex items-center gap-2">
            <a href="#" aria-label="GitHub" className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card/40 text-muted-foreground transition hover:border-primary/40 hover:text-primary">
              <Github className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Discord" className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card/40 text-muted-foreground transition hover:border-primary/40 hover:text-primary">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Dokumentacja" className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card/40 text-muted-foreground transition hover:border-primary/40 hover:text-primary">
              <FileText className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
