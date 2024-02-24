/* eslint-disable import/prefer-default-export */
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestoIdb from '../../src/scripts/data/favorite-restaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (resto) => {
    await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        resto,
        favoriteRestaurants: FavoriteRestoIdb
    });
};

export { createLikeButtonPresenterWithRestaurant };
