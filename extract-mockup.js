const sharp = require('sharp');
const fs = require('fs');

// ==========================================================================
// Passe 2 — extraction des photos du mockup (100% fidélité visuelle)
// Les photos introuvables chez l'utilisateur sont prélevées dans le design.
// Mockup : 1440 x 6968
// ==========================================================================

(async () => {
  const M = 'design-mockup.png';
  const meta = await sharp(M).metadata();
  const W = meta.width, H = meta.height;
  const px = (fx, fy) => [Math.round(fx * W), Math.round(fy * H)];

  // Zones repérées sur les tranches (fractions x, y, w, h)
  const crops = [
    // --- Portails ------------------------------------------------------------
    ['portals/evasion.webp',      0.512, 0.1625, 0.452, 0.062],  // 02 Évasion : côte + Ganvié
    ['portals/numerique.webp',    0.512, 0.290,  0.452, 0.048],  // 04 Numérique : bureau services
    ['portals/communes.webp',     0.512, 0.335,  0.452, 0.048],  // 05 Communes : marché mural
    ['portals/personnalites.webp',0.512, 0.380,  0.452, 0.090],  // 06 Personnalités : femme portrait
    ['portals/heritage.webp',     0.025, 0.1625, 0.452, 0.090],  // 01 Héritage : tissu drapeau
    // --- Histoire --------------------------------------------------------------
    // statues-rois.png déjà fourni par l'utilisateur
    // --- Régions ---------------------------------------------------------------
    ['regions/nord.webp',         0.128, 0.5335, 0.145, 0.052],  // montagnes Atacora
    ['regions/sud.webp',          0.128, 0.727,  0.145, 0.052],  // côte lagune
    // --- Lieux (collage) ---------------------------------------------------------
    ['lieux/dantokpa.webp',       0.055, 0.745,  0.125, 0.075],  // marché aerial
    ['lieux/amazone.webp',        0.200, 0.735,  0.150, 0.095],  // statue amazone
    ['lieux/etoile-rouge.webp',   0.370, 0.735,  0.230, 0.095],  // monument étoile rouge
    ['lieux/zinsou.webp',         0.630, 0.735,  0.160, 0.095],  // galerie d'art
    ['lieux/route-peches.webp',   0.815, 0.745,  0.150, 0.075],  // plage cocotiers
  ];

  for (const [out, fx, fy, fw, fh] of crops) {
    const left = Math.round(fx * W);
    const top = Math.round(fy * H);
    let width = Math.round(fw * W);
    let height = Math.round(fh * H);
    width = Math.min(width, W - left);
    height = Math.min(height, H - top);
    await sharp(M).extract({ left, top, width, height })
      .webp({ quality: 84 })
      .toFile(`public/images/${out}`);
    console.log('✓', out, `${width}x${height}`);
  }
  console.log('PASS 2 done');
})();
