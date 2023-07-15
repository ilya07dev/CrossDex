// // import {
// //   TransactionHistory,
// //   TransactionItem,
// // } from "libs/tracker/useProfileTransactions.types";

// export function aggregateTransactionsV2(
//   walletTransactions: TransactionItem[]
// ): TransactionHistory[] {
//   // Group transactions by date
//   const transactionsByDate = walletTransactions.reduce(
//     (result, transaction) => {
//       const date = new Date(transaction.attributes.mined_at).toDateString();

//       if (!result[date]) {
//         result[date] = [];
//       }

//       result[date].push(transaction);
//       return result;
//     },
//     {} as { [key: string]: TransactionItem[] }
//   );

//   // Convert grouped transactions to array of history transactions
//   const historyTransactions = Object.entries(transactionsByDate).map(
//     ([date, transactions]) => {
//       return {
//         date,
//         transactions,
//       };
//     }
//   );

//   return historyTransactions;
// }
