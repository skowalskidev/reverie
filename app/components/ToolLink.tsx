import Link from 'next/link';

type Props = {
    title: string;
    imgSrc: string;
    toolLinkHref: string;
}

const ToolLink = ({ title, imgSrc, toolLinkHref }: Props) => {
    return (
        <Link className='outline outline-black text-black hover:text-purple-600 hover:outline-purple-600 dark:outline-purple-600 dark:hover:outline-white dark:text-purple-600 dark:hover:text-white p-3 rounded flex flex-col justify-between gap-4' href={toolLinkHref} >
            <img className="h-auto max-w-full rounded-lg" src={imgSrc} alt="" />
            <h2 className='text-lg lg:text-2xl font-extrabold text-center'>{title}</h2>
        </Link >
    );
};

export default ToolLink;