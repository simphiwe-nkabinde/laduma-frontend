import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { filterObject } from 'src/app/utility/utilities';

@Component({
  selector: 'app-match-page',
  templateUrl: './match-page.component.html',
  styleUrls: ['./match-page.component.scss']
})
export class MatchPageComponent implements OnInit {

  homeTeam: string = '';
  awayTeam: string = '';
  homePlayers: any;
  awayPlayers: any;

  constructor(
    private matchService: MatchService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.matchService.getAll()
    .subscribe(res => {
      //get match id from url params
      let matchId = this.route.snapshot.paramMap.get('id');
      matchId = String(matchId);
      
      //filter match events by match id
      let matchEvents = res.data.filter((property:any) => {
        return property.attributes['Match_ID'] == matchId;
      })

      let attributes = matchEvents.map((matchEvent:any) => {
        return matchEvent.attributes;
      })

      //team names
      let game = attributes[0]['Game'];
      this.homeTeam = this.getTeamsNames(game).homeTeam;
      this.awayTeam = this.getTeamsNames(game).awayTeam;

      this.homePlayers = filterObject(attributes.map((matchEvent:any) => matchEvent['Team'] = this.homeTeam), ['Player_Name'])
      this.awayPlayers = filterObject(attributes.map((matchEvent:any) => matchEvent['Team'] = this.awayTeam), ['Player_Name'])
    })
  }

  /**
   * extracts the names of the home team and away team from the game string
   * @param game eg. 'Mamelodi Sundowns vs Lamontville Golden Arrows - 6:0'
   * @returns object of home and away team
   */
  getTeamsNames(game: string): {homeTeam: string, awayTeam: string} {
    //seperator indexes
    
    let vsIndex = game.indexOf('vs');
    let hyphenIndex = game.indexOf('-');
    
    //team names
    const homeTeam = game.slice(0, vsIndex - 1);
    const awayTeam = game.slice(vsIndex + 3, hyphenIndex -1)

    return {
      homeTeam: homeTeam,
      awayTeam: awayTeam
    }
  }

}
