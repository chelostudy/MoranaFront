import axios from "axios";

export default class IndexForOrders {
    static async getAll(limit=10, page = 1){

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit : limit,
                _page : page,
            }
        })
        return response
    }
    static async getById(id){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
        return response
    }
    static async getCommentsByPostId(id){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        return response;
    }


    static async login(email, password){
        const response = await axios.post('http://45.12.239.20:5000/api/login', {
            email : email,
            password: password
        }, {
            headers:
                {
                    'Content-Type': 'application/json'
                }
        })
        return response;
    }
}