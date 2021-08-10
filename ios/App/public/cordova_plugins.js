
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
          "id": "cordova-plugin-facebook4.FacebookConnectPlugin",
          "file": "plugins/cordova-plugin-facebook4/www/facebook-native.js",
          "pluginId": "cordova-plugin-facebook4",
        "clobbers": [
          "facebookConnectPlugin"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-facebook4": "6.4.0",
      "cordova-plugin-sign-in-with-apple": "0.1.2"
    };
    // BOTTOM OF METADATA
    });
    