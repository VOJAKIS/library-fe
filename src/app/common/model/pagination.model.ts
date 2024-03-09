export interface Pagination {
	page: number;
	size: number;
	filter: {
		lastName: string;
	}
}

export interface PaaginableResponse {
	pageable: {
		pageNumber: number,
		pageSize: number,
	},
	totalElements: number
}
