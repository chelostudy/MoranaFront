import axios from "axios";

export default class PostService {
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
    static async getPrices(){
        const response = await axios.post('https://httpbin.org/post', {
            firstName: 'Fred',
            lastName: 'Flintstone',
            orders: [1, 2, 3],
            photo: document.querySelector('#fileInput').files
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
    }
)
}}