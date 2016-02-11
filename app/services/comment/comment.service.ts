'use strict'

import {Injectable} from 'angular2/core';
import {Comment} from '../../interfaces/comment.interface';
import {COMMENTS} from './mock-comments';

const _ = require('underscore');

@Injectable()
export class CommentService {
  getComments(blogId:Number){
    return Promise.resolve(_.where(COMMENTS,{'blog':blogId}));
  }
}
