import { Locator } from "@playwright/test";
import { Timeouts } from "./Timeouts";

export class CommonActions {
  public async verifyElement(locator: Locator) {
    await locator.waitFor({
      state: "visible",
      timeout: Timeouts.TIMEOUT_3_SECONDS,
    });
  }

  public async clickElement(locator: Locator) {
    await locator.click();
  }

  public async typeTextInElement(text: string, locator: Locator) {
    await locator.pressSequentially;
  }
}
