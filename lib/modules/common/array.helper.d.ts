export declare abstract class ArrayHelper {
    /**
     * Transform an object to array.
     *
     * @param data This is either an object or an array of objects.
     * @return An array of objects.
     */
    static transformToArray: <T>(data: T | T[]) => T[];
}
