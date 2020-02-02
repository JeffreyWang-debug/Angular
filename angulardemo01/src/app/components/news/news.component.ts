import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @ViewChild('footer', {static:true})
  footer: any;

  title="我是一个新闻组件";

  constructor() { }

  ngOnInit() {
  }

  getSonRun(){
    this.footer.SonRun();
  }

  runParent(){
    alert("woshisjjfuzujiande fangfa");
  }

}
