import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../hooks/PageFixture";
import { NavBarActions } from "../../actions";
import { NavBarButtons } from "../../common/enum";

setDefaultTimeout(60 * 1000 * 2); //2min

let navBarActions: NavBarActions;

Given("User clicks on sign in button", async () => {
  navBarActions = new NavBarActions(pageFixture.page);
  await navBarActions.clickNavBarButton(NavBarButtons.LOGIN);
});
