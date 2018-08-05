import { Component, OnInit } from '@angular/core';

import { DataService } from './services/data.service';


import {
  TableQuestionAnswer,
  TableQuestionStructure
} from './models/question-table.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})
export class AppComponent implements OnInit {

  structure: TableQuestionStructure;
  answers: TableQuestionAnswer;

  modes = [
    { label: 'Designer mode', value: true },
    { label: 'Passing mode', value: false }
  ];

  designerMode = true;

  constructor(
    private dataService: DataService
  ) { }

  onChangeStructure(structure: TableQuestionStructure) {
    console.log('onChangeStructure: ', structure);
  }

  onChangeAnswers(answers: TableQuestionAnswer) {
    console.log('onChangeAnswers: ', answers);
  }

  ngOnInit() {
    this.dataService.getStructure()
      .subscribe(structure => this.structure = structure);

    this.dataService.getAnswers()
      .subscribe(answers => this.answers = answers);
  }
}
