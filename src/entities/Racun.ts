/* eslint-disable import/no-cycle */
import {
  BaseEntity,
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import Kosarica from './Kosarica'

@Index('Racun_pkey', ['racunId'], { unique: true })
@Entity('Racun', { schema: 'public' })
export default class Racun extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'racun_id' })
  racunId!: number

  @Column('numeric', { name: 'total', precision: 10, scale: 2 })
  total!: string

  @Column('integer', { name: 'porez' })
  porez!: number

  @Column('integer', { name: 'nacin_placanja' })
  nacinPlacanja!: number

  @Column('character varying', { name: 'jir', length: 1024 })
  jir!: string

  @Column('character varying', { name: 'id_uplate', length: 1024 })
  idUplate!: string

  @OneToMany(() => Kosarica, (kosarica) => kosarica.racun)
  kosaricas!: Kosarica[]
}
