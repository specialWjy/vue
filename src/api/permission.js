import axios from '@/config/httpConfig'

export function getToken(params) {
    return axios.post('aaa', params)
}

export function login() {
    return axios.get('/static/login.json')
}
