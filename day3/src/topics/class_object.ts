
export const classObject = () => {

    class Person {

        name: string 

        constructor(name: string) {
            this.name = name
        }

        greet(): string {
            return `Hello, my name is ${this.name}`
        }
    }

    const person1 = new Person("Alice");
    console.log(person1.greet());

    class Car {

        private speed: number = 0

        constructor(public brand: string) {}

        accelerate(amount: number): void {
            this.speed += amount
            console.log(` ${this.brand} speed: ${this.speed} km/h`)
        }
    }

    // const myCar = new Car("Toyota")
    // myCar.accelerate(20)
    // //myCar.speed = 

    class Animal { 

        protected name: string

        constructor(name: string) {
            this.name = name
        }

        makeSound(): void {
            console.log("Some generic animal sound")
        }
    }

    class Dog extends Animal {

        private age: number

        constructor(name: string, age: number) {
            super(name)
            this.age = age
        }

        makeSound(): void {
            console.log("Woof!")
        }

        getInfo(): string {
            return `${this.name} is ${this.age} years old.`
        }
    }
    // // const dog = new Dog("Buddy", 3)
    // dog.makeSound()
    // console.log(dog.getInfo())


    interface CanFly {
        fly(): void
    }

    interface CanSwim {
        swim(): void
    }

    class Bird implements CanFly {
        fly(): void {
            console.log("Bird is flying")
        }
    }

    class Fish implements CanSwim {
        swim(): void {
            console.log("Fish is swimming")
        }
    }   

    class Duck implements CanFly, CanSwim {
        fly(): void {
            console.log("Duck is flying")
        }

        swim(): void {
            console.log("Duck is swimming")
        }
    }

    const bird = new Bird()
     bird.fly()
     
    const fish = new Fish()
    fish.swim()

    const duck = new Duck()
    duck.fly()
    duck.swim()

}