import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-page',
  templateUrl: './match-page.component.html',
  styleUrls: ['./match-page.component.scss']
})
export class MatchPageComponent implements OnInit {

  players: string[] = ['jacob mabuza', 'joseph sithole', 'helen goboza', 'fistos maganga']

  constructor() { }

  ngOnInit(): void {
  }

}
