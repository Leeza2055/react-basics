import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Home } from "./pages/Home";
import { NopPage } from "./pages/NopPage";
import { PostCreate } from "./pages/PostCreate";
import { SimpleEx } from "./pages/SimpleEx";
import { FormEx } from "./pages/FormEx";
import { ObjectEx } from "./pages/ObjectEx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<SimpleEx />} />
            <Route path="/form" element={<FormEx />} />
            <Route path="/object" element={<ObjectEx />} />
            {/* <Route index element={<Home />} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/create" element={<PostCreate />} />
            <Route path="*" element={<NopPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
