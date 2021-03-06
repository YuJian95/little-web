import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/power/resource/search',
    method: 'get',
    params: params
  })
}

export function createResource(data) {
  return request({
    url: '/power/resource',
    method: 'post',
    data: data
  })
}

export function updateResource(data) {
  return request({
    url: '/power/resource',
    method: 'put',
    data: data
  })
}

export function deleteResource(id) {
  return request({
    url: '/power/resource/' + id,
    method: 'delete'
  })
}

export function fetchAllResourceList() {
  return request({
    url: '/power/resource/list/all',
    method: 'get'
  })
}
