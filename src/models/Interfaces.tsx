export interface NavbarProps{
    id: number;
    name: string;
    link: string;
}

export interface CardProps{
    color: string;
    date: string;
    tags: Array<string>;
    rate: number;
    location: string;
    position: string;
    company: string;
}