/////////////////////////////////////
// Prototypeパターンとは
// ・複数の同じ型のオブジェクトの間でプロパティを共有する
/////////////////////////////////////

class Human {
  constructor(name) {
    this.name = name;
  }

  clap() {
    return "clap clap!";
  }
}
const human1 = new Human("Emi");

console.log(Human.prototype);
