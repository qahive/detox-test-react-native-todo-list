### Test Setup
- Install library `npm install`

### Update app path
Under detox.config.js update 
```
"ios.debug": {
  "type": "ios.app",
  "binaryPath": "./ios/debug/todo.app",
},
```

### Update simulator
Under detox.config.js update simulator name and os version 
```
"simulator": {
  "type": "ios.simulator",
  "device": {
    "type": "iPhone 14",
    "os": "iOS 16.0"
  }
},

```

### Run test
`npm run test:ios-debug`
 
**Options**

--reuse Reuse current application state without clean up data

