import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

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
    const [editableLinkIndex, setEditableLinkIndex] = useState<number | null>(null);

    const handleEdit = (index: number, key: keyof Subscription, value: string) => {
        const newSubscriptions = [...subscriptions];
        newSubscriptions[index][key] = value;
        setSubscriptions(newSubscriptions);
    };

    const handleAddRow = () => {
        setSubscriptions([...subscriptions, {
            name: '',
            price: '$0',
            invoiceLink: '',
            usedThisMonth: 'Yes',
        }]);
    };

    const handleDeleteRow = (index: number) => {
        const newSubscriptions = [...subscriptions];
        newSubscriptions.splice(index, 1);
        setSubscriptions(newSubscriptions);
    };

    return (
        <table className='dark:text-white w-full'>
            <thead className='text-gray-500 dark:text-gray-400'>
                <tr>
                    <th>Subscription</th>
                    <th>Price</th>
                    <th>Invoice link</th>
                    <th>Used this month?</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {subscriptions.map((sub, index) => (
                    <tr key={index}>
                        {Object.keys(sub).map((key, colIndex) => (
                            <td key={key}>
                                {key === 'invoiceLink' ? (
                                    <div className="relative group">
                                        {editableLinkIndex === index ? (
                                            <input
                                                className="text-center dark:bg-gray-900 border-l-0 border-r-0 border-t-0 border-gray-200 dark:border-gray-800"
                                                type="text"
                                                value={sub[key as keyof Subscription]}
                                                onChange={(e) => handleEdit(index, key as keyof Subscription, e.target.value)}
                                                onBlur={() => setEditableLinkIndex(null)}
                                            />
                                        ) : (
                                            <a
                                                href={sub[key as keyof Subscription]}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                cmd/ctrl-click
                                            </a>
                                        )}
                                        <span
                                            className="absolute invisible group-hover:visible top-1/2 transform -translate-y-1/2 ml-2 hover:text-blue-500 cursor-pointer"
                                            onClick={() => setEditableLinkIndex(index)}
                                        >
                                            <FontAwesomeIcon icon={faEdit} />
                                        </span>

                                    </div>
                                ) : key === 'usedThisMonth' ? (
                                    <input
                                        className={`w-full hover:!text-blue-500 focus:border-gray-200 dark:border-gray-800 focus:ring-0 hover:cursor-pointer text-center dark:bg-gray-900 border-0 border-gray-200 ${sub.usedThisMonth === 'No' && ' !text-red-600'}`}
                                        type="text"
                                        value={sub[key as keyof Subscription]}
                                        onClick={() => handleEdit(index, 'usedThisMonth', sub.usedThisMonth === 'Yes' ? 'No' : 'Yes')}
                                        readOnly
                                    />

                                ) : (
                                    <input
                                        className={`hover:!text-blue-500 text-center dark:bg-gray-900 border-0 border-gray-200 dark:border-gray-800 ${sub.usedThisMonth === 'No' && '!text-red-600'}`}
                                        type="text"
                                        value={sub[key as keyof Subscription]}
                                        onChange={(e) => handleEdit(index, key as keyof Subscription, e.target.value)}
                                    />
                                )}
                            </td>
                        ))}
                        <td className='text-center hover:cursor-pointer hover:text-red-600' onClick={() => handleDeleteRow(index)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </td>
                    </tr>
                ))}
                <tr>
                    {Array.from({ length: Object.keys(subscriptions[0]).length }).map((_, i) => (
                        <td key={i}></td>
                    ))}
                    <td onClick={handleAddRow} className='hover:text-blue-500 hover:cursor-pointer'>
                        <FontAwesomeIcon icon={faPlus} />
                    </td>
                </tr>
            </tbody>

            <tfoot>
                <tr>
                    <td>Total</td>
                    <td>${subscriptions.reduce((acc, sub) => acc + parseFloat(sub.price.substring(1)), 0)}</td>
                    <td></td>
                    <td></td>
                </tr>
                {subscriptions.reduce((acc, sub) => sub.usedThisMonth === 'No' ? acc + parseFloat(sub.price.substring(1)) : acc, 0) > 0 && (
                    <tr>
                        <td>Potential Savings</td>
                        <td>${subscriptions.reduce((acc, sub) => sub.usedThisMonth === 'No' ? acc + parseFloat(sub.price.substring(1)) : acc, 0)}</td>
                        <td></td>
                        <td></td>
                    </tr>
                )}

            </tfoot>
        </table>
    );
};

export default SubscriptionTable;