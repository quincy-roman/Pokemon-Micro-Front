import { NewsfeedService } from './../../services/newsfeed.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsFeed } from 'src/app/models/newsfeed';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokenews',
  templateUrl: './pokenews.component.html',
  styleUrls: ['./pokenews.component.css']
})
export class PokenewsComponent implements OnInit {

  newsFeeds: NewsFeed[];
  public newsFeed: Observable<NewsFeed>;

  constructor(private service: NewsfeedService, private changeDetect: ChangeDetectorRef, private router: Router) {
   }

  ngOnInit(): void {
    this.getAllNews();
  }

  // tslint:disable-next-line: typedef
  public trackItem(index: number, item: NewsFeed) {
    return `${item.id}-${index}`;
  }

  public getAllNews(): void{
    this.service.getAllNewsFeeds().subscribe(data => {
      this.newsFeeds = data;
      this.changeDetect.detectChanges();
      console.log(this.newsFeeds);
      console.log('Data has been gathered successfully!');
    });
  }

  public returnHome(): void{
    this.router.navigate(['/home']);
  }
}
