import { Locator, expect } from "@playwright/test";
import { Timeouts } from "./Timeouts";

export class CommonActions {
  public async verifyElementVisibility(locator: Locator) {
    await expect(locator).toBeVisible();
  }

  public async clickElement(locator: Locator) {
    await locator.click();
  }

  public async rightClickElement(locator: Locator) {
    await locator.click({ button: "right" });
  }

  public async typeTextInElement(text: string, locator: Locator) {
    await locator.pressSequentially(text);
  }

  public async fillTextElement(text: string, locator: Locator) {
    await locator.fill(text);
  }
}
