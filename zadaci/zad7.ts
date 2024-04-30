interface Oblik {
  povrsina(): number
  opseg(): number
}

class Krug implements Oblik {
  constructor(public radius: number) {}
  povrsina(): number {
    return this.radius * this.radius * Math.PI
  }
  opseg(): number {
    return 2 * this.radius * Math.PI
  }
}

class Pravokutnik implements Oblik {
  constructor(
    public visina: number,
    public sirina: number,
  ) {}
  povrsina(): number {
    return this.visina * this.sirina
  }
  opseg(): number {
    return 2 * (this.sirina + this.visina)
  }
}

let krug = new Krug(1)
console.log(krug.opseg())
console.log(krug.povrsina())
let kocka = new Pravokutnik(1, 2)
console.log(kocka.opseg())
console.log(kocka.povrsina())
