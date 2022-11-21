import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { JokeType } from './joke-type';

@Entity()
export class JokeTypeEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: JokeType;
}

