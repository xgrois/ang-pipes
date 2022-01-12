export interface Hero {
    name: string;
    fly: boolean;
    color: HeroColor
}

export enum HeroColor {
    red, green, blue, white, black
}