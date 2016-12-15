/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/webcomponentsjs/webcomponents-lite.min.js","02395895d5d08242c6ba93518a6da2c5"],["/data/__.json","2b46226591a418ebe70f07b23f376fa9"],["/data/_sessions.json","cb37fda73604e2f480b052778234b816"],["/data/blog.json","966dfc623f261b214a06d7435f2068ee"],["/data/en/resources.json","42174153e3b118b2f9d17929d615b687"],["/data/es/resources.json","a031fc4a38b756e6cb4aff616852912d"],["/data/hoverboard.config.json","6f46ed29d6321e6640265e72bf55b026"],["/data/partners.json","ef1d513e67eb79150cadedd9eac45bdd"],["/data/posts/2015-10-24-devfest-ua-summary.markdown","68c408c5dac1a4299379a031482c63f5"],["/data/posts/2016-05-04-devfest-2016-announced.markdown","bdb4d8f7d8c62d4ffc6ef7d65bcc6876"],["/data/posts/2016-05-06-c4p-time.markdown","db8d211a74193948c77ba37a29ac9feb"],["/data/posts/code-of-conduct.markdown","6ca45ea87b950656995187c60d6b50c8"],["/data/schedule.json","e01be56b889650664dc35cdbea3c5214"],["/data/sessions.json","53fff02811addc236f079a866fe226d9"],["/data/speakers.json","a5acface3f02788a351febab0f7f917c"],["/data/team.json","07679b0ca60669eca96f6d1d7f3ccf31"],["/data/tweets.json","80b8481b23c5a2e43a316f24b8973f04"],["/data/uk/resources.json","d266247aff8df24864eb273b54f322ac"],["/data/videos.json","09076d4ea269d03b9de8792bf5c1ea3a"],["/images/backgrounds/2015_1.jpg","bc9d13af2b3e38b4556be691c63b7889"],["/images/backgrounds/2015_2.jpg","22ce360278168687e87cd0a728c43328"],["/images/backgrounds/2015_3.jpg","d76b9241e72a3f004b7c8f32452b0692"],["/images/backgrounds/closing.jpg","0d2666a42b5feb51dbddae4a6e76cf59"],["/images/backgrounds/coffee-break.jpg","283b8d543ba287acda89bade3e1a7eb4"],["/images/backgrounds/home.png","960cf6f367bba544264f9a0e14f2e6bc"],["/images/backgrounds/home_old.png","b57f40e281ba06760d073514bef2f1bb"],["/images/backgrounds/hub.jpg","f1db7c47dff6b3bc54c64f0db9d975d2"],["/images/backgrounds/location_1.jpg","495cac2b5e0f02d803b08ee89bbc622e"],["/images/backgrounds/location_2.jpg","3a58eef541813cacef7e99c898e6ab7f"],["/images/backgrounds/location_3.jpg","5a4ce654301d6d264e5f4fb48ae890f0"],["/images/backgrounds/lunch.jpg","1b7f9ec019a4391c25584c3bce7843d6"],["/images/backgrounds/morning.jpg","ee01e33624472918bb981c02b2c31855"],["/images/backgrounds/opening.jpg","3ebf00d4f85ca044eff1dc17ed56d034"],["/images/backgrounds/party.jpg","62bdfc8ded3b33861fecade528d92837"],["/images/backgrounds/registration.jpg","4afd4b01198cc95c2232e06dd35eb640"],["/images/favicon/favicon-32.png","a9509ca258731e12d52dd223ad1ba4c8"],["/images/favicon/favicon-72.png","8a50435f9af90132f255eb24018c68dc"],["/images/favicon/favicon.ico","b86585686052335d3f7ef73973e18aef"],["/images/gdg-logo.svg","a124fcbb532a30ad2342b16662695bdf"],["/images/home_images/DSCN7995.jpg","f31562513fcb5dcac3f3d9d77710c612"],["/images/home_images/DSCN8018.jpg","d2289c13c5d775b7d8789783618b7a2e"],["/images/home_images/IMG_9066.jpg","1cb7b42a2e485bda19353406df908ca8"],["/images/logo-light.svg","75f45b80d3e64d114f910351b33f361d"],["/images/logo-white.svg","94f517204edbbc3da51c1d3bf616ea0d"],["/images/logo.svg","68a5eeb613ef13b8d6453ede61d86a65"],["/images/logo_nuevo.png","07e981a82df642ff5210135e39e00f5f"],["/images/logo_nuevo_gris.png","52b1bc9efe89cdd1963f7e6692898072"],["/images/logos/Blowapp_negro.png","d10b32d4ae0e033b92ed78436e923be2"],["/images/logos/Logo_Belatrix_350.png","29f861386b19ac2ee0e16288d042f100"],["/images/logos/Logo_Google_Developers_Gris.png","3650e7849a97186a91c23d7cbe419838"],["/images/logos/Logo_MuleSoft.svg","2808fb1723840b4f256be2ffc3fde202"],["/images/logos/Logo_NgBaires_Full.png","db184ec9ddabf219f0ae91a9e3428b9b"],["/images/logos/Logo_Plataforma5.svg","4210402cdf691059bb09da7e85618d05"],["/images/logos/Logo_SysArmy_250.png","89a6d4680dff0e9a12797e9071da5b54"],["/images/logos/Logo_UADE_350.png","ea930f4b0e73d539374ac547de6e5d5d"],["/images/logos/gdg-lviv.svg","557e52d18aed88a36197d1388c67c985"],["/images/logos/gdg-x.svg","f8fb99f2d34c78761130651f9d46c5ed"],["/images/logos/google.svg","888b314b2d82dac34ba4f7d1df8e0a84"],["/images/logos/logo-ximple-para-calcos.png","6e0fb117e34bb61cb3d613ee8148e127"],["/images/logos/logo_nuevo.png","52b1bc9efe89cdd1963f7e6692898072"],["/images/people/andres-villanueva.jpg","cc51f989c4f489f85e45d42ee35bda41"],["/images/people/gustavo-cardelle.jpg","fe85d255e08ab1600d23d2499fd3fb56"],["/images/people/jorge-cano.jpg","594165a853254506176960a0eef45131"],["/images/people/juan-irungaray.jpg","1630fc201ed47b032df5764b14ee943d"],["/images/people/juan-manuel-baiutti.jpg","f986070e23380f32aab129543248333a"],["/images/people/leonardo-condori.jpg","08ae3c858b322ad140fa948e56fc8c21"],["/images/people/valeria-viva.jpg","b7e1d114625ee3539bc664acbb454e0d"],["/images/people/yury-camacho.jpg","bdccd67fec78ef6b6ccae3f1c4229caf"],["/images/posts/announce.jpg","bc9412e05d6ceaf809583f52c0631e6e"],["/images/posts/c4p-is-open.jpg","e70275316abad0afb9e145ef75472351"],["/images/posts/summary.jpg","6df056d37ca45e05cd240db2e902a02c"],["/images/posts/summary1.jpg","c6deb766b3d711b16dd54836cec831be"],["/images/posts/summary10.jpg","7c475adf3f762770eab64ac2336088b2"],["/images/posts/summary11.jpg","ba56a01a1b012252657c15f362814898"],["/images/posts/summary2.jpg","b04919da708d9332358696c24dde6f0c"],["/images/posts/summary3.jpg","cca9bbf45d05d6b129e4b87b249c368f"],["/images/posts/summary4.jpg","176b9543955b84c0bbda8f21a80aa7f0"],["/images/posts/summary5.jpg","2c75cba81c06eac75fdbfac4edbed79d"],["/images/posts/summary6.jpg","4637db009b49463d40be52c9e57c367a"],["/images/posts/summary7.jpg","18f9515bb11dcf2e2a98a856b939b23d"],["/images/posts/summary8.jpg","51a6357257d94790599645aa1059e0f5"],["/images/posts/summary9.jpg","63bbe0210affa537342e33e7a203bbc6"],["/images/sessions/cierre.png","f0ebf9db7717afecfc39302b0371574b"],["/images/sessions/devfestbaires.png","c0a9e58f92e78a74223dbcea7bd111fe"],["/images/sessions/fsolsona.png","89ce0342631a76c68b125f9c5dd76840"],["/images/sessions/jariste.png","031d369e69eabaeaf653f3bf2d56b9de"],["/images/sessions/jcano.png","c808d9701f6081922c9fb1c726e0c5db"],["/images/sessions/mmolinas.png","7eee4edde242095668f7e2e59e2c58cb"],["/images/sessions/nbortolotti.png","dae62175b95a8fd976863d6738b7213a"],["/images/social-share.jpg","546e13081b2d268d276cdb245b484b23"],["/images/touch/homescreen-144.png","777fba2c9ab035808a6925ca611bc67f"],["/images/touch/homescreen-168.png","fc1f8e5f1a213ad6c2731c089fef3de1"],["/images/touch/homescreen-192.png","1775ae0aca4e1db5d5b1650a3b2c7eac"],["/images/touch/homescreen-256.png","c30a7a4972a7b4a5c0ad7c9572cb3e87"],["/images/touch/homescreen-48.png","0a740b7afb3040a80eb0622ee24b35ac"],["/images/touch/homescreen-72.png","8a50435f9af90132f255eb24018c68dc"],["/images/touch/homescreen-96.png","0f6e04240af1efb86d43d278564d46ac"],["/index.html","b509d1863655ec8f4e40195754511a93"],["/manifest.json","f8c412e87b83e1b90a76ab5fed703b24"],["/scripts/bootstrap.js","ed50113d210e9ac60efcefc68dd6834d"],["/scripts/helper/deferred.js","00ad32e38a07f247290c2f67e536d711"],["/scripts/helper/elements.js","0ca8fba3ee9ce7cba1d836a0bed8afea"],["/scripts/helper/promise-polyfill.js","bce372630e22345ff83479f41c533046"],["/scripts/helper/service-worker-registration.js","2e10c2ced9d00afc996e1b9beb8f1cee"],["/scripts/helper/util.js","36c5192324d40e060799d58a38f96ef6"],["/scripts/metrics.js","8623bff01545e628beb021b08b8afa31"],["/src/behaviors/cascaded-behavior.html","730852d4e5815517a98f15788ba2c56c"],["/src/behaviors/localize-behavior.html","5c9051994ed4cb58f9ca0a2cfbf0c483"],["/src/behaviors/my-schedule-behavior.html","158b0dfe90cfe8755a238f84937bec64"],["/src/behaviors/page-behavior.html","7a14e88bebe781a58ef61c15252a8e4d"],["/src/behaviors/share-behavior.html","cb664197f584d8b10b94d069c119214c"],["/src/behaviors/utils-behavior.html","2e544f9c4b49f3af3a1152174baa2916"],["/src/effects/fade-effect.html","8ee4b618e5e00c5b2c822a7bdddfa1b1"],["/src/elements/about-block.html","493813b08c2cfc8f3e16b9c50b44f17d"],["/src/elements/animatable-content.html","f4b07f855a4880b041ad91499007f74f"],["/src/elements/app-data.html","d8121fc11cb017a6655598f18258230c"],["/src/elements/call-to-action.html","6e01c9d68e5c334e5a45e9abc532c7f1"],["/src/elements/drawer-block.html","93b6c45a32d5f29f73bcf31763bf5d1c"],["/src/elements/featured-people.html","254d16cf2e8ed54ffab8ed8b3f8e61ea"],["/src/elements/featured-videos.html","1ec00cc603dda2bc597dad7959dc705b"],["/src/elements/footer-block.html","a0ce60392952af3151e2b23d7ed5dbb0"],["/src/elements/header-content.html","849deabca99b49ac494ef7aa9b326eee"],["/src/elements/latest-posts.html","d3e3d6d0f23c46347fba03a7478f44f1"],["/src/elements/logos-block.html","169eacf8c197f4587e2b81c06796f8ca"],["/src/elements/mailchimp-subscribe.html","671412023f24777712d29cfe65a864a7"],["/src/elements/map-block.html","f4f3311ae5b41f230a3341105e1327a9"],["/src/elements/my-schedule.html","4117657a35832f4ec8f3335bb5b8a8e3"],["/src/elements/photo-block.html","6fc4977db8e046054608eb7f680a905e"],["/src/elements/schedule-day.html","577c3ded72b2d61bde9e39d730aeb4cc"],["/src/elements/schedule-subnav.html","97fabf15ff56f10473edb07f3426b92e"],["/src/elements/session-details.html","f03e0705ebfca13fac0c4090c3dd875c"],["/src/elements/session-element.html","acd1658d385d305ae13da4e6801bf8b4"],["/src/elements/social-feed.html","29e259d6bae013c67ba9d0bd5482a33a"],["/src/elements/social-post.html","cd9164247079ccdca86f1cfed3a09b7c"],["/src/elements/speaker-details.html","073e4cf9b4be3be40c827c599383656d"],["/src/elements/statistics-block.html","3275ecc1d2acd05ca638506c9e38b297"],["/src/elements/ticket-element.html","5987eb876d95e02b8998c6c2f0e441b0"],["/src/elements/tickets-block.html","8dfcecb54aee013d036b1e2865eb423e"],["/src/elements/toast-element.html","c0562e4956ee8b3cdd9af37d4dbf6f25"],["/src/elements/toolbar-block.html","df8e9bdbe07cdbcd75f54dd9efc1e297"],["/src/elements/truncate-marked-text.html","a4e2ead87bcb1526e38395b8c5525a23"],["/src/elements/video-dialog.html","77cc165d7ad1aa76df137b03af61d69d"],["/src/hoverboard-app.html","226dc3eb81ad3e3600f00c2d2cfbfdf5"],["/src/js-wrappers/g-plusone.html","abcc292603de43782fa49f6fd952a4a6"],["/src/js-wrappers/time-element-wrapper.html","cc26ded5c3021fdfb09304414b2e0af1"],["/src/pages/blog-list.html","5eee80c27076ee627e74a4082e681e54"],["/src/pages/blog-page.html","34b0aaaf05dd8644ccb92e576924032d"],["/src/pages/cod-page.html","9675e1c152c105fb7f9071195eb4fe88"],["/src/pages/home-page.html","becaa37295b42ba78f091ad99d6a84be"],["/src/pages/post-page.html","d43b67f1022e0a7971d96e0c2107b7ec"],["/src/pages/schedule-page.html","97e6ed792f44d85cdb01693adeff6d79"],["/src/pages/speakers-page.html","61a3a69e49e63c7075bccae7bb3d8263"],["/src/pages/team-page.html","8ef235a5b5809fba090560744281cef5"],["/src/styles/dialog-styles.html","cf88a9c69c622b319670f68346754202"],["/src/styles/icons.html","240e14b58b2f4bb164c1ece1503c1462"],["/src/styles/mixins.html","a97221af3b44a1b3ca296ab0b5d4e10e"],["/src/styles/shared-styles.html","47252266f92c7d024db938f87f7e7bf4"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '/index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted(["^\\/[^\\_]+\\/"], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




