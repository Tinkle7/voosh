// import "./App.css";
import Book from "./Components/Book";
import Home from "./Components/Home";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Home />
      <ChakraProvider>
        <Book />
      </ChakraProvider>
    </div>
  );
}

export default App;
