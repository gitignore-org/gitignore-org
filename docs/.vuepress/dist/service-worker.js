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
    "revision": "7cdfdc65860586288e43f8a77bd89e5d"
  },
  {
    "url": "assets/css/0.styles.a25c943c.css",
    "revision": "549c08f03024313a42d776728013f34a"
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
    "url": "assets/js/4.069c2e29.js",
    "revision": "d01244624a9e5d8b469bd5c5c2a08207"
  },
  {
    "url": "assets/js/5.d837a498.js",
    "revision": "4a0d263048990f18bf9c9063ddf1bd5f"
  },
  {
    "url": "assets/js/6.be721ed2.js",
    "revision": "411076b5abf1d92a79a2602e14e3fdc2"
  },
  {
    "url": "assets/js/app.3cb03384.js",
    "revision": "48aaab23417c0f4c0e365bf9f19d59fd"
  },
  {
    "url": "gitignore.html",
    "revision": "72143c426648cd4ec9bbd2937077db15"
  },
  {
    "url": "index.html",
    "revision": "73456df8a4a73baa3cb4f7d0418577e8"
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
