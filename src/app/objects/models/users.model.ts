import { Address } from './address.model';
import { Company } from './company.model';

export class Users{

  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address : Address;
  company: Company;
}