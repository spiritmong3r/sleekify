import { Person } from '../models/person';
export declare abstract class PersonMock {
    static bob: () => Person;
    static ed: () => Person;
    static jo: () => Person;
    static jane: () => Person;
    static ted: () => Person;
}
