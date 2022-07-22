export abstract class SortOperation {
    static execute = <T, U>(values: T[], selector?: (value: T) => U): T[] => {
        const valuesToSort = [...values];

        if (selector) {
            valuesToSort.sort((previous, current) => {
                if (selector(previous) < selector(current)) return -1;
                else return 1;
            });
        } else {
            valuesToSort.sort((previous, current) => {
                if (previous < current) return -1;
                else return 1;
            });
        }

        return valuesToSort;
    };
}
