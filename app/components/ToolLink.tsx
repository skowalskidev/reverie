import Link from 'next/link';
import Image from "next/legacy/image";

type Props = {
    title: string;
    imgSrc: string;
    alt: string;
    toolLinkHref: string;
    label?: string;
}

const ToolLink = ({ title, imgSrc, alt, toolLinkHref, label }: Props) => {
    return (
        <Link className='outline outline-black text-black hover:text-purple-600 hover:outline-purple-600 dark:outline-purple-600 dark:hover:outline-white dark:text-purple-600 dark:hover:text-white p-3 rounded flex flex-col justify-between gap-4 relative' href={toolLinkHref} >
            <div className='text-sm absolute -bottom-6 left-0 right-0 text-gray-500 dark:text-gray-400'>
                {label}
            </div>
            <div className='relative aspect-square'>
                <Image
                    src={imgSrc}
                    alt={alt}
                    fill
                    className='object-cover rounded-lg'
                    sizes="40vw,(min-width: 1024px) 33vw"
                ></Image>
            </div>
            <h2 className='text-lg lg:text-2xl font-extrabold'>{title}</h2>
        </Link >
    );
};

export default ToolLink;