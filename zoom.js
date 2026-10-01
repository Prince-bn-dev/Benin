const sharp = require('sharp');
const fs = require('fs');

(async () => {
  const meta = await sharp('design-mockup.png').metadata();
  console.log('mockup', meta.width, 'x', meta.height);
  const W = meta.width, H = meta.height;

  // zoom crops (fractions of the page) — tuned to inspect key details
  const crops = [
    ['hero-bottom', 0.0, 0.10, 1.0, 0.16],      // hero object collage
    ['portals-a', 0.0, 0.155, 1.0, 0.13],       // portal cards 1-3
    ['portals-b', 0.0, 0.28, 1.0, 0.13],        // portal cards 4-6
    ['geo-cards', 0.0, 0.47, 0.55, 0.14],       // geography region cards photos
    ['places', 0.0, 0.72, 1.0, 0.12],           // places collage
    ['cta', 0.0, 0.83, 1.0, 0.07],              // CTA band
    ['masque', 0.0, 0.88, 1.0, 0.12],           // masque section
  ];
  const b64s = [];
  for (const [name, x0, y0, fw, fh] of crops) {
    const left = Math.round(x0 * W), top = Math.round(y0 * H);
    const width = Math.min(Math.round(fw * W), W - left);
    const height = Math.min(Math.round(fh * H), H - top);
    const buf = await sharp('design-mockup.png').extract({ left, top, width, height })
      .resize({ width: 1200, withoutEnlargement: false }).png().toBuffer();
    b64s.push([name, 'data:image/png;base64,' + buf.toString('base64')]);
    console.log('crop', name, width, 'x', height);
  }

  const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  body{background:#111;color:#eee;font:13px monospace;margin:0;padding:8px}
  h2{color:gold;margin:10px 0 4px}figure{margin:0 0 10px}img{width:100%;display:block}
  </style></head><body>
  ${b64s.map(([n, s]) => `<h2 id="${n}">${n}</h2><figure><img src="${s}"></figure>`).join('')}
  </body></html>`;
  fs.writeFileSync('zoom-board.html', html);
  console.log('zoom-board.html', Math.round(html.length / 1024), 'KB');
})();
