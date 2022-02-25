import axios from 'axios'

// ��ȡQQ��Ϣ
export function getQQInfo(qqNumber) {
  const api = `https://api.btstu.cn/qqxt/api.php?qq=${qqNumber}`
  return axios.get(api).then(resp => {
    const data = resp.data
    if (data && data.code === 1) {
      return Promise.resolve({
        email: `${qqNumber}@qq.com` || '',
        author: data.name || '',
        avatar: data.imgurl || ''
      })
    } else {
      return Promise.reject(data.msg || 'Error')
    }
  }).catch(err => {
    return Promise.reject(err)
  })
}

