export class NewsFeed {
  id: number;
  title: string;
  type: string;
  author: string;
  date: string;
  link: string;
  keywords: string;

  constructor(
    id: number,
    title: string,
    type: string,
    author: string,
    date: string,
    link: string,
    keywords: string
  ) {
    this.id = id;
    this.title = title;
    this.type = type;
    this.author = author;
    this.date = date;
    this.link = link;
    this.keywords = keywords;
  }
}
