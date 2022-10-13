import axios from 'axios'

function configAxios () {
  const headers = {
    'Access-Control-Allow-Origin': true
  }

  const apiURL = '/api'

  const axiosInstance = axios.create({
    baseURL: apiURL,
    headers,
    timeout: 1000000
  })

  return {
    apiURL,
    get: axiosInstance.get,
    post: axiosInstance.post,
    put: axiosInstance.put,
    deleteRequest: axiosInstance.delete
  }
}

export default configAxios
