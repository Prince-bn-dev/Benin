const sharp = require('sharp');

// ==========================================================================
// Passe 2b — ré-extraction depuis des zones SANS texte incrusté
// (évite le dédoublement avec le texte HTML des cartes)
// ==========================================================================

(async () => {
  const M = 'design-mockup.png';
  const meta = await sharp(M).metadata();
  const W = meta.width, H = meta.height;

  const crops = [
    // [out, fx, fy, fw, fh]  — zones sans texte du mockup
    ['portals/heritage.webp',      0.025, 0.1625, 0.452, 0.048], // tissu, moitié haute
    ['portals/evasion.webp',       0.735, 0.1625, 0.229, 0.062], // côte, moitié droite
    ['portals/numerique.webp',     0.745, 0.290,  0.219, 0.048], // bureau, droite
    ['portals/communes.webp',      0.745, 0.335,  0.219, 0.048], // fresque marché, droite
    ['portals/personnalites.webp', 0.740, 0.395,  0.224, 0.075], // portrait, bas droit
    ['lieux/dantokpa.webp',        0.055, 0.745,  0.125, 0.052], // hors légende
    ['lieux/amazone.webp',         0.200, 0.735,  0.150, 0.068],
    ['lieux/etoile-rouge.webp',    0.370, 0.735,  0.230, 0.068],
    ['lieux/zinsou.webp',          0.630, 0.735,  0.160, 0.068],
    ['lieux/route-peches.webp',    0.815, 0.745,  0.150, 0.052],
  ];

  for (const [out, fx, fy, fw, fh] of crops) {
    const left = Math.round(fx * W);
    const top = Math.round(fy * H);
    const width = Math.min(Math.round(fw * W), W - left);
    const height = Math.min(Math.round(fh * H), H - top);
    await sharp(M).extract({ left, top, width, height })
      .webp({ quality: 84 })
      .toFile(`public/images/${out}`);
    console.log('✓', out, `${width}x${height}`);
  }
  console.log('PASS 2b done');
})();
