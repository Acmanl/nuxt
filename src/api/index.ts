import { http } from '@/utils/http'
export function getRoomList() {
  return http.httpGet('https://service-ase3oocp-1302839645.sh.apigw.tencentcs.com/api/room/room/getRoomList?pageSize=10&pageNumber=1', {})
}

// mock接口
export function getRoomLists() {
  return http.httpGet('https://service-ase3oocp-1302839645.sh.apigw.tencentcs.com/api/room/room/getRoomList?pageSize=10&pageNumber=1', {})
}