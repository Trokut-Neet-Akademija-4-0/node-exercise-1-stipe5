class Automobile {
  constructor(
    private model: string,
    private year: number,
    private manufacturer: string,
  ) {}
}

class AutomobileBuilder {
  private model!: string
  private year!: number
  private manufacturer!: string

  setModel(model: string): AutomobileBuilder {
    this.model = model
    return this
  }

  setYear(year: number): AutomobileBuilder {
    this.year = year
    return this
  }

  setManufacturer(manufacturer: string): AutomobileBuilder {
    this.manufacturer = manufacturer
    return this
  }

  build(): Automobile {
    return new Automobile(this.model, this.year, this.manufacturer)
  }
}

const auto = new AutomobileBuilder()
  .setManufacturer('VW')
  .setModel('Golf')
  .setYear(2012)
  .build()

console.log(auto)
