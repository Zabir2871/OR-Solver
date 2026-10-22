OR Classroom Solver (offline PWA)

FILES
  index.html     the app
  solver.js      bundled LP solver (javascript-lp-solver 0.4.24)
  sw.js          service worker (offline storage)
  manifest.json  install info
  icons/         app icons

RUN LOCALLY
  Quickest: double-click index.html. Everything works, but offline
  storage and Install are disabled when a page is opened from a file.

  Full PWA on your computer (needs Python 3):
    python3 -m http.server 8000
  then open http://localhost:8000 in Chrome.

  Full PWA on your phone: upload these files to any HTTPS host
  (GitHub Pages, Netlify, Cloudflare Pages), open the URL once online,
  then use Settings > Install app or Chrome's Add to Home Screen.

UPDATING
  After changing any file, change VERSION in sw.js so phones fetch the new copy.
