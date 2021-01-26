import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NewsFeed } from 'src/app/models/newsfeed';

@Component({
  selector: 'app-pokenews',
  templateUrl: './pokenews.component.html',
  styleUrls: ['./pokenews.component.css']
})
export class PokenewsComponent implements OnInit {

  // newsFeeds: NewsFeed[];
  // private newsSubject: BehaviorSubject<NewsFeed>;
  // public newsFeed: Observable<NewsFeed>;

  constructor() { }

  ngOnInit(): void {
  }

}
