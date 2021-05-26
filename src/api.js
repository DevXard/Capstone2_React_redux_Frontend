import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:4000';

class Api {

    static token;

    static async request(endpoint, data = {}, method = 'get'){
        console.debug("API call:", endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;
        const headers = {Authorization: `Bearer ${Api.token}`};
        const params = (method === 'get') ? data : {};
        try {
            return (await axios({url, method, data, params, headers})).data;
        } catch(err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async getCurrentUser(username){
        let res = await this.request(`users/${username}`)
        return res.user
    }

    static async getItems(){
        let res = await this.request(`items/`)
        return {data: res.items}
    }
}

export default Api;