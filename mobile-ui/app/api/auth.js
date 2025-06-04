import {nodeApiClient} from './api-client'
const login = (email, password) => nodeApiClient.post("/login", {email, password})

export default {
    login
}