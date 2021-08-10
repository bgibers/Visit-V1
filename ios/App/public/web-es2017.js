(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web"],{

/***/ "./node_modules/@capacitor-community/firebase-analytics/dist/esm/web.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@capacitor-community/firebase-analytics/dist/esm/web.js ***!
  \******************************************************************************/
/*! exports provided: FirebaseAnalyticsWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseAnalyticsWeb", function() { return FirebaseAnalyticsWeb; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/index.js");

class FirebaseAnalyticsWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    constructor() {
        super();
        this.not_supported_mssg = "This method is not supported";
        this.options_missing_mssg = "Firebase options are missing";
        this.duplicate_app_mssg = "Firebase app already exists";
        this.analytics_missing_mssg = "Firebase analytics is not initialized. Make sure initializeFirebase() is called once";
        this.scripts = [
            {
                key: "firebase-app",
                src: "https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js",
            },
            {
                key: "firebase-ac",
                src: "https://www.gstatic.com/firebasejs/8.2.3/firebase-analytics.js",
            },
        ];
        this.ready = new Promise((resolve) => (this.readyResolver = resolve));
        this.configure();
    }
    /**
     * Configure and Initialize FirebaseApp if not present
     * @param options - web app's Firebase configuration
     * @returns firebase analytics object reference
     * Platform: Web
     */
    initializeFirebase(options) {
        return new Promise(async (resolve, reject) => {
            await this.ready;
            if (this.hasFirebaseInitialized()) {
                reject(this.duplicate_app_mssg);
                return;
            }
            if (!options) {
                reject(this.options_missing_mssg);
                return;
            }
            const app = window.firebase.initializeApp(options);
            this.analyticsRef = app.analytics();
            resolve(this.analyticsRef);
        });
    }
    /**
     * Sets the user ID property.
     * @param options - userId: unique identifier of the user to log
     * Platform: Web/Android/iOS
     */
    setUserId(options) {
        return new Promise(async (resolve, reject) => {
            await this.ready;
            if (!this.analyticsRef) {
                reject(this.analytics_missing_mssg);
                return;
            }
            const { userId } = options || { userId: undefined };
            if (!userId) {
                reject("userId property is missing");
                return;
            }
            this.analyticsRef.setUserId(userId);
            resolve();
        });
    }
    /**
     * Sets a user property to a given value.
     * @param options - name: The name of the user property to set.
     *                  value: The value of the user property.
     * Platform: Web/Android/iOS
     */
    setUserProperty(options) {
        return new Promise(async (resolve, reject) => {
            await this.ready;
            if (!this.analyticsRef) {
                reject(this.analytics_missing_mssg);
                return;
            }
            const { name, value } = options || { name: undefined, value: undefined };
            if (!name) {
                reject("name property is missing");
                return;
            }
            if (!value) {
                reject("value property is missing");
                return;
            }
            let property = {};
            property[name] = value;
            this.analyticsRef.setUserProperties(property);
            resolve();
        });
    }
    /**
     * Retrieves the app instance id from the service.
     * @returns - instanceId: current instance if of the app
     * Platform: Web/Android/iOS
     */
    getAppInstanceId() {
        return new Promise((resolve, _reject) => resolve);
    }
    /**
     * Sets the current screen name, which specifies the current visual context in your app.
     * @param options - screenName: the activity to which the screen name and class name apply.
     *                  nameOverride: the name of the current screen. Set to null to clear the current screen name.
     * Platform: Android/iOS
     */
    setScreenName(_options) {
        return new Promise((resolve, _reject) => resolve);
    }
    /**
     * Clears all analytics data for this app from the device and resets the app instance id.
     * Platform: Android/iOS
     */
    reset() {
        return new Promise((resolve, _reject) => resolve);
    }
    /**
     * Logs an app event.
     * @param options - name: unique name of the event
     *                  params: the map of event parameters.
     * Platform: Web/Android/iOS
     */
    logEvent(options) {
        return new Promise(async (resolve, reject) => {
            await this.ready;
            if (!this.analyticsRef) {
                reject(this.analytics_missing_mssg);
                return;
            }
            const { name, params } = options || {
                name: undefined,
                params: undefined,
            };
            if (!name) {
                reject("name property is missing");
                return;
            }
            this.analyticsRef.logEvent(name, params);
            resolve();
        });
    }
    /**
     * Sets whether analytics collection is enabled for this app on this device.
     * @param options - enabled: boolean true/false to enable/disable logging
     * Platform: Web/Android/iOS
     */
    setCollectionEnabled(options) {
        return new Promise(async (resolve, reject) => {
            await this.ready;
            if (!this.analyticsRef) {
                reject(this.analytics_missing_mssg);
                return;
            }
            const { enabled } = options || { enabled: false };
            this.analyticsRef.setAnalyticsCollectionEnabled(enabled);
            resolve();
        });
    }
    /**
     * Sets the duration of inactivity that terminates the current session.
     * @param options - duration: duration of inactivity
     * Platform: Android/iOS
     */
    setSessionTimeoutDuration(_options) {
        return new Promise((_resolve, reject) => {
            reject(this.not_supported_mssg);
        });
    }
    /**
     * Returns analytics reference object
     */
    get remoteConfig() {
        return this.analyticsRef;
    }
    enable() {
        return new Promise(async (resolve, reject) => {
            await this.ready;
            if (!this.analyticsRef) {
                reject(this.analytics_missing_mssg);
                return;
            }
            this.analyticsRef.setAnalyticsCollectionEnabled(true);
            resolve();
        });
    }
    disable() {
        return new Promise(async (resolve, reject) => {
            await this.ready;
            if (!this.analyticsRef) {
                reject(this.analytics_missing_mssg);
                return;
            }
            this.analyticsRef.setAnalyticsCollectionEnabled(false);
            resolve();
        });
    }
    /**
     * Ready resolver to check and load firebase analytics
     */
    async configure() {
        try {
            await this.loadScripts();
            if (window.firebase &&
                window.firebase.analytics &&
                this.hasFirebaseInitialized()) {
                this.analyticsRef = window.firebase.analytics();
            }
        }
        catch (error) {
            throw error;
        }
        const interval = setInterval(() => {
            if (!window.firebase) {
                return;
            }
            clearInterval(interval);
            this.readyResolver();
        }, 50);
    }
    /**
     * Check for existing loaded script and load new scripts
     */
    loadScripts() {
        const firebaseAppScript = this.scripts[0];
        const firebaseAnalyticsScript = this.scripts[1];
        return new Promise(async (resolve, _reject) => {
            const scripts = this.scripts.map((script) => script.key);
            if (document.getElementById(scripts[0]) &&
                document.getElementById(scripts[1])) {
                return resolve(null);
            }
            await this.loadScript(firebaseAppScript.key, firebaseAppScript.src);
            await this.loadScript(firebaseAnalyticsScript.key, firebaseAnalyticsScript.src);
            resolve(null);
        });
    }
    /**
     * Loaded single script with provided id and source
     * @param id - unique identifier of the script
     * @param src - source of the script
     */
    loadScript(id, src) {
        return new Promise((resolve, reject) => {
            const file = document.createElement("script");
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
    hasFirebaseInitialized() {
        if (!window.firebase) {
            return false;
        }
        const firebaseApps = window.firebase.apps;
        if (firebaseApps && firebaseApps.length === 0) {
            return false;
        }
        return true;
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

/***/ })

}]);
//# sourceMappingURL=web-es2017.js.map