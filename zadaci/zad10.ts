class Kutija<T> {
  sadrzaj: T[]

  constructor() {
    this.sadrzaj = []
  }

  dodajStvar(stvar: T) {
    this.sadrzaj.push(stvar)
  }
}

const kutijaBrojeva = new Kutija<number>()

kutijaBrojeva.dodajStvar(1)
kutijaBrojeva.dodajStvar(2)
console.log(kutijaBrojeva.sadrzaj)

const KutijaStringova = new Kutija<string>()

KutijaStringova.dodajStvar('test1')
KutijaStringova.dodajStvar('test2')
console.log(KutijaStringova.sadrzaj)
