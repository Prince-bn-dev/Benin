# Run doc — Bénin, Terre de Culture (Next.js 15)

Site vitrine touristique & culturel : Next.js App Router + TypeScript + SCSS Modules + Framer Motion.

## 1. Reproduire les artefacts (checkout frais)

```bash
npm install --no-audit --no-fund
```

- Installe `next@15`, `react@19`, `framer-motion@11`, `sass` + `typescript` et les `@types` (devDependencies).
- Aucun fichier `.env*` n'est requis (pas de variables d'environnement).
- Les illustrations du site sont des SVG statiques dans `public/images/` (committés, rien à générer).
- Optionnel (build de production) : `npx next build` puis `npx next start`.

## 2. Lancer le serveur de dev

```bash
npm run dev
```

- Port : **7308** (lancé explicitement avec `next dev -p 7308`, enregistré dans la preview).
  En local hors preview : `npm run dev` écoute sur **3000** par défaut.
- ⚠️ Ne pas lancer `next build` pendant qu'un `next dev` tourne : les deux écrivent
  dans `.next/` et entrent en conflit (MODULE_NOT_FOUND). Arrêter le dev d'abord.
- Si le port est occupé : `npx next dev -p <port>` et mettre à jour ce doc.
- Astuce verification : `curl -s -o /dev/null -w "%{http_code}" http://localhost:<port>`
- En détaché (Windows) : PowerShell `Start-Process` sur `npm.cmd` avec
  `-ArgumentList 'run','dev','--','-p','7308'`, `-RedirectStandardOutput <log>` et
  `-RedirectStandardError <log>.err` (stdout et stderr dans des fichiers distincts),
  puis vérifier le pid via `Get-NetTCPConnection -LocalPort 7308` et attendre que
  l'URL réponde avant d'enregistrer la preview.
