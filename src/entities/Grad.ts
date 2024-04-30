/* eslint-disable import/no-cycle */
import {
  BaseEntity,
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import Adresa from './Adresa'

@Index('Grad_pkey', ['gradId'], { unique: true })
@Entity('Grad', { schema: 'public' })
export default class Grad extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'grad_id' })
  gradId!: number

  @Column('character varying', { name: 'postanski_broj', length: 128 })
  postanskiBroj!: string

  @Column('character varying', { name: 'drzava', length: 255 })
  drzava!: string

  @Column('character varying', { name: 'grad', length: 255 })
  grad!: string

  @OneToMany(() => Adresa, (adresa) => adresa.grad)
  adresas!: Adresa[]
}
