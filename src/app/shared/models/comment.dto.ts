export class Comment {
    constructor(
        public postId: number = 0,
        public id: number = 0,
        public name: string = '',
        public email: string = '',
        public body: string = '',
    ) { }
}
