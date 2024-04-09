abstract class KućniLjubimac {
  constructor(
    private ime: string,
    private starost: number,
  ) {}

  abstract glasajSe(): void

  getIme(): string {
    return this.ime
  }
  getStarost(): number {
    return this.starost
  }

  setIme(ime: string): void {
    this.ime = ime
  }
  setStarost(starost: number): void {
    this.starost = starost
  }
}

class Pas extends KućniLjubimac {
  constructor(
    ime: string,
    starost: number,
    private pasmina: string,
  ) {
    super(ime, starost)
  }

  glasajSe() {
    return 'Vau'
  }
  setPasmina(pasmina: string): void {
    this.pasmina = pasmina
  }
  getPasmina(): string {
    return this.pasmina
  }
}

class Mačka extends KućniLjubimac {
  constructor(
    ime: string,
    starost: number,
    private vrsta: string,
  ) {
    super(ime, starost)
  }

  glasajSe() {
    return 'Mjau'
  }
  setVrsta(vrsta: string): void {
    this.vrsta = vrsta
  }
  getVrsta(): string {
    return this.vrsta
  }
}

const macka = new Mačka('Maca', 5, 'neka tamo')
console.log(macka.glasajSe())
macka.setIme('Maza')
macka.setVrsta('Tabby')
console.log(macka.getIme(), macka.getVrsta())
const pas = new Pas('Peso', 5, 'labrador')
pas.setIme('Wendy')
pas.setPasmina('Zlatni retriever')
console.log(pas.getIme(), pas.getPasmina())
console.log(pas.glasajSe())
