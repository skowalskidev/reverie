import Link from 'next/link';

type Props = {
    title: string;
    imgSrc: string;
    toolLinkHref: string;
    label?: string;
}

const ToolLink = ({ title, imgSrc, toolLinkHref, label }: Props) => {
    return (
        <Link className='outline outline-black text-black hover:text-purple-600 hover:outline-purple-600 dark:outline-purple-600 dark:hover:outline-white dark:text-purple-600 dark:hover:text-white p-3 rounded flex flex-col justify-between gap-4 relative' href={toolLinkHref} >
            <div className='text-sm absolute -bottom-6 left-0 right-0 text-gray-500 dark:text-gray-400'>
                {label}
            </div>
            <img className="h-auto max-w-full rounded-lg" src={imgSrc} alt="" />
            <h2 className='text-lg lg:text-2xl font-extrabold'>{title}</h2>
        </Link >
    );
};

export default ToolLink;