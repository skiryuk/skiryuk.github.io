'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b4bf4eeaf23702aaf6172fbb277c9edc",
"index.html": "0d5fb9e16b51843f723e96ea77414654",
"/": "0d5fb9e16b51843f723e96ea77414654",
"main.dart.js": "8828eef9aeb28e38261a63e4e199270e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d47673006541216326b054c2fa4f7584",
"assets/AssetManifest.json": "903a2133d4401932af045805016c7408",
"assets/NOTICES": "728f15daecbb779a97314e89ebae3c34",
"assets/FontManifest.json": "23886cdf20d04b04bf518b6f83de8e58",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/svg/coming-soon.svg": "0420bbd042fca7444d9a491429f7ce59",
"assets/assets/svg/recognize-doc-logo.svg": "3a40dc1c22ab556ae9553c406d9f946a",
"assets/assets/svg/paw.svg": "803071bdd6e0549909bbb1d9b2f11f0d",
"assets/assets/svg/card-shapes-orange.svg": "847d24965cc01ca2e0f1fbcd3edf879a",
"assets/assets/svg/details.svg": "761ff7fda62069c8d1884eca8e414155",
"assets/assets/svg/illustration-details.svg": "eaa871a6a430ea258506a29298827f9a",
"assets/assets/svg/app-store-badge.svg": "860a380757e4cbff50d29cd8d3ad80ab",
"assets/assets/svg/icons/icn-check.svg": "e1a60d7ac992c86fb696372962ea1fa2",
"assets/assets/svg/icons/my-beeline-manage-numbers.svg": "a9c437dad738b5f45c925193cea091a2",
"assets/assets/svg/icons/dol-icon.svg": "52dec58b96e185d4381c4b916429f222",
"assets/assets/svg/icons/icn-filter.svg": "14d08a742093d354f186c1a1bfe29136",
"assets/assets/svg/icons/icn-sims.svg": "9ca1e8e5f28b315d84f3845351bc736e",
"assets/assets/svg/icons/icn-more.svg": "22743fe4aaf0657eb95d2ca27e0fe700",
"assets/assets/svg/icons/icn-warning.svg": "9e471905dcbe0b7cd5df027cd415ef4d",
"assets/assets/svg/icons/my-beeline-manage-operation.svg": "1fd04802d1ae9c569c6b815668a56185",
"assets/assets/svg/icons/icn-arrow-right.svg": "774479736051469b717872ca03222ae6",
"assets/assets/svg/icons/icn-pay-warn.svg": "690acf795ae88386777d450598fb2924",
"assets/assets/svg/icons/call-centr-icons.svg": "7c733bf72cbbf54c9cd1fd9800c008ba",
"assets/assets/svg/icons/my-beeline-get-cashback.svg": "2c0160eeff3a5a4ccca7c583043e692a",
"assets/assets/svg/icons/icn-envelope.svg": "7df58c6fe9947a96d6df09cfba104d22",
"assets/assets/svg/icons/icn-danger.svg": "878c0a56daaf07ac0aa4daf98a65a37e",
"assets/assets/svg/icons/icn-gift-box.svg": "c78d3111a1f1e9d7488db0ba338f5f1d",
"assets/assets/svg/icons/my-beeline-control-balance.svg": "2cb0b1aaa1a13e12ab0ed1d44e112081",
"assets/assets/svg/icons/icn-promo.svg": "e2b5eadc74f2ba66d4a2773f88087e63",
"assets/assets/svg/icons/beeline-logo.svg": "048f57229da1eb71f0b3e061d8955273",
"assets/assets/svg/icons/icn-lock.svg": "8f81f9e31694b51b453a347aa8a76f75",
"assets/assets/svg/icons/icn-bar-scanner.svg": "3fe7e4d4a516b35e1a4c3bb40f5b98df",
"assets/assets/svg/icons/icn-arrow-up.svg": "b06803cb79aa76c7f5a9a6a247dd8226",
"assets/assets/svg/icons/icn-info.svg": "504ff50c774051ae22d11ee5fe88d234",
"assets/assets/svg/icons/icn-contract-copy.svg": "9897e418968fe6c2efdfef6085e23853",
"assets/assets/svg/failure.svg": "a42b848475fbf9fe28dee35bf9a3aea4",
"assets/assets/svg/menu-shapes-blue.svg": "4c8f4c74f4d20103ff8dfd2046986b45",
"assets/assets/svg/success.svg": "3611d6075ccc6a48e428803780cf4d5e",
"assets/assets/svg/illustration-catbox.svg": "2874675d57f7e832e4611874f5909994",
"assets/assets/svg/card-shapes-blue.svg": "9b9bd4cb0a01f3e88d48d0c4f6f0eeb4",
"assets/assets/svg/google-play-badge.svg": "cd6535d2d3d6e2b89ef543045fa626ca",
"assets/assets/anims/app_spinner.flr": "80cc97a26146f193ef71c20c56234ccc",
"assets/assets/anims/loader.flr": "1e872e70fce7d3e7d6c7ed1a53e4ffcc",
"assets/assets/png/splash-logo.png": "a33506a12cc39192be9f1c2381734f48",
"assets/assets/png/icons/call-centr-icons.png": "9e0c7a62f164cc58d84c4308585d16e9",
"assets/assets/png/icons/my-beeline-get-cashback.png": "ad68fa6877da49ffbf1acbecba67404c",
"assets/assets/png/icons/my-beeline-manage-operation.png": "bc580448b862f36c8b3b906aa054db7a",
"assets/assets/png/icons/my-beeline-manage-numbers.png": "66b81056990200fab0f348887eb2669b",
"assets/assets/png/icons/icon_party_emoji.png": "c412454ea7735452464f1d10f6af36b3",
"assets/assets/png/icons/icon_cross_emoji.png": "bc6a7329e4c5d8102ebdedae4c2a6f0a",
"assets/assets/png/icons/my-beeline-control-balance.png": "5bfde395021024ad407bf3ce4a5f2776",
"assets/assets/fonts/SFProText-Medium.ttf": "a260cbc18870da144038776461d9df28",
"assets/assets/fonts/SF-Mono-Regular.ttf": "676a8016e7247b536f249f4b050abdae",
"assets/assets/fonts/SFProText-Semibold.ttf": "1a131c948d598ecec700d37d168a15b5",
"assets/assets/fonts/SFProText-Regular.ttf": "85bd46c1cff02c1d8360cc714b8298fa",
"assets/assets/fonts/SFProDisplay-Regular.ttf": "6987bcc482500f459516dc0342836ee5",
"assets/assets/fonts/SFProDisplay-Bold.ttf": "368636f1b6e330a4806185cdf6bb44bc",
"assets/assets/fonts/SFProDisplay-Semibold.ttf": "0538ddc92082d2ef2e7b375519825dac",
"assets/assets/fonts/CustomIcons.ttf": "3f3e4fd5b41585c86adbe0050bb2637f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
