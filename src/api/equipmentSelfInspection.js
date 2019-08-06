import request from '@/utils/request'
export function sendequipselfinspec(data) {
  return request({
    url: '/deployment/sendDeviceCheckCMD/communication',
    method: 'post',
    data
  })
}