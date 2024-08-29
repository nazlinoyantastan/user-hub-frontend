import { Address } from "./address.dto";
import { Company } from "./company.dto";

export class User {
    constructor(
      public id: number = 0,
      public name: string = '',
      public username: string = '',
      public email: string = '',
      public address: Address = new Address,
      public phone: string = '',
      public website: string = '',
      public company: Company = new Company (),
    ) {}
  }