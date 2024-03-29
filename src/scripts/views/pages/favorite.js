import FavoriteRestoIdb from "../../data/favorite-restaurant-idb";
import "../../components/resto-list/resto-list";

import { createElementlist } from "../templates/template-creator";

const Favorite = {
  async render() {
    return `
    <div class="content">
        <hero-banner class="hero"></hero-banner>
        <div class="container" id='main-content'>
            <h2 class="section-title mt-60">Favorite Restaurants </h2>
            <div class="restaurant-list" id="restaurant-list">
                <resto-list></resto-list>
            </div>
        </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllRestaurants();
    if (restaurants.length > 0) {
      createElementlist("resto-list", restaurants);
    } else {
      this.renderEmpty();
    }
  },

  renderEmpty() {
    const restaurantContainer = document.querySelector("resto-list");
    restaurantContainer.innerHTML = `
      <div class="empty-restaurant-list">
        <p>Not Found</p>
      </div>
    `;
  },
};

export default Favorite;
