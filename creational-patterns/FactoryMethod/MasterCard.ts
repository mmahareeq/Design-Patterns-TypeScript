import { BankCard } from "./BankCard.interface";

export class MasterCard implements BankCard{
   
    withdrawMoney() {
        console.log("Withdrawing money using master card");
    }
    getBalance() {
        console.log("Getting balance for master card");
    }
    
}