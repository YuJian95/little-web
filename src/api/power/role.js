import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/power/role/list',
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

export function updateRole(id, data) {
  return request({
    url: '/power/role/' + id,
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
    url:'/power/role',
    method:'delete',
    data:data
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
    url: '/power/role/listMenu/'+roleId,
    method: 'get'
  })
}

export function listResourceByRole(roleId) {
  return request({
    url: '/power/role/listResource/'+roleId,
    method: 'get'
  })
}

export function allocMenu(data) {
  return request({
    url: '/power/role/allocMenu',
    method: 'post',
    data:data
  })
}

export function allocResource(data) {
  return request({
    url: '/power/role/allocResource',
    method: 'post',
    data:data
  })
}
