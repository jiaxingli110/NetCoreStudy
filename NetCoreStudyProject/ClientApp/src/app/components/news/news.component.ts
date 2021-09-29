import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
   
  @ViewChild('myBox', { static: true }) myBox: any;      //相当于将myBox这个dom节点赋值给tMyBox ,
                                                         //static-True表示在运行更改检测之前解析查询结果，false用于在更改检测后解析。默认为false。
  @ViewChild('header', { static: true }) header: any;    //通过ViewChild实现父组件获取子组件的实例
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    console.log(this.myBox);
    this.myBox.nativeElement.style.with = '700px';
    this.myBox.nativeElement.style.background = 'red';

    this.header.run();
  }
  runOuter(e)
  {
    console.log(e);
    alert("我是父组件的方法");
  }
}
