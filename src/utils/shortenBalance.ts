export function shortenBalance(balance: number) {
  if (balance < 1e3) return balance.toFixed(2);
  if (balance >= 1e3 && balance < 1e6) return (balance / 1e3).toFixed(2) + "k";
  if (balance >= 1e6 && balance < 1e9) return (balance / 1e6).toFixed(2) + "m";
  if (balance >= 1e9 && balance < 1e12) return (balance / 1e9).toFixed(2) + "b";
  if (balance >= 1e12) return (balance / 1e12).toFixed(2) + "t";
}
