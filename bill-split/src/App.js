import { useState } from "react";
import FriendMenu from "./FriendMenu";
import SplitMenu from "./SplitMenu";
function App() {
  const [friends, setFriends] = useState([
    {
      id: 1,
      name: "Zhangsan",
      banlance: 7,
      image: "",
    },
    {
      id: 2,
      name: "Lisi",
      banlance: -7,
      image: "",
    },
    {
      id: 3,
      name: "Wangwu",
      banlance: 0,
      image: "",
    },
  ]);
  const [selected, setSelected] = useState(null);
  return (
    <div className="container">
      <FriendMenu
        friends={friends}
        setFriends={setFriends}
        setSelected={setSelected}
      ></FriendMenu>
      <SplitMenu
        selected={selected}
        friends={friends}
        setFriends={setFriends}
        classes="card"
      ></SplitMenu>
    </div>
  );
}
export default App;
