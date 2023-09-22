import ColdOutreach from '@/components/ColdOutreach';

export const metadata = {
    title: 'Cold Outreach AI',
    description: 'An AI tool that helps you do X',
}

export const runtime = 'edge';

export default function Page() {
    return (<>
        <section className="bg-white dark:bg-gray-900 text-center p-6">
            <div className=' flex justify-center'>
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tigh md:text-5xl lg:text-6xl dark:text-white relative">Cold Outreach AI<span className="absolute top-0 -right-20 bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-pink-400 border border-pink-400">Alpha</span></h1>
            </div>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Generate personalised outreach messages</p>
        </section>
        <ColdOutreach />
        {/* <Chat /> */}
    </>);
}