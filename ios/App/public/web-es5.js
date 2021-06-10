function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web"], {
  /***/
  "./node_modules/@capacitor-community/apple-sign-in/dist/esm/web.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/@capacitor-community/apple-sign-in/dist/esm/web.js ***!
    \*************************************************************************/

  /*! exports provided: SignInWithAppleWeb */

  /***/
  function node_modulesCapacitorCommunityAppleSignInDistEsmWebJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInWithAppleWeb", function () {
      return SignInWithAppleWeb;
    });
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/index.js");
    /* harmony import */


    var scriptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! scriptjs */
    "./node_modules/scriptjs/dist/script.js");
    /* harmony import */


    var scriptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scriptjs__WEBPACK_IMPORTED_MODULE_1__);

    var SignInWithAppleWeb = /*#__PURE__*/function (_capacitor_core__WEBP) {
      _inherits(SignInWithAppleWeb, _capacitor_core__WEBP);

      var _super = _createSuper(SignInWithAppleWeb);

      function SignInWithAppleWeb() {
        var _this;

        _classCallCheck(this, SignInWithAppleWeb);

        _this = _super.call(this, {
          name: 'SignInWithApple',
          platforms: ['web']
        });
        _this.appleScriptUrl = 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js';
        _this.isAppleScriptLoaded = false;
        return _this;
      }

      _createClass(SignInWithAppleWeb, [{
        key: "authorize",
        value: function () {
          var _authorize = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", new Promise(function (resolve, reject) {
                      if (options) {
                        _this2.loadSignInWithAppleJS().then(function (loaded) {
                          var _a, _b, _c;

                          _this2.isAppleScriptLoaded = loaded;

                          if (_this2.isAppleScriptLoaded) {
                            AppleID.auth.init({
                              clientId: options.clientId,
                              redirectURI: options.redirectURI,
                              scope: (_a = options.scopes) !== null && _a !== void 0 ? _a : undefined,
                              state: (_b = options.state) !== null && _b !== void 0 ? _b : undefined,
                              nonce: (_c = options.nonce) !== null && _c !== void 0 ? _c : undefined,
                              usePopup: true
                            });
                            AppleID.auth.signIn().then(function (res) {
                              var _a, _b, _c;

                              var response = {
                                response: {
                                  user: null,
                                  email: (_a = res.user) === null || _a === void 0 ? void 0 : _a.email,
                                  givenName: (_b = res.user) === null || _b === void 0 ? void 0 : _b.name.firstName,
                                  familyName: (_c = res.user) === null || _c === void 0 ? void 0 : _c.name.lastName,
                                  identityToken: res.authorization.id_token,
                                  authorizationCode: res.authorization.code
                                }
                              };
                              resolve(response);
                            })["catch"](function (err) {
                              reject(err);
                            });
                          } else {
                            reject('Unable to load Sign in with Apple JS framework.');
                          }
                        });
                      } else {
                        reject('No options were provided.');
                      }
                    }));

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function authorize(_x) {
            return _authorize.apply(this, arguments);
          }

          return authorize;
        }()
      }, {
        key: "loadSignInWithAppleJS",
        value: function loadSignInWithAppleJS() {
          var _this3 = this;

          return new Promise(function (resolve) {
            if (!_this3.isAppleScriptLoaded) {
              if (typeof window !== undefined) {
                scriptjs__WEBPACK_IMPORTED_MODULE_1__["get"](_this3.appleScriptUrl, function () {
                  return resolve(true);
                });
              } else {
                resolve(false);
              }
            } else {
              resolve(true);
            }
          });
        }
      }]);

      return SignInWithAppleWeb;
    }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]); //# sourceMappingURL=web.js.map

    /***/

  },

  /***/
  "./node_modules/@capacitor/camera/dist/esm/web.js":
  /*!********************************************************!*\
    !*** ./node_modules/@capacitor/camera/dist/esm/web.js ***!
    \********************************************************/

  /*! exports provided: CameraWeb, Camera */

  /***/
  function node_modulesCapacitorCameraDistEsmWebJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraWeb", function () {
      return CameraWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Camera", function () {
      return Camera;
    });
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/index.js");
    /* harmony import */


    var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./definitions */
    "./node_modules/@capacitor/camera/dist/esm/definitions.js");

    var CameraWeb = /*#__PURE__*/function (_capacitor_core__WEBP2) {
      _inherits(CameraWeb, _capacitor_core__WEBP2);

      var _super2 = _createSuper(CameraWeb);

      function CameraWeb() {
        _classCallCheck(this, CameraWeb);

        return _super2.apply(this, arguments);
      }

      _createClass(CameraWeb, [{
        key: "getPhoto",
        value: function () {
          var _getPhoto = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(options) {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    return _context4.abrupt("return", new Promise( /*#__PURE__*/function () {
                      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(resolve, reject) {
                        var cameraModal;
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                if (!options.webUseInput) {
                                  _context3.next = 4;
                                  break;
                                }

                                _this4.fileInputExperience(options, resolve);

                                _context3.next = 21;
                                break;

                              case 4:
                                if (!customElements.get('pwa-camera-modal')) {
                                  _context3.next = 19;
                                  break;
                                }

                                cameraModal = document.createElement('pwa-camera-modal');
                                document.body.appendChild(cameraModal);
                                _context3.prev = 7;
                                _context3.next = 10;
                                return cameraModal.componentOnReady();

                              case 10:
                                cameraModal.addEventListener('onPhoto', /*#__PURE__*/function () {
                                  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
                                    var photo;
                                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                      while (1) {
                                        switch (_context2.prev = _context2.next) {
                                          case 0:
                                            photo = e.detail;

                                            if (!(photo === null)) {
                                              _context2.next = 5;
                                              break;
                                            }

                                            reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["CapacitorException"]('User cancelled photos app'));
                                            _context2.next = 14;
                                            break;

                                          case 5:
                                            if (!(photo instanceof Error)) {
                                              _context2.next = 9;
                                              break;
                                            }

                                            reject(photo);
                                            _context2.next = 14;
                                            break;

                                          case 9:
                                            _context2.t0 = resolve;
                                            _context2.next = 12;
                                            return _this4._getCameraPhoto(photo, options);

                                          case 12:
                                            _context2.t1 = _context2.sent;
                                            (0, _context2.t0)(_context2.t1);

                                          case 14:
                                            cameraModal.dismiss();
                                            document.body.removeChild(cameraModal);

                                          case 16:
                                          case "end":
                                            return _context2.stop();
                                        }
                                      }
                                    }, _callee2);
                                  }));

                                  return function (_x5) {
                                    return _ref2.apply(this, arguments);
                                  };
                                }());
                                cameraModal.present();
                                _context3.next = 17;
                                break;

                              case 14:
                                _context3.prev = 14;
                                _context3.t0 = _context3["catch"](7);

                                _this4.fileInputExperience(options, resolve);

                              case 17:
                                _context3.next = 21;
                                break;

                              case 19:
                                console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements.");

                                _this4.fileInputExperience(options, resolve);

                              case 21:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, null, [[7, 14]]);
                      }));

                      return function (_x3, _x4) {
                        return _ref.apply(this, arguments);
                      };
                    }()));

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          function getPhoto(_x2) {
            return _getPhoto.apply(this, arguments);
          }

          return getPhoto;
        }()
      }, {
        key: "fileInputExperience",
        value: function fileInputExperience(options, resolve) {
          var input = document.querySelector('#_capacitor-camera-input');

          var cleanup = function cleanup() {
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

          if (options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Photos || options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Prompt) {
            input.removeAttribute('capture');
          } else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"].Front) {
            input.capture = 'user';
          } else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"].Rear) {
            input.capture = 'environment';
          }

          input.addEventListener('change', function (_e) {
            var file = input.files[0];
            var format = 'jpeg';

            if (file.type === 'image/png') {
              format = 'png';
            } else if (file.type === 'image/gif') {
              format = 'gif';
            }

            if (options.resultType === 'dataUrl' || options.resultType === 'base64') {
              var reader = new FileReader();
              reader.addEventListener('load', function () {
                if (options.resultType === 'dataUrl') {
                  resolve({
                    dataUrl: reader.result,
                    format: format
                  });
                } else if (options.resultType === 'base64') {
                  var b64 = reader.result.split(',')[1];
                  resolve({
                    base64String: b64,
                    format: format
                  });
                }

                cleanup();
              });
              reader.readAsDataURL(file);
            } else {
              resolve({
                webPath: URL.createObjectURL(file),
                format: format
              });
              cleanup();
            }
          });
          input.click();
        }
      }, {
        key: "_getCameraPhoto",
        value: function _getCameraPhoto(photo, options) {
          return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            var format = photo.type.split('/')[1];

            if (options.resultType === 'uri') {
              resolve({
                webPath: URL.createObjectURL(photo),
                format: format
              });
            } else {
              reader.readAsDataURL(photo);

              reader.onloadend = function () {
                var r = reader.result;

                if (options.resultType === 'dataUrl') {
                  resolve({
                    dataUrl: r,
                    format: format
                  });
                } else {
                  resolve({
                    base64String: r.split(',')[1],
                    format: format
                  });
                }
              };

              reader.onerror = function (e) {
                reject(e);
              };
            }
          });
        }
      }, {
        key: "checkPermissions",
        value: function () {
          var _checkPermissions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var permission;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!(typeof navigator === 'undefined' || !navigator.permissions)) {
                      _context5.next = 2;
                      break;
                    }

                    throw this.unavailable('Permissions API not available in this browser');

                  case 2:
                    _context5.prev = 2;
                    _context5.next = 5;
                    return window.navigator.permissions.query({
                      name: 'camera'
                    });

                  case 5:
                    permission = _context5.sent;
                    return _context5.abrupt("return", {
                      camera: permission.state,
                      photos: 'granted'
                    });

                  case 9:
                    _context5.prev = 9;
                    _context5.t0 = _context5["catch"](2);
                    throw this.unavailable('Camera permissions are not available in this browser');

                  case 12:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this, [[2, 9]]);
          }));

          function checkPermissions() {
            return _checkPermissions.apply(this, arguments);
          }

          return checkPermissions;
        }()
      }, {
        key: "requestPermissions",
        value: function () {
          var _requestPermissions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    throw this.unimplemented('Not implemented on web.');

                  case 1:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));

          function requestPermissions() {
            return _requestPermissions.apply(this, arguments);
          }

          return requestPermissions;
        }()
      }]);

      return CameraWeb;
    }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]);

    var Camera = new CameraWeb(); //# sourceMappingURL=web.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/splash-screen/dist/esm/web.js":
  /*!***************************************************************!*\
    !*** ./node_modules/@capacitor/splash-screen/dist/esm/web.js ***!
    \***************************************************************/

  /*! exports provided: SplashScreenWeb */

  /***/
  function node_modulesCapacitorSplashScreenDistEsmWebJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SplashScreenWeb", function () {
      return SplashScreenWeb;
    });
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/index.js");

    var SplashScreenWeb = /*#__PURE__*/function (_capacitor_core__WEBP3) {
      _inherits(SplashScreenWeb, _capacitor_core__WEBP3);

      var _super3 = _createSuper(SplashScreenWeb);

      function SplashScreenWeb() {
        _classCallCheck(this, SplashScreenWeb);

        return _super3.apply(this, arguments);
      }

      _createClass(SplashScreenWeb, [{
        key: "show",
        value: function () {
          var _show = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(_options) {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    return _context7.abrupt("return", undefined);

                  case 1:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          }));

          function show(_x6) {
            return _show.apply(this, arguments);
          }

          return show;
        }()
      }, {
        key: "hide",
        value: function () {
          var _hide = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(_options) {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    return _context8.abrupt("return", undefined);

                  case 1:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          }));

          function hide(_x7) {
            return _hide.apply(this, arguments);
          }

          return hide;
        }()
      }]);

      return SplashScreenWeb;
    }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]); //# sourceMappingURL=web.js.map

    /***/

  },

  /***/
  "./node_modules/scriptjs/dist/script.js":
  /*!**********************************************!*\
    !*** ./node_modules/scriptjs/dist/script.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesScriptjsDistScriptJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*!
    * $script.js JS loader & dependency manager
    * https://github.com/ded/script.js
    * (c) Dustin Diaz 2014 | License MIT
    */


    (function (name, definition) {
      if (true && module.exports) module.exports = definition();else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = definition, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
    })('$script', function () {
      var doc = document,
          head = doc.getElementsByTagName('head')[0],
          s = 'string',
          f = false,
          push = 'push',
          readyState = 'readyState',
          onreadystatechange = 'onreadystatechange',
          list = {},
          ids = {},
          delay = {},
          scripts = {},
          scriptpath,
          urlArgs;

      function every(ar, fn) {
        for (var i = 0, j = ar.length; i < j; ++i) {
          if (!fn(ar[i])) return f;
        }

        return 1;
      }

      function each(ar, fn) {
        every(ar, function (el) {
          fn(el);
          return 1;
        });
      }

      function $script(paths, idOrDone, optDone) {
        paths = paths[push] ? paths : [paths];
        var idOrDoneIsDone = idOrDone && idOrDone.call,
            done = idOrDoneIsDone ? idOrDone : optDone,
            id = idOrDoneIsDone ? paths.join('') : idOrDone,
            queue = paths.length;

        function loopFn(item) {
          return item.call ? item() : list[item];
        }

        function callback() {
          if (! --queue) {
            list[id] = 1;
            done && done();

            for (var dset in delay) {
              every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = []);
            }
          }
        }

        setTimeout(function () {
          each(paths, function loading(path, force) {
            if (path === null) return callback();

            if (!force && !/^https?:\/\//.test(path) && scriptpath) {
              path = path.indexOf('.js') === -1 ? scriptpath + path + '.js' : scriptpath + path;
            }

            if (scripts[path]) {
              if (id) ids[id] = 1;
              return scripts[path] == 2 ? callback() : setTimeout(function () {
                loading(path, true);
              }, 0);
            }

            scripts[path] = 1;
            if (id) ids[id] = 1;
            create(path, callback);
          });
        }, 0);
        return $script;
      }

      function create(path, fn) {
        var el = doc.createElement('script'),
            loaded;

        el.onload = el.onerror = el[onreadystatechange] = function () {
          if (el[readyState] && !/^c|loade/.test(el[readyState]) || loaded) return;
          el.onload = el[onreadystatechange] = null;
          loaded = 1;
          scripts[path] = 2;
          fn();
        };

        el.async = 1;
        el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
        head.insertBefore(el, head.lastChild);
      }

      $script.get = create;

      $script.order = function (scripts, id, done) {
        (function callback(s) {
          s = scripts.shift();
          !scripts.length ? $script(s, id, done) : $script(s, callback);
        })();
      };

      $script.path = function (p) {
        scriptpath = p;
      };

      $script.urlArgs = function (str) {
        urlArgs = str;
      };

      $script.ready = function (deps, ready, req) {
        deps = deps[push] ? deps : [deps];
        var missing = [];
        !each(deps, function (dep) {
          list[dep] || missing[push](dep);
        }) && every(deps, function (dep) {
          return list[dep];
        }) ? ready() : !function (key) {
          delay[key] = delay[key] || [];
          delay[key][push](ready);
          req && req(missing);
        }(deps.join('|'));
        return $script;
      };

      $script.done = function (idOrDone) {
        $script([null], idOrDone);
      };

      return $script;
    });
    /***/

  }
}]);
//# sourceMappingURL=web-es5.js.map