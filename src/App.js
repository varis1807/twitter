import { useEffect, useState } from "react";
import { firestore } from "./firebase";

function App() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    let f = async () => {
      let querySnapshot = await firestore.collection("posts").get();
      // console.log(querySnapshot)
      let tempArr = [];

      querySnapshot.forEach((doc) => {
        tempArr.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setPosts(tempArr);
      console.log(tempArr);
    };
    f();
  }, []);
  return (
    <div>
      <ul>
        {posts.map((el) => (
          <li key={el.id}>{el.data.Body}</li>
        ))}
      </ul>

      <input
        type="text"
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            let post = e.currentTarget.value;
            firestore.collection("posts").add({ Body: post });
            e.currentTarget.value="";
          }
        }}
      />
    </div>
  );
}

export default App;
