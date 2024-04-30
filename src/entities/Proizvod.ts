/* eslint-disable import/no-cycle */
import {
  BaseEntity,
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import ProizvodKupac from './ProizvodKupac'
import Slike from './Slike'

@Index('Proizvod_pkey', ['proizvodId'], { unique: true })
@Entity('Proizvod', { schema: 'public' })
export default class Proizvod extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'proizvod_id' })
  proizvodId!: number

  @Column('character varying', { name: 'ime_proizvoda', length: 255 })
  imeProizvoda!: string

  @Column('character varying', { name: 'proizvodjac', length: 50 })
  proizvodjac!: string

  @Column('integer', { name: 'kolicina' })
  kolicina!: number

  @Column('numeric', { name: 'cijena', precision: 10, scale: 2 })
  cijena!: number

  @Column('character varying', { name: 'opis', length: 512 })
  opis!: string

  @Column('boolean', { name: 'iswireless', default: () => 'false' })
  iswireless!: boolean

  @Column('integer', { name: 'shape', default: () => '0' })
  shape!: number

  @OneToMany(() => ProizvodKupac, (proizvodKupac) => proizvodKupac.proizvod)
  proizvodKupacs!: ProizvodKupac[]

  @OneToMany(() => Slike, (slike) => slike.proizvod)
  slikes!: Slike[]
}
