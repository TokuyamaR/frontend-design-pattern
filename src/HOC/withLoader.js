import React, { useEffect, useState } from "react";
export default function withLoader(Element, url) {
  return (props) => {
    const [data, setData] = useState(null, props);

    useEffect(() => {
      async function getData() {
        const res = await fetch(url);
        const data = res.json();
        setData(data);
      }

      getData();
    }, []);

    if (!data) {
      return <div>Loading...</div>;
    }

    return <Element {...props} data={data} />;
  };
}
