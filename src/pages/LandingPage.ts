import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LandingPage extends BasePage {
  readonly page: Page;

  constructor(page: Page) {
    super();
    this.page = page;
  }
}
