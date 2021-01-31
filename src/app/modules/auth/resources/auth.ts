export class User {
    id: string;
    admin: boolean;
    purchasedBooks: PurchasedBooks[];
    email: string;
    password?: string;
}


export interface PurchasedBooks {
    id: string;
    name: string;
    description: string;
    price: string;
    imageUrl: string;
    quantity: number;
  }