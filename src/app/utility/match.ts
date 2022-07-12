export class Match {

    matchEvents: any[] = []

    constructor(allMatchEvents: {}[], matchId: string) {
        let filteredMatchEvents  = allMatchEvents.filter((matchEvent:any) => {
            return matchEvent.attributes['Match_ID'] == matchId;
          });
        this.matchEvents = filteredMatchEvents.map((matchEvent: any) => {
            matchEvent.attributes.id = matchEvent.id;
            return matchEvent.attributes;
        })
    }

    //GETTERS

    getHomeTeam(): string {
        return this.teamsAndScores().homeTeam;
    }
    getAwayTeam(): string {
        return this.teamsAndScores().awayTeam;
    }
    getHomeScore(): number {
        return this.teamsAndScores().homeScore;
    }
    getAwayScore(): number {
        return this.teamsAndScores().awayScore;
    }
    getMatchDate(): Date {
        const date: string = this.matchEvents[0]['Date'];
        return new Date(date);
    }
    getLeague(): string {
        const league = this.matchEvents[0]['League'];
        return league;
    }
    getHomeManager(): string {
        
        const homeTeam = this.teamsAndScores().homeTeam;
        const manager = this.matchEvents.find(event => event['Team'] == homeTeam)['Manager'];
        return manager;
    }
    getAwayManager(): string {
        
        const awayTeam = this.teamsAndScores().awayTeam;
        const manager = this.matchEvents.find(event => event['Team'] == awayTeam)['Manager'];
        return manager;
    }
    getHomePlayers(): string[] {
        const homeTeam = this.teamsAndScores().homeTeam;
        let homeTeamEvents = this.matchEvents.filter(matchEvent => {
            return matchEvent['Team'] == homeTeam
        })
        let players = homeTeamEvents.map(matchEvent => {
            return matchEvent['Player_Name'];
        })
        //remove duplicates
        let playerSet = new Set(players);
        let homePlayers = Array.from(playerSet);

        return homePlayers;
    }
    getAwayPlayers(): string[] {
        const awayTeam = this.teamsAndScores().awayTeam;
        let awayTeamEvents = this.matchEvents.filter(matchEvent => {
            return matchEvent['Team'] == awayTeam
        })
        let players = awayTeamEvents.map(matchEvent => {
            return matchEvent['Player_Name'];
        })
        //remove duplicates
        let playerSet = new Set(players);
        let awayPlayers = Array.from(playerSet);
        
        return awayPlayers;
    }

    //PRIVATE FUNCTIONS
    /**
     * extracts team names and scores from the game string
     * @param game 
     * @returns object of home and away team
     */
    private teamsAndScores(): {homeTeam:string, awayTeam: string, homeScore: number, awayScore:number} {
        
        const game: string = this.matchEvents[0]['Game']; //eg. 'Mamelodi Sundowns vs Lamontville Golden Arrows - 6:0'
        //seperator indexes
        let vsIndex = game.indexOf('vs');
        let hyphenIndex = game.indexOf('-');
        
        //team names
        const homeTeam = game.slice(0, vsIndex - 1);
        const awayTeam = game.slice(vsIndex + 3, hyphenIndex -1);
        const score = game.slice(hyphenIndex + 1);
        const homeScore = parseInt(score.split(':')[0])
        const awayScore = parseInt(score.split(':')[1])
    
        return {
          homeTeam: homeTeam,
          awayTeam: awayTeam,
          homeScore: homeScore,
          awayScore: awayScore
        }
      }
}