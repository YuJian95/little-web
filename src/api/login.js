import request from '@/utils/request'

export function login(params) {
  return request({
    url: '/power/admin/login',
    method: 'get',
    params: params
  })
}

export function getInfo() {
  return request({
    url: '/power/admin/info',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: '/power/admin/logout',
    method: 'post'
  })
}
