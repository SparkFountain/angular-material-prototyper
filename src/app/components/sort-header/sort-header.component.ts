import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';

export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

@Component({
  selector: 'app-sort-header',
  templateUrl: './sort-header.component.html',
  styleUrls: ['./sort-header.component.scss'],
})
export class SortHeaderComponent implements OnInit {
  desserts: Dessert[] = [
    { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
    {
      name: 'Ice cream sandwich',
      calories: 237,
      fat: 9,
      carbs: 37,
      protein: 4,
    },
    { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
    { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
    { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 },
  ];

  sortedData: Dessert[];

  constructor() {
    this.sortedData = this.desserts.slice();
  }

  ngOnInit(): void {}

  sortData() {
    return 0;
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
