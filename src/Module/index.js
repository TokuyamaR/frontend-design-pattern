/*
モジュールパターンとは
コードを再利用可能な小さな部品に分割する
*/

// 基本的なdefault export とnamed exportなのでコードの記載は割愛

// ダイナミックインポート
// オンデマンドにモジュールをインポートできる

const button = document.getElementById("btn");

button.addEventListener("click", () => {
  import("./math.js").then((module) => {
    console.log("Add:", module.add(3, 3));
    console.log("Multiple:", module.multiply(3));

    const button = document.getElementById("btn");
    button.innerHTML = "Check the console";
  });
});
