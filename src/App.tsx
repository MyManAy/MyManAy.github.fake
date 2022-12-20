import React, { KeyboardEventHandler, useState } from "react";
import "./App.css";
import MoneyText from "./components/MoneyText";
import { CircularProgress } from "@material-ui/core";
import MoneyButtons from "./components/MoneyButtons";
import { sdk } from "./backend/client/sdk";
import NameInput from "./components/NameInput";

function App() {
  const [queryTimeout, setQueryTimeout] = useState(
    null as ReturnType<typeof setTimeout> | null
  );
  const [timeoutAlive, setTimeoutAlive] = useState(false);
  const [waitingForQueryRes, setWaitingForQueryRes] = useState(false);
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");

  const updateUserId = () => {
    return new Promise((resolve) => {
      sdk.getUserIdByName({ name: name }).then((result) => {
        const newId = result.User[0].id;
        resolve(newId);
        setUserId(newId);
      });
    });
  };
  const queryCall = async () => {
    setWaitingForQueryRes(true);
    const newId = await updateUserId();
    const fetchedAmount: string = (await sdk.getMoneyByUserId({ id: newId }))
      .Money[0].amount;
    const amountToNumber =
      fetchedAmount.substring(0, 1) === "-"
        ? Number("-" + fetchedAmount.substring(2)) // for negative numbers
        : Number(fetchedAmount.substring(1));
    setAmount(amountToNumber);
    setWaitingForQueryRes(false);
    setTimeoutAlive(false);
  };

  const deposit = () => setAmount(amount + 20);
  const withdraw = () => setAmount(amount - 20);
  const update = async () => {
    console.log("yea");
    await sdk.updateMoneyByUserId({ id: userId, newAmount: amount });
  }; //remove sometime in the future to

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
      setQueryTimeout(setTimeout(queryCall, 1000)); // flawed logic forces user to wait 1 second before EVERY call
      setTimeoutAlive(true);

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
