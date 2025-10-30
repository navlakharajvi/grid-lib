import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-grid',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './grid.html',
  styleUrls: ['./grid.css'],
})
export class Grid implements OnInit {
  @Input() name: string = '';
  @Input() message: string = '';
  constructor() { }

  ngOnInit(): void {
    console.log("My Comp works!");

  }
}
