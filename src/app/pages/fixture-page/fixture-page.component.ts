import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { filterObject } from 'src/app/utility/utilities';

@Component({
  selector: 'app-fixture-page',
  templateUrl: './fixture-page.component.html',
  styleUrls: ['./fixture-page.component.scss']
})
export class FixturePageComponent implements OnInit {

  matches: any = [];

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
    this.matchService.getAll()
    .subscribe(res => {
      let attributes: [];
      attributes = res.data.map((matchEvent:any) => {
        return matchEvent.attributes;
      })
      let filtered = filterObject(attributes, ['Game', 'Match_ID'])
      this.matches = filtered
    }, err => {
      console.log(err);
    })
  }
}
