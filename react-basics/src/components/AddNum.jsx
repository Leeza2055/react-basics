export const AddNum = (props) => {
  return (
    <>
      <h1 className={props.myStyle}>Number is {props.count}</h1>
      <button
        onClick={props.handleAdd}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Click
      </button>
      {props.children}
    </>
  );
};
