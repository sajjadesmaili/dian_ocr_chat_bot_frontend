import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Login/Login";
import DocumentAssistantPage from "./DocumentAssistantPage/DocumentAssistantPage";
import AppLayout from "./AppLayout";


function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path="/" element={<LoginPage/>}/>
  {/* <Route path="/chatbot" element={<AppLayout/>}/> */}
  <Route path="/chatbot" element={<DocumentAssistantPage/>}/>

</Routes>
</BrowserRouter>
</>
  );
}

export default App;
