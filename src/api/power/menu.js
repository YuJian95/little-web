import request from '@/utils/request'

export function fetchList(parentId, params) {
  return request({
    url: '/power/menu/list/' + parentId,
    method: 'get',
    params: params
  })
}

export function deleteMenu(id) {
  return request({
    url: '/power/menu/delete/' + id,
    method: 'delete'
  })
}

export function createMenu(data) {
  return request({
    url: '/power/menu/create',
    method: 'post',
    data: data
  })
}

export function updateMenu(id, data) {
  return request({
    url: '/power/menu/update/' + id,
    method: 'put',
    data: data
  })
}

export function getMenu(id) {
  return request({
    url: '/power/menu/' + id,
    method: 'get',
  })
}

export function updateHidden(id, params) {
  return request({
    url: '/power/menu/updateHidden/' + id,
    method: 'put',
    params: params
  })
}

export function fetchTreeList() {
  return request({
    url: '/power/menu/treeList',
    method: 'get'
  })
}

