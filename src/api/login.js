import request from '@/util/request.js'

export function login(username, password) { //登录接口
  return request({ //使用封装好的 axios 进行网络请求
    url: '/login',
    method: 'post',
    data: { //提交的数据
      username,
      password
    }
  })
}
