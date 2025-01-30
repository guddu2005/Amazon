import React from 'react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
    const navigate = useNavigate();

    const accountItems = [
        {
            icon: '📦',
            title: 'Your Orders',
            description: 'Track, return, or buy things again',
            redirectPath: '/orders',
        },
        {
            icon: '🔒',
            title: 'Login & security',
            description: 'Edit login, name, and mobile number',
            redirectPath: '/login-security',
        },
        {
            icon: '📦',
            title: 'Prime',
            description: 'View benefits and payment settings',
            redirectPath: '/prime',
        },
        {
            icon: '📍',
            title: 'Your Addresses',
            description: 'Edit addresses for orders and gifts',
            redirectPath: '/address',
        },
        {
            icon: '💳',
            title: 'Payment options',
            description: 'Edit or add payment methods',
            redirectPath: '/payment-options',
        },
        {
            icon: '💰',
            title: 'Amazon Pay balance',
            description: 'Add money to your balance',
            redirectPath: '/amazon-pay',
        },
    ];

    const handleItemClick = (redirectPath) => {
        if (redirectPath) {
            navigate(redirectPath);
        }
    };

    return (
        <div className="p-8">
            <h2 className="text-2xl font-semibold mb-6">Your Account</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {accountItems.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleItemClick(item.redirectPath)}
                        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg p-6 shadow-sm transition-transform transform hover:-translate-y-1 cursor-pointer"
                    >
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-center">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Account;
