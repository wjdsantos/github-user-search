import axios, { Method } from 'axios';

type RequestParams = {
    method?: Method;
    url: string;
    data?: object;
    params?: object;
}

const BASE_URL_API = 'https://api.github.com';

export const makeRequestApi = ({ method = 'GET', url, data, params }:RequestParams) => {
    return axios({
        method,
        url: `${BASE_URL_API}${url}`,
        data,
        params
    });
}

export const makeRequest = ({ method = 'GET', url, data, params }:RequestParams) => {
    return axios({
        method,
        url: `${url}`,
        data,
        params
    });
}
