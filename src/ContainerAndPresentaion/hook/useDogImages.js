import react, { useEffect } from "react";

// hookでデータ取得処理を行う
export default function useDogImages() {
  const [dogs, setDogs] = useState();

  useEffect(() => {
    async function fetchDogs() {
      const response = fetch(
        "https://dog.ceo/api/breed/labrador/images/random/6"
      );

      const { message } = response.json();
      setDogs(message);
    }

    fetchDogs();
  }, []);

  return dogs;
}
