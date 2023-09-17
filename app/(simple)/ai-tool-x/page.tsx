import Chat from '@/components/Chat';

export const metadata = {
    title: 'AI Tool X',
    description: 'An AI tool that helps you do X',
}

export const runtime = 'edge';

export default function Page() {
    return <Chat />;
}