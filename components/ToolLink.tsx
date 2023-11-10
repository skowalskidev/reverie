import Link from 'next/link';
import Image from "next/image";

type Props = {
    title: string;
    imgSrc: string;
    alt: string;
    toolLinkHref: string;
    label?: string;
    disabled?: boolean;
}

const ToolLink = ({ title, imgSrc, alt, toolLinkHref, label, disabled }: Props) => (
    <div className={disabled ? 'outline outline-black text-black dark:outline-white dark:text-white p-3 rounded flex flex-col justify-between gap-4 relative' : 'outline outline-black text-black hover:!text-purple-600 hover:!outline-purple-600 dark:outline-white dark:text-white p-3 rounded flex flex-col justify-between gap-4 relative'}>
        {disabled ? null : (
            <a href={toolLinkHref} className="absolute inset-0 z-10" aria-hidden="true"></a>
        )}
        <div className='text-base absolute -bottom-6 left-0 right-0 text-gray-500 dark:text-gray-400'>
            {label}
        </div>
        <div className='relative aspect-square'>
            <Image
                priority
                src={imgSrc}
                alt={alt}
                fill
                className='object-cover rounded-lg'
                sizes="40vw,(min-width: 1024px) 33vw"></Image>
        </div>
        <h2 className='text-lg text-center'>{title}</h2>
    </div>
);

export default ToolLink;