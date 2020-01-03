import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public history:string;
  public historyList:any[]=[];
  constructor() { }

  ngOnInit() {
  }
  getValue(){
    if(this.historyList.indexOf(this.history)==-1){
    this.historyList.push(this.history);
  }
  this.history='';
  }
  delete(key){
    this.historyList.splice(key,1);
  }

}
