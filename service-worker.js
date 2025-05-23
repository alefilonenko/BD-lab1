/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "09f2bfa0c7000c51d692648b5a928930"
  },
  {
    "url": "assets/css/0.styles.8ce31f4f.css",
    "revision": "972877f92bf4f30bb5807585181dee63"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.17dc7fc0.js",
    "revision": "235105471074525d1d2bdc9d1186bdf9"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.f4d805b2.js",
    "revision": "45a0f424731485e8513dbf3f52453817"
  },
  {
    "url": "assets/js/13.b369ab95.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.d7f079b2.js",
    "revision": "6b809a93916ba8b3fde674d26eee6270"
  },
  {
    "url": "assets/js/15.dae405a6.js",
    "revision": "5e0e7ae92a703032dde82a5885b86482"
  },
  {
    "url": "assets/js/16.9ad73624.js",
    "revision": "7c1d6af6d09d7310b9e4244ddd2518d1"
  },
  {
    "url": "assets/js/17.cf01d923.js",
    "revision": "9d295eca00347f3549bd12b96f1bfc7c"
  },
  {
    "url": "assets/js/18.b50895dc.js",
    "revision": "c7163a21409f3a78b5ee596685af6e25"
  },
  {
    "url": "assets/js/19.52fbf99a.js",
    "revision": "27fdce0dee90ea3ed9605a185c2c3021"
  },
  {
    "url": "assets/js/2.2924903d.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.32c77683.js",
    "revision": "b082adbf991090781134bb0fd5caafc5"
  },
  {
    "url": "assets/js/21.30dbfb52.js",
    "revision": "a313cd96f4ee0acbccef2c606e94764c"
  },
  {
    "url": "assets/js/22.4e09b3b4.js",
    "revision": "5c7e55cdf92c068a51ac50a3e9f50f21"
  },
  {
    "url": "assets/js/23.a8fbb4f2.js",
    "revision": "03f32d92bb5d7b654383d1fabba33ce1"
  },
  {
    "url": "assets/js/24.3bebba33.js",
    "revision": "2ff777e49ea646f9bcdd615ea76c02a2"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.33d6b42d.js",
    "revision": "808ea9f2d864b4467fe90f16175227a8"
  },
  {
    "url": "assets/js/4.5d00dd71.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.4b8fb81c.js",
    "revision": "b865b25b78848b369ebb4f7a7684bf5b"
  },
  {
    "url": "assets/js/6.37f402c4.js",
    "revision": "43bdcf1e529c99fca1e216d96833b9ee"
  },
  {
    "url": "assets/js/7.a2994458.js",
    "revision": "817c1a9fc1e6f84583934d814a9ab3f5"
  },
  {
    "url": "assets/js/8.d159d845.js",
    "revision": "229de9f470aa15983a689d6b1daa5fa3"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.e50d9d56.js",
    "revision": "497942bfead2f665458604976a414944"
  },
  {
    "url": "conclusion/index.html",
    "revision": "381b6f37e48252a0a20fa99d7c8d0184"
  },
  {
    "url": "design/index.html",
    "revision": "068f9e2f589d5458ba623a494b7664e2"
  },
  {
    "url": "index.html",
    "revision": "511d7a04b9330bf622366fea3940b985"
  },
  {
    "url": "intro/index.html",
    "revision": "d00d4aa43d0f475ed37fc1e6047a6013"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "e69e0761763e85267cced6b1c612d879"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "326842cc6d18217a3200c75496ea4311"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "d6439a48084eb248ccfb2e67d2a238a1"
  },
  {
    "url": "software/index.html",
    "revision": "99e6e29c7492cff942b817693cb197de"
  },
  {
    "url": "test/index.html",
    "revision": "aed1a622f21c5f628f88d4de6c8e1300"
  },
  {
    "url": "use cases/index.html",
    "revision": "b84fb9b582414a4431f7bd085638e5ef"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
