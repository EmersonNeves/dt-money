import { useState } from "react";
import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import TotalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  const [income, setIncome] = useState(0);

  transactions.filter((transaction) => {
    if (transaction.type == "deposit") {
      console.log(income);
    }
  });

  const summary = transactions.reduce(
    (accumulator, transaction) => {
      if (transaction.type == "deposit") {
        accumulator.deposit += transaction.amount;
        accumulator.total += transaction.amount;
      } else {
        accumulator.withdraw += transaction.amount;
        accumulator.total -= transaction.amount;
      }
      return accumulator;
    },
    {
      deposit: 0,
      withdraw: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p> <img src={IncomeImg} alt="Entradas" />
        </header>
        <strong>{new Intl.NumberFormat('pt-br',{
                  style: "currency",
                  currency: "BRL"}).format(summary.deposit)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p> <img src={OutcomeImg} alt="Saídas" />
        </header>
        <strong>
          -{" "}
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraw)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p> <img src={TotalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
