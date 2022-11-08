// 直接objectを作成した場合
let count = 0;

const counter = {
  increment() {
    ++count;
  },
  decrement() {
    --count;
  },
};

Object.freeze(counter());
export { counter };
