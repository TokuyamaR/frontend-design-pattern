import React from "react";
import useDogImages from "./useDogImages";

// note: プレゼンテーションコンポーネントは通常stateを持たない(UI表示のためのstateを除く)
export default function DogImages() {
  // hookでデータ取得処理を任せることでclassのようにDogImagesにデータを渡す必要がなくなり、UI表示のみの責務を持たせることができる
  const dogs = useDogImages();

  return dogs.map((dog, i) => <img src={dog} key={i} alt={`${dog}_${i}`} />);
}
