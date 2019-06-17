export interface Game {
    id: string;
    name: string;
    platform: number;
    platformName: string;
    numHrsComplete: number;
    imgUrl: string;
    priority: number;
    compDate: Date;
}
