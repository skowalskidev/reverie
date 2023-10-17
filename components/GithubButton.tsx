'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function GithubButton() {
    const handleClick = () => {
        window.open('https://github.com/skowalskidev/reverie', '_blank');
    };

    return (
        <button
            id="theme-toggle"
            type="button"
            className="flex text-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg p-1.5"
            onClick={handleClick}
        >
            <FontAwesomeIcon icon={faGithub} />
        </button>
    );
}
