// import { useSelector } from "react-redux";
// import { Calculate } from "./Calculate";
import Balance from "./Balance";
// import LangSwitcher from "./LangSwitcher";
// import { selectlang } from "../redux/localeSlice";

export default function App() {
  // const lang = useSelector(selectlang);

  return (
    <div>
      {/* <Calculate /> */}
      <Balance />
      {/* <LangSwitcher /> */}

      {/* <p>Selected lang:{lang}</p> */}
    </div>
  );
}
