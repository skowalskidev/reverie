"use client"

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faPlus, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import SubscriptionInput from './SubscriptionInput';

export interface Subscription {
    name: string;
    price: number | null;
    usedThisMonth: boolean;
    invoiceLink: string;
    unsaved?: boolean;
}

const initialSubscriptions: Subscription[] = [
    {
        name: 'DigitalOcean',
        price: 6,
        usedThisMonth: true,
        invoiceLink: 'https://cloud.digitalocean.com/account/billing?i=59b4d8',
    },
    {
        name: 'Github Copilot',
        price: 10,
        usedThisMonth: true,
        invoiceLink: 'https://github.com/account/billing/history',
    },
    {
        name: 'Chat GPT',
        price: 20,
        usedThisMonth: true,
        invoiceLink: 'https://chat.openai.com/',
    },
    {
        name: 'Midjourney',
        price: 10,
        usedThisMonth: false,
        invoiceLink: 'https://www.midjourney.com/account/',
    },
];

const SubscriptionTable: React.FC = () => {
    const [subscriptions, setSubscriptions] = useState<Subscription[]>(initialSubscriptions);
    const [editableRowIndex, setEditableRowIndex] = useState<number | null>(null);
    const [subscriptionDraftRow, setSubscriptionDraftRow] = useState<Subscription | null>(null);
    const [prevSubscriptionsLength, setPrevSubscriptionsLength] = useState(subscriptions.length);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedData = localStorage.getItem('subscriptions');
            if (storedData) {
                setSubscriptions(JSON.parse(storedData));
            }
        }
    }, []);

    useEffect(() => {
        if (subscriptions.length > prevSubscriptionsLength) {
            startEditRow(subscriptions.length - 1);
        }
        setPrevSubscriptionsLength(subscriptions.length);
    }, [subscriptions]);

    function handleEdit(index: number, key: keyof Subscription, value: any) {
        const newSubscriptions: any[] = [...subscriptions];
        newSubscriptions[index][key] = value;
        setSubscriptions(newSubscriptions);
    };

    function handleAddRow() {
        setSubscriptions([...subscriptions, {
            name: '',
            price: null,
            usedThisMonth: true,
            invoiceLink: '',
            unsaved: true,
        }]);
    };

    function handleDeleteRow(index: number) {
        const newSubscriptions = [...subscriptions];
        newSubscriptions.splice(index, 1);
        setSubscriptions(newSubscriptions);
        setEditableRowIndex(null);
    };

    function startEditRow(index: number) {
        setEditableRowIndex(index);
        setSubscriptionDraftRow({ ...subscriptions[index] });
    };

    function saveEditRow() {
        if (subscriptionDraftRow) {
            if (subscriptionDraftRow.unsaved) {
                delete subscriptionDraftRow.unsaved;
            }
            const newSubscriptions = [...subscriptions];
            newSubscriptions[editableRowIndex as number] = subscriptionDraftRow;
            setSubscriptions(newSubscriptions);
            setEditableRowIndex(null);
        }
    };

    function cancelEditing() {
        if (subscriptionDraftRow?.unsaved) {
            handleDeleteRow(editableRowIndex as number);
        }
        setEditableRowIndex(null);
    }

    return (
        <div className="relative overflow-x-auto border-black dark:border-purple-600 border rounded-lg grow">
            <table className="w-full text-left text-gray-500 dark:text-gray-400 font-extrabold text-lg">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-9 py-3">Subscription</th>
                        <th scope="col" className="px-9 py-3">Price</th>
                        {editableRowIndex === null && <th scope="col" className="px-9 py-3">Used this month?</th>}
                        {editableRowIndex !== null && <th scope="col" className="px-9 py-3">Link</th>}
                        <th scope="col" className="px-9 py-3"><span className="sr-only">Edit</span></th>
                    </tr>
                </thead>
                <tbody>
                    {subscriptions.map((sub, index) => (
                        <tr
                            key={index}
                            className="hover-hover:cursor-pointer hover-hover:text-purple-600 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover-hover:bg-gray-50 dark:hover-hover:bg-gray-900"
                            onClick={() => { window.open(sub.invoiceLink, '_blank') }}
                        >
                            {Object.keys(sub)
                                .filter(key => {
                                    if (key === 'invoiceLink' && editableRowIndex === null) return false;
                                    if (key === 'unsaved') return false;
                                    if (editableRowIndex !== null && key === 'usedThisMonth') return false;
                                    return true;
                                })
                                .map((key, colIndex) => (
                                    <td
                                        key={key}
                                        className="px-6 py-4"
                                    >
                                        {key === 'usedThisMonth' ? (
                                            <label className="relative inline-flex items-center cursor-pointer" onClick={(e) => e.stopPropagation()}>
                                                <input
                                                    type="checkbox"
                                                    checked={editableRowIndex === index && subscriptionDraftRow ? subscriptionDraftRow.usedThisMonth : sub.usedThisMonth} className="sr-only peer"
                                                    onChange={(e) => editableRowIndex === index ? setSubscriptionDraftRow({
                                                        ...subscriptionDraftRow,
                                                        usedThisMonth: e.target.checked,
                                                    } as Subscription) : handleEdit(index, key, e.target.checked)}
                                                />
                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                                            </label>
                                        ) : (
                                            editableRowIndex === null || editableRowIndex !== index
                                                ? key === 'invoiceLink' && editableRowIndex === index ? <div></div> : <div className='truncate max-w-xs'>
                                                    {key === 'price' && sub.price !== null ? `$${sub.price}` : sub[key as keyof Subscription]?.toString()}
                                                </div>
                                                : (
                                                    <div className="flex items-center">
                                                        {key === 'price' && <span className='mr-2'>$</span>}
                                                        <SubscriptionInput
                                                            autoFocus={editableRowIndex === index && key === 'name'}
                                                            value={subscriptionDraftRow?.[key as keyof Subscription]?.toString() ?? ""}
                                                            onChange={(e) => setSubscriptionDraftRow({
                                                                ...subscriptionDraftRow,
                                                                [key as keyof Subscription]: e.target.value,
                                                            } as Subscription)}
                                                            onKeyDown={(e) => {
                                                                if (e.key === 'Enter') saveEditRow();
                                                                if (e.key === 'Escape') cancelEditing();
                                                            }}
                                                            usedThisMonth={sub.usedThisMonth}
                                                        />
                                                    </div>
                                                ))}
                                    </td>
                                ))}
                            <td className="flex gap-4 px-6 py-4 text-right font-extrabold text-lg" onClick={(e) => e.stopPropagation()}>
                                {editableRowIndex !== index && <>
                                    <span className="cursor-pointer text-gray-400 hover-hover:text-purple-600" onClick={() => startEditRow(index)}>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </span>
                                    <span className="cursor-pointer text-gray-400 hover-hover:text-red-600" onClick={() => handleDeleteRow(index)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </span>
                                </>}
                                {editableRowIndex === index && <>
                                    <span className="cursor-pointer text-gray-400 hover-hover:text-purple-600" onClick={() => saveEditRow()}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    <span className="cursor-pointer text-gray-400 hover-hover:text-red-600" onClick={() => cancelEditing()}>
                                        <FontAwesomeIcon icon={faXmark} />
                                    </span></>}

                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td className="px-6 py-4 text-left" colSpan={Object.keys(subscriptions[0]).length - 1}>
                            <span className="ml-[13px] font-medium hover-hover:text-purple-600 hover-hover:cursor-pointer text-2xl" onClick={handleAddRow}>
                                <FontAwesomeIcon icon={faPlus} />
                            </span>
                        </td>
                    </tr>
                </tbody>

                <tfoot className='font-extrabold text-lg'>
                    <tr>
                        <td className='px-6 py-4'></td>
                        <td className='px-6 py-4'></td>
                        <td className='px-6 py-4'>Total</td>
                        <td className='px-6 py-4'>
                            ${subscriptions.reduce((acc, sub) => acc + (sub.price !== null ? sub.price : 0), 0)}
                        </td>
                    </tr>
                    {subscriptions.reduce((acc, sub) => !sub.usedThisMonth ? acc + (sub.price !== null ? sub.price : 0) : acc, 0) > 0 && (
                        <tr>
                            <td className='px-6 py-4'></td>
                            <td className='px-6 py-4'></td>
                            <td className='px-6 py-4 text-red-600'>Potential Savings</td>
                            <td className='px-6 py-4 text-red-600'>
                                ${subscriptions.reduce((acc, sub) => !sub.usedThisMonth ? acc + (sub.price !== null ? sub.price : 0) : acc, 0)}
                            </td>
                        </tr>
                    )}
                </tfoot>
            </table>
        </div>
    );
};

export default SubscriptionTable;
