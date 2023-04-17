'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e50a939b7ca60facd76c0caea761d581",
"index.html": "ff3c52295e28b57b97f0a009640036a1",
"/": "ff3c52295e28b57b97f0a009640036a1",
"main.dart.js": "141a12846e840524bd408156f55625cc",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b4e9bee41b8b562029ce0bed6a1318c8",
".git/ORIG_HEAD": "a5232aab1582fa3feebb4a1022f99238",
".git/config": "1e5e35160060fde71a24ea0efaf4a345",
".git/objects/61/ced6931945e2b98d60ae636cc76368c401d693": "fb50cf042821ec8c7925cf94f4d7cb8e",
".git/objects/92/9868ec771cbfae62773d879a485b9a0062608b": "afd91cff3dd9fcc2c39196b07b47c395",
".git/objects/0c/0cd5295df8e9e99d06871261bd806f4085d2dc": "d139a3bda0e2afd8967a3a84266ae7d4",
".git/objects/50/287b6be0db6ca8e6ac2c16675ee42f3a1c2192": "9a719e8a8516b34c72b69b4c543e9bdb",
".git/objects/6f/cca5ca3b083fecb698f0ed30099d19bfa364be": "dc3d5544d09d99c92f1df2b8196e9511",
".git/objects/03/084ac2026183f067e8478fb88a647f71e54f35": "477a9fd0c7a5e2d04f15d388b06a3132",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/32/94c24876e1d0844b02c84130f6153268fc4928": "f8e1b971e9dd73ac76e7f2e5cbcf1c67",
".git/objects/69/cee9d751396343c12ea48d8545d644363d19e5": "11ebbb119912993c7520547bb20a37ff",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/67/bc0a1608042c0e2978ed7fa76e95f2241ffc7a": "f521a3a0cd5d5e0dbf41e00ff3fd176d",
".git/objects/94/c78c9cd65a7c5ee162c579670f8fc8ff576c69": "a8f89cddf16af2f2a9566f8bcc648c4b",
".git/objects/34/21a96008126da08b42ac48e3eda40f622a12fa": "eac391c2ebb1db822dec620390f5ad2c",
".git/objects/5f/3ada141123f2426e8e59b759c08ca3f134cc1b": "92f95a35f4bef2ccf35f799fdcf74205",
".git/objects/02/0aa291ebbb52c4f1d3da618e9659ecfd046ff6": "aa6ade48532067785e435e08c2dca546",
".git/objects/b5/188cdabf17978ff29a0ccd6592d62d7914c53d": "1df8dcb74d991d4ea0a056657009167b",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ac/7e1ccee9d32f8d60f5ec3d49ea7331b302b2c3": "4f5519271b12802dd676b0d4398ac0f1",
".git/objects/d0/5255d300ef31ed5a2373cf05128165f3571c5e": "442073f292d534a1a9685ab0521f3393",
".git/objects/b4/602872f2a60ec9db579d95f414764f8c4ef040": "a88e92be0afc8494f6054785445e137a",
".git/objects/bd/4d925f03c83980c5163cc0b40f47f814afc56c": "24fa0a8a03aae0bdf6a7b8a2438fe63f",
".git/objects/d1/d3fd20c24cf149397667337c6ca9634e6a5ae0": "ddffad44b18573bdfa90ccaa943b7c4b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/40598ccc63235e515a37ee2980368c50b86421": "a145c163b3b5eff607bc8e91c90e00b4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/52bd72304a8eb4f2d70296b946a953b333c47f": "85ca33a27b78ab6ea4f2cbe9d63fc5b1",
".git/objects/c7/987e9a149b4bd95107ad5555d6760fa58d9ffd": "14b325e6daee7a3f330cc9e1188149a6",
".git/objects/c9/9827866326fc0c925e99913ff1666e59d56d73": "e49c5e6e96afa4241c4b95ec736b3f63",
".git/objects/f2/8ceda8fa032459d32efb6c77ebdd053364e32c": "49583a8e40f1157180b8aa4cddbe29ac",
".git/objects/e4/186def362feb246e2622a5ec4d3d62fd35d9f9": "0a37c8b5d2495483f5bed474b47ecfad",
".git/objects/fb/504eee7dd8ead01b8dbf57462d0e96881ce8b0": "5e5c1975b7b0625541ef726bc4a8070e",
".git/objects/18/db77a1c68fb34fd525ece4bc0bcafa02c58396": "3d6d324b8cdf4b2d5caef7821a7fef76",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/16/6fc619bf4261a659e260c5e9a7fa3a67102cbc": "30f68dada476a7e04bf0b0ec7a4445e4",
".git/objects/16/96a9e544f587db8986f4a0202ed70c0bfc31b7": "6556f915f06cfee4e825785cd6d764ec",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/80/ea252e04876ccc5deb9c84e94b765cca0b1bf5": "44cb35ffa9ae6dcbdbf058015fce4142",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/af702c7a7260c68fcf3a4e79f0300f3b43e27c": "e99e0749e8eb798e35e9c8cf5eea7a41",
".git/objects/7e/f6017b8ca0f53bf00ad5718d1cde9e26babcbd": "0f7a12d5e81a77d525dfdcfdfe9e60c6",
".git/objects/44/0141142bd4f7ddac331e51130a8392b375711b": "8771a0545694960a25dbb7935da5aebe",
".git/objects/2f/843a2037b856cdd50c27ca8ae48c71343397f4": "4128ce4d0f4662a18dd9e3d45a741792",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/30/ee2298236c7a999f0f70fa1b43268cf9a03b34": "dda76f00997ed18e79d7d83596ac01f7",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/08/039fca8eb365ee694114fc8309548e08076c12": "761201518d4b6cdad33c3dd74f2455c1",
".git/objects/6d/3c51cbd3fd092de56ccde853594fbdbb022c3b": "abab80a394033c6a267f818d9550dd1b",
".git/objects/6d/a10bc973cb0a2b8da9ed86807f5c56bcd7cdd6": "b2e3e799509bcd371e48507324998265",
".git/objects/99/5baa0b09012c918065926835f6bf4142d61b56": "5a0869fbcffd9adb9108fc7d6e9d9e90",
".git/objects/55/e9690e6dc9a252a0b78494ce2f6d7e9ba3a68d": "7db87858dea97b2d90502983dc4a4805",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/0f/bea4f86510183c2db5d802ab7f20704f3f1701": "f4de97872b535233c0a2d13e3b7bfbe8",
".git/objects/0f/783e8bfb79654f3fe1073de4a0aab1ba44dcf6": "131b4943b4ab0b852c805005cd3b9c8b",
".git/objects/ba/bc30f82f96e4ed9289e7e0c1172b1b15cf2025": "b99bdf66618128bdfbbe717e727302ab",
".git/objects/ba/4aec9a5c07bffe47d400ced3c6a8fe5615fb0c": "c8b015e66b432a6948cc36855495b689",
".git/objects/a0/06aa36a21af247815eb984566a6aaf7e3c6b34": "2ff107222d30b3d0ad7bd03b7dc27c91",
".git/objects/b8/62ce8bac65f3b1d2dde1ae00acbbfa7dd5bff5": "a384480b7fe44098b3eb0c01bd2741e3",
".git/objects/b1/597a0877dff627a2f7c134a3ab4451910d7c06": "9d9d7ea718e313ac80da4d5fe6d53560",
".git/objects/dd/da7aae1ebd32d380f77efd6e0eaf3561da11d3": "ba30fe95c9124b5f258c65de6c6f4d92",
".git/objects/dd/2935bb620682f88e0ee12cc2caa839e0db144e": "6111da25994a276f84be49d605233c83",
".git/objects/dd/881f0571d2eb4356e1fbffbf9608b4e4043b5f": "cc774e480da093f0d349b2bdaaf4fede",
".git/objects/d2/d211f7617d08e59bb46258e1c3f9a11347d085": "277cd388566df8213aa4319917bb54bc",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/aa/45c36025400a2b8339ea2d19a713bd844647af": "658b76b09dc55b6c5ca5a435babe86d0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/6a5bd477fa5b373d67479982917b79b3b214fe": "90cbc07b3b2e431dc314fa6bceeb203f",
".git/objects/a8/6505f6d5029d15953e227bf33cff31c993a8b8": "ef0d22cc2793ab77c424fd6c6164ced0",
".git/objects/a6/cd2516824d0ae71f63d90bacc057364f39ec14": "a5f55547f2e2601813aa65941aef12c7",
".git/objects/a6/d697047e946119440146549a4a9fc24bace78e": "746f35834901516e00b7bc5e248b82a3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f7/2b3e0cb470411a089b95210ee1dcc75ffd110c": "7bd7a01c762e9d3a15a1cda1ffe882ae",
".git/objects/c2/7b74760e46bbca8ddbbefca955335f9b3d33e9": "04dd26a4a0c69f3951ed045eec353792",
".git/objects/e9/c5735d42a4133a3ebdd1ea55a2776966e27b0d": "e315463b98e7a54b4ed8daaaf2a4364f",
".git/objects/f1/696448e7e68922965e5c51cca237283d0fb7b3": "8601a7de7c22333f78a4046d70325fe0",
".git/objects/e7/d69ad4920443d4ab3809517c7044fbbc2480cf": "499c73c952654b9e51bf4134511c356f",
".git/objects/e7/89a282f8f970182f0915a4b533d5818dae5ccb": "3c9edd496f0b7a1ab5498bf6ed375734",
".git/objects/cb/c956636edc577fa0ee250d283284986b03b040": "a009d328a426481d09e95b13528f32ab",
".git/objects/f8/cd46dc4e714cbd334c0fe500032df9b787e16f": "b0070d77a639fcea591a4e99b2b01b35",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/6f74a70ed499d8f8cde29a40ca9fdc68c1701e": "494baad97a57a17bd1ddc79dd97b27dc",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/1b/00f0679a046e14f1ae84f48cd6772e7215bde1": "2c9eeac6590e8a953b8d26ffe035ecce",
".git/objects/24/dd26ff7491ceb4ba2e8e01d605a0adda058979": "13986d8ecdf50a3a7624b54397812f3c",
".git/objects/23/5b8eedfc3c3f9f3b370d7bb7d49f04d26db901": "94348ad54d89820d75a0f0fce2e394c8",
".git/objects/8d/cac94c6bea2c7bdf6fa1c3da35bd358bc5a3e5": "940217a305f4990a7d8a1e1f6d6200df",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/76/3385db948e62671b96844f3aab3967f546034c": "8e8ee2ea81b7b0b971d88af9059118f7",
".git/objects/1c/a93f91df9cef0e3bf048f27f96cb851ee1683d": "9919f1097dcf736b8cb4ac47ff5079bb",
".git/objects/40/a63606b3715c1b4884e79801bee8090cf59c6c": "03c036bda819de2570ef6dbcc570be5e",
".git/objects/7f/b74aa2e6136f128235e39c1162dadeb2929fbd": "2573939d0489e87826aec48d244debcc",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8698409e0618775e9adf3209ea13ac54",
".git/logs/refs/heads/master": "b42f0cb810a2d44f7338c92de6ac9eba",
".git/logs/refs/heads/main": "e09291ef71e4d92072f1857429b2cc44",
".git/logs/refs/remotes/charityflowwebapp/master": "82eabcad3556eb511e440659b7b0c86c",
".git/logs/refs/remotes/charityflowwebapp/main": "73805d716403f165f4022881bb81024f",
".git/logs/refs/remotes/origin/main": "547db65aa52988ff3247e3ecf87a2bb2",
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
".git/refs/heads/master": "a5232aab1582fa3feebb4a1022f99238",
".git/refs/heads/main": "6e55a9f844b7cd8447189a646b9d17d7",
".git/refs/remotes/charityflowwebapp/master": "a5232aab1582fa3feebb4a1022f99238",
".git/refs/remotes/charityflowwebapp/main": "1abc8da8fba19cd52d6bda3c33dc6b75",
".git/refs/remotes/origin/main": "1abc8da8fba19cd52d6bda3c33dc6b75",
".git/index": "a36cce34d2a688ef094c95aba263529e",
".git/COMMIT_EDITMSG": "038e0bdc0eb3ff570d0ed9a8129d9196",
".git/FETCH_HEAD": "bccbbe3a46de8babbaa14dfd6e439ec7",
"assets/AssetManifest.json": "194acdaa7af452a732d8b8b47f37dfe3",
"assets/NOTICES": "724fb7c7fb28d068d36267e7f05258a1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/living.svg": "3b8a20a3bedb3d2eedc88cb83596b9e9",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/living.svg": "3b8a20a3bedb3d2eedc88cb83596b9e9",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
