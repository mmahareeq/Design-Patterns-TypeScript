import { VisaCard } from './VisaCard';
import {MasterCard} from './MasterCard';
import { BankCard } from './BankCard.interface';

export class BankCardFactory {

  public createBankCard(card_type: string): BankCard{
    if(card_type === 'visa')
      return new VisaCard();
    else if(card_type === 'master')
       return new MasterCard();
    else 
      throw new Error("Invalid card type");
  }
}
