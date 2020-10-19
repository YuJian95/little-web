import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/power/role/search',
    method: 'get',
    params: params
  })
}

export function createRole(data) {
  return request({
    url: '/power/role',
    method: 'post',
    data: data
  })
}

export function updateRole(data) {
  return request({
    url: '/power/role',
    method: 'put',
    data: data
  })
}

export function updateStatus(id, params) {
  return request({
    url: '/power/role/status/' + id,
    method: 'put',
    params: params
  })
}

export function deleteRole(data) {
  return request({
    url: '/power/role',
    method: 'delete',
    data: data
  })
}

export function fetchAllRoleList() {
  return request({
    url: '/power/role/list/all',
    method: 'get'
  })
}

export function listMenuByRole(roleId) {
  return request({
    url: '/power/role/menu/' + roleId,
    method: 'get'
  })
}

export function listResourceByRole(roleId) {
  return request({
    url: '/power/role/resource/' + roleId,
    method: 'get'
  })
}

export function allocMenu(data) {
  return request({
    url: '/power/role/menu',
    method: 'put',
    data: data
  })
}

export function allocResource(data) {
  return request({
    url: '/power/role/resource',
    method: 'put',
    data: data
  })
}
