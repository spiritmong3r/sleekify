import {Person} from '../models/person';

export abstract class PersonMock {

    static bob = (): Person => ({name: 'Todd', firstName: 'Bob', age: 18});

    static ed = (): Person => ({name: 'Todd', firstName: 'Ed', age: 19});

    static jo = (): Person => ({name: 'Todd', firstName: 'Jo', age: 19});

    static jane = (): Person => ({name: 'Todd', firstName: 'Jane', age: 24});

    static ted = (): Person => ({name: 'Todd', firstName: 'Ted', age: 18});

}
