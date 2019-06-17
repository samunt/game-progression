export interface Game {
    id: string;
    name: string;
    platform: number;
    platformName: string;
    hrsPlayed: number;
    numHrsComplete: number;
    imgUrl: string;
    priority: number;
    compDate: Date;
}
