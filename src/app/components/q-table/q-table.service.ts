import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import {
  TableQuestionAnswer,
  TableQuestionStructure
} from '../../models/question-table.model';

@Injectable()
export class QTableService {

  _answer: TableQuestionAnswer;
  _structure: TableQuestionStructure;

  answer = new Subject<TableQuestionAnswer>();
  structure = new Subject<TableQuestionStructure>();

  constructor() { }

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

  public reorderColumn({ dragIndex, dropIndex }) {
    // change answer row position
    this._structure.columns = this.arrayMove(
      this._structure.columns,
      dragIndex,
      dropIndex
    );
    this.structure.next(this._structure);
  }

  public reorderRow({ dragIndex, dropIndex }) {

    // strange primeng behavior
    const fixDropIndex = dropIndex > dragIndex ? dropIndex - 1 : dropIndex;

    // change answer row position
    this._structure.rows = this.arrayMove(
      this._structure.rows,
      dragIndex,
      fixDropIndex
    );
    this.structure.next(this._structure);
  }

  public editAnswer(
    newValue: string,
    rowIndex: number,
    columnIndex: number
  ) {

    // stop method if the value hasn't changed
    if (this._answer[rowIndex][columnIndex] === newValue) {
      return;
    }

    // change answer
    this._answer[rowIndex][columnIndex] = newValue;
    this.answer.next(this._answer);
  }

  public editColumnTitle(
    newValue: string,
    columnIndex: number
  ) {

    // stop method if the value hasn't changed
    if (this._structure.columns[columnIndex] === newValue) {
      return;
    }

    // change column name
    this._structure.columns[columnIndex] = newValue;
    this.structure.next(this._structure);
  }

  public editRowTitle(
    newValue: string,
    rowIndex: number
  ) {

    // stop method if the value hasn't changed
    if (this._structure.rows[rowIndex] === newValue) {
      return;
    }

    // change row title
    this._structure.rows[rowIndex] = newValue;
    this.structure.next(this._structure);
  }

  public removeColumn(columnIndex: number) {

    // Remove row from answers
    this._answer = this._answer
      .map(item => {
        const tempItem = item;
        tempItem.splice(columnIndex, 1);
        return tempItem;
      });
    this.answer.next(this._answer);

    // Remove row title form structure
    this._structure.columns.splice(columnIndex, 1);
    this.structure.next(this._structure);
  }

  public removeRow(rowIndex: number) {

    // Remove row from answers
    this._answer.splice(rowIndex, 1);
    this.answer.next(this._answer);

    // Remove row title form structure
    this._structure.rows.splice(rowIndex, 1);
    this.structure.next(this._structure);
  }

  /**
   * Change position of element in array
   * @param  {any[]} arr - this array
   * @param  {number} oldIndex - start element index in array
   * @param  {number} newIndex - target element index in array
   */
  private arrayMove(
    arr: any[],
    oldIndex: number,
    newIndex: number
  ): any[] {
    const newArr = arr;
    newArr.splice(newIndex, 0, newArr.splice(oldIndex, 1)[0]);
    return newArr;
  }
}
