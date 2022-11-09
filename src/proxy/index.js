/////////////////////////////////////
// Proxyパターンとは
// ・対象のobjectを直接操作するのではなく、proxyオブジェクトを通して対象を操作する
/////////////////////////////////////

const person = {
  name: "John",
  age: 30,
  sex: "male",
  country: "Japan",
};

const personProxy = new Proxy(person, {});
