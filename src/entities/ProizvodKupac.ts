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
import Kosarica from './Kosarica'
import Kupac from './Kupac'
import Proizvod from './Proizvod'

@Index('ProizvodKupac_pkey', ['proizvodkupacId'], { unique: true })
@Entity('ProizvodKupac', { schema: 'public' })
export default class ProizvodKupac extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'proizvodkupac_id' })
  proizvodkupacId!: number

  @Column('integer', { name: 'kolicina' })
  kolicina!: number

  @Column('numeric', {
    name: 'cijena',
    nullable: true,
    precision: 10,
    scale: 2,
  })
  cijena!: string | null

  @ManyToOne(() => Kosarica, (kosarica) => kosarica.proizvodKupacs)
  @JoinColumn([{ name: 'kosarica_id', referencedColumnName: 'kosaricaId' }])
  kosarica!: Kosarica

  @ManyToOne(() => Kupac, (kupac) => kupac.proizvodKupacs)
  @JoinColumn([{ name: 'kupac_id', referencedColumnName: 'kupacId' }])
  kupac!: Kupac

  @ManyToOne(() => Proizvod, (proizvod) => proizvod.proizvodKupacs)
  @JoinColumn([{ name: 'proizvod_id', referencedColumnName: 'proizvodId' }])
  proizvod!: Proizvod
}
