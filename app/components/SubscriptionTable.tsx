import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

interface Subscription {
    name: string;
    price: string;
    invoiceLink: string;
    usedThisMonth: string;
}

const initialSubscriptions: Subscription[] = [
    {
        name: 'DigitalOcean',
        price: '$6',
        invoiceLink: 'https://cloud.digitalocean.com/account/billing?i=59b4d8',
        usedThisMonth: 'Yes',
    },
    {
        name: 'Github Copilot',
        price: '$10',
        invoiceLink: 'https://github.com/account/billing/history',
        usedThisMonth: 'Yes',
    },
    {
        name: 'Chat GPT',
        price: '$20',
        invoiceLink: 'https://chat.openai.com/',
        usedThisMonth: 'Yes',
    },
    {
        name: 'Midjourney',
        price: '$10',
        invoiceLink: 'https://www.midjourney.com/account/',
        usedThisMonth: 'No',
    },
];

const SubscriptionTable: React.FC = () => {
    const [subscriptions, setSubscriptions] = useState<Subscription[]>(initialSubscriptions);
    const [editableRowIndex, setEditableRowIndex] = useState<number | null>(null);

    const handleEdit = (index: number, key: keyof Subscription, value: string) => {
        const newSubscriptions = [...subscriptions];
        newSubscriptions[index][key] = value;
        setSubscriptions(newSubscriptions);
    };

    const handleAddRow = () => {
        setSubscriptions([...subscriptions, { name: '', price: '$0', invoiceLink: '', usedThisMonth: 'Yes' }]);
    };

    const handleDeleteRow = (index: number) => {
        const newSubscriptions = [...subscriptions];
        newSubscriptions.splice(index, 1);
        setSubscriptions(newSubscriptions);
        setEditableRowIndex(null);
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg grow">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Subscription</th>
                        <th scope="col" className="px-6 py-3">Price</th>
                        <th scope="col" className="px-6 py-3">Used this month?</th>
                        <th scope="col" className="px-6 py-3"><span className="sr-only">Edit</span></th>
                    </tr>
                </thead>
                <tbody>
                    {subscriptions.map((sub, index) => (
                        <tr key={index} className="hover:cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" onClick={() => { if (editableRowIndex === null) window.open(sub.invoiceLink, '_blank') }}>
                            {Object.keys(sub).filter((key) => key !== 'invoiceLink').map((key, colIndex) => (
                                <td key={key} className="px-6 py-4">
                                    <input
                                        className={`text-center bg-inherit border-0 border-gray-200 dark:border-gray-800 ${sub.usedThisMonth === 'No' && '!text-red-600'}`}
                                        type="text"
                                        value={sub[key as keyof Subscription]}
                                        onChange={(e) => handleEdit(index, key as keyof Subscription, e.target.value)}
                                        readOnly={editableRowIndex !== index}
                                    />
                                </td>
                            ))}
                            <td className="flex gap-1 px-6 py-4 text-right text-2xl" onClick={(e) => e.stopPropagation()}>
                                <span className="cursor-pointer text-inherit hover:text-red-600" onClick={() => handleDeleteRow(index)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </span>

                                <span className="cursor-pointer text-inherit hover:text-blue-500" onClick={() => setEditableRowIndex(index)}>
                                    <FontAwesomeIcon icon={faEdit} />
                                </span>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td className="px-6 py-4 text-right" colSpan={Object.keys(subscriptions[0]).length}>
                            <span className="font-medium hover:text-blue-500 hover:cursor-pointer text-2xl" onClick={handleAddRow}>
                                <FontAwesomeIcon icon={faPlus} />
                            </span>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td className='px-6 py-4'></td>
                        <td className='px-6 py-4'></td>
                        <td className='px-6 py-4'>Total</td>
                        <td className='px-6 py-4'>${subscriptions.reduce((acc, sub) => acc + parseFloat(sub.price.substring(1)), 0)}</td>
                    </tr>
                    {subscriptions.reduce((acc, sub) => sub.usedThisMonth === 'No' ? acc + parseFloat(sub.price.substring(1)) : acc, 0) > 0 && (
                        <tr>
                            <td className='px-6 py-4'></td>
                            <td className='px-6 py-4'></td>
                            <td className='px-6 py-4'>Potential Savings</td>
                            <td className='px-6 py-4'>${subscriptions.reduce((acc, sub) => sub.usedThisMonth === 'No' ? acc + parseFloat(sub.price.substring(1)) : acc, 0)}</td>
                        </tr>
                    )}
                </tfoot>
            </table>
        </div>
    );
};

export default SubscriptionTable;
