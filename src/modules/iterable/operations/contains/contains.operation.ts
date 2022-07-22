import { deepEqual } from '../../../common/object/deep-equal';

export abstract class ContainsOperation {
    static execute = <T>(values: T[], element: T): boolean => values.some((it) => deepEqual(it, element));
}
