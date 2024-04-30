/* eslint-disable import/no-cycle */
import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import Proizvod from './Proizvod'

@Index('Slike_pkey', ['slikeId'], { unique: true })
@Entity('Slike', { schema: 'public' })
export default class Slike extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'slike_id' })
  slikeId!: number

  @Column('character varying', { name: 'link', length: 2048 })
  link!: string

  @Column('character varying', { name: 'opis', length: 512 })
  opis!: string

  @Column('character varying', { name: 'naziv', length: 255 })
  naziv!: string

  @Column('boolean', { name: 'is_thumbnail', default: () => 'false' })
  isThumbnail!: boolean

  @ManyToOne(() => Proizvod, (proizvod) => proizvod.slikes)
  @JoinColumn([{ name: 'proizvod_id', referencedColumnName: 'proizvodId' }])
  proizvod!: Proizvod
}
