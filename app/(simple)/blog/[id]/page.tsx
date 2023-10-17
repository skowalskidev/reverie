import Date from '@/components/Date';
import { getPostData } from '@/lib/posts';
import Image from 'next/image';

type Params = {
    id: string;
};

type Props = {
    params: Params;
};

type PostData = {
    title: string;
    date: string;
    author: string;
    authorImage: string;
    PostComponent: React.FC;
};

export async function generateMetadata({ params }: Props) {
    const postData: PostData = await getPostData(params.id);
    return {
        title: postData.title,
    };
}

export default async function Post({ params }: Props) {
    const postData: PostData = await getPostData(params.id);
    const PostComponent = postData.PostComponent;

    return (
        <>
            <main className="p-6 bg-white dark:bg-gray-900 antialiased">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl">
                        <header className="mb-4 px-4 lg:mb-6 not-format">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-base text-gray-900 dark:text-white">
                                    <Image width={64} height={64} className="mr-4 w-16 h-16 rounded-full object-cover" src={postData.authorImage} alt="Jese Leos" />
                                    <div>
                                        <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">{postData.author}</a>
                                        <p className="text-base text-gray-500 dark:text-gray-400">Developer, Traveller</p>
                                        <p className="text-base text-gray-500 dark:text-gray-400"><Date dateString={postData.date} /></p>
                                    </div>
                                </div>
                            </address>
                            <h1 className="mb-4 text-3xl font-semibold leading-tight text-gray-900 lg:mb-6 lg:text-xl dark:text-white">{postData.title}</h1>
                        </header>
                        <PostComponent />
                    </article>
                </div>
            </main>
        </>
    );
}
