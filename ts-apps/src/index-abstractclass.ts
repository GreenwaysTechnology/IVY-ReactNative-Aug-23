abstract class Animal {
    //abstract methods
    abstract eat():string 
    //non abstract method
    saveAnimal(){
        console.log('Save animals from the Hunter and Global warming')
    }
}
class Tiger extends Animal {
    eat(): string {
        return 'Tiger eats'
    }
}
let tiger = new Tiger()
console.log(tiger.eat())
tiger.saveAnimal()