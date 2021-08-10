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
  "./node_modules/@capacitor-community/firebase-analytics/dist/esm/web.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/@capacitor-community/firebase-analytics/dist/esm/web.js ***!
    \******************************************************************************/

  /*! exports provided: FirebaseAnalyticsWeb */

  /***/
  function node_modulesCapacitorCommunityFirebaseAnalyticsDistEsmWebJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseAnalyticsWeb", function () {
      return FirebaseAnalyticsWeb;
    });
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/index.js");

    var FirebaseAnalyticsWeb = /*#__PURE__*/function (_capacitor_core__WEBP) {
      _inherits(FirebaseAnalyticsWeb, _capacitor_core__WEBP);

      var _super = _createSuper(FirebaseAnalyticsWeb);

      function FirebaseAnalyticsWeb() {
        var _this;

        _classCallCheck(this, FirebaseAnalyticsWeb);

        _this = _super.call(this);
        _this.not_supported_mssg = "This method is not supported";
        _this.options_missing_mssg = "Firebase options are missing";
        _this.duplicate_app_mssg = "Firebase app already exists";
        _this.analytics_missing_mssg = "Firebase analytics is not initialized. Make sure initializeFirebase() is called once";
        _this.scripts = [{
          key: "firebase-app",
          src: "https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js"
        }, {
          key: "firebase-ac",
          src: "https://www.gstatic.com/firebasejs/8.2.3/firebase-analytics.js"
        }];
        _this.ready = new Promise(function (resolve) {
          return _this.readyResolver = resolve;
        });

        _this.configure();

        return _this;
      }
      /**
       * Configure and Initialize FirebaseApp if not present
       * @param options - web app's Firebase configuration
       * @returns firebase analytics object reference
       * Platform: Web
       */


      _createClass(FirebaseAnalyticsWeb, [{
        key: "initializeFirebase",
        value: function initializeFirebase(options) {
          var _this2 = this;

          return new Promise( /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
              var app;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _this2.ready;

                    case 2:
                      if (!_this2.hasFirebaseInitialized()) {
                        _context.next = 5;
                        break;
                      }

                      reject(_this2.duplicate_app_mssg);
                      return _context.abrupt("return");

                    case 5:
                      if (options) {
                        _context.next = 8;
                        break;
                      }

                      reject(_this2.options_missing_mssg);
                      return _context.abrupt("return");

                    case 8:
                      app = window.firebase.initializeApp(options);
                      _this2.analyticsRef = app.analytics();
                      resolve(_this2.analyticsRef);

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function (_x, _x2) {
              return _ref.apply(this, arguments);
            };
          }());
        }
        /**
         * Sets the user ID property.
         * @param options - userId: unique identifier of the user to log
         * Platform: Web/Android/iOS
         */

      }, {
        key: "setUserId",
        value: function setUserId(options) {
          var _this3 = this;

          return new Promise( /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resolve, reject) {
              var _ref3, userId;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return _this3.ready;

                    case 2:
                      if (_this3.analyticsRef) {
                        _context2.next = 5;
                        break;
                      }

                      reject(_this3.analytics_missing_mssg);
                      return _context2.abrupt("return");

                    case 5:
                      _ref3 = options || {
                        userId: undefined
                      }, userId = _ref3.userId;

                      if (userId) {
                        _context2.next = 9;
                        break;
                      }

                      reject("userId property is missing");
                      return _context2.abrupt("return");

                    case 9:
                      _this3.analyticsRef.setUserId(userId);

                      resolve();

                    case 11:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));

            return function (_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          }());
        }
        /**
         * Sets a user property to a given value.
         * @param options - name: The name of the user property to set.
         *                  value: The value of the user property.
         * Platform: Web/Android/iOS
         */

      }, {
        key: "setUserProperty",
        value: function setUserProperty(options) {
          var _this4 = this;

          return new Promise( /*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(resolve, reject) {
              var _ref5, name, value, property;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return _this4.ready;

                    case 2:
                      if (_this4.analyticsRef) {
                        _context3.next = 5;
                        break;
                      }

                      reject(_this4.analytics_missing_mssg);
                      return _context3.abrupt("return");

                    case 5:
                      _ref5 = options || {
                        name: undefined,
                        value: undefined
                      }, name = _ref5.name, value = _ref5.value;

                      if (name) {
                        _context3.next = 9;
                        break;
                      }

                      reject("name property is missing");
                      return _context3.abrupt("return");

                    case 9:
                      if (value) {
                        _context3.next = 12;
                        break;
                      }

                      reject("value property is missing");
                      return _context3.abrupt("return");

                    case 12:
                      property = {};
                      property[name] = value;

                      _this4.analyticsRef.setUserProperties(property);

                      resolve();

                    case 16:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));

            return function (_x5, _x6) {
              return _ref4.apply(this, arguments);
            };
          }());
        }
        /**
         * Retrieves the app instance id from the service.
         * @returns - instanceId: current instance if of the app
         * Platform: Web/Android/iOS
         */

      }, {
        key: "getAppInstanceId",
        value: function getAppInstanceId() {
          return new Promise(function (resolve, _reject) {
            return resolve;
          });
        }
        /**
         * Sets the current screen name, which specifies the current visual context in your app.
         * @param options - screenName: the activity to which the screen name and class name apply.
         *                  nameOverride: the name of the current screen. Set to null to clear the current screen name.
         * Platform: Android/iOS
         */

      }, {
        key: "setScreenName",
        value: function setScreenName(_options) {
          return new Promise(function (resolve, _reject) {
            return resolve;
          });
        }
        /**
         * Clears all analytics data for this app from the device and resets the app instance id.
         * Platform: Android/iOS
         */

      }, {
        key: "reset",
        value: function reset() {
          return new Promise(function (resolve, _reject) {
            return resolve;
          });
        }
        /**
         * Logs an app event.
         * @param options - name: unique name of the event
         *                  params: the map of event parameters.
         * Platform: Web/Android/iOS
         */

      }, {
        key: "logEvent",
        value: function logEvent(options) {
          var _this5 = this;

          return new Promise( /*#__PURE__*/function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(resolve, reject) {
              var _ref7, name, params;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return _this5.ready;

                    case 2:
                      if (_this5.analyticsRef) {
                        _context4.next = 5;
                        break;
                      }

                      reject(_this5.analytics_missing_mssg);
                      return _context4.abrupt("return");

                    case 5:
                      _ref7 = options || {
                        name: undefined,
                        params: undefined
                      }, name = _ref7.name, params = _ref7.params;

                      if (name) {
                        _context4.next = 9;
                        break;
                      }

                      reject("name property is missing");
                      return _context4.abrupt("return");

                    case 9:
                      _this5.analyticsRef.logEvent(name, params);

                      resolve();

                    case 11:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));

            return function (_x7, _x8) {
              return _ref6.apply(this, arguments);
            };
          }());
        }
        /**
         * Sets whether analytics collection is enabled for this app on this device.
         * @param options - enabled: boolean true/false to enable/disable logging
         * Platform: Web/Android/iOS
         */

      }, {
        key: "setCollectionEnabled",
        value: function setCollectionEnabled(options) {
          var _this6 = this;

          return new Promise( /*#__PURE__*/function () {
            var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(resolve, reject) {
              var _ref9, enabled;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return _this6.ready;

                    case 2:
                      if (_this6.analyticsRef) {
                        _context5.next = 5;
                        break;
                      }

                      reject(_this6.analytics_missing_mssg);
                      return _context5.abrupt("return");

                    case 5:
                      _ref9 = options || {
                        enabled: false
                      }, enabled = _ref9.enabled;

                      _this6.analyticsRef.setAnalyticsCollectionEnabled(enabled);

                      resolve();

                    case 8:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));

            return function (_x9, _x10) {
              return _ref8.apply(this, arguments);
            };
          }());
        }
        /**
         * Sets the duration of inactivity that terminates the current session.
         * @param options - duration: duration of inactivity
         * Platform: Android/iOS
         */

      }, {
        key: "setSessionTimeoutDuration",
        value: function setSessionTimeoutDuration(_options) {
          var _this7 = this;

          return new Promise(function (_resolve, reject) {
            reject(_this7.not_supported_mssg);
          });
        }
        /**
         * Returns analytics reference object
         */

      }, {
        key: "enable",
        value: function enable() {
          var _this8 = this;

          return new Promise( /*#__PURE__*/function () {
            var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(resolve, reject) {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return _this8.ready;

                    case 2:
                      if (_this8.analyticsRef) {
                        _context6.next = 5;
                        break;
                      }

                      reject(_this8.analytics_missing_mssg);
                      return _context6.abrupt("return");

                    case 5:
                      _this8.analyticsRef.setAnalyticsCollectionEnabled(true);

                      resolve();

                    case 7:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));

            return function (_x11, _x12) {
              return _ref10.apply(this, arguments);
            };
          }());
        }
      }, {
        key: "disable",
        value: function disable() {
          var _this9 = this;

          return new Promise( /*#__PURE__*/function () {
            var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(resolve, reject) {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return _this9.ready;

                    case 2:
                      if (_this9.analyticsRef) {
                        _context7.next = 5;
                        break;
                      }

                      reject(_this9.analytics_missing_mssg);
                      return _context7.abrupt("return");

                    case 5:
                      _this9.analyticsRef.setAnalyticsCollectionEnabled(false);

                      resolve();

                    case 7:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));

            return function (_x13, _x14) {
              return _ref11.apply(this, arguments);
            };
          }());
        }
        /**
         * Ready resolver to check and load firebase analytics
         */

      }, {
        key: "configure",
        value: function () {
          var _configure = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this10 = this;

            var interval;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.prev = 0;
                    _context8.next = 3;
                    return this.loadScripts();

                  case 3:
                    if (window.firebase && window.firebase.analytics && this.hasFirebaseInitialized()) {
                      this.analyticsRef = window.firebase.analytics();
                    }

                    _context8.next = 9;
                    break;

                  case 6:
                    _context8.prev = 6;
                    _context8.t0 = _context8["catch"](0);
                    throw _context8.t0;

                  case 9:
                    interval = setInterval(function () {
                      if (!window.firebase) {
                        return;
                      }

                      clearInterval(interval);

                      _this10.readyResolver();
                    }, 50);

                  case 10:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this, [[0, 6]]);
          }));

          function configure() {
            return _configure.apply(this, arguments);
          }

          return configure;
        }()
        /**
         * Check for existing loaded script and load new scripts
         */

      }, {
        key: "loadScripts",
        value: function loadScripts() {
          var _this11 = this;

          var firebaseAppScript = this.scripts[0];
          var firebaseAnalyticsScript = this.scripts[1];
          return new Promise( /*#__PURE__*/function () {
            var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(resolve, _reject) {
              var scripts;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      scripts = _this11.scripts.map(function (script) {
                        return script.key;
                      });

                      if (!(document.getElementById(scripts[0]) && document.getElementById(scripts[1]))) {
                        _context9.next = 3;
                        break;
                      }

                      return _context9.abrupt("return", resolve(null));

                    case 3:
                      _context9.next = 5;
                      return _this11.loadScript(firebaseAppScript.key, firebaseAppScript.src);

                    case 5:
                      _context9.next = 7;
                      return _this11.loadScript(firebaseAnalyticsScript.key, firebaseAnalyticsScript.src);

                    case 7:
                      resolve(null);

                    case 8:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9);
            }));

            return function (_x15, _x16) {
              return _ref12.apply(this, arguments);
            };
          }());
        }
        /**
         * Loaded single script with provided id and source
         * @param id - unique identifier of the script
         * @param src - source of the script
         */

      }, {
        key: "loadScript",
        value: function loadScript(id, src) {
          return new Promise(function (resolve, reject) {
            var file = document.createElement("script");
            file.type = "text/javascript";
            file.src = src;
            file.id = id;
            file.onload = resolve;
            file.onerror = reject;
            document.querySelector("head").appendChild(file);
          });
        }
        /**
         * Returns true/false if firebase object reference exists inside window
         */

      }, {
        key: "hasFirebaseInitialized",
        value: function hasFirebaseInitialized() {
          if (!window.firebase) {
            return false;
          }

          var firebaseApps = window.firebase.apps;

          if (firebaseApps && firebaseApps.length === 0) {
            return false;
          }

          return true;
        }
      }, {
        key: "remoteConfig",
        get: function get() {
          return this.analyticsRef;
        }
      }]);

      return FirebaseAnalyticsWeb;
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
          var _getPhoto = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(options) {
            var _this12 = this;

            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    return _context12.abrupt("return", new Promise( /*#__PURE__*/function () {
                      var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(resolve, reject) {
                        var cameraModal;
                        return regeneratorRuntime.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                if (!options.webUseInput) {
                                  _context11.next = 4;
                                  break;
                                }

                                _this12.fileInputExperience(options, resolve);

                                _context11.next = 21;
                                break;

                              case 4:
                                if (!customElements.get('pwa-camera-modal')) {
                                  _context11.next = 19;
                                  break;
                                }

                                cameraModal = document.createElement('pwa-camera-modal');
                                document.body.appendChild(cameraModal);
                                _context11.prev = 7;
                                _context11.next = 10;
                                return cameraModal.componentOnReady();

                              case 10:
                                cameraModal.addEventListener('onPhoto', /*#__PURE__*/function () {
                                  var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(e) {
                                    var photo;
                                    return regeneratorRuntime.wrap(function _callee10$(_context10) {
                                      while (1) {
                                        switch (_context10.prev = _context10.next) {
                                          case 0:
                                            photo = e.detail;

                                            if (!(photo === null)) {
                                              _context10.next = 5;
                                              break;
                                            }

                                            reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["CapacitorException"]('User cancelled photos app'));
                                            _context10.next = 14;
                                            break;

                                          case 5:
                                            if (!(photo instanceof Error)) {
                                              _context10.next = 9;
                                              break;
                                            }

                                            reject(photo);
                                            _context10.next = 14;
                                            break;

                                          case 9:
                                            _context10.t0 = resolve;
                                            _context10.next = 12;
                                            return _this12._getCameraPhoto(photo, options);

                                          case 12:
                                            _context10.t1 = _context10.sent;
                                            (0, _context10.t0)(_context10.t1);

                                          case 14:
                                            cameraModal.dismiss();
                                            document.body.removeChild(cameraModal);

                                          case 16:
                                          case "end":
                                            return _context10.stop();
                                        }
                                      }
                                    }, _callee10);
                                  }));

                                  return function (_x20) {
                                    return _ref14.apply(this, arguments);
                                  };
                                }());
                                cameraModal.present();
                                _context11.next = 17;
                                break;

                              case 14:
                                _context11.prev = 14;
                                _context11.t0 = _context11["catch"](7);

                                _this12.fileInputExperience(options, resolve);

                              case 17:
                                _context11.next = 21;
                                break;

                              case 19:
                                console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements.");

                                _this12.fileInputExperience(options, resolve);

                              case 21:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11, null, [[7, 14]]);
                      }));

                      return function (_x18, _x19) {
                        return _ref13.apply(this, arguments);
                      };
                    }()));

                  case 1:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12);
          }));

          function getPhoto(_x17) {
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
          var _checkPermissions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var permission;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    if (!(typeof navigator === 'undefined' || !navigator.permissions)) {
                      _context13.next = 2;
                      break;
                    }

                    throw this.unavailable('Permissions API not available in this browser');

                  case 2:
                    _context13.prev = 2;
                    _context13.next = 5;
                    return window.navigator.permissions.query({
                      name: 'camera'
                    });

                  case 5:
                    permission = _context13.sent;
                    return _context13.abrupt("return", {
                      camera: permission.state,
                      photos: 'granted'
                    });

                  case 9:
                    _context13.prev = 9;
                    _context13.t0 = _context13["catch"](2);
                    throw this.unavailable('Camera permissions are not available in this browser');

                  case 12:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this, [[2, 9]]);
          }));

          function checkPermissions() {
            return _checkPermissions.apply(this, arguments);
          }

          return checkPermissions;
        }()
      }, {
        key: "requestPermissions",
        value: function () {
          var _requestPermissions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    throw this.unimplemented('Not implemented on web.');

                  case 1:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
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
          var _show = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(_options) {
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    return _context15.abrupt("return", undefined);

                  case 1:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15);
          }));

          function show(_x21) {
            return _show.apply(this, arguments);
          }

          return show;
        }()
      }, {
        key: "hide",
        value: function () {
          var _hide = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(_options) {
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    return _context16.abrupt("return", undefined);

                  case 1:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16);
          }));

          function hide(_x22) {
            return _hide.apply(this, arguments);
          }

          return hide;
        }()
      }]);

      return SplashScreenWeb;
    }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]); //# sourceMappingURL=web.js.map

    /***/

  }
}]);
//# sourceMappingURL=web-es5.js.map