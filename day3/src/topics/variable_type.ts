export const variabletype = () => {

    // Primitive Type
    // Advanced Type
    // Special Type

    const age: number = 30
    const pi: number = 3.14
    const price: number = 100.50
    const score: number = -35

    console.log(age)
    console.log(pi)
    console.log(price)
    console.log(score)

    const fname: string = "John"
    const address: string = "Bangkok"
    const message: string = `Hello, ${fname}`

    console.log(fname)
    console.log(address)
    console.log(message)

    const isAdult: boolean = true
    const isStudent: boolean = false

    console.log(isAdult)
    console.log(isStudent)

    const numbers: number[] = [1, 2, 3, 4, 5]
    const names: string[] = ["Alice", "Bob", "Charlie"]
    const people: Array<string> = ["Alice", "Bob", "Charlie"] // เขียนแบบ Generic
    const isAdults: boolean[] = [true, false, true]

    // console.log(numbers[4])
    // console.log(names[1])
    // console.log(people[2])

    const person: [string, number] = ["Alice", 30] // Tuple

    // console.log(person[0])
    // console.log(person[1])

    enum Color {
        Red,
        Green,
        Blue
    }

    const color: Color = Color.Red
    // console.log(color)

    const user: { name: string; age: number }[] = [
        {
            name: "Alice",
            age: 30
        },
        {
            name: "Bob",
            age: 25
        }
    ]
    console.log("User 1:", user[0].name, user[0].age)
    console.log("User 2:", user[1].name, user[1].age)
}


