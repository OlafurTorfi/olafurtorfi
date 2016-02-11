'use strict'

import {Injectable} from 'angular2/core';
import {Blog} from '../../interfaces/blog.interface';
import {BLOGS} from './mock-blogs';

const _ = require('underscore');

@Injectable()
export class BlogService {
  getBlogs() {
    return Promise.resolve(BLOGS);
  };
  getBlog(id:Number){
    return Promise.resolve(_.find(BLOGS,{'id':id}));
  }
}
