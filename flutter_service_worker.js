'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "0a6a13b0eca84f54eb79e5a93d4243e4",
"index.html": "ca9163da4931e17d5077ceb35021378d",
"/": "ca9163da4931e17d5077ceb35021378d",
"main.dart.js": "f8c088562da73cbe519fac2dafb35ebf",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".github/workflows/web.yaml": "a7d390cbea7f58322983518d9f82e54a",
"manifest.json": "796e057302136e97e67707cffd598165",
".git/config": "bb8e732aab587ba7c9953c37eef5ccc6",
".git/objects/68/d659b67c787d14c3dd31a2bd6c9e6c91d8f182": "ef5c99b7b498b63eec650f973fe5f87c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/51/2b4259f66c026e5b830ef526fc15fae62da2dd": "6934fe4c4c5b05ea49d26d4423f22f01",
".git/objects/58/4244765f5f0f3eaa20b35b03b676f3a29e2b9b": "52b0c6ebfad87827c8b18189e1906812",
".git/objects/05/557a0dee34562d42c7bce25faf20aec3d7161e": "37b0b305552f95964099df3e29443a2f",
".git/objects/05/9bbf4e13b85f342b74a849ab1f0c84112ea584": "f5cf3069055d31aa52e1d5456c9d8a2c",
".git/objects/a3/64534cf8cdd896823836bb79f5334cccb86ef4": "d990f0a1137e9123f308611ccf468214",
".git/objects/bb/8ed1034949a6d7f2ececca76d689de416fed8f": "b99159e8d318d52aa2d3768493340fde",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/725c596e7ecca6b6be2f094ee47e4f880e4373": "b92c39fe89122cb049fabd21e433e9e2",
".git/objects/b4/e140721555a9ff0044ffb58f07c4c4abd42dcd": "e08a52eaf8e6955c89116d7a25498666",
".git/objects/a5/3a045870550f17029034aad90087b215d9e201": "135ea3640d2e1bd00f22a4c73dc1b851",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/0074feddd3fec41a35f9252c56e0c9bd97b259": "0c73964dc380e2791f21c461977c11eb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/5ad600cd830e33183a893b33450b24cc8c4f9f": "ea23a84bd0464290fdbd1c72f6d554e5",
".git/objects/c7/58da8062a46e1e97ff621304b9dfe138ff1356": "57feaf87898cc05f52b4195dc5f8d823",
".git/objects/ee/095a90b3dcc032d417841020a81e72c7362c82": "5f3512c87338b5772bb2ca3d3c15a087",
".git/objects/f5/616e55d2aca2f80ca76c0aa13d5b2e2f08c5b0": "778b5b02e18c93f67d1d3dfa23cdcda7",
".git/objects/c8/148a298625ff2c9d765f11ba865bc71c268486": "512c9af68757ef3701f8bdfa2f6f477e",
".git/objects/ec/1a5c948ad8362970a7552259c97ea9bb489ff7": "6cf03ccff43a821c6e0e69feab6b0f28",
".git/objects/20/9da2750574fc1e850a2550d9edc42f03835683": "815a3c976b1a7286cdd312f1036741e7",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/29/3a76822bc154c69d9b8368d31088550dab3142": "f9b2899348ecff5c7ac8e8b98ad51bf6",
".git/objects/45/3fc945e4bd4e3a59b7a516a81e3925ebb3838a": "c7c3ab95c8b1d986240a0248c93cf891",
".git/objects/17/9b2896771ac87ad5809bc5de6978e97de69e91": "bb847ee28de6fd35cf87e32d1102be5d",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/071f01d68a1a351a57655149e49b5e4149d6b5": "fe713d45e4190e224330766134d4054a",
".git/objects/44/a1445c20badf1f3ffadbfcb52236415437ef51": "c79e6fca9fe2eb3ca6ce512d07bd7660",
".git/objects/43/175ae3a8262612bcfbafabb79f94b8ae64c8d8": "3aafb168a4bc41dcefd25b00a1f8606a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/29fcd976816eda471610d482df145c86bf276e": "a5421184544d7f9654109bd3293ab3db",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/dd67cf857e174d3001a17268a571d6df4ab5f6": "11f88601c3e824328f7e59690a708f39",
".git/objects/6c/53c22acce987442cefe3ad53b198139b4b8bb6": "7a5bca24ccea90719da22a91ba485acd",
".git/objects/0a/56daca00a7e0fae89a70b076803ee4b3cb1602": "8cb8bf41a65c212040321832ec3516b6",
".git/objects/d3/8b2afc817fda5303123a0c3343103f0bd35a6e": "8f7220650fbd007d2e239edfa005fbac",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/dc/7af509661da70af7fac51387295117779fd61b": "b3c41b6eb0104399358c69ed8a2ef0ab",
".git/objects/a9/1a7bdf7a5aa36165d771339914777337bfd318": "739e50473af958ad6b23a43f4c500df3",
".git/objects/af/b4909dfbb9fc88db16e3c19aadc8a1aca56ff5": "d10aa4adc71fafd9cfb51c49bef48c8f",
".git/objects/b7/1e70d41e03f5090bd94f5f4c27e7207115569a": "5273d9459d70d9ce5a48a7ff508453cf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/95238ad6cd4cf02fc1c83aefa4382a62ec6e67": "82101f4cb29e76395d0fd6f67b652fdd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e6/d88f76ba64d89e103580e7957e2082f481df1a": "39a2263f258d1cb41aaa9c3cb541fc81",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/fa/0058a2f8da70d008fce00b65b358a1bcc0bca7": "a1fa99b7ac2d99b8ecfe87408a5cc5b5",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/bcc88d58b024b3ec1c0a7871395d2b8da3ce14": "eee42478798efd3cf0c4268d1104797b",
".git/objects/70/544147e63996b5d6fafebfa6af5b9d6ab4c4d5": "f49e4144b57dc594573566792d00a69c",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/d59473be9c907628c5406dbae3de4396a9b549": "e44c4d1bd2cdf8c0596565a8d6eed9bb",
".git/objects/8d/3628ac20281c832021278f355e1c34e76fb032": "73138bd54b5cb19ef7b42d725a458ba4",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/7f/741a88cd9543bc82b836e4be07545e1c5b130d": "048fae997ae6f9e44f84331c6db1886e",
".git/objects/8e/e0ae0af6f1b91f9bb4e34353eff2ba68fe9397": "16134088710e0c8a6cd29ef2a2b15481",
".git/objects/22/ff1b285d2d5a8ce9b35eab48c028e930acf29f": "2e6fb2bd971a4be22f636f6909580a0e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "479be73ea7c8eebb1dbfd7f84909cb30",
".git/logs/refs/heads/main": "479be73ea7c8eebb1dbfd7f84909cb30",
".git/logs/refs/remotes/origin/main": "4a1fcf669f298184497e10a62fb3bfd4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "60806bf6e03da1c5c401955356ba4afe",
".git/refs/remotes/origin/main": "60806bf6e03da1c5c401955356ba4afe",
".git/index": "a4555c75c909fefaea1e41b1e668affe",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "bf5e355abc1b6a2f766de237d5b3c3d4",
"assets/NOTICES": "e361857a1a0f540745da334094ce617e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "a2b48fb6e27dd3b8baa64bd2cfa236e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/im_animations/assets/stamp.jpeg": "2e8629bcc63453ad8097a1e3a5226df0",
"assets/packages/im_animations/assets/avatars/man.png": "6cb616c880ca291582ab569d443f9cc6",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "cfa383288edff86d38e9fde6b7aba0b5",
"assets/fonts/MaterialIcons-Regular.otf": "e3bb2091e47a751397305dd8d61a207a",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "8a0a6fadde0d09ee27ba01e6915c2d1a",
"canvaskit/canvaskit.js.symbols": "7f5fe40eafc9c05cdc31a54518009ec9",
"canvaskit/skwasm.wasm": "883abde2920007bba715d8ff470ccf8c",
"canvaskit/chromium/canvaskit.js.symbols": "cb5e0e02f38a4a6207eb4b7117cf60ea",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "9a7a8d6c9abd70a0132d84c1d567221f",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "e1c3e352dc3cd40a5799a14a4773b633",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
