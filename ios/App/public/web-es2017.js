(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web"],{

/***/ "./node_modules/@capacitor-community/apple-sign-in/dist/esm/web.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@capacitor-community/apple-sign-in/dist/esm/web.js ***!
  \*************************************************************************/
/*! exports provided: SignInWithAppleWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInWithAppleWeb", function() { return SignInWithAppleWeb; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/index.js");
/* harmony import */ var scriptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");
/* harmony import */ var scriptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scriptjs__WEBPACK_IMPORTED_MODULE_1__);


class SignInWithAppleWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    constructor() {
        super({
            name: 'SignInWithApple',
            platforms: ['web'],
        });
        this.appleScriptUrl = 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js';
        this.isAppleScriptLoaded = false;
    }
    async authorize(options) {
        return new Promise((resolve, reject) => {
            if (options) {
                this.loadSignInWithAppleJS().then(loaded => {
                    var _a, _b, _c;
                    this.isAppleScriptLoaded = loaded;
                    if (this.isAppleScriptLoaded) {
                        AppleID.auth.init({
                            clientId: options.clientId,
                            redirectURI: options.redirectURI,
                            scope: (_a = options.scopes) !== null && _a !== void 0 ? _a : undefined,
                            state: (_b = options.state) !== null && _b !== void 0 ? _b : undefined,
                            nonce: (_c = options.nonce) !== null && _c !== void 0 ? _c : undefined,
                            usePopup: true,
                        });
                        AppleID.auth
                            .signIn()
                            .then((res) => {
                            var _a, _b, _c;
                            const response = {
                                response: {
                                    user: null,
                                    email: (_a = res.user) === null || _a === void 0 ? void 0 : _a.email,
                                    givenName: (_b = res.user) === null || _b === void 0 ? void 0 : _b.name.firstName,
                                    familyName: (_c = res.user) === null || _c === void 0 ? void 0 : _c.name.lastName,
                                    identityToken: res.authorization.id_token,
                                    authorizationCode: res.authorization.code,
                                },
                            };
                            resolve(response);
                        })
                            .catch((err) => {
                            reject(err);
                        });
                    }
                    else {
                        reject('Unable to load Sign in with Apple JS framework.');
                    }
                });
            }
            else {
                reject('No options were provided.');
            }
        });
    }
    loadSignInWithAppleJS() {
        return new Promise(resolve => {
            if (!this.isAppleScriptLoaded) {
                if (typeof window !== undefined) {
                    scriptjs__WEBPACK_IMPORTED_MODULE_1__["get"](this.appleScriptUrl, () => resolve(true));
                }
                else {
                    resolve(false);
                }
            }
            else {
                resolve(true);
            }
        });
    }
}
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "./node_modules/@capacitor/camera/dist/esm/web.js":
/*!********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/web.js ***!
  \********************************************************/
/*! exports provided: CameraWeb, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraWeb", function() { return CameraWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/index.js");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ "./node_modules/@capacitor/camera/dist/esm/definitions.js");


class CameraWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    async getPhoto(options) {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            if (options.webUseInput) {
                this.fileInputExperience(options, resolve);
            }
            else {
                if (customElements.get('pwa-camera-modal')) {
                    const cameraModal = document.createElement('pwa-camera-modal');
                    document.body.appendChild(cameraModal);
                    try {
                        await cameraModal.componentOnReady();
                        cameraModal.addEventListener('onPhoto', async (e) => {
                            const photo = e.detail;
                            if (photo === null) {
                                reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["CapacitorException"]('User cancelled photos app'));
                            }
                            else if (photo instanceof Error) {
                                reject(photo);
                            }
                            else {
                                resolve(await this._getCameraPhoto(photo, options));
                            }
                            cameraModal.dismiss();
                            document.body.removeChild(cameraModal);
                        });
                        cameraModal.present();
                    }
                    catch (e) {
                        this.fileInputExperience(options, resolve);
                    }
                }
                else {
                    console.error(`Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements.`);
                    this.fileInputExperience(options, resolve);
                }
            }
        });
    }
    fileInputExperience(options, resolve) {
        let input = document.querySelector('#_capacitor-camera-input');
        const cleanup = () => {
            var _a;
            (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
        };
        if (!input) {
            input = document.createElement('input');
            input.id = '_capacitor-camera-input';
            input.type = 'file';
            document.body.appendChild(input);
        }
        input.accept = 'image/*';
        input.capture = true;
        if (options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Photos ||
            options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Prompt) {
            input.removeAttribute('capture');
        }
        else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"].Front) {
            input.capture = 'user';
        }
        else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"].Rear) {
            input.capture = 'environment';
        }
        input.addEventListener('change', (_e) => {
            const file = input.files[0];
            let format = 'jpeg';
            if (file.type === 'image/png') {
                format = 'png';
            }
            else if (file.type === 'image/gif') {
                format = 'gif';
            }
            if (options.resultType === 'dataUrl' || options.resultType === 'base64') {
                const reader = new FileReader();
                reader.addEventListener('load', () => {
                    if (options.resultType === 'dataUrl') {
                        resolve({
                            dataUrl: reader.result,
                            format,
                        });
                    }
                    else if (options.resultType === 'base64') {
                        const b64 = reader.result.split(',')[1];
                        resolve({
                            base64String: b64,
                            format,
                        });
                    }
                    cleanup();
                });
                reader.readAsDataURL(file);
            }
            else {
                resolve({
                    webPath: URL.createObjectURL(file),
                    format: format,
                });
                cleanup();
            }
        });
        input.click();
    }
    _getCameraPhoto(photo, options) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            const format = photo.type.split('/')[1];
            if (options.resultType === 'uri') {
                resolve({
                    webPath: URL.createObjectURL(photo),
                    format: format,
                });
            }
            else {
                reader.readAsDataURL(photo);
                reader.onloadend = () => {
                    const r = reader.result;
                    if (options.resultType === 'dataUrl') {
                        resolve({
                            dataUrl: r,
                            format: format,
                        });
                    }
                    else {
                        resolve({
                            base64String: r.split(',')[1],
                            format: format,
                        });
                    }
                };
                reader.onerror = e => {
                    reject(e);
                };
            }
        });
    }
    async checkPermissions() {
        if (typeof navigator === 'undefined' || !navigator.permissions) {
            throw this.unavailable('Permissions API not available in this browser');
        }
        try {
            // https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query
            // the specific permissions that are supported varies among browsers that implement the
            // permissions API, so we need a try/catch in case 'camera' is invalid
            const permission = await window.navigator.permissions.query({
                name: 'camera',
            });
            return {
                camera: permission.state,
                photos: 'granted',
            };
        }
        catch (_a) {
            throw this.unavailable('Camera permissions are not available in this browser');
        }
    }
    async requestPermissions() {
        throw this.unimplemented('Not implemented on web.');
    }
}
const Camera = new CameraWeb();

//# sourceMappingURL=web.js.map

/***/ }),

