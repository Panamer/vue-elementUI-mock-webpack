import axios from 'axios'

const baseURL = 'http://localhost:8090/api'
axios.defaults.baseURL = baseURL

export default {
    baseURL,

  /* 获取列表数据 */
    getList () {
        return axios.get('/data')
    },
  /* 测试post请求 */
    testPost () {
        return axios.post('/test')
    }
}
