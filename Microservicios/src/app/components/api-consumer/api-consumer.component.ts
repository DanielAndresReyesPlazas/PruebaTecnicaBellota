import { Component } from '@angular/core';
import { ApiConsumerService } from 'src/app/services/api-consumer.service';

@Component({
  selector: 'app-api-consumer',
  templateUrl: './api-consumer.component.html',
  styleUrls: ['./api-consumer.component.css'],
})
export class ApiConsumerComponent {
  users: any[];
  usersRight: any[];
  usersLeft: any[];

  constructor(private apiConsumerService: ApiConsumerService) {
    this.users = [];
    this.usersRight = [];
    this.usersLeft = [];
  }

  fillInfo(page: String) {
    this.apiConsumerService.changePage(page).subscribe((users) => {
      this.users = users.data;
    });
    this.usersLeft = this.users.slice(0, 5);
    this.usersRight = this.users.slice(5, 10);
  }

  pageTen() {
    this.fillInfo('9');
  }
  pageNine() {
    this.fillInfo('8');
  }
  pageEight() {
    this.fillInfo('7');
  }
  pageSeven() {
    this.fillInfo('6');
  }
  pageSix() {
    this.fillInfo('5');
  }
  pageFive() {
    this.fillInfo('4');
  }
  pageFour() {
    this.fillInfo('3');
  }
  pageThree() {
    this.fillInfo('2');
  }
  pageTwo() {
    this.fillInfo('1');
  }
  pageOne() {
    this.fillInfo('0');
  }
}
