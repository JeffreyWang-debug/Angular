import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Output() private outer = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  SonRun(){
    console.log("我是子组件的方法");
  }
  sendParent(){
    this.outer.emit('msg from child');
  }

}
