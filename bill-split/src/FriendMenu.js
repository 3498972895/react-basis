import { useState } from "react";
import Button from "./Button";
import FormItem from "./FormItem";
function FriendMenu({ friends, setFriends, setSelected }) {
  const [hasDisplay, setDisplayState] = useState(false);
  const [friendName, setFriendName] = useState("");
  const [friendPhoto, setFriendPhoto] = useState(
    "https://th.bing.com/th/id/R.eca5b9193ecd43cc941a505b087126d2?rik=6qOY00%2fLYLqXDw&pid=ImgRaw&r=0"
  );
  const triigeringForm = () => {
    setDisplayState((hasDisplay) => !hasDisplay);
  };
  const addOrRemove = (friendName, friendPhoto) => {
    if (friendName === "") return;

    if ([...friends].some((item) => item.name === `${friendName}`)) {
      remove(friendName);
    } else {
      add(friendName, friendPhoto);
    }
    setDisplayState((hasDisplay) => !hasDisplay);
  };
  const remove = (friendName) => {
    setFriends((friends) => [
      ...friends.filter((item) => item.name !== `${friendName}`),
    ]);
  };
  const add = (friendName, friendPhoto) => {
    setFriends((friends) => [
      ...friends,
      {
        id: crypto.randomUUID(),
        name: `${friendName}`,
        banlance: 0,
        image: `${friendPhoto}`,
      },
    ]);
  };
  return (
    <div className="friend card">
      <ul className="friend__list">
        {friends.map((item) => (
          <li key={item.id} className="friend__item">
            <img src={item.image} alt="" className="friend__photo" />
            <div className="friend__info">
              <span className="friend__name">{item.name}</span>
              {item.banlance > 0 && (
                <span className="friend__bill friend__bill--notify">
                  owe you {item.banlance}
                </span>
              )}
              {item.banlance < 0 && (
                <span className="friend__bill friend__bill--warn">
                  you owe {Math.abs(item.banlance)}
                </span>
              )}
              {item.banlance === 0 && (
                <span className="friend__bill "> banlance peace </span>
              )}
            </div>
            <Button onClick={() => setSelected(item)}>select</Button>
          </li>
        ))}
      </ul>
      <Button classes="friend__btn btn--size-middle" onClick={triigeringForm}>
        add/remove
      </Button>
      {hasDisplay && (
        <div className="mask">
          <div className="friend__form card">
            <FormItem className="friend__form-item from-item">
              <label>write the name</label>
              <input
                type="text"
                className="input input--size-small"
                value={friendName}
                id="form-name"
                onChange={(e) => setFriendName(e.target.value)}
              />
            </FormItem>

            <FormItem className="friend__form-item form-item">
              <label>add the photo</label>
              <input
                type="text"
                className="input input--size-small"
                value={friendPhoto}
                id="form-photo"
                onChange={(e) => setFriendPhoto(e.target.value)}
              />
            </FormItem>

            <div className="friend__form-btns">
              <Button
                classes="friend__form-btn"
                onClick={() => addOrRemove(friendName, friendPhoto)}
              >
                toggle
              </Button>
              <Button classes="friend__form-btn" onClick={triigeringForm}>
                close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default FriendMenu;
