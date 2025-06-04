import {apiClient} from "./api-client";

const preEndpoint = '/preeclampsia'
const postEndpoint = '/postpartum'

const postPreeclampsia = (symptom, onUploadProgress) => {
    return apiClient.post(preEndpoint, symptom,{
        headers: { "Content-Type": "application/json" },
        onUploadProgress: (progress) => onUploadProgress(progress.loaded / progress.total)
    })
}
const postPostNatal = (symptom, onUploadProgress) => {
    return apiClient.post(postEndpoint, symptom,{
        headers: { "Content-Type": "application/json" },
        onUploadProgress: (progress) => onUploadProgress(progress.loaded / progress.total)
    })
}

export default {
    postPreeclampsia,
    postPostNatal
}