import { useState } from 'react'
import './App.css'

export default function NumberChecker() {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [nextNumbers, setNextNumbers] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    if(value ===""){
      setNumber("");
      setMessage("");
      setNextNumbers([]);
      return;
    }
    const num = parseInt(value,10);
    if (isNaN(num)) {
      setMessage("Please enter a valid number");
      setNextNumbers([]);
      return;
    }
    setNumber(value);

    if (num < 0) {
      setMessage("Enter the positive value");
      setNextNumbers([]);
    } else {
      setMessage("");
      let nextThree = [];
      if (num % 2 === 0) {
        nextThree = [num + 2, num + 4, num + 6];
      } else {
        nextThree = [num + 2, num + 4, num + 6];
      }
      setNextNumbers(nextThree);
    }
  };

  return (
    <div className="container">
      <input
        type="number"
        value={number}
        onChange={handleChange}
        className="input-field"
        placeholder="Enter a number"
      />
      {message && <p className="error-message">{message}</p>}
      {nextNumbers.length > 0 && (
        <div>
          <p className="number-list">{nextNumbers.join(", ")}</p>
        </div>
      )}
    </div>
  );
}
