// http://site.my:8000/api/auth/user/
export type User = {
	id: number,
	username: string,
	email?: string,
	first_name?: string,
	last_name?: string,
	date_of_birth?: Date
};