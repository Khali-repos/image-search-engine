import { createContext, useState } from "react";
import Images from "./components/Images";
import Searchbar from "./components/Searchbar";
import useAxios from "./hooks/useAxios";
import Searchclr from "./components/Searchclr";

// Create Context
export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState('');
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=s&client_id=${process.env.REACT_APP_ACCESS_KEY}`);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <ImageContext.Provider value={value}>
      <Searchclr>
        <Searchbar />
        </Searchclr>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;
