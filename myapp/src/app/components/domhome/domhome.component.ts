import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domhome',
  templateUrl: './domhome.component.html',
  styleUrls: ['./domhome.component.scss']
})
export class DomhomeComponent implements OnInit {

  public flag:any = true;
  constructor() { }

  ngOnInit() {

    // 组件和指令初始化完成，并不是真正的dom 加载完成。

    // 原生js获取dom节点
    let oBox:any = document.getElementById('box');
    console.log(oBox.innerHTML);
    oBox.style.color='red';

  }

  // 视图加载完成之后触发的方法，dom加载完成
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
    let oBox1:any = document.getElementById('box1');
    console.log(oBox1.innerHTML);
    oBox1.style.color='blue';
  } 
}
