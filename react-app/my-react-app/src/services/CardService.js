import axios from 'axios'

const PRODUCT_REST_API_URL = 'http://localhost:8082/rest/card/get';

class CardService{
    getAllProduct(){
        return axios.get(PRODUCT_REST_API_URL);
    }
}
 
export default new CardService();