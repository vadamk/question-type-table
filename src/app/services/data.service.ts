import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import {
  TableQuestionAnswer,
  TableQuestionStructure
} from '../models/question-table.model';

@Injectable()
export class DataService {

  _answer: TableQuestionAnswer;
  _structure: TableQuestionStructure;

  answer = new Subject<TableQuestionAnswer>();
  structure = new Subject<TableQuestionStructure>();

  constructor() {
  }

  init() {
    this.setDefaultState();
  }

  /**
   * Create new empty row
   */
  public addRow() {

    // Add new empty row to answers
    const newAnswerRow = this._structure.columns.map(() => '');
    this._answer = [...this._answer, newAnswerRow];
    this.answer.next(this._answer);

    // Add new row name to table structure
    const newRowName = 'New row ' + this._structure.rows.length;
    this._structure.rows = [...this._structure.rows, newRowName];
    this.structure.next(this._structure);
  }

  /**
   * Create new empty column
   */
  public addColumn() {

    // Add new column name to table structure
    const newColumnName = 'New column ' + this._structure.columns.length;
    this._structure.columns = [...this._structure.columns, newColumnName];
    this.structure.next(this._structure);

    // Add new empty item to every row
    this._answer = this._answer.map(row => [...row, '']);
    this.answer.next(this._answer);
  }

  /**
   * Set default value for answer and structure
   */
  private setDefaultState() {
    this._answer = defaultAnswer;
    this._structure = defaultStructure;
    this.answer.next(this._answer);
    this.structure.next(this._structure);
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
    'vitae nisi nam ultrices libero non mattis pulvinar nulla'
  ],
  columns: [
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
    'sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut'
  ],
  [
    'araff0@themeforest.net',
    'rigglesden1@mapy.cz',
    'gmonelli2@earthlink.net',
    'llevene3@redcross.org',
    'bslader4@networksolutions.com'
  ],
  ['1', '2', '3', '4', '5'],
  ['Avivah', 'Roshelle', 'Godfree', 'Lovell', 'Bentley']
];
