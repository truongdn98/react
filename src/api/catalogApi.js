import axiosClient from './axiosClient'
import queryString from 'query-string'
const catalogApi = {
    getAll: (params) => {
    const url = '/catalog';
    return axiosClient.get(url, {params});
    },
}

    export default catalogApi;