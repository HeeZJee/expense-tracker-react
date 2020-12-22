export interface iState {
  transactions: iTransaction[];
}

export interface iTransaction {
  id: number;
  desc: string;
  amount: number;
}
