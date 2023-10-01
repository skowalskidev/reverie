import Navigation from "@/components/Navigation";
import ScaleMain from "@/components/ScaleMain";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";

export default function Layout(props: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navigation />
            <ScaleMain>
                {props.children}
            </ScaleMain >
            <footer className="bg-white rounded-lg dark:bg-gray-900 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="#" className='text-base tracking-widest font-light text-gray-500/100 text-gray-900 dark:text-white'>reverie zero</a>
                        <ul className="flex flex-wrap items-center mb-6 text-base font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#free-guide" className="mr-4 hover:underline md:mr-6">Free Guide</a>
                            </li>
                            <li>
                                <Link href='/contact?source=web-development' scroll={false}>
                                    <button className="mr-4 hover:underline md:mr-6 ">Start</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-base text-gray-500 sm:text-center dark:text-gray-400">2023 <Link href="/" className="hover:underline">reverie zero</Link></span>
                </div>
            </footer>
        </>
    );
}
