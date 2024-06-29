import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class NavBar extends BasePage {
  readonly page: Page;

  readonly landingLogo: Locator;
  readonly homeNavButton: Locator;
  readonly productNavButton: Locator;
  readonly cartNavButton: Locator;
  readonly loginNavButton: Locator;
  readonly testCasesNavButton: Locator;
  readonly apiTestNavButton: Locator;
  readonly videoNavButton: Locator;
  readonly contactNavButton: Locator;

  constructor(page: Page) {
    super();
    this.page = page;

    this.landingLogo = page.getByAltText("Website for automation practice");
    this.homeNavButton = page.getByRole("link", { name: " Home" });
    this.productNavButton = page.getByRole("link", { name: " Products" });
    this.cartNavButton = page.getByRole("link", { name: " Cart" });
    this.loginNavButton = page.getByRole("link", { name: " Signup / Login" });
    this.testCasesNavButton = page.getByRole("link", { name: " Test Cases" });
    this.apiTestNavButton = page.getByRole("link", { name: " API Testing" });
    this.videoNavButton = page.getByRole("link", { name: " Video Tutorials" });
    this.contactNavButton = page.getByRole("link", { name: " Contact us" });
  }
}
