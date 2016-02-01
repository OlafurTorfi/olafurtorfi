import {Injectable} from 'angular2/core';
import {Blog} from '../../interfaces/blog.interface';
import {BLOGS} from './mock-blogs';

@Injectable()
export class BlogService {
  getBlogs() {
    return Promise.resolve(BLOGS);
  };
}
