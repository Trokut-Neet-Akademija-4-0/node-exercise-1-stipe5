/* eslint-disable import/no-cycle */
import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import Kupac from './Kupac'
import Racun from './Racun'
import ProizvodKupac from './ProizvodKupac'

@Index('Kosarica_pkey', ['kosaricaId'], { unique: true })
@Entity('Kosarica', { schema: 'public' })
export default class Kosarica extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'kosarica_id' })
  kosaricaId!: number

  @Column('boolean', { name: 'is_processed', default: () => 'false' })
  isProcessed!: boolean

  @Column('integer', { name: 'status', default: () => '0' })
  status!: number

  @Column('numeric', { name: 'total', precision: 10, scale: 2 })
  total!: string

  @ManyToOne(() => Kupac, (kupac) => kupac.kosaricas)
  @JoinColumn([{ name: 'kupac_id', referencedColumnName: 'kupacId' }])
  kupac!: Kupac

  @ManyToOne(() => Racun, (racun) => racun.kosaricas)
  @JoinColumn([{ name: 'racun_id', referencedColumnName: 'racunId' }])
  racun!: Racun

  @OneToMany(() => ProizvodKupac, (proizvodKupac) => proizvodKupac.kosarica)
  proizvodKupacs!: ProizvodKupac[]
}
