// OR Solver service worker. Bump VERSION whenever any file changes.
const VERSION="or-solver-v8";
const SHELL=["./","index.html","solver.js","manifest.json","icons/icon-192.png","icons/icon-512.png","icons/icon-maskable-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==VERSION).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const r=e.request;if(r.method!=="GET")return;
  const same=new URL(r.url).origin===location.origin;
  if(r.mode==="navigate"){ // page: network first so updates arrive, cache as fallback
    e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(VERSION).then(c=>c.put("index.html",cp));return res}).catch(()=>caches.match("index.html")));return}
  e.respondWith(caches.match(r,{ignoreSearch:true}).then(hit=>hit||fetch(r).then(res=>{if(same&&res.ok){const cp=res.clone();caches.open(VERSION).then(c=>c.put(r,cp))}return res})));
});
