class hero {
    constructor(nome, idade, tipo) {
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
    }

    atacar() {
      let ataque
  
      switch (this.tipo.toLowerCase()) {
        case "mago":
          ataque = "magia"
          break
        case "guerreiro":
          ataque = "espada"
          break
        case "monge":
          ataque = "artes marciais"
          break
        case "ninja":
          ataque = "shuriken"
          break
        default:
          ataque = "realizou um ataque básico"
      }
      return `O ${this.tipo} ${this.nome} de ${this.idade} anos atacou usando ${ataque}.`
    }
  }
  
  const mago = new hero("Lito", 200, "mago")
  const guerreiro = new hero("Arthur", 34, "guerreiro")
  const monge = new hero("Lee Tan Ang", 102, "monge")
  const ninja = new hero("Mitsu Sato", 27, "ninja")
  
  const herois = [mago, guerreiro, monge, ninja]


  function sortearHeroi() {

    const randomIndice = Math.floor(Math.random() * herois.length)

    return herois[randomIndice]
  }
  
  const heroiSorteado = sortearHeroi()
  console.log(heroiSorteado.atacar())
  