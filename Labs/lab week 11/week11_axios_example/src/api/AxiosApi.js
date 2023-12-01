import axios from "axios"

// const BASE_URL = "https://reqres.in/api"

const instance = axios.create({
    baseURL: "https://reqres.in/api",
    timeout: 1000,
    headers:{'X-Custom-Header': 'foobar'}
})

export default instance;