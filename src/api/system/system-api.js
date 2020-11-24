import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/system/api/log/list',
    method: 'get',
    params: params
  })
}

export function searchList(params) {
  return request({
    url: '/system/api/log/search',
    method: 'get',
    params: params
  })
}
