import axios from '@/config/httpConfig'

export function getToken(params) {
    return axios.post('/fyh_crm/token/getToken', params)
}

export function login() {
    return axios.get('/static/login.json')
}
