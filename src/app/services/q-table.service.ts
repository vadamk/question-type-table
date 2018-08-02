import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import {
  TableQuestionAnswer,
  TableQuestionStructure
} from '../models/question-table.model';

@Injectable()
export class QTableService {

  _answer: TableQuestionAnswer;
  _structure: TableQuestionStructure;

  answer = new Subject<TableQuestionAnswer>();
  structure = new Subject<TableQuestionStructure>();

  constructor() {
  }

  init(
    structure: TableQuestionStructure,
    answers: TableQuestionAnswer
  ) {

    // Set default value for answer and structure
    this._answer = answers;
    this._structure = structure;
    this.answer.next(this._answer);
    this.structure.next(this._structure);
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
}
