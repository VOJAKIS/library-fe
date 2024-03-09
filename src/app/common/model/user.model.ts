import { PaaginableResponse } from "./pagination.model";

// Je nutné exportovať, aby som mohol importovať v iných súboroch
export interface User {
	id: number;
	firstName: string;
	lastName: string;
	contactEmail: string;
}

export interface UserResponse extends PaaginableResponse {
	content: User[];
}