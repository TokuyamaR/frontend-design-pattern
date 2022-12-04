/*
ファクトリパターンとは
オブジェクトをファクトリ関数(newキーワードを使わずに新しいオブジェクトを返す)を利用して作成する
メモリ効率だけで見れば、毎回新しいオブジェクトを作成するよりは、インスタンスを都度作成する方が良い。
*/

const createUser = ({ name, age, sex }) => ({
  name,
  age,
  sex,
  user() {
    return `名前：${name}, 年齢:${age}, 性別:${sex}`;
  },
});

const user1 = createUser({ name: "bob", age: 30, sex: "Men" });
const user2 = createUser({ name: "Rebecca", age: 26, sex: "Women" });

console.log(user1);
console.log(user2);
