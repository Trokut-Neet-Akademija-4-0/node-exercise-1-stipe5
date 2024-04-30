class BankovniRacun {
  constructor(private stanje: number) {}

  uplata(iznos: number): void {
    this.stanje += iznos
  }
  isplata(iznos: number) {
    if (iznos < this.stanje) {
      this.stanje -= iznos
      return true
    } else {
      return false
    }
  }
  dohvatiStanje(): number {
    return this.stanje
  }
}

const racun1 = new BankovniRacun(1500)
console.log('Početno stanje: ', racun1.dohvatiStanje())
racun1.uplata(500)
console.log('Stanje nakon uplate od 500: ', racun1.dohvatiStanje())
racun1.isplata(700)
console.log('Stanje nakon isplate od 700: ', racun1.dohvatiStanje())
racun1.isplata(2000)
console.log('Stanje nakon prevelike isplate: ', racun1.dohvatiStanje())
