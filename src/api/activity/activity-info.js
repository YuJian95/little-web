import request from '@/utils/request'

export function searchList(params) {
  return request({
    url: '/activity/info/search',
    method: 'get',
    params: params
  })
}

export function createActivity(data) {
  return request({
    url: '/activity/info',
    method: 'post',
    data: data
  })
}

export function updateActivity(data) {
  return request({
    url: '/activity/info',
    method: 'put',
    data: data
  })
}

export function updateStatus(id, params) {
  return request({
    url: '/activity/info/status/' + id,
    method: 'put',
    params: params
  })
}

export function deleteActivity(id) {
  return request({
    url: '/activity/info/' + id,
    method: 'delete'
  })
}
