import { GlobalProvider } from "./context/GlobalContext";
import Header from "./components/Header"
function App() {


  return (
    <>
    <GlobalProvider>
      <Header />
      
    </GlobalProvider>
    
      
    </>
  )
}

export default App
