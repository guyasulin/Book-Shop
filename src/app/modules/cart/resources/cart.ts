export class Cart {
    purchasedBooks: PurchasedBooks[];
}

export interface PurchasedBooks {
	id: string;
	book: string;
	author: string;
	publisher: string;
	cover: string;
	price: number;
  }
  