
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-sign-in-with-apple.SignInWithApple",
          "file": "plugins/cordova-plugin-sign-in-with-apple/www/sign-in-with-apple.js",
          "pluginId": "cordova-plugin-sign-in-with-apple",
        "clobbers": [
          "cordova.plugins.SignInWithApple"
        ]
        },
      {
          "id": "cordova-plugin-firebase-analytics.FirebaseAnalytics",
          "file": "plugins/cordova-plugin-firebase-analytics/www/FirebaseAnalytics.js",
          "pluginId": "cordova-plugin-firebase-analytics",
        "merges": [
          "cordova.plugins.firebase.analytics"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-firebase-analytics": "6.0.1",
      "cordova-plugin-sign-in-with-apple": "0.1.2"
    };
    // BOTTOM OF METADATA
    });
    