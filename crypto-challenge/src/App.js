import { useEffect, useState } from "react";

function App() {
  // * API 받아올 때까지 로딩
  const [loading, setLoading] = useState(true);

  // * input 값 받아오기
  const [value, setValue] = useState(0);

  // * input field
  const [inputToggle, setInputToogle] = useState(true);

  // * Crypto 가격 받아오기
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  // * Crypto 가격 환산하기
  const [price, setPrice] = useState(0);

  return (
    <div>
      <h1>Crypto Exchange Converter</h1>

      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select
          onChange={(event) => {
            setPrice(event.target.value);
            event.target.value === "0" ? setInputToogle(true) : setInputToogle(false);
          }}
        >
          <option value={0}>Select</option>
          {coins.map((coin) => (
            // ?: 해당하는 코인이 선택 되었을 때, 그 코인의 값을 price로 넘겨준다.
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol})
            </option>
          ))}
        </select>
      )}
      <h3>Current Price</h3>
      <form>
        <input
          disabled={inputToggle}
          onChange={(prev) => setValue(prev.target.value)}
          type="text"
          placeholder={inputToggle ? "Select Coin Type" : "How much are you going to exchange?"}
        />
        <label>$</label>
      </form>
      <h2>{value === 0 || price === 0 ? "" : value / Math.round(price)}</h2>
    </div>
  );
}

export default App;
