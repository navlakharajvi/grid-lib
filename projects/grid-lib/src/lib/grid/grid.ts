import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-grid',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './grid.html',
  styleUrls: ['./grid.css'],
})
export class Grid implements OnInit {
  constructor() {}
  
  ngOnInit(): void {
    console.log("My Comp works!");
    
  }
}
