import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/system/dictionary/list',
    method: 'get',
    params: params
  })
}

export function createDictionary(data) {
  return request({
    url: '/system/dictionary',
    method: 'post',
    data: data
  })
}

export function updateDictionary(data) {
  return request({
    url: '/system/dictionary',
    method: 'put',
    data: data
  })
}

export function deleteDictionary(id) {
  return request({
    url: '/system/dictionary/' + id,
    method: 'delete'
  })
}

export function fetchAllDictionaryList() {
  return request({
    url: '/system/dictionary/list/all',
    method: 'get'
  })
}
