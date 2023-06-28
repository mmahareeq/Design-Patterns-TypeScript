import { BankCard } from "./BankCard.interface";

export class VisaCard implements BankCard {
   public withdrawMoney() {
        console.log("Withdrawing money using visa card")
    }
   public getBalance() {
        console.log("Getting balance for visa card");
    }

}