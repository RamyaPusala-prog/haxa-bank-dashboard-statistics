export interface BalanceModel {
    total_balance: number,
    monthly_payment_limit: number,
    payment_done_percentage: number,
    payment_done_so_far: number
}

export const MoneyStatisticsKeys = ['total_income', 'total_expense', 'total_investment']

export interface TransactionsModel {
    amount: number,
    date: string,
    id: string,
    name: string,
    status: string,
    type: string
}
