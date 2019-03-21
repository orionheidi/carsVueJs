
import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000/api'
});

class HttpService {
    get(url) {
        return http.get(url);
    }

    post(url,body){
        return http.post(url,body)
    }

    put(url,body){
        return http.put(url,body)
    }

}

export const httpService = new HttpService();