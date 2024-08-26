
type Gender = 'male' | 'female'

interface IUser {
    name: string
    age: number
    email: string
    gender: Gender
}
const user: IUser = {
    name: "Ahmed",
    age: 21,
    email: "johndoe@example.com",
    gender: 'male'
}

class Person {
    constructor(protected name: string) {
        console.log(`Hello, Your name is ${this.name}!`)
    }

    sayHello(): void {
        console.log(`Hello, I am ${this.name}!`)
    }
}
const person1 = new Person('Mohamed')
person1.sayHello()

class Student extends Person {
    constructor(protected name: string, private grade: number) {
        super(name)
    }

    sayHello(): void {
        console.log(`Hello, I am a student named ${this.name} and I am in Grade ${this.grade}!`)
    }
}

const student1 = new Student("Ahmed", 21)
student1.sayHello()