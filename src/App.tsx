import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/header";
import { TransactionModal } from "./components/TransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";

export function App() {
  const [statusModalTransaction, setStatusModalTransaction] = useState(false);

  function handleOpenNewTransactionModal() {
    setStatusModalTransaction(true);
  }

  function handleCloseNewTransactionModal() {
    setStatusModalTransaction(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <TransactionModal
        isOpen={statusModalTransaction}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
