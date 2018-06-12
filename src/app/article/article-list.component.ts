import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  heroes: Hero[];
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticles();
  }
  getArticles(): void {
    this.articleService.getArticles()
      .subscribe(articles => {
        console.log('articles', articles);
      });
  }
}
