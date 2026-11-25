import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'films' })
export class Film {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  judul: string;

  @Column({ type: 'varchar', length: 100 })
  genre: string;

  @Column({ type: 'int' })
  tahun: number;
}
