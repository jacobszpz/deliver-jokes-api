import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { JokeType } from '../joke-type/joke-type';

@Entity()
export class Joke {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => JokeType, (type) => type.name)
    type: JokeType;

    @Column()
    setup: string;

    @Column()
    punchline: string;
}
