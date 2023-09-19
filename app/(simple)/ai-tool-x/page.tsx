import ColdOutreach from '@/components/ColdOutreach';

export const metadata = {
    title: 'AI Tool X',
    description: 'An AI tool that helps you do X',
}

export const runtime = 'edge';

export default function Page() {
    return (<>
        <ColdOutreach />
        {/* <Chat /> */}
    </>);
}