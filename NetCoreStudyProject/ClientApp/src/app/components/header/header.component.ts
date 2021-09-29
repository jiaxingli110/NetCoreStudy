import { Component, OnInit,Input,Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: any;   //接收父组件传来的数据
  @Input() runChild: any;
  @Output() private outer = new EventEmitter(); 
  constructor() { } 
   
  ngOnInit() {
  }
  run()
  {
    console.log('我是header中的run方法');
  }
  runParent()
  {
    this.runChild();
  }
  sendParent()
  {

    this.outer.emit("我是子组件的数据");
  }

}
