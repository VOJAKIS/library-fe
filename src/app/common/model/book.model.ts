import { Category } from "./category.model"

export interface Book {

    id: number,
    title: string,
    authorFirstName: string,
	authorLastName: string,
	categories: Category[],
    isbn: string,
    bookCount: number,
    //TODO: Cleanup -> availability: boolean

}
