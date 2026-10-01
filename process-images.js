const sharp = require('sharp');
const fs = require('fs');

// ==========================================================================
// Passe 1 — images utilisateur → public/images (noms propres, tailles web)
// ==========================================================================

(async () => {
  const A = 'assets-user';
  const P = 'public/images';
  fs.mkdirSync(`${P}/portals`, { recursive: true });
  fs.mkdirSync(`${P}/lieux`, { recursive: true });
  fs.mkdirSync(`${P}/regions`, { recursive: true });

  // 1. Logo (chapeau traditionnel) — header + footer (PNG alpha)
  await sharp(`${A}/logo-removebg-preview.png`).resize({ height: 220 }).png().toFile(`${P}/logo.png`);

  // 2. Masque principal (section Le Masque Parle + favicon/brand)
  await sharp(`${A}/mask.webp`).resize({ height: 900 }).webp({ quality: 82 }).toFile(`${P}/masque-bois.webp`);

  // 3. Masque artisanal sur fond turquoise — grande image de la section Masque
  await sharp(`${A}/handcrafted-wooden-decorative-mask-sculpture.jpg`).resize({ width: 1600 }).webp({ quality: 78 }).toFile(`${P}/masque-artisanal.webp`);

  // 4. Statue des trois rois (PNG alpha) — section Histoire & Mémoire
  await sharp(`${A}/extract_the_bronze_statue_of_the_three_kings_and_the_large_golden_circular_sun-removebg-preview.png`).png().toFile(`${P}/statues-rois.png`);

  // 5. Profils femme (art Amazones) — gauche = jpg, droite = webp miroir naturel
  await sharp(`${A}/femme.jpg`).resize({ height: 760 }).webp({ quality: 88 }).toFile(`${P}/profil-femme-a.webp`);
  await sharp(`${A}/femme.webp`).resize({ height: 760 }).webp({ quality: 88 }).toFile(`${P}/profil-femme-b.webp`);

  // 6. Texture beige artisanale — fond global des sections claires
  await sharp(`${A}/a_clean_high_resolution_background_texture_inspired_by_the_provided_image..png`)
    .resize({ width: 1400 }).webp({ quality: 74 }).toFile(`${P}/texture-fond.webp`);

  // 7. Vue aérienne Cotonou / plage Grand-Popo — fond de la section Lieux
  await sharp(`${A}/a_beautiful_aerial_view_of_cotonou_or_a_serene_beach_in_grand_popo_benin..png`)
    .resize({ width: 1600 }).webp({ quality: 76 }).toFile(`${P}/cotonou-aerial.webp`);

  // 8. Colline (Sud-Bénin) — photo région Centre
  await sharp(`${A}/images.jpeg`).resize({ width: 480 }).webp({ quality: 80 }).toFile(`${P}/regions/centre.webp`);

  // 9. Masque doré paré de cauris — photo région Sud (récif/plage remplacée par trésor du littoral ?)
  //    → utilisée en fond décoration de la citation (masque sombre)
  await sharp(`${A}/unnamed (1).jpg`).resize({ width: 900 }).webp({ quality: 78 }).toFile(`${P}/masque-cauris.webp`);

  // 10. Carte du Bénin illustrée (ChatGPT Sep 7) — remplace la carte SVG
  await sharp(`${A}/ChatGPT Image Sep 7, 2026, 05_06_07 PM.png`).resize({ width: 1254 }).webp({ quality: 86 }).toFile(`${P}/carte-benin.webp`);

  // 11. Drapeau texture (ChatGPT Sep 1, 887x278) — bande déco
  await sharp(`${A}/ChatGPT Image Sep 1, 2026, 02_22_42 PM (2).png`).webp({ quality: 82 }).toFile(`${P}/drapeau-texture.webp`);

  // 12. Réunion économique (ChatGPT Sep 4) — portail Vivre & entreprendre
  await sharp(`${A}/ChatGPT Image Sep 4, 2026, 03_32_29 PM.png`).resize({ width: 1100 }).webp({ quality: 78 }).toFile(`${P}/portals/entreprise.webp`);

  console.log('PASS 1 done');
})();
