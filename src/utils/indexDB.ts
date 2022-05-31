import { rejects } from "assert"

export default class DB {
  private dbName: string // 数据库名称 
  private db: any // 数据库对象
  constructor(dbName: string) {
    this.dbName = dbName
  }
  // 打开数据库
  openStore(storeName: string, keyPath: string, index?: Array<string>) {
    const request = window.indexedDB.open(this.dbName, 2)
    return new Promise((resolve, reject) => {
      request.onsuccess = (event: any) => {
        console.log('数据库打开成功')
        this.db = event.target.result
        console.log(event)
        resolve(true)
      }
      request.onerror = (event) => {
        console.log('数据库打开失败')
        console.log(event)
        reject()
      }
      request.onupgradeneeded = (event: any) => {
        console.log('数据库升级成功')
        const { result } = event?.target
        const store = result.createObjectStore(storeName, { autoIncrement: true, keyPath })
        if (index && index.length) {
          index.map((v: string) => {
            store.createIndex(v, v, { unique: false })
          })
        }

        store.transaction.oncomplete = () => {
          console.log('创建仓库成功')
        }
        console.log(event)
      }
    })

  }

  // 新增修改数据
  updateItme(storeName: string, data: any) {
    const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
    const request = store.put({
      ...data,
      updateTIme: new Date().getTime()
    })
    return new Promise((resolve, reject) => {
      request.onsuccess = (event: any) => {
        console.log('数据写入成功')
        console.log(event)
        resolve(event)

      }
      request.onerror = (event: any) => {
        console.log('数据写入失败')
        console.log(event)
        reject(event)

      }
    })
  }
  // 删除数据
  deleteItme(storeName: string, key: number | string) {
    const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
    const request = store.delete(key)
    return new Promise((resolve, reject) => {
      request.onsuccess = (event: any) => {
        console.log('数据删除成功')
        console.log(event)
        resolve(event)
  
      }
      request.onerror = (event: any) => {
        console.log('数据删除失败')
        console.log(event)
        reject(event)
  
      }
    })
    
  }

  // 查询所有数据
  getList(storeName: string) {
    const store = this.db.transaction(storeName).objectStore(storeName)
    const request = store.getAll()
    return new Promise((resolve, reject) => {
      request.onsuccess = (event: any) => {
        console.log('所有数据查询成功')
        console.log(event)
        resolve(event.target.result)
      }
      request.onerror = (event: any) => {
        console.log('所有数据查询失败')
        reject(event)
        console.log(event)

      }
    })
  }
  // 查询所有数据
  getItem(storeName: string, key: number | string) {
    const store = this.db.transaction(storeName).objectStore(storeName)
    const request = store.get(key)
    return new Promise((resolve, reject) => {
      request.onsuccess = (event: any) => {
        console.log('单条数据查询成功')
        console.log(event)
        resolve(event.target.result)
      }  
      request.onerror = (event: any) => {
        console.log('单条数据查询失败')
        console.log(event)
        reject(event)

      }

    })
  }
}
