export class NewsFeed {
  id: number;
  title: string;
  type: string;
  author: string;
  dateWritten: string;
  link: string;
  keywords: string;

  constructor(
    id: number,
    title: string,
    type: string,
    author: string,
    dateWritten: string,
    link: string,
    keywords: string
  ) {
    this.id = id;
    this.title = title;
    this.type = type;
    this.author = author;
    this.dateWritten = dateWritten;
    this.link = link;
    this.keywords = keywords;
  }
}
