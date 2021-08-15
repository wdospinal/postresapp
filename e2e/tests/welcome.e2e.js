/* eslint-disable no-undef */
describe("Postres", () => {
  beforeAll(async () => {
    await device.launchApp({
      permissions: {
        location: "inuse",
      },
    });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have main screen", async () => {
    await waitFor(element(by.id("createDessert")))
      .toBeVisible()
      .withTimeout(5000);
  });
});
