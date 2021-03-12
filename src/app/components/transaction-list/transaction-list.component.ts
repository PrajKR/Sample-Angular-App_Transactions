import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { TransactionModel } from '../../models/transaction.model';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  transactions: TransactionModel[] = [];
  filteredTransactions: TransactionModel[] = [];
  searchTxt: string = '';
  changeIcon:string = 'arrow_drop_down';
  sortedASC = {
    valueDate: false,
    name: false,
    amount: false
  };
  activeField = 'valueDate';
  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.transactions.subscribe(data => {
      this.transactions = data;
      this.filteredTransactions = data;
      this.sortTransactionsBy('valueDate');
    });
  }
  
  applyFilter(searchTxt) {
    this.filteredTransactions = this.transactions.filter(x => x.merchant.name.toLowerCase().startsWith(searchTxt.toLowerCase()))
  }

  sortTransactionsBy(field) {
    this.filteredTransactions.sort((x,y) => {
      switch(field) {
        case 'valueDate':
          if (new Date(x['dates'][field]) > new Date(y['dates'][field]))
            return this.sortedASC[field]?-1:1;
          if (new Date(x['dates'][field]) < new Date(y['dates'][field]))
            return this.sortedASC[field]?1:-1;
          return 0;
        case 'name':
          if (x['merchant'][field] > y['merchant'][field])
            return this.sortedASC[field]?-1:1;
          if (x['merchant'][field] < y['merchant'][field])
            return this.sortedASC[field]?1:-1;
          return 0;
        case 'amount':
          if (x['transaction']['amountCurrency'][field] > y['transaction']['amountCurrency'][field])
            return this.sortedASC[field]?-1:1;
          if (x['transaction']['amountCurrency'][field] < y['transaction']['amountCurrency'][field])
            return this.sortedASC[field]?1:-1;
          return 0;
      }
    });
    this.sortedASC[field] = !this.sortedASC[field];
    this.activeField = field;
  }
}
