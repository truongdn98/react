import axiosClient from './axiosClient'
import queryString from 'query-string'
const productApi = {
    getAll: (params) => {
    
    // const url = 'https://60d72de9307c300017a5f6e9.mockapi.io/products';
    const url = '/products';
    return axiosClient.get(url, {params});
    },
    get: (id) => {
        const url = `/products/${id}`;
        return axiosClient.get(url);
        }
    
}

    export default productApi;