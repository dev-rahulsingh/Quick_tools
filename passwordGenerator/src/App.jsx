import { useCallback, useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numCount, setNumCount] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");
  const [refresh, setRefresh] = useState(false);

  const generator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numCount) str += "0123456789";
    if (char) str += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    for (let index = 0; index < length; index++) {
      const newPass = Math.floor(Math.random() * str.length);

      password += str[newPass];
    }
    return setPassword(password);
  }, [length, numCount, char]);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    generator();
  }, [length, numCount, char, refresh]);
  return (
    <div>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
      <div className="pass-box block text-center mt-5">
        <input
          type="text"
          placeholder="Password"
          value={password}
          className="bg-white p-3"
          readOnly
        />
        <button
          className="bg-blue-600 text-white px-4 py-3 rounded cursor-pointer"
          onClick={copyPassword}
        >
          Copy
        </button>

        <div className="depend mt-2 text-white">
          <input
            type="range"
            min={6}
            max={16}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label> {length} </label>
          <input
            type="checkbox"
            defaultChecked={numCount}
            className="ml-3"
            id="numb"
            onChange={() => setNumCount(!numCount)}
          />
          <label htmlFor="numb"> Number </label>
          <input
            type="checkbox"
            className="ml-3"
            id="symbols"
            onChange={() => setChar(!char)}
          />
          <label htmlFor="symbols"> Symbols </label>
        </div>
        <button
          className="bg-red-600 text-white px-4 py-3 rounded text-center mt-6 cursor-pointer"
          onClick={() => setRefresh(!refresh)}
        >
          Refresh
        </button>
      </div>
    </div>
  );
}

export default App;
