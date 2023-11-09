<template>
  <Header />
  <div class="container">
    <Balance :total="total" />
    <IncomeExpenses :income="+income" :expense="+expense" />
    <TransactionList
      :transactions="transactions"
      @transaction-deleted="handleTransactionDeleted"
    />
    <AddTransaction @transaction-submitted="handleTransactionSubmitted" />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomeExpenses from "./components/IncomeExpenses.vue";
import TransactionList from "./components/TransactionList.vue";
TransactionList;
import AddTransaction from "./components/AddTransaction.vue";

import { ref, computed, onMounted } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();

const transactions = ref([]);

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem("transactions"));

  if (savedTransactions) {
    transactions.value = savedTransactions;
  }
});

const saveTransactionsLocalStorage = () => {
  localStorage.setItem("transactions", JSON.stringify(transactions.value));
};

// total of the income + expense
const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
});

// income
const income = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});

// expense
const expense = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});

// add Transaction
const handleTransactionSubmitted = (transactionData) => {
  transactions.value.push({
    id: generatedUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount,
  });

  saveTransactionsLocalStorage();

  toast.success("Transactions added");
};

const generatedUniqueId = () => {
  return Math.floor(Math.random() * 1000000000);
};

const handleTransactionDeleted = (id) => {
  transactions.value = transactions.value.filter(
    (transaction) => transaction.id !== id
  );

  saveTransactionsLocalStorage();

  toast.success("Transaction deleted!");
};
</script>
