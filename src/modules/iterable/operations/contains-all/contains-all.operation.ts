import { object } from '../../../common/object';

export default <T>(values: T[], elements: T[]): boolean => elements.every((element) => values.some((it) => object(it, element)));
