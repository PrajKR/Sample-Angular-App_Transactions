import { Injectable } from '@angular/core';
import { TransactionResponse } from '../models/transaction-response.model';
import { TransactionModel } from '../models/transaction.model';

import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  transactions: BehaviorSubject<TransactionModel[]> = new BehaviorSubject<TransactionModel[]>([]);
  
  constructor(private httpClient: HttpClient) { 
    this.getTransactionsData().subscribe(res=> {
      //console.log(res);
      this.transactions.next(res.data);
    });
  }

  private getTransactionsData(): Observable<TransactionResponse> {
    return this.httpClient.get<TransactionResponse>('assets/mock/transactions.json');
  }
}
