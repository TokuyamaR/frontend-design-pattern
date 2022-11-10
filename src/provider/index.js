////////////////////////////////////////////////////////
// Providerパターンとは
// 複数のコンポーネントで共通のデータが利用できるようにする仕組み
// Contextオブジェクトから提供される高階コンポーネントで、使用したい範囲をラップすることで利用できるようにする。
// Contextオブジェクトは、ReactのcreateContextメソッドにて作成可能。
////////////////////////////////////////////////////////

const DataContext = React.createContext();

const App = () => {
  const data = {
    // 適当なデータが入る
  };

  return (
    <div>
      <DataContext.provider value={data}>
        <Sidebar />
        <Main />
      </DataContext.provider>
    </div>
  );
};

const Sidebar = () => <List />;
const Main = () => (
  <div>
    <Header />
    <Contents />
  </div>
);

const Contents = () => <Text />;

const List = () => {
  const { data } = useContext(DataContext);
  return <span>{data.listItem}</span>;
};

const Header = () => {
  const { data } = useContext(DataContext);
  return <h1>{data.title}</h1>;
};

const Text = () => {
  const { data } = useContext(DataContext);
  return <div>{data.text}</div>;
};
