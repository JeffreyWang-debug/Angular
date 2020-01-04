import { Component, OnInit } from '@angular/core';

// 要用service先引入，并实例化
import { StorageService } from '../../services/storage.service';
import { from } from 'rxjs';

// var storage = new StorageService();

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public history:string;
  public historyList:any[]=[];
  constructor(public storage:StorageService) {

    // console.log(storage.get());
   }

  ngOnInit() {
    console.log("页面刷新会触发这个生命周期函数");
    var searchlist = this.storage.get('searchlist');
    if(searchlist){
      this.historyList=searchlist;
    }

  }
  getValue(){
    if(this.historyList.indexOf(this.history)==-1){
    this.historyList.push(this.history);

    this.storage.set('searchlist',this.historyList);
  }
  this.history='';
  }
  delete(key){
    this.historyList.splice(key,1);

    // 删除之后，重新写入 
    this.storage.set('searchlist',this.historyList);
  }






}
