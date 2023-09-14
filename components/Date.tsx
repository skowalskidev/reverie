import { formatDistanceToNow, parseISO } from 'date-fns';

export default function Date(props: { dateString?: string }) {
    const { dateString } = props;
    if (!dateString) return null;

    const date = parseISO(dateString);
    return <time dateTime={dateString}>{formatDistanceToNow(date, { addSuffix: true })}</time>;
}
