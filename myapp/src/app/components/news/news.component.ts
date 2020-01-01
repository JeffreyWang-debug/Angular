import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public title = '我是新闻组件001';

  msg = '我是一个新闻组件002';

  username:string = 'Jeffrey';
  public student1:any = 'I am a student.';

  public userinfo:any = {
    user:'Tom',
    age:20
  }

  public content: any = '<h2>我是html标签！</h2>';

  public address:any;


  // 定义数组
  public arr:Array<number> = [1,2,3,4];
  public arr1 =  ['11','22','33'];
  public arr2:any[] =  ['111111',22222222,'22','33','wjsdkjsdfjol'];

  //数组里面有对象
  public list: any[] = [{
    name:'Grace',
    age:22
  },{
    name:'Allan',
    age:24
  },{
    name:'JEFF',
    age:50
  },{
    name:'DONG',
    age:20
  }];

  //复杂数据定义
  public cars:any[]=[
    {
      cate:'宝马',
      list:[
        {
          title:'X1',
          price:'340万'
        },{
          title:'X12',
          price:'330万'
        },{
          title:'X13',
          price:'340万'
        },{
          title:'X14',
          price:'330万'
        }
      ]
    },{
      cate:'奥迪',
      list:[
        {
          title:'Q1',
          price:'34万'
        },{
          title:'Q12',
          price:'30万'
        },{
          title:'Q13',
          price:'40万'
        },{
          title:'Q14',
          price:'330万'
        }
      ]
    }
  ]
  constructor() {

    this.address='China';
    console.log(this.msg);
    this.msg = '改变后的我是一个新闻组件002'
    console.log(this.msg);

   }

  ngOnInit() {
  }

}
