import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/power/admin/search',
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

export function updateAdmin(data) {
  return request({
    url: '/power/admin',
    method: 'put',
    data: data
  })
}

export function updateStatus(id, params) {
  return request({
    url: '/power/admin/status/' + id,
    method: 'put',
    params: params
  })
}

export function deleteAdmin(id) {
  return request({
    url: '/power/admin/' + id,
    method: 'delete'
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
    url: '/power/admin/role',
    method: 'put',
    data: data
  })
}
