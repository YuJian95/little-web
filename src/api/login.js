import request from '@/utils/request'

export function login(params) {
  return request({
    url: '/power/admin/login',
    method: 'get',
    params: params
  })
}

export function getInfo() {
  return request({
    url: '/power/admin/info',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: '/power/admin/logout',
    method: 'post'
  })
}

export function fetchList(params) {
  return request({
    url: '/power/admin/list',
    method: 'get',
    params: params
  })
}

export function createAdmin(data) {
  return request({
    url: '/power/admin/register',
    method: 'post',
    data: data
  })
}

export function updateAdmin(id, data) {
  return request({
    url: '/power/admin/update/' + id,
    method: 'post',
    data: data
  })
}

export function updateStatus(id, params) {
  return request({
    url: '/power/admin/updateStatus/' + id,
    method: 'post',
    params: params
  })
}

export function deleteAdmin(id) {
  return request({
    url: '/power/admin/delete/' + id,
    method: 'post'
  })
}

export function getRoleByAdmin(id) {
  return request({
    url: '/power/admin/role/' + id,
    method: 'get'
  })
}

export function allocRole(data) {
  return request({
    url: '/power/admin/role/update',
    method: 'post',
    data: data
  })
}
