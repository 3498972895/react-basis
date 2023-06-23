import FormItem from "./FormItem";
import Button from "./Button";
import { useState } from "react";
function SplitMenu({ friends, setFriends, selected }) {
  const [expense, setExpense] = useState(0);
  const [myExpense, setMyExpense] = useState(0);
  const [whoPaid, setWhoPaid] = useState("you");
  let friendExpense = expense - myExpense;
  const submit = () => {
    if (friendExpense < 0 || expense < 0 || myExpense < 0) return;
    const replace =
      whoPaid === "you"
        ? { ...selected, banlance: friendExpense }
        : { ...selected, banlance: -1 * myExpense };
    setFriends((friends) => [
      ...friends.filter((item) => item.id !== selected.id),
      replace,
    ]);

  };
  return (
    <div className="split-menu card">
      {selected !== null && (
        <>
          <span className="split-menu__title">
            Split Bill With {selected.name}
          </span>
          <FormItem>
            <label>bill expense</label>
            <input
              type="text"
              className="input input--size-small"
              value={expense}
              onChange={(e) => setExpense(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <label>Your expense</label>
            <input
              type="text"
              className="input input--size-small"
              value={myExpense}
              onChange={(e) => setMyExpense(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <label>friend expense</label>
            <input
              type="text"
              className="input input--size-small"
              value={friendExpense}
              disabled
            />
          </FormItem>
          <FormItem>
            <label>who paid for it?</label>
            <select
              value={whoPaid}
              onChange={(e) => setWhoPaid(e.target.value)}
              className="select"
            >
              <option value="you">You</option>
              <option value={selected.name}>{selected.name}</option>
            </select>
          </FormItem>
          <Button classes="split-menu__btn" onClick={submit}>
            Split
          </Button>
        </>
      )}
    </div>
  );
}
export default SplitMenu;
