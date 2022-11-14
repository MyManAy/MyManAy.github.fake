import React, {
  ChangeEvent,
  KeyboardEventHandler,
  useEffect,
  useState,
} from "react";
import logo from "./logo.svg";
import "./App.css";
import MoneyText from "./components/MoneyText";
import { CircularProgress } from "@material-ui/core";
import MoneyButtons from "./components/MoneyButtons";
import { useQuery, ApolloProvider } from "@apollo/client";

/* I will build out the get user REACT COMPONENT and maybe transfer it to a seperate file 
   - I will have it change on data like the youtube guy was doing 
   - I will move all the text and things that dependant on the 
*/

function App() {
  const [queryTimeout, setQueryTimeout] = useState(
    null as ReturnType<typeof setTimeout> | null
  );
  const [timeoutAlive, setTimeoutAlive] = useState(false);
  const [waitingForQueryRes, setWaitingForQueryRes] = useState(false);
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("");
  const [userId, setUserId] = useState(0);

    setWaitingForQueryRes(true);
    setWaitingForQueryRes(false);
    setTimeoutAlive(false);
  };

  const deposit = () => setAmount(amount + 20);
  const withdraw = () => setAmount(amount - 20);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = async (event) => {
    console.log(event.key);
    if (event.key === "Enter") {
      console.log("yes");
      if (timeoutAlive) {
        clearInterval(queryTimeout!);
      }
      setQueryTimeout(setTimeout(queryCall, 1000));
      setTimeoutAlive(true);

      // smth
      event.preventDefault();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <NameInput
            handleKeyDown={handleKeyDown}
            handleTextChange={handleTextChange}
          ></NameInput>
          {!waitingForQueryRes || <CircularProgress />}
        </div>
        <text style={{ verticalAlign: "top" }}>input user</text>
        <MoneyText amount={amount} />
        <MoneyButtons
          deposit={deposit}
          withdraw={withdraw}
          update={update}
        ></MoneyButtons>
      </header>
    </div>
  );
}

export default App;
