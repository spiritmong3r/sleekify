import {Person} from '../models/person';

export abstract class PersonMock {

    static bob = (): Person => ({name: 'Todd', firstName: 'Bob', age: 18, country: {name: 'US'}});

    static ed = (): Person => ({name: 'Todd', firstName: 'Ed', age: 19, country: {name: 'US'}});

    static jo = (): Person => ({name: 'Todd', firstName: 'Jo', age: 19, country: {name: 'CA'}});

    static jane = (): Person => ({name: 'Todd', firstName: 'Jane', age: 24, country: {name: 'US'}});

    static ted = (): Person => ({name: 'Todd', firstName: 'Ted', age: 18, country: {name: 'CA'}});

}
