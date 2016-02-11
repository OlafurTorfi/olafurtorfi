'use strict';

import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {SlicePipe} from 'angular2/common';
import {BlogService} from '../../services/blog/blog.service';
import {Blog} from '../../interfaces/blog.interface';
import {Broadcaster} from '../../broadcaster';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';

@Component({
  selector: 'writing',
  templateUrl: 'components/writing/writing.template.html',
  styleUrls: ['components/writing/writing.style.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [BlogService],
  pipes: [SlicePipe]
})
export class WritingComponent implements OnInit {
  public blogs: Blog[];
  public language : string;
  constructor(private _blogService : BlogService, private _broadcaster : Broadcaster, private _router:Router){
    _broadcaster.subscribe(languageEvent => this.language = languageEvent);
  };
  getBlogs(){
    this._blogService.getBlogs().then(blogs => this.blogs = blogs);
  };
  goToBlog(blog:Number){
    this._router.navigate( ['Article', { id: blog }] );
  }
  ngOnInit(){
    this.getBlogs();
    console.log('writing component loaded');
  };
}
