import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:4000';

class Api {

    static token;

    static async request(endpoint, data = {}, method = 'get'){
        console.debug("API call:", endpoint, data, method);
        
        const url = `${BASE_URL}/${endpoint}`;
        const headers = {Authorization: `Bearer ${Api.token}`};
        const params = (method === 'get') ? data : {};
        const instance = axios.create({withCredentials: true})
        
        try {
            return (await instance({url, method, data, params, headers})).data;
        } catch(err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async authRequest(endpoint, data){
        console.debug("API call:", endpoint, data);
        const url = `${BASE_URL}/${endpoint}`;

        try {
            const res = await axios.post(url, data, {withCredentials: true})
            return res
        } catch (err) {
            console.error("API Error:", err.response);
            return err.response.data
        }
    }
    

    static async setToken(token) {
        this.token = token;

    }

    static async getCurrentUser(username){
        let res = await this.request(`user/${username}`)
        return res.user
    }

    /* Items */
    /***************************************************************************/
    static async getItems(){
        let res = await this.request(`items/`)
        return {data: res.items}
    }

    static async addItem(data) {
        let res = await this.request(`items/register`, data, 'post')
        return res
    }

    static async getItemById(id) {
        let res = await this.request(`items/${id}`);
        return res
    }


        /* AUTH Calls */
    /* ********************************************************************** */

    static async registerUser(data){
        let res = await this.request(`auth/register`, data, 'post')
        return res.token
    }
    static async loginUser(data){
        let res = await this.authRequest(`auth/login`, data)
        return res
       
    }
    static async logOutUser(data){
        /* Receaving userId  from redux sent call to logOut with that id */
        let res = await this.authRequest(`auth/logout`, {id: data})
        return res
    }
    static async renewToken(){
        
        let res = await this.request(`auth/token`)
        return res
    }
    /* ********************************************************************** */

    /* Orders */

    static async createOrder(data){
        const res = await this.request(`order/register`, data, 'post')
        return res
    }

    static async getBuyOrders(id){
        const res = await this.request(`order/buyorders/${id}`)
        return res
    }
}

export default Api;