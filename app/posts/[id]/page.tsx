import Date from '@/components/Date'

import { getAllPostIds, getPostData } from '@/lib/posts'

type Params = {
    id: string
}

type Props = {
    params: Params
}

type PostData = {
    title: string
    date: string
    author: string
    authorImage: string
    contentHtml: string
}

export async function generateMetadata({ params }: Props) {
    const postData: PostData = await getPostData(params.id)

    return {
        title: postData.title,
    }
}

// -< Post >-
export default async function Post({ params }: Props) {
    const postData: PostData = await getPostData(params.id)

    return (
        <>
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-4 lg:mb-6 not-format">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                    <img className="mr-4 w-16 h-16 rounded-full object-cover" src={postData.authorImage} alt="Jese Leos" />
                                    <div>
                                        <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">{postData.author}</a>
                                        <p className="text-base text-gray-500 dark:text-gray-400">Developer, Traveller</p>
                                        <p className="text-base text-gray-500 dark:text-gray-400"><Date dateString={postData.date} /></p>
                                    </div>
                                </div>
                            </address>
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{postData.title}</h1>
                        </header>
                        <div
                            className='text-gray-600'
                            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                        />
                    </article>
                </div>
            </main>
        </>
    )
}