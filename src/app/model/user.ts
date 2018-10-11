export class User {
	constructor(
        public id: number,
        public nom: string,
        public email: string,
        public password: string,
        public phone?: string
		){}
}