class Castles {
  static #defaultCastle = {
    archer: 10,
    footSoldier: 10,
    cavalry: 10,
    artillery: 10,
  }

  constructor(archer, footSoldier, cavalry, artillery) {
    this.archer = archer || Castles.#defaultCastle.archer
    this.footSoldier = footSoldier || Castles.#defaultCastle.footSoldier
    this.cavalry = cavalry || Castles.#defaultCastle.cavalry
    this.artillery = artillery || Castles.#defaultCastle.artillery
  }

  checkChancesToWin(defenderObject) {
    let counter = 0

    const chances = Object.entries(this).forEach((val) => {
      let key = val[0]
      let entr = val[1]
      if (typeof entr === 'number' && this[key] > defenderObject[key])
        counter += 1
    })
    return [counter, Object.values(defenderObject).length]
  }

  improveArmy() {
    Object.entries(this).forEach((val) => {
      let key = val[0]
      let entr = val[1]
      if (typeof entr === 'number') this[key] += 5
    })
  }

  attack(attackedObject) {
    let [ourArmyChances, maximumChances] =
      this.checkChancesToWin(attackedObject)
    if (ourArmyChances / maximumChances < 0.7) {
      alert(
        `Наши шансы равны ${
          (ourArmyChances * 100) / maximumChances
        }%. Необходимо укрепление!`
      )
    } else {
      alert('Мы усилились! Мы несомненно победим! Наши шансы высоки!')
    }
  }
}

const attacker = new Castles(10, 55, 60, 3)
const defender = new Castles(33, 50, 40, 10)
attacker.attack(defender)

attacker.improveArmy()
attacker.attack(defender)
attacker.improveArmy()
attacker.attack(defender)
