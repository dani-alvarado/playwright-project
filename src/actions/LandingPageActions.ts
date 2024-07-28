import { Page } from "@playwright/test";
import { LandingPage } from "../pages";

export class LandingPageActions {
  readonly landingPage: LandingPage;

  constructor(page: Page) {
    this.landingPage = new LandingPage(page);
  }

  public async visitLandingPage() {
    await this.landingPage.page.goto("https://automationexercise.com/");
  }
}
