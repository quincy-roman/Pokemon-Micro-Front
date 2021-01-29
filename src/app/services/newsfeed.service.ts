import { NewsFeed } from 'src/app/models/newsfeed';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NewsfeedService {
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*/*',
        'Access-Control-Allow-Methods': 'OPTIONS, HEAD, GET, POST, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding, X-Auth-Token, content-type'
      }
    )
  };

  getAllNewsFeeds(): Observable<NewsFeed[]> {
    return this.http.get<NewsFeed[]>(`${environment.newsServerURL}/news/view/all`, this.httpOptions);
  }
}
