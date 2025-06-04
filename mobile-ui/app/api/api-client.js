import { create } from "apisauce";
import authStorage from '../auth/storage'
import cache from "../utility/cache";

const apiClient = create({
    baseURL: "https://machine-learning-0bgg.onrender.com/api",
  });

const nodeApiClient = create({
  baseURL: "http://192.168.100.21:3000/api/users"
})

nodeApiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken()
  if(!authToken) return
  request.headers['authorization'] = `Bearer ${authToken}`
})

const get = nodeApiClient.get
nodeApiClient.get =async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig)
  if (response.ok) {
    cache.store(url, response.data)
    return response
  }
  const data = await cache.get(url)
  console.log(data);
  
  return data ? {ok: true, data} : response
}

export {apiClient, nodeApiClient};