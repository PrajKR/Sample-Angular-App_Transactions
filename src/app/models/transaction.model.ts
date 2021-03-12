export interface TransactionModel {
    categoryCode: string;
    dates: Dates;
    transaction: TransactionDetail;
    merchant: MerchantDetail;
}

export interface Dates {
    valueDate: number
}

export interface TransactionDetail {
    amountCurrency: CurrencyDetail,
    type: string;
    creditDebitIndicator: string;
}

export interface CurrencyDetail {
    amount: string;
    currencyCode: string;
}

export interface MerchantDetail {
    name: string;
    accountNumber: string;    
}

