import { injectable } from 'tsyringe';

@injectable()
export class Test {
    constructor() {
        console.log('hi from test');
    }

    a(): void {
        console.log('a');
    }

    b(): void {
        console.log('b');
    }
}