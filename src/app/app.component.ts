import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { QTableService } from './services/q-table.service';

import {
  TableQuestionAnswer,
  TableQuestionStructure
} from './models/question-table.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [QTableService]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';

  subsritpion = new Subscription();

  modes = [
    {
      label: 'Designer mode',
      value: true
    },
    {
      label: 'Passing mode',
      value: false
    }
  ];

  designerMode = true;

  structure: TableQuestionStructure = {
    numeric: false,
    rows: [],
    columns: []
  };
  answers: TableQuestionAnswer = [];

  constructor(private qTableService: QTableService) { }

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
      .subscribe(answers => this.answers = answers);

    const structureSub = this.qTableService.structure
      .subscribe(structure => this.structure = structure);

    this.subsritpion.add(answerSub);
    this.subsritpion.add(structureSub);
  }

  ngOnInit() {
    this.subscribe();
    this.qTableService.init();
  }

  ngOnDestroy() {
    this.subsritpion.unsubscribe();
  }
}
