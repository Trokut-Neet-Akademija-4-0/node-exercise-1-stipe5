class Osoba {
  constructor(
    private ime: string,
    private dob: number,
  ) {}

  setIme(ime: string): void {
    this.ime = ime
  }

  setDob(dob: number): void {
    this.dob = dob
  }

  getIme(): string {
    return this.ime
  }

  getDob(): number {
    return this.dob
  }

  predstaviSe(): string {
    return `Moje ime je ${this.ime} i imam ${this.dob} godina`
  }
}

const osoba = new Osoba('Stjepan', 25)
console.log(osoba.predstaviSe())
export default Osoba
