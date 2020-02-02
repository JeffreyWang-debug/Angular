import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() msg: string;
  @Input() run:any;
  @Input() home:any;
  constructor() { }

  ngOnInit() {
  }
  getrun(){
    this.run();
  }
  gethome(){
    console.log(this.home.msg);
  }

}
