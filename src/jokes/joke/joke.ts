import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { JokeTypeEntity } from '../joke-type/joke-type.entity';

@Entity()
export class Joke {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => JokeTypeEntity, (type) => type.name)
    type: JokeTypeEntity;

    @Column()
    setup: string;

    @Column()
    punchline: string;
}
