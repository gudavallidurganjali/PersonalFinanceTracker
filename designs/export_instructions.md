# Export Instructions — PNGs from SVG frames

This project includes simple SVG frame placeholders in `designs/frames/`:
- `overview.svg`
- `budgets.svg`
- `goals.svg`

You can convert these SVGs to PNGs using ImageMagick, the `rsvg-convert` tool, or a small Node script using `sharp`.

1) ImageMagick (PowerShell / cmd)

Install ImageMagick and ensure `magick` is on your PATH. Then run:

```powershell
magick convert designs/frames/overview.svg designs/frames/overview.png
magick convert designs/frames/budgets.svg designs/frames/budgets.png
magick convert designs/frames/goals.svg designs/frames/goals.png
```

2) Using `rsvg-convert` (Linux / WSL)

```bash
rsvg-convert -o designs/frames/overview.png designs/frames/overview.svg
rsvg-convert -o designs/frames/budgets.png designs/frames/budgets.svg
rsvg-convert -o designs/frames/goals.png designs/frames/goals.svg
```

3) Node.js + sharp (cross-platform)

If you prefer a script, add `sharp` as a dev dependency and run the following script.

Install sharp (PowerShell):

```powershell
npm.cmd install --save-dev sharp
```

Create `scripts/convert-svg-to-png.js` with code to convert the three files (example below):

```js
const sharp = require('sharp')
const files = ['overview','budgets','goals']
files.forEach(async name => {
  await sharp(`designs/frames/${name}.svg`).png().toFile(`designs/frames/${name}.png`)
  console.log('wrote', name)
})
```

Then run:

```powershell
node scripts/convert-svg-to-png.js
```

Notes
- The SVG placeholders are simple frames to use as starting points; if you want fully-produced PNGs matching final UI, I can generate higher-fidelity screen exports (by creating real screens in SVG or rendering the app and taking screenshots).
- If you'd like, I can add the `scripts/convert-svg-to-png.js` file to the repo and add `sharp` to `devDependencies` and run the conversion here.
