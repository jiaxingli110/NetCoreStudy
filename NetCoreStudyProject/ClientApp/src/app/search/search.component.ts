import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public keywords: string;
  public historylist: any[]=[];

  constructor(public storage: StorageService) {

    //let s = this.storage.getData();
    //console.log(s); 
  }

  ngOnInit() {
    var searchlist: any = this.storage.getData('SEARCHLIST');
    if (searchlist) {
      this.historylist = searchlist;
    }
  }

  doSearch()
  {
    this.historylist.push(this.keywords);
    //console.log(this.keywords);
    // alert(this.keywords);
    this.storage.setData('SEARCHLIST', this.historylist);
  }
  delHistory(key)
  {
    this.historylist.splice(key, 1);
    this.storage.setData('SEARCHLIST', this.historylist);
  }
}
