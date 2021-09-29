import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
//该ts文件为演示Angular的生命周期
export class LifecycleComponent implements OnInit {

  constructor() {

    console.log('1、执行constructor构造函数');
  }
  ngOnChanges() { 
    console.log('2、OnChanges执行了----当绑定的值发生变化时调用(父子组件传值时会触发)');
  }

  ngOnInit() {
    console.log('2、OnInit执行了----请求数据一般放在这里');
  }
  ngDoCheck()
  {
    console.log('3、ngDoCheck执行了 --检测,并发生在Angular无法或不自愿自己检测的变化时做出反应');
  }
  ngAfterContentInit(){
    console.log('4、ngAfterContentOnit执行了----当把内容投影到组件中后执行 ');
   }
  ngAfterContentChecked() {
    console.log('5、ngAfterContentChecked执行了---每次完成被投影组件内容变化检测之后调用 ');
  }
  ngAfterViewInit() {
    console.log('6、ngAfterViewInit执行了---初始化完组件视图及其子视图之后调用(dom操作放在这里) ');
  }
  ngAfterViewChecked() {
    console.log('7、ngAfterViewChecked执行了---每次做完组件视图和子视图的变更检测之后调用 ');
  }
  ngOnDestory() {
    console.log('8、ngOnDestory执行了');
  }
}
