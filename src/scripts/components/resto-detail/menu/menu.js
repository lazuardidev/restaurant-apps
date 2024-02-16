import "./menu-list";

class Menu extends HTMLElement {
  set menu(menu) {
    this._menu = menu;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div>
            <h2 class="section-title">Foods</h2>
            <div id="foods" class="tabcontent" style="display: block;">
                <menu-list name="foods"></menu-list>
            </div>
            <h2 class="section-title">Drinks</h2>
            <div id="drinks" class="tabcontent" style="display: block;">
                <menu-list name="drinks"></menu-list>
            </div>
        </div>
        `;
    const menuFood = document.querySelector(`menu-list[name="foods"]`);
    const menuDrinks = document.querySelector(`menu-list[name="drinks"]`);

    const menusArray = Object.keys(this._menu).map((key) => {
      const menu = {
        name: key,
        menu: this._menu[key],
      };
      return menu;
    });

    Object.keys(this._menu).forEach((key, menu) => {
      if (key === "foods") {
        menuFood.menuList = menusArray[menu];
      } else {
        menuDrinks.menuList = menusArray[menu];
      }
    });
  }
}
customElements.define("menu-elements", Menu);
