/////////////////////////////////////
// Singletonパターンとは
// ・インスタンス化を一度だけ行い、グローバルアクセスできるようなクラス
// 考え方としては、ReactでのuseContextやReduxでの状態管理だが、mutableかreadonlyかという点で異なる
/////////////////////////////////////

// Singletonパターンが適用されていない場合
let notSingletonCounter = 0;

class NotSingletonCounter {
  getInstance() {
    return this;
  }

  getCounter() {
    return notSingletonCounter;
  }

  increment() {
    return ++notSingletonCounter;
  }

  decrement() {
    return --notSingletonCounter;
  }
}

// 1と2では異なるインスタンスが作成されている
const counter1 = new NotSingletonCounter();
const counter2 = new NotSingletonCounter();

console.log("NotSingletonCounter result", counter1 === counter2); // false
