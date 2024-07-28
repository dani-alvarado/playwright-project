import { Locator, Page } from "@playwright/test";
import { NavBar } from "../pages";
import { BasePageActions } from "./BasePageActions";
import { NavBarButtons } from "../common/enum";
import { CommonActions } from "../common";

export class NavBarActions extends BasePageActions {
  readonly navBar: NavBar;
  private buttonMap = new Map<NavBarButtons, Locator>();
  private commonActions = new CommonActions();

  constructor(page: Page) {
    super();
    this.navBar = new NavBar(page);
    this.setButtonMap();
  }

  public async clickNavBarButton(button: NavBarButtons) {
    let navButton = this.buttonMap.get(button);
    if (navButton) {
      await this.commonActions.clickElement(navButton);
    }
  }

  private setButtonMap() {
    this.buttonMap.set(NavBarButtons.HOME, this.navBar.homeNavButton);
    this.buttonMap.set(NavBarButtons.PRODUCTS, this.navBar.productNavButton);
    this.buttonMap.set(NavBarButtons.CART, this.navBar.cartNavButton);
    this.buttonMap.set(NavBarButtons.LOGIN, this.navBar.loginNavButton);
    this.buttonMap.set(NavBarButtons.TEST_CASES, this.navBar.loginNavButton);
    this.buttonMap.set(NavBarButtons.API_TESTING, this.navBar.apiTestNavButton);
    this.buttonMap.set(
      NavBarButtons.VIDEO_TUTORIALS,
      this.navBar.videoNavButton
    );
    this.buttonMap.set(NavBarButtons.CONTACT, this.navBar.contactNavButton);
  }
}
