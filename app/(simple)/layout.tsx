import GithubButton from "@/components/GithubButton";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import CustomToast from "@/components/CustomToast"
import { cookies } from "next/headers";

export default function Layout(props: {
    children: React.ReactNode
}) {
    const cookieStore = cookies();
    // const toastDismissed = cookieStore.get('toastDismissed');

    // Determine if the toast should be shown
    // const shouldShowToast = !toastDismissed;

    return (
        <>
            <nav className="bg-transparent fixed w-full z-10 top-0 left-0 ">
                {/* <Link href='https://www.simonkowalski.com/'>
                    <div className='hover:cursor-pointer w-full flex justify-center items-center text-white bg-purple-600 font-medium p-1 text-center'>
                        ➡️ Go to my new site simonkowalski.com
                    </div>
                </Link> */}
                <div className="max-w-screen-2xl flex flex-wrap flex-row-reverse lg:flex-row justify-between items-center lg:justify-between mx-auto px-4 py-1 relative bg-white dark:bg-gray-900 bg-opacity-95 dark:bg-opacity-80 border-b border-purple-600">
                    <a href={'#'} className="flex text-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg p-1.5 ">
                        <span className="text-center text-base leading-5 tracking-widest font-light text-gray-500/100 text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-600">SK</span>
                    </a>
                    <div className="flex gap-2 items-center">
                        <GithubButton />
                        <ThemeToggle />
                    </div>
                    <div className="items-center justify-center w-fit md:flex md:order-1 lg:absolute lg:mx-auto lg:left-0 lg:right-0" id="navbar-sticky">
                        <ul className="flex gap-4 grow px-5 py-1.5 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-opacity-0">
                            <li className="text-base tracking-widest font-light text-gray-500/100 text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-600">
                                <Link href="/" className="flex items-top">
                                    <p className="">Projects</p>
                                </Link>
                            </li>
                            <li className="text-base tracking-widest font-light text-gray-500/100 text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-600">
                                <Link href="/" className="flex items-top">
                                    <p className=" ">About</p>
                                </Link>
                            </li>
                            <li className="text-base tracking-widest font-light text-gray-500/100 text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-600">
                                <Link href="/" className="flex items-top">
                                    <p className=" ">Contact</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main className='mx-auto max-w-screen-md mt-28'>
                {props.children}
            </main>
            {/* {shouldShowToast && <CustomToast />} */}
            <footer className="bg-white rounded-lg dark:bg-gray-900 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-base text-gray-500 sm:text-center dark:text-gray-400">2024 <a href="#" className="hover:underline">simon kowalski</a></span>
                </div>
            </footer >
        </>
    );
}
