import {JoinProps} from '../../models/JoinProps';

export abstract class JoinOperation {

    static execute = <T, U>(values: T[], partialProps?: JoinProps, selector?: (value: T) => U): string => {
        const valuesUpdated = (selector) ? values.map(selector) : values;

        if (!partialProps) return valuesUpdated.join(', ');
        else {
            const props = new JoinProps(partialProps);
            let valueAsString = valuesUpdated.join(props.separator);
            const initialLength = valueAsString.length;
            if (props.limit && props.limit >= 0) {
                valueAsString = valueAsString.substring(0, props.limit);
                if (props.limit < initialLength) valueAsString = `${valueAsString}${props.truncated}`;
            }
            return `${props.prefix}${valueAsString}${props.postfix}`;
        }
    };

}
