import axios from "axios";

axios.defaults.headers.common['Content-Type'] = 'application/ld+json'

axios.interceptors.request.use((config) => {
  if(config.url !== 'http://localhost:8888/api/users/auth') {
    config.headers.common['Authorization'] = 'bearer ' + localStorage.getItem('token');
  }

  return config
})

export default axios