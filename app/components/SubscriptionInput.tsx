import { Subscription } from "./SubscriptionTable";

interface SubscriptionInputProps {
    autoFocus: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    usedThisMonth: boolean;
}

const SubscriptionInput = ({ autoFocus, value, onChange, onKeyDown, usedThisMonth }: SubscriptionInputProps) => {
    const className = `
      w-full bg-inherit border-transparent font-extrabold text-lg !bg-gray-50 border !border-gray-300 text-gray-900 rounded-lg 
      focus:ring-purple-text-purple-600 focus:border-purple-text-purple-600 block p-2 px-3 dark:!bg-gray-900 
      dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-text-purple-600 
      dark:focus:border-purple-text-purple-600 ${!usedThisMonth && 'text-red-600'}
    `;

    return (
        <input
            autoFocus={autoFocus}
            className={className}
            type="text"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onClick={(e) => e.stopPropagation()}
        />
    );
};

export default SubscriptionInput;