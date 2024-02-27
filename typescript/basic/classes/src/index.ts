//expicit types

class users {
  constructor(
    readonly name: string,
    public age: number,
    private location: string
  ){}

  getUsera(){
    return `Name: ${this.name}\nAge: ${this.age}\nLocation: ${this.location}`
  }
}

const user1 = new users('Mesto', 50,'Turkey')
console.log(user1)
// user1.name = 'Mustafa'//readonly
console.log(user1.name)
console.log(user1.age)
console.log(user1.getUsera())
// console.log(user1.location)//you cant access this because private