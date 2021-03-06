import { http } from '@/utils/http'
import IndexDB from '@/utils/indexDB'
const db = new IndexDB('db')
export function facthRoomList() {
  return http.httpGet('https://service-ase3oocp-1302839645.sh.apigw.tencentcs.com/api/room/room/getRoomList?pageSize=10&pageNumber=1', {})
}

// mock接口
export async function getRoomLists() {
  await db.openStore('room', 'id', ['name', 'age'])
  const res = await db.getList('room')
  return {
    code: '000000',
    message: "操作成功",
    result: res,
    success: true
  }
}