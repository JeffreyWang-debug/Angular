import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent implements OnInit {

  public peopleInfo:any = {
    username:'',
    sex:'1',
    citylist:['北京','上海','郑州','深圳'],
    city:'北京',
    hobby:[
      {
        title:'读书',
        checked:false
      },
      {
        title:'视频',
        checked:false
      },
      {
        title:'睡觉',
        checked:true
      }
    ],
    mark:''
  }
  
  constructor() { }

  ngOnInit() {
  }
  doSubmit() {
    // 利用dom操作获取数据
    // let usernameDom:any = document.getElementById('username');
    // console.log(usernameDom.value);
    console.log(this.peopleInfo);
  }

}
