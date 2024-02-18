import Link from 'next/link';
import Image from "next/image";

type Props = {
    title: string;
    imgSrc: string;
    alt: string;
    label?: string;
    description?: string;
    review?: string;
}

const Project = ({ title, imgSrc, alt, label, description, review }: Props) => (
    <div className={'outline outline-1 outline-black text-black dark:outline-white dark:text-white p-3 rounded flex gap-4 relative'}>
        <div className='flex gap-4'>
            <div className='flex flex-col'>
                <div className='text-base absolute -bottom-6 left-0 right-0 text-gray-500 dark:text-gray-400'>
                    {label}
                </div>
                <div className='relative aspect-square w-24'>
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
            {review && <q className="italic text-gray-500">{review}</q>}
            <p>{description}</p>
        </div>
    </div>
);

export default Project;