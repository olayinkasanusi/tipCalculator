import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [myRating, setMyRating] = useState(0);
  const [myFriendRating, setMyFriendRating] = useState(0);
  const tip = ((myRating + myFriendRating) / 2) * bill;
  const totalBill = tip + bill;
  return (
    <div>
      <Bill
        bill={bill}
        setBill={setBill}
        setMyRating={setMyRating}
        setMyFriendRating={setMyFriendRating}
        myRating={myRating}
        myFriendRating={myFriendRating}
      />
      <TipCalculator bill={bill} tip={tip} totalBill={totalBill} />
      <Reset
        setBill={setBill}
        setMyRating={setMyRating}
        setMyFriendRating={setMyFriendRating}
      />
    </div>
  );
}
function TipCalculator({ tip, totalBill, bill }) {
  return (
    <div>
      <h3>
        You pay ${totalBill.toFixed(2)} (${bill.toFixed(2)}+ ${tip.toFixed(2)}
        tip)
      </h3>
    </div>
  );
}
function Bill({
  bill,
  setBill,
  setMyRating,
  myRating,
  setMyFriendRating,
  myFriendRating,
}) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <span>How much was the bill?</span>
        <input
          value={bill}
          type="number"
          min="0"
          onChange={(e) => {
            setBill(+e.target.value);
          }}
        />
      </div>
      <Rating setRating={setMyRating} myRating={myRating}>
        <span>How much do you like the service?</span>
      </Rating>
      <Rating setRating={setMyFriendRating} myRating={myFriendRating}>
        <span>How did your friend like the service?</span>
      </Rating>
    </form>
  );
}
function Rating({ setRating, children, myRating }) {
  return (
    <div>
      {children}
      <select value={myRating} onChange={(e) => setRating(+e.target.value)}>
        <option value="0">It was Bad (0%)</option>
        <option value="0.1">It was good (10%)</option>
        <option value="0.15">It was very Good (15%)</option>
        <option value="0.2">It was absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
function Reset({ setBill, setMyRating, setMyFriendRating }) {
  return (
    <button
      onClick={() => {
        setBill(0);
        setMyRating(0);
        setMyFriendRating(0);
      }}
    >
      Reset
    </button>
  );
}
