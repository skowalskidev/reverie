"use client";

type Props = {
    onClick?: () => void;
}

const StickyMenuCTA = ({ onClick }: Props) => {
    return (
        <div className={`sticky-cta block`}>
            <button type="button" onClick={onClick} className="grow inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-purple-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <div className='grow px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                    Start
                </div>
            </button>
        </div>
    );
};

export default StickyMenuCTA;