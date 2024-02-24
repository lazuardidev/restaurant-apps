import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import FavoriteRestoIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
    afterEach(async () => {
        (await FavoriteRestoIdb.getAllRestaurants()).forEach(
            async (restaurant) => {
                await FavoriteRestoIdb.deleteRestaurant(restaurant.id);
            }
        );
    });
    itActsAsFavoriteRestaurantModel(FavoriteRestoIdb);
});
