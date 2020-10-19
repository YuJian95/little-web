import request from '@/utils/request'

export function listAllCate() {
  return request({
    url: '/power/resource/category/list/all',
    method: 'get'
  })
}

export function createResourceCategory(data) {
  return request({
    url: '/power/resource/category',
    method: 'post',
    data: data
  })
}

export function updateResourceCategory(data) {
  return request({
    url: '/power/resource/category',
    method: 'put',
    data: data
  })
}

export function deleteResourceCategory(id) {
  return request({
    url: '/power/resource/category/' + id,
    method: 'detele'
  })
}
