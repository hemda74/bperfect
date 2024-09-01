export interface BlogDetailsPoint {
	id: string;
	BlogdetailesId: string;
	text: string;
}

export interface BlogDetails {
	id: string;
	BlogId: string;
	title: string;
	title_ar: string;
	BlogDetailesPoint: BlogDetailsPoint[];
	BlogDetailesPointAr: BlogDetailsPoint[];
}

export interface Blog {
	id: string;
	storeId: string;
	desc: string;
	desc_ar: string;
	title: string;
	title_ar: string;
	imageUrl: string;
	BlogDetailes: BlogDetails[];
}
