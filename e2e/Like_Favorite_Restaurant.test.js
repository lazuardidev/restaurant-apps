const assert = require("assert");

Feature("Liking Favorite Restaurant");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty favorite restaurant", ({ I }) => {
  I.see("Not Found", ".empty-restaurant-list");
});

Scenario("liking one restaurant", async ({ I }) => {
  I.see("Not Found", ".empty-restaurant-list");
  I.amOnPage("/");
  I.scrollTo("resto-list");
  I.wait(1);
  I.seeElement("resto-item");

  const firstRestaurant = locate("resto-item").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);
  I.seeElement("#likeButton");
  I.click("#likeButton");
  I.amOnPage("/#/favorite");
  I.seeElement("resto-item");

  const likedRestaurants = await I.grabTextFrom(
    locate("resto-item").first()
  );
  assert.strictEqual(firstRestaurantTitle, likedRestaurants);
});
