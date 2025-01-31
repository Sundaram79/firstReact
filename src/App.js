import { useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  async function getAdvice() {
    const adviceFrom = await fetch("https://api.adviceslip.com/advice");
    const data = await adviceFrom.json();
    setAdvice(data.slip.advice);
  }

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
    </div>
  );
}
