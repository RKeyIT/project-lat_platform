import axios from 'axios'
import { API_URL } from "07_shared/config"

// potentially can send access token
export const apiInstance = axios.create({
    baseURL: API_URL
})