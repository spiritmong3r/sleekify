import {deepEqual} from '../../../common/object/deep-equal';

export abstract class ContainsAllOperation {

    static execute = <T>(values: T[], elements: T[]): boolean => elements.every(element => values.some(it => deepEqual(it, element)));

}
