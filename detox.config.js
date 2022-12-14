module.exports = {
  "testRunner": "jest",
  "runnerConfig": 'e2e/config.json',
  "specs": 'e2e/tests',
  "behavior": {
    "init": {
      "exposeGlobals": process.env.DETOX_EXPOSE_GLOBALS === '0' ? false : true,
    },
  },
  "apps": {
    "ios.debug": {
      "type": "ios.app",
      "binaryPath": "./ios/debug/todo.app",
    },
    "ios.release": {
      "type": "ios.app",
      "binaryPath": "./ios/release/todo.app",
    },
    "android.release": {
      "type": "android.apk",
      "binaryPath": "../demo-react-native/android/app/build/outputs/apk/release/app-release.apk",
    }
  },
  "devices": {
    "simulator": {
      "type": "ios.simulator",
      "device": {
        "type": "iPhone 14",
        "os": "iOS 16.0"
      }
    },
    "emulator": {
      "type": "android.emulator",
      "device": {
        "avdName": "Pixel_API_28"
      },
      utilBinaryPaths: [
        "./cache/test-butler-app.apk"
      ],
    },
    "genymotion.emulator.uuid": {
      "type": "android.genycloud",
      "device": {
        "recipeUUID": "a50a71d6-da90-4c67-bdfa-5b602b0bbd15"
      },
      utilBinaryPaths: [
        "./cache/test-butler-app.apk"
      ],
    },
    "genymotion.emulator.name": {
      "type": "android.genycloud",
      "device": {
        "recipeName": "Detox_Pixel_API_29"
      },
      utilBinaryPaths: [
        "./cache/test-butler-app.apk"
      ],
    }
  },
  "configurations": {
    "ios.sim.debug": {
      "device": "simulator",
      "app": "ios.debug",
      "artifacts": {
        // Do not use in your projects unless you really need custom paths.
        // This section serves just as an example that you can locally override
        // some artifacts, behavior and session settings
        "pathBuilder": "./e2e/detox.pathbuilder.ios.js"
      }
    },
    "ios.sim.release": {
      "device": "simulator",
      "app": "ios.release",
      "artifacts": {
        // Do not use in your projects unless you really need custom paths.
        // This section serves just as an example that you can locally override
        // some artifacts, behavior and session settings
        "pathBuilder": "./e2e/detox.pathbuilder.ios.js"
      }
    },
    "android.emu.release": {
      "device": "emulator",
      "app": "android.release",
      "artifacts": {
        // Do not use in your projects unless you really need custom paths.
        // This section serves just as an example that you can locally override
        // some artifacts, behavior and session settings
        "pathBuilder": "./e2e/detox.pathbuilder.android.js"
      }
    },
    "android.genycloud.release": {
      "device": "genymotion.emulator.uuid",
      "app": "android.release",
      "artifacts": {
        // Do not use in your projects unless you really need custom paths.
        // This section serves just as an example that you can locally override
        // some artifacts, behavior and session settings
        "pathBuilder": "./e2e/detox.pathbuilder.android.js"
      }
    }
  }
};
