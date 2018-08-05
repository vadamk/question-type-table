import { Injectable } from '@angular/core';
import { TableQuestionStructure, TableQuestionAnswer } from '../models/question-table.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getStructure(): Observable<TableQuestionStructure> {
    return new BehaviorSubject(defaultStructure);
  }

  getAnswers(): Observable<TableQuestionAnswer> {
    return new BehaviorSubject(defaultAnswer);
  }

}

/**
 * TEST VALUES
 */

const defaultStructure: TableQuestionStructure = {
  rows: [
    'sit amet eros suspendisse accumsan tortor',
    'molestie nibh in lectus pellentesque',
    'mattis odio donec vitae nisi nam ultrices libero non',
    'vitae nisi nam ultrices libero non mattis pulvinar nulla',
    'sit amet eros suspendisse accumsan tortor',
    'molestie nibh in lectus pellentesque',
    'mattis odio donec vitae nisi nam ultrices libero non',
    'vitae nisi nam ultrices libero non mattis pulvinar nulla'
  ],
  columns: [
    'sit amet eros suspendisse accumsan tortor',
    'molestie nibh in lectus pellentesque',
    'mattis odio donec vitae nisi nam ultrices libero non',
    'vitae nisi nam ultrices libero non mattis pulvinar nulla',
    'libero ut massa volutpat convallis morbi odio odio elementum eu',
    'sit amet eros suspendisse accumsan tortor',
    'molestie nibh in lectus pellentesque',
    'mattis odio donec vitae nisi nam ultrices libero non',
    'vitae nisi nam ultrices libero non mattis pulvinar nulla',
    'libero ut massa volutpat convallis morbi odio odio elementum eu'
  ],
  numeric: false
};

const defaultAnswer: TableQuestionAnswer = [
  [
    'rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis',
    'sit amet erat nulla tempus vivamus',
    'vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat',
    'sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id',
    'sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut',
    'rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis',
    'sit amet erat nulla tempus vivamus',
    'vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat',
    'sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id',
    'sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut'
  ],
  [
    'araff0@themeforest.net',
    'rigglesden1@mapy.cz',
    'gmonelli2@earthlink.net',
    'llevene3@redcross.org',
    'bslader4@networksolutions.com',
    'araff0@themeforest.net',
    'rigglesden1@mapy.cz',
    'gmonelli2@earthlink.net',
    'llevene3@redcross.org',
    'bslader4@networksolutions.com'
  ],
  ['1', '2', '3', '4', '5', '1', '2', '3', '4', '5'],
  ['Avivah', 'Roshelle', 'Godfree', 'Lovell', 'Bentley', 'Avivah', 'Roshelle', 'Godfree', 'Lovell', 'Bentley'],
  [
    'rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis',
    'sit amet erat nulla tempus vivamus',
    'vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat',
    'sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id',
    'sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut',
    'rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis',
    'sit amet erat nulla tempus vivamus',
    'vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat',
    'sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id',
    'sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut'
  ],
  [
    'araff0@themeforest.net',
    'rigglesden1@mapy.cz',
    'gmonelli2@earthlink.net',
    'llevene3@redcross.org',
    'bslader4@networksolutions.com',
    'araff0@themeforest.net',
    'rigglesden1@mapy.cz',
    'gmonelli2@earthlink.net',
    'llevene3@redcross.org',
    'bslader4@networksolutions.com'
  ],
  ['1', '2', '3', '4', '5', '1', '2', '3', '4', '5'],
  ['Avivah', 'Roshelle', 'Godfree', 'Lovell', 'Bentley', 'Avivah', 'Roshelle', 'Godfree', 'Lovell', 'Bentley']
];
