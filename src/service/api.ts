import axios, { AxiosInstance } from "axios";
// import { LOCAL_EXECUTION } from "../utils/featureFlag";

export const instanceAXIOS = axios.create({
  baseURL: process.env.REACT_APP_API_URL_PRODUTOR,
});

export const APIDecoratorWithBaseURI = (base: string | undefined = process.env.REACT_APP_API_URL_PRODUTOR): AxiosInstance => {
  instanceAXIOS.defaults.baseURL = base;

  const key = window.location.hostname + 'userJWT'
  const item = localStorage.getItem(key)
  const tokenFromStorage = JSON.parse(item as string)

  const hasAuthToken = false
  const accessToken = hasAuthToken ? process.env.REACT_APP_LOCAL_EXECUTION_TOKEN : tokenFromStorage

  // if user refresh page i.d.h.common became undefined and the auth is called
  // after setConfig so a used the tokenFromStorage

  if (instanceAXIOS.defaults.headers.common['Authorization'] === undefined) {
    instanceAXIOS.defaults.headers.common['Authorization'] = accessToken;
  }

  return instanceAXIOS  
}


// PRECISA SE ATUALIZADA E REMOVIDA DAS DEMAIS REQUESTS QUE AINDA USAM
export const authAPI = (token: string, base = process.env.REACT_APP_API_URL_PRODUTOR) => {
  return axios.create({
    baseURL: base,
    headers: {
      Authorization: `Bearer ${token}`,
    }})
}

// @deprecated
interface Config {
  [key: string]: any
  AUTH_TOKEN?: string
}
// @deprecated
const config: Config = {
}
// @deprecated
export const setConfig = (a: string, b: any): any => {
  config[a] = b
  return b
}
// @deprecated
export const getConfig = (): Config => config