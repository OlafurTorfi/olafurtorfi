'use strict';

import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {LanguagePipe} from '../../pipes/language.pipe';
import {Broadcaster} from '../../broadcaster';
import {RouteParams} from 'angular2/router';
import {BlogService} from '../../services/blog/blog.service';
import {Blog} from '../../interfaces/blog.interface';
import {CommentService} from '../../services/comment/comment.service';
import {Comment} from '../../interfaces/comment.interface';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'about',
  templateUrl: 'components/article/article.template.html',
  styleUrls: ['components/article/article.style.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [BlogService, CommentService],
  pipes: [LanguagePipe]
})
export class ArticleComponent implements OnInit {
  public blog: Blog;
  public comments: Comment[];
  public language : string;
  private id : String;
  constructor(private _blogService : BlogService, private _commentService : CommentService, private _broadcaster: Broadcaster, private _routeParams:RouteParams){
    _broadcaster.subscribe(languageEvent => this.language = languageEvent);
  };
  ngOnInit(){
    this.id = this._routeParams.get('id');
    this._blogService.getBlog(Number(this.id)).then(result=>this.blog = result);
    this._commentService.getComments(Number(this.id)).then(result=>this.comments = result);
    console.log('about component loaded');
  };
}
