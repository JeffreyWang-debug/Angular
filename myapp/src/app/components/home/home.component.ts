import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public picture:any = 'https://www.baidu.com/img/2020dong_52a6c87350a54e5d62ddb71a99f29b9d.gif'

  public list:any[] = [
    {
      "title":"news111111"
    },{
      "title":"news2222222"
    },{
      "title":"news3333333"
    },{
      "title":"news44444444"
    },{
      "title":"news55555555"
    }
  ];

  public flag:boolean = false;

  public score:number = 12;

  public attr:string = 'yellow';

  public today:any = new Date();

  public title:string = "我是一个title";

  public keywords:any = '我是keywords';

  constructor() {
    console.log(this.today);
   }

  ngOnInit() {
  }

  run() {
    alert("调用了run方法！")
  }
  getData() {
    alert("获取的参数为："+ this.score);
  }
  setData() {
    this.title="我是改变后的title";
  }
  runEvent(e) {
    var dom:any = e.target;
    dom.style.color='red';
  }

  keyDown(e) {
    if(e.keyCode==13){
      console.log('按了一下回车');
    }else{
      console.log(e.target.value);
    } 
  }
  keyUp(e) {
    if(e.keyCode==13){
      console.log(e.target.value);
      console.log('按了一下回车');
    }
  }
  change() {
    this.keywords='我是改变后的keywords数值';
  }
  getkeywords() {
    console.log(this.keywords);
  }
}
