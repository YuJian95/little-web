import request from '@/utils/request'

export function searchList(params) {
  return request({
    url: '/user/info/search',
    method: 'get',
    params: params
  })
}

export function createUser(data) {
  return request({
    url: '/user/info/register',
    method: 'post',
    data: data
  })
}

export function updateUser(data) {
  return request({
    url: '/user/info',
    method: 'put',
    data: data
  })
}

export function updateStatus(id, params) {
  return request({
    url: '/user/info/status/' + id,
    method: 'put',
    params: params
  })
}

export function deleteUser(id) {
  return request({
    url: '/user/info/' + id,
    method: 'delete'
  })
}
