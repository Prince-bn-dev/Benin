const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const b64 = async (file, width) => {
  const buf = await sharp(file).resize({ width, withoutEnlargement: true }).jpeg({ quality: 72 }).toBuffer();
  return 'data:image/jpeg;base64,' + buf.toString('base64');
};

(async () => {
  // meta of user images
  const dir = 'assets-user';
  const files = fs.readdirSync(dir).filter(f => /\.(jpe?g|png|webp)$/i.test(f));
  const metas = [];
  for (const f of files) {
    try {
      const m = await sharp(path.join(dir, f)).metadata();
      metas.push({ f, w: m.width, h: m.height, fmt: m.format });
    } catch (e) {
      metas.push({ f, err: String(e) });
    }
  }
  console.log(JSON.stringify(metas, null, 1));

  // mockup slices
  const slices = [];
  for (let i = 0; i <= 6; i++) {
    const p = `mockup-slice-${i}.png`;
    if (fs.existsSync(p)) slices.push({ i, src: await b64(p, 760) });
  }

  // user thumbs
  const users = [];
  for (const m of metas) {
    if (m.err) continue;
    users.push({ f: m.f, w: m.w, h: m.h, src: await b64(path.join(dir, m.f), 340) });
  }

  const html = `<!doctype html><html><head><meta charset="utf-8">
<style>
 body{background:#111;color:#eee;font:13px monospace;margin:0;padding:10px}
 h2{margin:14px 0 6px;color:gold}
 .grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}
 .u{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
 figure{margin:0;background:#222;padding:6px}
 img{width:100%;display:block}
 figcaption{color:#0f0;word-break:break-all;margin-top:4px}
</style></head><body>
<h2>MOCKUP SLICES</h2><div class="grid">
${slices.map(s => `<figure><img src="${s.src}"><figcaption>SLICE ${s.i}</figcaption></figure>`).join('')}
</div>
<h2>USER IMAGES</h2><div class="u">
${users.map(u => `<figure><img src="${u.src}"><figcaption>${u.f} (${u.w}x${u.h} ${u.fmt})</figcaption></figure>`).join('')}
</div></body></html>`;

  fs.writeFileSync('mapping-board.html', html);
  console.log('board written', Math.round(html.length / 1024), 'KB');
})();
