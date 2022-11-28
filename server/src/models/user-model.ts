import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ length: 250 })
  fullname: string;

  @Column({ unique: true })
  username: string;

  @Column()
  photo: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
