class Automobil {
  static instanceNumber: number

  constructor(
    private marka: string,
    private godiste: number,
  ) {
    Automobil.instanceNumber = Automobil.instanceNumber ?? 0
    Automobil.instanceNumber += 1
  }

  static GetCreatedInstances() {
    return Automobil.instanceNumber
  }
}

console.log(Automobil.GetCreatedInstances())
console.log(new Automobil('BMW', 2023))
console.log(Automobil.GetCreatedInstances())
console.log(new Automobil('VW', 2023))
console.log(Automobil.GetCreatedInstances())
console.log(new Automobil('Mercedes', 2023))
console.log(Automobil.GetCreatedInstances())
