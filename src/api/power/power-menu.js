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
    url: '/power/menu/' + id,
    method: 'delete'
  })
}

export function createMenu(data) {
  return request({
    url: '/power/menu',
    method: 'post',
    data: data
  })
}

export function updateMenu(data) {
  return request({
    url: '/power/menu',
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
    url: '/power/menu/hidden/' + id,
    method: 'put',
    params: params
  })
}

export function fetchTreeList() {
  return request({
    url: '/power/menu/list/tree',
    method: 'get'
  })
}

