import { Component, OnInit } from '@angular/core';
import { PaymentPreviewComponent } from '../payment-preview/payment-preview.component';
import {MatDialog} from '@angular/material/dialog';
import { PaymentModel } from '../../models/payment.model';
import { TransactionService } from '../../services/transaction.service';
import { TransactionModel } from '../../models/transaction.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  selectedValue: string;
  selectedCar: string;
  paymentData: PaymentModel;
  accounts: string[] = [];
  transactions: TransactionModel[] = [];
  balance: number = 5824.76;
  
  constructor(public dialog: MatDialog, private transactionService: TransactionService) { 
    this.paymentData = {
      from: 'Free Checking(4692) - $5324.76',
      to: '',
      amount: null
    };
  }

  ngOnInit(): void {
    this.transactionService.transactions.subscribe(data => {
      this.transactions = data;
      this.accounts = data.map(x => x.merchant.name);
      this.paymentData.to = this.accounts[0];
    });
  }
  openPreviewDialog() {
    const previewDialogRef = this.dialog.open(PaymentPreviewComponent, {data: this.paymentData});

    previewDialogRef.afterClosed().subscribe(result => {
      if (result) {
        const transaction = Object.assign(this.transactions.find(x=>x.merchant.name == this.paymentData.to));
        if (transaction) {
          transaction.transaction.amountCurrency.amount = this.paymentData.amount;
          this.balance -= this.paymentData.amount;
          this.transactions.unshift(transaction);
          this.paymentData.amount = null;
          this.paymentData.to = this.accounts[0];
        }
      }
    });
  }
}
