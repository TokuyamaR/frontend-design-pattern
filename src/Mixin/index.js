/*
ミックスインパターンとは
継承を行わずにオブジェクトやクラスに機能を追加する
*/

// WARNING:
// 現在のReactではミックスインパターンは非推奨。
// コードを不用意に複雑にし、保守や再利用を困難にするため。
// この回避策としてHOCが推奨されているが、現在はhookにより置き換えが可能なため使われることは少ない。

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const dogFunctionality = {
  bark: () => console.log("Woof"),
  wagTail: () => console.log("Wagging my tail"),
  play: () => console.log("Playing"),
};

Object.assign(Dog.prototype, dogFunctionality);

const myPet = new Dog("Mameta");
console.log(myPet.name);
console.log(myPet.bark());
console.log(myPet.play());
