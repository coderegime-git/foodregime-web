'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "45c9eb7fa6e6a781268f8a3b8d62d8b9",
".git/config": "662a397cc086c3a6e7b02a01e31d5873",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3a6a196e0145dff5a0e14b71f1f08641",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dc5438e4365fdef743bbb3004c48f81b",
".git/logs/refs/heads/gh-pages": "2b8c0f9f890db61d6f5a139d1eee53fe",
".git/logs/refs/remotes/origin/gh-pages": "79385c18e9bbead38f7985d4fd1ff37a",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/00/c4d5492d56a4c4c0c99add47cccde2efd831bc": "5d4f7a6c922d916d5dcc1ce45b12f6cb",
".git/objects/05/225f79c116045d080c75e2a9dca07086ef2f1f": "14fcc963bfd5ad573dbf80d87a988f87",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0c/bc5d7299e7c5c4a3d7144a96fcd9993a52df8b": "0e0d7e9fc8f051fd5d401baf4bb13887",
".git/objects/17/c5908661699e9ee7dca375bc4603f3d4f0360d": "b360d355e0a05e6c8c93655eacef52d0",
".git/objects/1b/d49e382e3fc2c911613df9f9c6760c1f839de6": "d8795d80bb0a4c59c1b067ff5a544c9c",
".git/objects/22/d5c0aa2e93728ad519e6940ab1eb93802734e7": "b5d0b52b7c079c761b9c681660b80e69",
".git/objects/2b/dae5ebfa1942ee4b2956aa99b211e08f255fcb": "2415cff8d6f1a724b5edbcf4fd1f7a05",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/49f67cacd518adb66828536a3308a7f986ec98": "324211d5262faf44007089a3e3333627",
".git/objects/2f/672385bd28468a17318d370d8ca473185a0f71": "85c9edb2ff0274edd1578309c499b374",
".git/objects/30/22833c151442200ceccedd001e6e0b3dfa4eab": "425b008fc6fd4d8fd0fbdfa92175be1d",
".git/objects/31/94a37b9ea86d1d3a7ca0dd74cc133af80efeee": "0a65dcb23ca5adf4aa78ee3f2ab3c76a",
".git/objects/32/8be4531717573290d061984cd0a04b23d45b3f": "1732403023eae54f34b8f14ef8a4eb92",
".git/objects/33/953c74c0d0ff6027244f3fcaa217178ee64ef5": "2a649798400d15be157d6c70f6253cbd",
".git/objects/35/79a5bafe5a7e931d27c5e2934b0032b89697c2": "78d281a587f3907dba56261dca2c3aa5",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/e1af0ea07f0803148f51e200154998575c6eec": "45e8009408c1d0446720796dd6166ce9",
".git/objects/3b/1c394498ca3c1af0ee7b8cad60b5f228da6e15": "4d2f9fe1a50e662252c24312ada930bb",
".git/objects/3b/56fcfd3bcdd3a658cc22ff77dfbcd973da99f1": "da8d6ffe70fba5153eb50ab2a4aeba25",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/40/17a6ffd28581942222e8a18bf349bab8b0f0b2": "6adc0db4888c5d63a52012707885321d",
".git/objects/50/e85de8a2279ea492039b5319beeb1abb1bc4c9": "5819e3a56cf911190b7429bcc8e74618",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/51/e730eb1a76d950538192ec1e5644038fa5549e": "a884eeaba4d5e112be51c260138ded85",
".git/objects/52/6b5d08abdc2debe5cddb81eaeaa1ab13e00e6c": "561cee364b302b48270cd21ffebb1111",
".git/objects/5d/eb2bbe0f4c142bb8072ecffff258410756f0b7": "608550131173f71f0d640f571d9be0d5",
".git/objects/62/17f90130d7af63ba54dc0346cc5139c70a0f88": "30997076d903d05001ec2362b23ef86d",
".git/objects/66/6209b80c5936308bd4263cf1723af7bf43c3e1": "a8c6f8235ee2902de0aaf006922d41d0",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/68/44988d673ddee88078f2b3b9536583697f311d": "e018b172a18bb1da0e9fe9ca16ff13fd",
".git/objects/6a/3ead966ff0e357cb9b5291396c0f297ebf13fe": "2c65d1024cc8a9e7b70495e016906345",
".git/objects/6a/a84d911ea86244b082619662cd024bd38f30ca": "f1b3e9ae216670dd2f1c21b088b62997",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6e/82943f4f8c0242ebd66d77f62539f32f58bf20": "1eeba062a36beb92d3ed46d3e1f57a84",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/75/1e836c98e12df9ac372c3b3d3d94cfd2fc3524": "81d4a9f2820f141c2c1d314a622d8899",
".git/objects/75/d18df2e7f394d19ef0fe017baeaff2a24b253b": "2253c8696a6d579e53d9aa9e88ba8fc4",
".git/objects/75/f63f43a30c272e7405fa954299d93ae771c5b6": "f5526e051f82d16fb1f8d5fd8e7441ea",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7d/f7f4f619e7098b2b46abab1d441174c0510f7f": "90e88a37705c0897d4dae4a6aebc04c2",
".git/objects/7e/1f201ad4d255a93f2bb9faa9da782de13055c1": "dd525bd3f8f8c555dbbd2ac932971bb1",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/87/a49b8b79d948e67fd6f0f81d2beb9d82d74ff2": "798448a920bcef1a0db78bc517c9b978",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/34f9f85b08a527c0130d9b521d7c6850403b5b": "7990179c311cd6096fe627452119540c",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/53ec03db6ded1f93262bedaba36bb914373349": "b8de6ce6a84fa1f8a45be99a52fe1d4e",
".git/objects/91/a11439719a0afe3dfd408edfd058994f3b4b0a": "83cf33f92603d411e73230a5c2357f5b",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a1/41437bf2629189f8aebad26a3a0a2069b5a70e": "0160eea2d3869f6fe9012b5e7f5b3272",
".git/objects/a2/cf2f1bd947794481fedd6c28e3d12d762b83d8": "83cee28e669d0835f3653cdbf4c6343b",
".git/objects/a6/0417629ab01ad040fca59f274c738c1962de85": "f2b7429f26c1d6df9a9da65cbce492f6",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ab/9ff08d70804fa951749a52493cca2c5783aa89": "3277e7d5778f2f3ea450f280c522ae5f",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b5/0f65ba822689247326aefcbca842c528fe573d": "85c26d0b4cbf4b725181e2db2526ee2d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bc/7d993f94baf32ca11e5f5dc5412aac12a668a9": "d782f8a82d795ae96da7df117f4c51bd",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/ca/28c42816e1ba98b5202e9a751a7a71c42d96e6": "963cafb9d7043e8a4b08248318128b18",
".git/objects/cc/89c7d0bf3566c9fa9de860d60fb46449deee7f": "76eb0d5b558b2290ad16b9c1e7401e60",
".git/objects/cd/69ad7ee66c281260ccd2ca95ef888580917ce8": "d1893444a3c10570b4e0e09aa4a25783",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/d469129396910af1821969cb04c899190c4026": "cf0c6a2f81b37ec92e91e237fccd56f5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/e855ba2fe39ddc9d5954eb568489b35c053f3f": "689cee62862d7b35d1d4e8119ab43185",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/e7/013d1d790ef9790b0dcb5a505ba0364cdc13c2": "82de62e84f25e3947856d6b05d8500a9",
".git/objects/e9/c0ec2da0725a56e42fa2bd264f5de11be1e1cd": "3efeb71636289e18895842eb47639c05",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/dc1951c31edd6a3224a4de61199aca4ee75353": "dab76388327b273f8f17d4a610118322",
".git/objects/f6/cc06a0d471df5df1f35082b09b45fced798d05": "b3ed116bd3c82d600d635270058f4345",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f9/35d964ef79d34ab590c7c9b7b39593fc6d0459": "d537e8edc33d8d227285c641921a2de4",
".git/objects/fa/1950cc5076a8e743e64cb35b65c2440ef42687": "f0cd8c1b5dcee900a04e1effb84b7bca",
".git/objects/fc/90f1be678ef2b25b22c819fbed23e281b3707d": "760fffaf1cf60d6dac84134b8ed8dd76",
".git/objects/fc/999b0d1f117633d9989c9b30a3c235a5071624": "49a03cbf128293acc3b46f1efef38c60",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/ff/abd4e4dc04b061def91e30ca360989481ca32f": "8a43f6e9456722062db3d660f18674db",
".git/refs/heads/gh-pages": "2f80fc0bc2f13be906071b6cc7688de6",
".git/refs/remotes/origin/gh-pages": "2f80fc0bc2f13be906071b6cc7688de6",
"404.html": "c7771df06d40f705def9863588b569f0",
"assets/AssetManifest.bin": "daf8df3b1592afd13e8c8da340214f82",
"assets/AssetManifest.bin.json": "3ecc28cef6ed6e4ee8d5d07236774408",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/images/discount.mp4": "61618f11f27966e1b4d9c95608b246e3",
"assets/assets/images/end.jpg": "e3bf93cc5b74a4c02ac467e4fff44368",
"assets/assets/images/flash_sale.mp4": "ab3418f62bc6623298ae3d376c378a78",
"assets/assets/images/login.jpg": "92bb5ceb07e633b337e2c1c3da99f491",
"assets/assets/images/logo.png": "3e3a3d19a3e57e1f77d8babc1f5520cb",
"assets/assets/images/offers_video.mp4": "35848b6e3750b02a6fcaf7103e2d5e47",
"assets/assets/images/otp_success.png": "74a2d52c8245d07172c8a75426d241d5",
"assets/assets/images/password.png": "fca7f0e801d3f124985e1e34f024de8c",
"assets/assets/json/circular_loader.json": "9fb6a977c102a0606e70450fc70f05ed",
"assets/assets/json/success-check.json": "751c86643ab563fb0099e418e5e5154a",
"assets/FontManifest.json": "92818e61d2b3673d24f9b8edfad3c095",
"assets/fonts/MaterialIcons-Regular.otf": "2ca047da31237a3d7c11549ad97ac953",
"assets/NOTICES": "66fe03c228c41da5c7f4e13a4ab71d40",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/wakelock_plus/assets/no_sleep.js": "74499cf34f37daae14b51e3a23cd9f7a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "e7b32cdc9de8bed444a5d5b3982080d4",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "7b3d095b4c2951f1f3969b319c77f732",
"icons/Icon-192.png": "1211cae6614e8ad13a9c59cc399d6702",
"icons/Icon-512.png": "749909bd1eb0094d6094d1050d1b3dca",
"icons/Icon-maskable-192.png": "1211cae6614e8ad13a9c59cc399d6702",
"icons/Icon-maskable-512.png": "749909bd1eb0094d6094d1050d1b3dca",
"index.html": "c7771df06d40f705def9863588b569f0",
"/": "c7771df06d40f705def9863588b569f0",
"main.dart.js": "26d2535aa0bf51bd3dadf0bbbfb293de",
"manifest.json": "bd398777091ebd78f826f2838193398b",
"version.json": "918b548fc05c7d0d6cfe31e86e20026b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
