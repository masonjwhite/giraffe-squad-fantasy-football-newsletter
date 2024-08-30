export interface Team {
    id: string;
    logo: string;
    name: string;
    coach: string;
    score: number;
    record: string;
    pointsFor: number;
    pointsAgainst: number;
    powerRank: number;
    powerRankText: string;
}

export interface Matchup {
    homeTeam: string;
    awayTeam: string;
}
