import { Book } from "./book.model";
import { User } from "./user.model";

export interface Borrowing {
	id: number,
	bookId: number,
	customerId: number,
	dateOfBorrowing: String
}
