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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "65308847907b767120f512ba43b84236"
  },
  {
    "url": "assets/css/0.styles.d26fefd5.css",
    "revision": "5005b2e412130d6408dbe62cb2d22ecd"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.b1acf2f5.js",
    "revision": "0448e1459b7805619b2142999e488621"
  },
  {
    "url": "assets/js/3.e42e272d.js",
    "revision": "46ae400b1737f96b7d9a718aabc90039"
  },
  {
    "url": "assets/js/4.9fc6ffe9.js",
    "revision": "2da9e3b62df160f41cd1c0b0ec4beb41"
  },
  {
    "url": "assets/js/5.d837a498.js",
    "revision": "4a0d263048990f18bf9c9063ddf1bd5f"
  },
  {
    "url": "assets/js/6.970e4683.js",
    "revision": "5d42319df4a173ce17d32baf435324df"
  },
  {
    "url": "assets/js/app.49d12d1e.js",
    "revision": "69d6baa6ce70436090f980b40b003a87"
  },
  {
    "url": "gitignore.html",
    "revision": "2e8121147b4e68f2d3876b0b620a0015"
  },
  {
    "url": "index.html",
    "revision": "d0ec731b15880a8d61e0fc3ddb9b85dd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
