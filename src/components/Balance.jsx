import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../redux/balanceSlice";
import { useState } from "react";

export default function Balance() {
  //компонент потрібно підписати на state, для цього використовуємо useSelector
  //useSelector викликаємо в будь-якому місці компоненту, де потрібно отримати доступ до
  //шматочку стану, передали туди анонімну функцію, вона отримує один апарметр
  //це весь стан редаксу і повертаєте той шматочок який вам потрібен
  //те, що вона повернула  - то результат useSelector, записали цей
  //результат в змінну і викликали де потрібно
  const balance = useSelector((state) => state.balance.value);

  // для того щоб відправити action є dispatch
  //викликаємо  useDispatch(), туди передаємо потрібний action,
  // що буде відправлено до store при певній події
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  return (
    <div>
      <p>Balance: {balance} credits</p>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button onClick={() => dispatch(deposit(value))}>Deposit credits</button>
      <button onClick={() => dispatch(withdraw(value))}>
        Withdraw credits
      </button>
    </div>
  );
}
