export class JoinProps {

    separator?: string = ', ';

    prefix?: string = '';

    postfix?: string = '';

    limit?: number = -1;

    truncated?: string = '...';

    public constructor(init?: Partial<JoinProps>) {
        Object.assign(this, init);
    }

}
