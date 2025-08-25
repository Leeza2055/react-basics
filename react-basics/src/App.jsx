import { useState } from "react";
import { AddNum } from "./components/AddNum";

function App() {
  const myClass = "text-3xl font-bold mb-4";
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  return (
    <>
      <AddNum myStyle={myClass} handleAdd={handleAdd} count={count}>
        <h1 className="bg-red-500 p-4">Child Element</h1>
      </AddNum>
    </>
  );
}

export default App;
