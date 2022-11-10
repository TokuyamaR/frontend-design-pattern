////////////////////////////////////////////////////////
// Providerパターンとは
// 複数のコンポーネントで共通のデータが利用できるようにする仕組み
// Contextオブジェクトから提供される高階コンポーネントで、使用したい範囲をラップすることで利用できるようにする。
// Contextオブジェクトは、ReactのcreateContextメソッドにて作成可能。
////////////////////////////////////////////////////////

const DataContext = React.createContext();

const App = () => {
  const data = {
    id: 1,
    name: "Sushi",
    price: 500,
  };

  return (
    <div>
      <DataContext.provider value={data}>
        <Sidebar />
        <MainContents />
      </DataContext.provider>
    </div>
  );
};
