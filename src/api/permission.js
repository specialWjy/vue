import axios from '@/config/httpConfig'

export function getToken() {
    return axios.post('/fyh_crm/token/getToken', {headers: {

    }})
}

export function login() {
    return axios.get('/static/login.json')
}
