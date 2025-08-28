import { useReducer } from "react";

export const FormEx = () => {
  const formReducer = (state, action) =>
    action.type === "set" ? { ...state, ...action } : state;

  const [formData, setFormData] = useReducer(formReducer, {
    name: "",
    age: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormData({
      type: "set",
      output: `${formData.name} is ${formData.age} years old`,
    });
  };

  return (
    <div>
      <h1>{formData.output}</h1>
      <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
        <input
          className="border p-2"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => setFormData({ type: "set", name: e.target.value })}
        />
        <input
          className="border p-2"
          type="number"
          min="0"
          max="90"
          placeholder="Age"
          value={formData.age}
          onChange={(e) => setFormData({ type: "set", age: e.target.value })}
        />
        <button className="border p-2 bg-blue-400" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
