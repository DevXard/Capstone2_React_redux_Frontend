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

    /*
    Request specificly for AUTH 

     */
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
    
    /* Set token to class API */
    static async setToken(token) {
        this.token = token;

    }
    /* Get User by username */
    static async getCurrentUser(username){
        let res = await this.request(`user/${username}`)
        return res.user
    }

    /* Get User By Id */
    static async getUserById(id) {
        
        let res = await this.request(`user/useritems/${id}`)
        return res
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

    static async getItemByName(name) {
        let res = await this.request(`items/name/${name}`)
        return res
    }


        /* AUTH Calls */
    /* ********************************************************************** */

    static async registerUser(data){
        let res = await this.authRequest(`auth/register`, data, 'post')
        return res
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

    static async getSellOrders(id) {
        const res = await this.request(`order/sellorders/${id}`)
        return res
    }

    /* Maps */
    /********************************************************************** */

    /* 
        This route get lng, lat coordinates for free
        it is used to avoid googles paid gecoding api
    */
    static async getAddressLocations(address){
        
        const res = await axios.get(`https://nominatim.openstreetmap.org/search?${address}&format=geojson`)
        
        return res.data
    }

    static async getItemAddress(id){
        const res = await this.request(`address/item/${id}`)

        return res
    }
    static async getClosesUsers(data){
        
        const res = await this.request(`address/rad`, data, "post")
        return res
    }
}

export default Api;