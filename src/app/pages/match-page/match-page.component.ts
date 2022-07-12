import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { Match } from 'src/app/utility/match';
import { filterObject } from 'src/app/utility/utilities';

@Component({
  selector: 'app-match-page',
  templateUrl: './match-page.component.html',
  styleUrls: ['./match-page.component.scss']
})
export class MatchPageComponent implements OnInit {

  match: any;
  showAwayTeam: boolean =  false;
  showHomeTeam: boolean = true;
  loaded: boolean = false;

  constructor(
    private matchService: MatchService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.loaded =  false;
    let matchId = this.route.snapshot.paramMap.get('id');
    this.matchService.getAll()
    .subscribe(res => {
      let allMatchEvents = res.data;
      this.match = new Match(allMatchEvents, String(matchId));
      this.loaded = true
    }, err => {
      console.log(err);
    })
  };

  toggleTeams(): void {
    this.showHomeTeam = !this.showHomeTeam
    this.showAwayTeam = !this.showAwayTeam;
  }

}
