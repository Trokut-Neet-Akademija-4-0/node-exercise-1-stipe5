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
import Kosarica from './Kosarica'
import Adresa from './Adresa'
import ProizvodKupac from './ProizvodKupac'

@Index('Kupac_pkey', ['kupacId'], { unique: true })
@Entity('Kupac', { schema: 'public' })
export default class Kupac extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'kupac_id' })
  kupacId!: number

  @Column('character varying', { name: 'email', length: 255 })
  email!: string

  @Column('character varying', { name: 'ime', length: 255 })
  ime!: string

  @Column('character varying', { name: 'prezime', length: 255 })
  prezime!: string

  @Column('character varying', { name: 'br_telefona', length: 32 })
  brTelefona!: string

  @OneToMany(() => Kosarica, (kosarica) => kosarica.kupac)
  kosaricas!: Kosarica[]

  @ManyToOne(() => Adresa, (adresa) => adresa.kupacs)
  @JoinColumn([{ name: 'adresa', referencedColumnName: 'adresaId' }])
  adresa!: Adresa

  @ManyToOne(() => Kupac, (kupac) => kupac.kupacs)
  @JoinColumn([{ name: 'kupac_dostava_id', referencedColumnName: 'kupacId' }])
  kupacDostava!: Kupac

  @OneToMany(() => Kupac, (kupac) => kupac.kupacDostava)
  kupacs!: Kupac[]

  @OneToMany(() => ProizvodKupac, (proizvodKupac) => proizvodKupac.kupac)
  proizvodKupacs!: ProizvodKupac[]
}
