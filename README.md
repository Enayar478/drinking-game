# 🍺 CultureSips - Jeu à Boire Culturel

Un jeu de quiz culturel amusant où vous devez deviner des pays à partir d'images. Chaque bonne réponse = +1 gorgée. Une erreur = buvez tout !

## 🎮 Comment jouer ?

1. **Sélectionnez 2 pays** parmi 25 pays disponibles (5 régions du monde)
2. **Devinez le pays** affiché sur chaque image
3. **Accumulez des gorgées** à chaque bonne réponse
4. **Buvez tout** si vous vous trompez !

## ✨ Fonctionnalités

- ✅ 25 pays à travers 5 régions (Asie de l'Est, Asie du Sud-Est, Europe du Nord, Amérique Latine, Afrique)
- ✅ Images dynamiques via Unsplash API
- ✅ Design moderne et responsive
- ✅ Animations fluides et effets visuels
- ✅ Vibrations pour le feedback (sur mobile)
- ✅ Support PWA (installable sur mobile)
- ✅ Traductions FR/EN
- ✅ Interface optimisée pour mobile

## 🚀 Installation et développement

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation

```bash
npm install
```

### Lancer en développement

```bash
npm run dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

### Build pour production

```bash
npm run build
npm start
```

## 📱 Installation PWA

L'application peut être installée sur mobile comme une app native :

1. Ouvrez l'app dans votre navigateur mobile
2. Tapez sur "Ajouter à l'écran d'accueil"
3. Profitez de l'expérience app-like !

## 🎨 Stack technique

- **Framework**: Next.js 15.1.1 (App Router)
- **UI**: React 19 + TailwindCSS
- **State Management**: Zustand
- **Icons**: Lucide React
- **i18n**: next-intl
- **Images**: Unsplash Source API

## 📂 Structure du projet

```
drinking-game/
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/game/     # Composants du jeu
│   ├── store/              # State management
│   ├── utils/              # Utilitaires
│   └── locales/            # Traductions
└── public/
    ├── manifest.json       # PWA manifest
    └── images/countries/   # Images locales
```

## 🎯 TODO pour publication sur les stores

### Assets nécessaires
- [ ] Créer icon-192.png et icon-512.png pour PWA
- [ ] Créer splash screens pour iOS
- [ ] Ajouter screenshots pour les stores

### Publication mobile (Capacitor)

Pour publier sur Play Store et App Store, installez Capacitor :

```bash
npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/ios
npx cap init
npx cap add android
npx cap add ios
npm run build
npx cap sync
npx cap open android  # ou ios
```

### Améliorations futures
- [ ] Mode "timer" (répondre en X secondes)
- [ ] Classement local / best scores
- [ ] Sons optionnels
- [ ] Partage de scores sur réseaux sociaux
- [ ] Mode multijoueur

## 📝 License

MIT - Libre d'utilisation et modification

---

**Amusez-vous bien et buvez avec modération ! 🍻**
