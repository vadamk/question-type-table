import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import { Subscription } from 'rxjs';

import { QTableService } from '../../services/q-table.service';

import {
  TableQuestionStructure,
  TableQuestionAnswer
} from '../../models/question-table.model';

@Component({
  selector: 'app-q-table',
  templateUrl: './q-table.component.html',
  styleUrls: ['./q-table.component.scss'],
  providers: [QTableService]
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

  onColReorder(event) {
    console.log('onColReorder: ', event);
  }

  onRowReorder(event) {
    console.log('onRowReorder: ', event);
  }

  onAnswerChange(event) {
    console.log('onAnswerChange: ', event);
  }

  onColumnTitleChange(event) {
    console.log('onColumnTitleChange: ', event);
  }

  onRowTitleChange(event) {
    console.log('onRowTitleChange: ', event);
  }

  onAddColumn() {
    this.qTableService.addColumn();
  }

  onAddRow() {
    this.qTableService.addRow();
  }

  onRemoveColumn(event) {
    console.log('onRemoveColumn: ', event);
  }

  onRemoveRow(event) {
    console.log('onRemoveRow: ', event);
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
