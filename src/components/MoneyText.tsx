import * as React from "react";

export interface IAppProps {
  amount: number;
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function MoneyText({ amount }: IAppProps) {
  return (
    <div style={{ margin: 100 }}>
      <text>{formatter.format(amount)}</text>
    </div>
  );
}
