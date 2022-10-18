beforeAll(async () => {
  await device.launchApp({
    permissions: { notifications: 'YES' },
    launchArgs: {
      detoxPrintBusyIdleResources: 'YES',
      detoxURLBlacklistRegex: '(".*localhost:8081/onchange")',
    },
    
  });

  // Disable wait for logging api call
  await device.setURLBlacklist(['.*logging-ios-uat.shongco.net/Logging/v1/appmobilelog', '.*localhost:8081/onchange']);
});
