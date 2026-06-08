```text
 ╔═══════════════════════════════════════════════════════════════╗
 ║    ____        _ _            ___  ____                       ║
 ║   |  _ \  ___ | (_)_ __   __ _/ _ \/ ___|                     ║
 ║   | | | |/ _ \| | | '_ \ / _` | | | \___ \                    ║
 ║   | |_| | (_) | | | | | | (_| | |_| |___) |                   ║
 ║   |____/ \___/|_|_|_| |_|\__,_|\___/|____/                    ║
 ║                                                               ║
 ╚═══════════════════════════════════════════════════════════════╝
## 🌌 Witaj w DolinaOS
DolinaOS to projekt minimalistycznej dystrybucji systemu operacyjnego opartej na **Arch Linux**. Projekt został stworzony z myślą o maksymalnej wydajności, stabilności i estetyce, dedykowany dla użytkowników ceniących pełną kontrolę nad systemem.

---

### 🚀 Główne cele projektu
* **Minimalizm:** Instalujemy tylko to, co jest niezbędne.
* **Wydajność:** System zoptymalizowany pod kątem responsywności i gamingu.
* **Estetyka:** Prosty, funkcjonalny pulpit z dopracowanym środowiskiem XFCE.
* **Łatwość zarządzania:** Automatyzacja konfiguracji za pomocą skryptów i Git.

---

### 🛠️ Technologie
- **Base:** Arch Linux
- **Installer:** Custom Bash Scripts (Archiso)
- **Desktop Environment:** XFCE
- **Package Management:** Pacman

---

### 📂 Struktura Projektu
```text
DolinaOS/
├── airootfs/       # Pliki konfiguracyjne systemu (tapety, ustawienia)
├── packages.x86_64 # Lista pakietów do zainstalowania
├── efiboot/        # Konfiguracja bootloadera
└── scripts/        # Twoje własne skrypty instalacyjne
