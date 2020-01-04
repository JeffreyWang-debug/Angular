import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  public history:string;
  public historyList:any[]=[];
  public historyList1:any[]=[];
  constructor( public storage:StorageService) { 
    // console.warn('todolist'+storage.get());
  }

  ngOnInit() {
    console.log("todolist,页面刷新会触发这个生命周期函数");

    var dolist=this.storage.get('dolist');
    if(dolist){
      this.historyList=dolist;
    }
  }

  doAdd(e){
    if(!this.todolistHasKeyword(this.historyList,this.history)){
    if(e.keyCode==13){
      this.historyList.push({
        title: this.history, 
        status : 0
      });
      this.storage.set('dolist',this.historyList);
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
      this.storage.set('dolist',this.historyList);

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

  checkboxchange(){
    console.log('出发缓存事件');
    
    this.storage.set('dolist',this.historyList);

  }
}