/***/ "./node_modules/@capacitor/splash-screen/dist/esm/web.js":
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/splash-screen/dist/esm/web.js ***!
  \***************************************************************/
/*! exports provided: SplashScreenWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenWeb", function() { return SplashScreenWeb; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/index.js");

class SplashScreenWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    async show(_options) {
        return undefined;
    }
    async hide(_options) {
        return undefined;
    }
}
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "./node_modules/scriptjs/dist/script.js":
/*!**********************************************!*\
  !*** ./node_modules/scriptjs/dist/script.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */

(function (name, definition) {
  if ( true && module.exports) module.exports = definition()
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  else {}
})('$script', function () {
  var doc = document
    , head = doc.getElementsByTagName('head')[0]
    , s = 'string'
    , f = false
    , push = 'push'
    , readyState = 'readyState'
    , onreadystatechange = 'onreadystatechange'
    , list = {}
    , ids = {}
    , delay = {}
    , scripts = {}
    , scriptpath
    , urlArgs

  function every(ar, fn) {
    for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f
    return 1
  }
  function each(ar, fn) {
    every(ar, function (el) {
      fn(el)
      return 1
    })
  }

  function $script(paths, idOrDone, optDone) {
    paths = paths[push] ? paths : [paths]
    var idOrDoneIsDone = idOrDone && idOrDone.call
      , done = idOrDoneIsDone ? idOrDone : optDone
      , id = idOrDoneIsDone ? paths.join('') : idOrDone
      , queue = paths.length
    function loopFn(item) {
      return item.call ? item() : list[item]
    }
    function callback() {
      if (!--queue) {
        list[id] = 1
        done && done()
        for (var dset in delay) {
          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = [])
        }
      }
    }
    setTimeout(function () {
      each(paths, function loading(path, force) {
        if (path === null) return callback()
        
        if (!force && !/^https?:\/\//.test(path) && scriptpath) {
          path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;
        }
        
        if (scripts[path]) {
          if (id) ids[id] = 1
          return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true) }, 0)
        }

        scripts[path] = 1
        if (id) ids[id] = 1
        create(path, callback)
      })
    }, 0)
    return $script
  }

  function create(path, fn) {
    var el = doc.createElement('script'), loaded
    el.onload = el.onerror = el[onreadystatechange] = function () {
      if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;
      el.onload = el[onreadystatechange] = null
      loaded = 1
      scripts[path] = 2
      fn()
    }
    el.async = 1
    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
    head.insertBefore(el, head.lastChild)
  }

  $script.get = create

  $script.order = function (scripts, id, done) {
    (function callback(s) {
      s = scripts.shift()
      !scripts.length ? $script(s, id, done) : $script(s, callback)
    }())
  }

  $script.path = function (p) {
    scriptpath = p
  }
  $script.urlArgs = function (str) {
    urlArgs = str;
  }
  $script.ready = function (deps, ready, req) {
    deps = deps[push] ? deps : [deps]
    var missing = [];
    !each(deps, function (dep) {
      list[dep] || missing[push](dep);
    }) && every(deps, function (dep) {return list[dep]}) ?
      ready() : !function (key) {
      delay[key] = delay[key] || []
      delay[key][push](ready)
      req && req(missing)
    }(deps.join('|'))
    return $script
  }

  $script.done = function (idOrDone) {
    $script([null], idOrDone)
  }

  return $script
});


/***/ })

}]);
//# sourceMappingURL=web-es2017.js.map