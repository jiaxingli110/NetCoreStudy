import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public keywords: string;
  public historylist: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  doAdd(e) {


      if (e.keyCode == 13) {
        if (!this.todoListHasKey(this.historylist, this.keywords)) {
          this.historylist.push({
            title: this.keywords,
            status: 0 //0表示代办事项 ， 1表示已经完成事项
          })
        } else {
          alert("数据已经存在");
        }
      }
  }
  delHistory(key) {

    this.historylist.splice(key, 1);
  }


  todoListHasKey(historylist: any, keyword: any) {

    /**
     *  //forEach 存在异步问题，直接导致每次返回的值都是False
     * **/
    //    historylist.forEach(value => {
    //      if (value== keyword) {
    //        return true
    //      }
    //    });
    //    return false
    //}
    if (!keyword) {
      return false;
    }
    for (var i = 0; i < historylist.length; i++) {
      if (historylist[i].title == keyword) {
        return true;
      }
    }
    return false;
  }
}
