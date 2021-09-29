import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';      //引入rxjs

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }
  getData() {

    return 'this is request data ';
  }
  //回调函数实现异步回调
  getCallBackData(cb)
  {
    setTimeout(() => {
      var username = "test callback";
      //return username;      //直接调用无法返回
      cb(username);
    }, 1000);
  }
  //通过Promise实现异步回调
  getPromiseData()
  {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        var username = "test callback Promise";
        //return username;      //直接调用无法返回
        resolve(username);
      }, 1000);
    })
  }
  //通过Rxjs获取异步数据
  getRxJs()
  {
    return new Observable((observer) => {
      setTimeout(() => {
        var username = "test callback rxjs";
        //return username;      //直接调用无法返回
        observer.next(username);
        //observer.error(username);
      }, 5000);
    });
  }
  //通过Rxjs实现撤回

}
