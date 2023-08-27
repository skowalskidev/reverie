import React, { useState } from 'react';

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
        invoiceLink: 'https://pay.openai.com/p/session/live_YWNjdF8xSE9yU3dDNmgxbnhHb0kzLF9PV2xIV2hmWnBMRVVZYXVnMG9odDZieXpoUHhGU3c50100nCSFYkDZ',
        usedThisMonth: 'Yes',
    },
    {
        name: 'Midjourney',
        price: '$10',
        invoiceLink: 'https://billing.stripe.com/p/session/live_YWNjdF8xS2xueTZKYXZJeTlwWWRPLF9PV2xIZTZFdGd5OWxvWlllcHp6Qmc4ZG9KWlh1NEw40100yCUJUwr7',
        usedThisMonth: 'No',
    },
];


const SubscriptionTable: React.FC = () => {
    const [subscriptions, setSubscriptions] = useState<Subscription[]>(initialSubscriptions);

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
            usedThisMonth: 'No',
        }]);
    };

    const handleDeleteRow = (index: number) => {
        const newSubscriptions = [...subscriptions];
        newSubscriptions.splice(index, 1);
        setSubscriptions(newSubscriptions);
    };

    return (
        <table className='dark:text-white'>
            <thead>
                <tr>
                    <th>Subscriptions</th>
                    <th>Price</th>
                    <th>Invoice link</th>
                    <th>Used this month?</th>
                    <th className='min-w-[140px]'></th>
                </tr>
            </thead>
            <tbody>
                {subscriptions.map((sub, index) => (
                    <tr key={index} className='group'>
                        {Object.keys(sub).map((key, colIndex) => (
                            <td key={key}>
                                {key === 'usedThisMonth' ? (
                                    <input
                                        className={`focus:border-gray-800 focus:ring-0 hover:cursor-pointer text-center dark:bg-gray-900 border-l-0 border-r-0 border-t-0 ${sub.usedThisMonth === 'No' ? '!border-red-600 !text-red-600' : 'border-gray-800'}`}
                                        type="text"
                                        value={sub[key as keyof Subscription]}
                                        onClick={() => handleEdit(index, 'usedThisMonth', sub.usedThisMonth === 'Yes' ? 'No' : 'Yes')}
                                        readOnly
                                    />

                                ) : (
                                    <input
                                        className={`text-center dark:bg-gray-900 border-l-0 border-r-0 border-t-0 border-gray-800 ${sub.usedThisMonth === 'No' && '!border-red-600 !text-red-600'}`}
                                        type="text"
                                        value={sub[key as keyof Subscription]}
                                        onChange={(e) => handleEdit(index, key as keyof Subscription, e.target.value)}
                                    />
                                )}
                            </td>
                        ))}
                        <td className='text-center hover:cursor-pointer' onClick={() => handleDeleteRow(index)}>
                            <span className="dark:text-white hidden group-hover:block">Delete</span>
                        </td>
                    </tr>
                ))}
                <tr>
                    {Array.from({ length: Object.keys(subscriptions[0]).length }).map((_, i) => (
                        <td key={i}></td>
                    ))}
                    <td>
                        <button onClick={handleAddRow}>Add</button>
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
                    <tr className='text-green-400'>
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