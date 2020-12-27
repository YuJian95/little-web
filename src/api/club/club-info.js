import request from '@/utils/request'

export function searchList(params) {
  return request({
    url: '/club/info/search',
    method: 'get',
    params: params
  })
}

export function createClub(data) {
  return request({
    url: '/club/info',
    method: 'post',
    data: data
  })
}

export function updateClub(data) {
  return request({
    url: '/club/info',
    method: 'put',
    data: data
  })
}

export function updateStatus(id, params) {
  return request({
    url: '/club/info/status/' + id,
    method: 'put',
    params: params
  })
}

export function deleteClub(id) {
  return request({
    url: '/club/info/' + id,
    method: 'delete'
  })
}
