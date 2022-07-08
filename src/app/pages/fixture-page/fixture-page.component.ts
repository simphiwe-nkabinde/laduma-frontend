import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixture-page',
  templateUrl: './fixture-page.component.html',
  styleUrls: ['./fixture-page.component.scss']
})
export class FixturePageComponent implements OnInit {

  matches: string[] = ['mamelodi vs orlando', 'k. chiefs vs g. arrows', 'mamelodi vs orlando', 'k. chiefs vs g. arrows', 'mamelodi vs orlando', 'k. chiefs vs g. arrows', 'mamelodi vs orlando', 'k. chiefs vs g. arrows',]

  constructor() { }

  ngOnInit(): void {
  }

}
