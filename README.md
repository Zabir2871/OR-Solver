OR Classroom Solver (offline PWA)



FILES

&#x20; index.html          the app

&#x20; solver.js           bundled LP / integer solver (javascript-lp-solver 0.4.24)

&#x20; html2canvas.min.js  used only for PNG / JPG export (html2canvas 1.4.1)

&#x20; sw.js               service worker (offline storage)

&#x20; manifest.json       install info

&#x20; icons/              app icons



RUN LOCALLY

&#x20; Quickest: double-click index.html. Everything works, but offline storage

&#x20; and Install are off when a page is opened from a file.



&#x20; Full PWA on your computer (needs Python 3):

&#x20;   python3 -m http.server 8000

&#x20; then open http://localhost:8000 in Chrome.



&#x20; On your phone: upload these files to any HTTPS host (GitHub Pages, Netlify,

&#x20; Cloudflare Pages), open the URL once online, then Settings > Install app.



UPDATING

&#x20; After changing any file, change VERSION in sw.js so phones fetch the new copy.

&#x20; Keep html2canvas.min.js next to index.html, or image export will not work.



NEW IN THIS VERSION

&#x20; Natural-language input, saved problems (kept on the device), PDF file export,

&#x20; colour palettes, hover and long-press tips. Settings moved next to Solve.



