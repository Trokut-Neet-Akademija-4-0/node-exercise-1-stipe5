import Osoba from './zad1'
class Student extends Osoba {
  constructor(
    ime: string,
    dob: number,
    private brojIndeksa: number,
  ) {
    super(ime, dob)
  }
}

console.log(new Student('test', 55, 123456))

export default Student
