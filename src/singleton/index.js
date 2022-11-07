// Singletonパターンとは
// ・インスタンス化を一度だけ行い、グローバルアクセスできるようなクラス
// 考え方としては、useContextやReduxでの状態管理

// Singletonパターンが適用されていない場合

let counter = 0;

class Counter {
  getInstance() {
    return this;
  }

  getCounter() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}
