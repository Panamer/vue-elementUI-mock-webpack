import axios from 'axios'

const baseURL = 'http://localhost:8090/api'   // sit2环境
axios.defaults.baseURL = baseURL

export default {
    baseURL,

  /* 获取列表数据 */
    getList () {
        return axios.get('/data')
    },

    testPost () {
        return axios.post('/test')
    }
}
