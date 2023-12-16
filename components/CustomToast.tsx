"use client"

import { setToastCookie } from "@/app/actions";
import { Toast, ToastToggle } from "flowbite-react";

const CustomToast = () => {
    return (
        <Toast className="ml-4 bottom-4 sticky z-20 dark:bg-gray-900 border border-purple-600">
            <div className="w-full">
                <div className="flex items-center mb-3">
                    <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Fun fact</span>
                    <ToastToggle className=" dark:bg-gray-900" onDismiss={() => setToastCookie()} />
                </div>
                <div className="flex items-center">
                    <div className="flex flex-col shrink-0 gap-2 items-center">
                        <img className="w-12 h-12 rounded-full" src="/images/profile.jpeg" alt="Jese Leos image" />
                        <div className="text-sm font-semibold text-purple-600 dark:text-purple-600">Simon AI</div>
                    </div>
                    <div className="ms-3 text-sm font-normal">
                        <div className="text-sm font-normal">In 2023, AI coding assistants like GitHub Copilot significantly boost programming efficiency and innovation.</div>
                    </div>
                </div>
            </div>
        </Toast>
    );
};

export default CustomToast;
