import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import { Subscription } from 'rxjs';

import { QTableService } from './q-table.service';

import {
  TableQuestionStructure,
  TableQuestionAnswer
} from '../../models/question-table.model';

@Component({
  selector: 'app-q-table',
  templateUrl: './q-table.component.html',
  styleUrls: ['./q-table.component.scss'],
  providers: [QTableService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QTableComponent implements OnInit, OnDestroy {

  @Input() designerMode = true;
  @Input() structure: TableQuestionStructure;
  @Input() answers: TableQuestionAnswer;

  @Output() changeStructure = new EventEmitter<TableQuestionStructure>();
  @Output() changeAnswers = new EventEmitter<TableQuestionAnswer>();

  _structure: TableQuestionStructure;
  _answers: TableQuestionAnswer;

  subsritpion = new Subscription();

  constructor(
    private qTableService: QTableService
  ) { }

  onReorderColumn(event) {
    this.qTableService.reorderColumn(event);
  }

  onReorderRow(event) {
    this.qTableService.reorderRow(event);
  }

  onEditAnswer(
    value: string,
    rowIndex: number,
    columnIndex: number
  ) {
    this.qTableService.editAnswer(value, rowIndex, columnIndex);
  }

  onEditColumnTitle(
    value: string,
    columnIndex: number
  ) {
    this.qTableService.editColumnTitle(value, columnIndex);
  }

  onEditRowTitle(value: string, rowIndex: number) {
    this.qTableService.editRowTitle(value, rowIndex);
  }

  onAddColumn() {
    this.qTableService.addColumn();
  }

  onAddRow() {
    this.qTableService.addRow();
  }

  onRemoveColumn(removeColumn: number) {
    this.qTableService.removeColumn(removeColumn);
  }

  onRemoveRow(rowIndex: number) {
    this.qTableService.removeRow(rowIndex);
  }

  subscribe() {
    const answerSub = this.qTableService.answer
      .subscribe(answers => {
        this._answers = answers;
        this.changeAnswers.emit(answers);
      });

    const structureSub = this.qTableService.structure
      .subscribe(structure => {
        this._structure = structure;
        this.changeStructure.emit(structure);
      });

    this.subsritpion.add(answerSub);
    this.subsritpion.add(structureSub);
  }

  ngOnInit() {
    this.subscribe();
    this.qTableService.init(this.structure, this.answers);
  }

  ngOnDestroy() {
    this.subsritpion.unsubscribe();
  }
}
