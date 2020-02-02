import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  home = "我是一个首页组件！0101";
  public  msg: string = '我是父组件传来的数值';

  constructor() { }

  ngOnInit() {
  }
  run(){
    alert("我是父组件的Run方法");
  }

}
