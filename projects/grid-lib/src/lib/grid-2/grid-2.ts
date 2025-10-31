import { Component, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'lib-grid-2',
  imports: [],
  templateUrl: './grid-2.html',
  styleUrl: './grid-2.css',
})
export class Grid2 implements OnInit {
  ngOnInit(): void {
    console.log("Today", moment().utc().format());
  }
}