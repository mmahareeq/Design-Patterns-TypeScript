import { VisaCard } from './VisaCard';
import {MasterCard} from './MasterCard';
import { BankCard } from './BankCard.interface';

export class BankCardFactory {
  
  /* - Factory Method: is a creational design pattern that allow to create objects without 
     specificy type of object directly. 
     
     - we will not create object via a new keyword but it is being done through factory method;
     */
  public createBankCard(card_type: string): BankCard{
    if(card_type === 'visa')
      return new VisaCard();
    else if(card_type === 'master')
       return new MasterCard();
    else 
      throw new Error("Invalid card type");
  }
}
