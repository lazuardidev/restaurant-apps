const assert = require("assert");

Feature("Unlike Favorite Restaurant");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked menu restaurant", ({ I }) => {
  I.dontSeeElement("resto-item");
});

Scenario("unliking one restaurant", async ({ I }) => {
  I.dontSeeElement("resto-item");
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

  I.seeElement("resto-item");
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement("#likeButton");
  I.click("#likeButton");
  I.amOnPage("/#/favorite");
  I.dontSeeElement("resto-item");
});
