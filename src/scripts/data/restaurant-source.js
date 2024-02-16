import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
    static async getRestaurants() {
        try {
            const response = await fetch(API_ENDPOINT.LIST_RESTO);
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.log(error);
            return error
        }
    }
    
    static async getRestaurantsDetail(id) {
        const response = await fetch(API_ENDPOINT.DETAIL_RESTO(id));
        const responseJson = await response.json();
        return responseJson;
    }
}
export default RestaurantSource;
