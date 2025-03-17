import axios from 'axios'

const axiosInstance = axios.create({
    'baseURL': 'http://localhost:800/api',
    'headers': {
        'Accept': 'application/json',
    
    },
    'withCredentials': true,
    'withXSRFTOKEN': true
})


export default axiosInstance