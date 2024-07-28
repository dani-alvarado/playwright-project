import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../hooks/PageFixture";
import { LandingPageActions } from "../../actions";

setDefaultTimeout(60 * 1000 * 2); //2min

let landingPageActions: LandingPageActions;

Given("User navigates to the Automation Exercise page", async function () {
  landingPageActions = new LandingPageActions(pageFixture.page);
  await landingPageActions.visitLandingPage();
});
