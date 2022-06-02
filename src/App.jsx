import Profile from "./components/Profile";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Profile />
    </ChakraProvider>
  );
}

export default App;
