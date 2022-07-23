import { object } from '../../../common/object';

export default <T>(values: T[], element: T): boolean => values.some((it) => object(it, element));
