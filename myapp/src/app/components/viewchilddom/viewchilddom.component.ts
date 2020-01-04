import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-viewchilddom',
  templateUrl: './viewchilddom.component.html',
  styleUrls: ['./viewchilddom.component.scss']
})
export class ViewchilddomComponent implements OnInit {

  // 获取dom节点
  @ViewChild('mybox',{static:true}) 
  mybox:ElementRef;
  // 获取子组件
  @ViewChild('header',{static:true})
  header:any;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
     
    console.log(this.mybox.nativeElement.innerHTML);
    this.mybox.nativeElement.style.width='200px'
    this.mybox.nativeElement.style.height='200px'
    this.mybox.nativeElement.style.background ='red',


    // 调用子组件里面的方法 

    this.header.run();
  }
  getRun(){
    this.header.run();
  }
}
