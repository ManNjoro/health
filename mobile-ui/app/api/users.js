import { nodeApiClient } from "./api-client"


const register = (userInfo) => nodeApiClient.post('/register', userInfo)

export default {register}