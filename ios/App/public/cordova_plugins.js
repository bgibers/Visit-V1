
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-sign-in-with-apple.SignInWithApple",
          "file": "plugins/cordova-plugin-sign-in-with-apple/www/sign-in-with-apple.js",
          "pluginId": "cordova-plugin-sign-in-with-apple",
        "clobbers": [
          "cordova.plugins.SignInWithApple"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-sign-in-with-apple": "0.1.2"
    };
    // BOTTOM OF METADATA
    });
    