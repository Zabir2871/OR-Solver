OR Classroom Solver (offline PWA)

FILES
  index.html          the app
  solver.js           bundled LP / integer solver (javascript-lp-solver 0.4.24)
  html2canvas.min.js  used only for PNG / JPG export (html2canvas 1.4.1)
  sw.js               service worker (offline storage)
  manifest.json       install info
  icons/              app icons

RUN LOCALLY
  Quickest: double-click index.html. Everything works, but offline storage
  and Install are off when a page is opened from a file.

  Full PWA on your computer (needs Python 3):
    python3 -m http.server 8000
  then open http://localhost:8000 in Chrome.

  On your phone: upload these files to any HTTPS host (GitHub Pages, Netlify,
  Cloudflare Pages), open the URL once online, then Settings > Install app.

UPDATING
  After changing any file, change VERSION in sw.js so phones fetch the new copy.
  Keep html2canvas.min.js next to index.html, or image export will not work.

NEW IN THIS VERSION
  Natural-language input, saved problems (kept on the device), PDF file export,
  colour palettes, hover and long-press tips. Settings moved next to Solve.
