import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages";
import { useEffect } from "react";
function App() {
  const [token, setToken] = useState();
  function getToken() {
    let tok: any = localStorage.getItem("token");
    tok = JSON.parse(tok)?.token;
    setToken(tok);
    return tok;
  }
  useEffect(() => {
    getToken();
  }, [token]);
  return (
    <BrowserRouter>
      <Pages userToken={token} />
    </BrowserRouter>
  );
}

export default App;
