import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  public history:string;
  public historyList:any[]=[];
  public historyList1:any[]=[];
  constructor() { }

  ngOnInit() {
  }

  doAdd(e){
    if(!this.todolistHasKeyword(this.historyList,this.history)){
    if(e.keyCode==13){
      this.historyList.push({
        title: this.history, 
        status : 0
      });
    this.history='';
  }
  }else{
    alert("数据存在");
    this.history='';
  }
}
delete(key){

    this.historyList.splice(key,1);
    // console.log(this.historyList[key]);
    // this.historyList[key].status=1;
    // this.historyList1.push(this.historyList[key])
    // this.historyList.splice(key,1);

  }
  finish(key){
    this.historyList.push(this.historyList[key])
    this.historyList.splice(key,1);

  }

  todolistHasKeyword(todolist,history:any){
    // todolist.forEach(value => {
    //   if(value.title==history){
    //     return true;
    //   }
    // });


    if(!History) return false;
    for(var i =0 ; i<todolist.length;i++){

      if(todolist[i].title==history){
        return true;
      }
    }

    return false;
  }
}
