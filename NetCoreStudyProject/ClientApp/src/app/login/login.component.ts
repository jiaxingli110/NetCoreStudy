import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public user: any = {
    username : ''
  }

  public listx: any[] =
    [
      { "title": '我是新闻1' },
      { "title": '我是新闻2' },
      { "title": '我是新闻3' },
      { "title": '我是新闻4' }
    ]
   
  public flageStatus: boolean = true;

  public swtichStatus: number = 2;

  public picURL = "//www.baidu.com/img/dong_8f1d47bcb77d74a1e029d8cbb3b33854.gif";
  loginIn() {
    alert(this.user.username);
  }
}
