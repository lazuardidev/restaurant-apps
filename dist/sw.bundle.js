if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let a={};const d=e=>n(e,s),f={module:{uri:s},exports:a,require:d};i[s]=Promise.all(r.map((e=>f[e]||d(e)))).then((e=>(c(...e),a)))}}define(["./workbox-c15e4145"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:".DS_Store",revision:"8434e89591bbc7e64acb1e9f7f922a37"},{url:"16.bundle.js",revision:"701bb3e9b71d1cb87fca5b0eb6d76273"},{url:"16.bundle.js.LICENSE.txt",revision:"774f72234fdd87c3648882234bca730f"},{url:"248.bundle.js",revision:"78674e235b6cef1055c74cdb26fe23ad"},{url:"248.bundle.js.LICENSE.txt",revision:"774f72234fdd87c3648882234bca730f"},{url:"280.bundle.js",revision:"30f42551f810c898b3106ef561316bb4"},{url:"736.bundle.js",revision:"75d172419a8ff0532dcd4faf76c3a184"},{url:"736.bundle.js.LICENSE.txt",revision:"774f72234fdd87c3648882234bca730f"},{url:"84.bundle.js",revision:"5f967f356a698d5c63599f97918a8558"},{url:"900.bundle.js",revision:"45e29a73497add1b29923c5fd508aa80"},{url:"900.bundle.js.LICENSE.txt",revision:"774f72234fdd87c3648882234bca730f"},{url:"app~4618c20a.bundle.js",revision:"7e28c6f1ce4bc208961e18821e54c937"},{url:"app~8d4244f7.bundle.js",revision:"783039d62dfc4a1c233a73f0bd86b09c"},{url:"app~a51fa3f5.bundle.js",revision:"c1940ae3b829c1416274027a44a6f873"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"2a525a87608c780046bf89b31dce567a"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"a1138110a5effdb3731085c6051bac11"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"data/DATA.json",revision:"0760fae8cf2d2b172678847987d1d95c"},{url:"favicon.png",revision:"724a0e1354c17bfe41494c01a915080e"},{url:"icons/icon-128x128.png",revision:"e5ed1f478a1ba64d11751914d0fd7570"},{url:"icons/icon-144x144.png",revision:"8d2001acda70c25f031c033613583cf4"},{url:"icons/icon-152x152.png",revision:"969a8069534babcf18c9a2641c310fa4"},{url:"icons/icon-192x192.png",revision:"dec3bd9003c09d01f41f7835d9210b43"},{url:"icons/icon-384x384.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"icons/icon-512x512.png",revision:"724a0e1354c17bfe41494c01a915080e"},{url:"icons/icon-72x72.png",revision:"d69de4b8624f3f3438d128ddfee2e29f"},{url:"icons/icon-96x96.png",revision:"d0a07c93e89e1dbaa275cba296102f8e"},{url:"images/heros/hero-image_1.jpg",revision:"a2f444d9e2e43a5d0373b1a0d8cb2236"},{url:"images/heros/hero-image_2.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"images/heros/hero-image_3.jpg",revision:"d232e05589056e05f52cf2689f315c6c"},{url:"images/heros/hero-image_4.jpg",revision:"4ea98fe648a0b853ab379c928b5fd0bf"},{url:"index.html",revision:"58da77ba1f5797afd0b5df9606bb2b98"},{url:"manifest.json",revision:"9054a84d3764430ee95e490719397db7"}],{}),e.registerRoute(/^https:\/\/restaurant-api.dicoding.dev\//,new e.StaleWhileRevalidate({cacheName:"restaurants-cache",plugins:[new e.CacheableResponsePlugin({statuses:[200]})]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
