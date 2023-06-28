import {BankCardFactory} from './BankCardFactory';

const factory = new BankCardFactory();

const visa_card= factory.createBankCard('visa');
visa_card.withdrawMoney();
visa_card.getBalance();


const master_card = factory.createBankCard('master');
master_card.withdrawMoney();
master_card.getBalance();