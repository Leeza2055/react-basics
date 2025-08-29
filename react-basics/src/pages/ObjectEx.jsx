import { useReducer, useRef } from "react";
import { postsReducer } from "../postsReducer";

export const ObjectEx = () => {
  // const [state, dispatch] = useReducer(reducer, initialArg, init?);
  const titleRef = useRef();
  //Initial posts

  const initPosts = () => {
    return [{ id: 1, title: "post one", likes: 0 }];
  };

  // Posts reducer function

  const [posts, setPosts] = useReducer(postsReducer, null, initPosts);
  console.log(posts);
  const handleAdd = () => {
    setPosts({ type: "add", title: titleRef.current.value });
  };

  const handleDelete = (id) => {
    setPosts({ type: "delete", id });
  };

  const handleLike = (id) => {
    setPosts({ type: "like", id });
  };

  return (
    <div>
      <input className="border" type="text" ref={titleRef} />
      <button onClick={handleAdd}>Add</button>
      {/* posts */}
      {posts.length > 0 &&
        posts.map((p) => (
          <div key={p.id} className="flex gap-3">
            <h2>{p.title}</h2>
            <button
              className="border bg-red-200"
              onClick={() => handleDelete(p.id)}
            >
              Delete
            </button>
            <button
              className="border bg-red-200"
              onClick={() => handleLike(p.id)}
            >
              Like {p.likes}
            </button>
          </div>
        ))}
    </div>
  );
};
