'use strict';

import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {BlogService} from '../../services/blog/blog.service';
import {Blog} from '../../interfaces/blog.interface';
import {Broadcaster} from '../../broadcaster';

@Component({
  selector: 'writing',
  templateUrl: 'components/writing/writing.template.html',
  styleUrls: ['components/writing/writing.style.css'],
  providers: [BlogService]
})
export class WritingComponent implements OnInit {
  public blogs: Blog[];
  public language : string;
  constructor(private _blogService : BlogService, _broadcaster : Broadcaster){
    _broadcaster.subscribe(languageEvent => this.language = languageEvent);
  };
  getBlogs(){
    this._blogService.getBlogs().then(blogs => this.blogs = blogs);
  }
  ngOnInit(){
    this.getBlogs();
    console.log('writing component loaded');
  };
}
