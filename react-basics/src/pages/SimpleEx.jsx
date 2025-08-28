import { useReducer } from "react";

export function SimpleEx() {
  const nameReducer = (state, action) =>
    action.type == "change" ? "jon" : state;
  const [name, setName] = useReducer(nameReducer, "Leeza");

  return (
    <div>
      <h1>{name}</h1>
      <button
        className="h-fit w-fit bg-blue-500 text-white p-2 mt-1"
        onClick={() => setName({ type: "change" })}
      >
        Change Name
      </button>
    </div>
  );
}
