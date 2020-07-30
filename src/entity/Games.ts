import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Games {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    Name: string;

    @Column({ nullable: true })
    RawgID: number;

    @Column({ nullable: true })
    SteamURL: string;

    @Column({ nullable: true })
    Metacritic: number;

    @Column({ nullable: true })
    Genres: string;

    @Column({ nullable: true })
    Indie: boolean;

    @Column({ nullable: true })
    Presence: number;

    @Column({ nullable: true })
    Platform: string;

    @Column({ nullable: true })
    Graphics: string; 

    @Column({ nullable: true })
    Storage: number; 

    @Column({ nullable: true })
    Memory: number;

    @Column({ nullable: true })
    RatingsBreakdown: string;

    @Column({ nullable: true })
    ReleaseDate: string;

    @Column({ nullable: true })
    Soundtrack: boolean;

    @Column({ nullable: true })    
    Franchise: boolean;

    @Column({ nullable: true })
    OriginalCost: number;

    @Column({ nullable: true })
    DiscountedCost: number;

    @Column({ nullable: true })
    Players: string;

    @Column({ nullable: true })
    Controller: boolean;

    @Column({ nullable: true })
    Languages: string;

    @Column({ nullable: true })
    ESRB: string;

    @Column({ nullable: true })
    Achievements: number;

    @Column({ nullable: true })
    Publisher: string;

    @Column({ nullable: true })
    Description: string;

    @Column({ nullable: true })
    Tags: string;
}

