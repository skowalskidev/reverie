import GithubButton from "@/components/GithubButton";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";

export default function Layout(props: {
    children: React.ReactNode
}) {
    return (
        <>
            <nav className="bg-transparent fixed w-full z-10 top-0 left-0 ">
                <div className="max-w-screen-2xl flex flex-wrap flex-row-reverse lg:flex-row justify-between items-center lg:justify-end mx-auto px-4 py-1 relative bg-white dark:bg-gray-900 !bg-opacity-80">
                    <div className="flex gap-2 items-center">
                        <GithubButton />
                        <ThemeToggle />
                    </div>
                    <div className="items-center justify-center w-fit md:flex md:order-1 lg:absolute lg:mx-auto lg:left-0 lg:right-0" id="navbar-sticky">
                        <ul className="grow px-5 py-1.5 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-opacity-0">
                            <li>
                                <Link href="/" className="flex items-top text-base font-light text-gray-500/100 dark:text-gray-400/100 tracking-wider">
                                    <p className="text-base tracking-widest font-light text-gray-500/100 text-gray-900 dark:text-white">reverie zero</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main className='mx-auto max-w-screen-md mt-28'>
                {props.children}
            </main>
            <footer className="bg-white rounded-lg dark:bg-gray-900 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-base text-gray-500 sm:text-center dark:text-gray-400">2023 <a href="#" className="hover:underline">reverie zero</a></span>
                </div>
            </footer >
        </>
    );
}
