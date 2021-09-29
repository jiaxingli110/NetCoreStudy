import { Component } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public request: RequestService) {

    let s = this.request.getData();
    console.log(s);
    //callback
    let s2 = this.request.getCallBackData((data) => {
      console.log(data);
    });
    //promise
    let promiseData = this.request.getPromiseData();
    promiseData.then((data) => {
      console.log(data);
    });
    //rxjs
    let rxjsData = this.request.getRxJs();
    rxjsData.subscribe((data) => {
      console.log(data);
    });
  }

  public flag: boolean = true;
  public titleStr: string = "标题";
  public runMethod()
  {
    alert("父组件的run方法");
  }
  //ngOnInit指的是组件和指令加载完，并不dom加载完成
  ngOnInit() {
    let oBox: any = document.getElementById('box');
    console.log(oBox.innerHTML);
    oBox.style.color = "red";
  }
  ngAfterViewInit() {
    let oBox: any = document.getElementById('box2');
    console.log(oBox.innerHTML);
    oBox.style.color = "blue";
  }
}
