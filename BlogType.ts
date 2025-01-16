export interface BlogDetailsPoint {
	text: string;
}

export interface BlogDetails {
	title: string;
	BlogDetailesPoint: BlogDetailsPoint[];
}

export interface Blog {
	id: string;
	desc: string;
	title: string;
	imageUrl: string;
	BlogDetailes: BlogDetails[];
}
