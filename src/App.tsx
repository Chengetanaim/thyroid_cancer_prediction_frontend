import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("10");

  return (
    <>
      <div>Chasing me {amount} thou' that's inshallah</div>
      <button
        className="bg-black text-white rounded-xl p-1 m-3 cursor-pointer"
        onClick={() => setAmount(`${amount + 0}`)}
      >
        Racks
      </button>
    </>
  );
}

export default App;
