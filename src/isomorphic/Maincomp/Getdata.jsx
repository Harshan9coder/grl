import React, { useEffect, useState } from "react";
import axios from "axios";
function Getdata() {
  const [post, setpost] = useState({});
  const [id, setId] = useState();
  const [idchange, setidchange] = useState();

  const loaddata = async () => {
    console.log(idchange);
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${idchange}`
    );
    setpost(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    loaddata(idchange);
  }, [idchange]);

  const handelid = () => {
    setidchange(id);
  };

  return (
    <div>
      <input
        type="text"
        name={id}
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <div>{post.title}</div>
      <button type="button" onClick={handelid}>
        click here
      </button>
    </div>
  );
}

export default Getdata;
