import { useState } from 'react';
import house1 from '../images/house1.png';
import house2 from '../images/house2.png';
import house3 from '../images/house3.png';
import apt1 from '../images/apart1.png';
import apt2 from '../images/apart2.png';
import apt3 from '../images/apart3.png';

const houses = [
    {
        image: house1,
        price: '$3,440',
        location: 'Palm Harbor',
        address: '2699 Green Valley, Highland Lake, FL',
    },
    {
        image: house2,
        price: '$6,550',
        location: 'St. Crystal',
        address: '210 US Highway, Highland Lake, FL',
    },
    {
        image: house3,
        price: '$4,950',
        location: 'Faulkner Ave',
        address: '909 Woodland St, Michigan, IN',
    },
];

const apartments = [
    {
        image: apt1,
        price: '$2,140',
        location: 'Tarpon Bay',
        address: '103 Lake Shores, Michigan, IN',
    },
    {
        image: apt2,
        price: '$1,450',
        location: 'Cove Red',
        address: '243 Curlew Road, Palm Harbor, TX',
    },
    {
        image: apt3,
        price: '$3,850',
        location: 'Beverly Springfield',
        address: '2821 Lake Sevilla, Palm Harbor, TX',
    },
];

export default function PropertySection() {
    const [activeTab, setActiveTab] = useState('houses');


    const listings = activeTab === 'houses' ? houses : apartments;

    return (
        <section className="w-full bg-white px-4 py-16">
            <div className="max-w-7xl mx-auto text-center">
                <div className="inline-flex p-1 bg-gray-100 rounded-lg mb-6 shadow-inner">
                    {['houses', 'apartments'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition duration-150
        ${activeTab === tab
                                    ? 'bg-white text-indigo-600 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 active:bg-indigo-100 active:text-indigo-700'
                                    : 'text-gray-400 hover:text-indigo-600'
                                }`}
                        >
                            {tab === 'houses' ? 'Houses' : 'Apartments'}
                        </button>
                    ))}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                    We make it easy for houses and apartments.
                </h2>
                <p className="mt-2 text-gray-600 text-sm max-w-md mx-auto">
                    Whether it's selling your current home, getting financing, or buying a new home, we make it easy and efficient.
                </p>
                <div className="mt-10">
                    <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 lg:hidden snap-x snap-mandatory scroll-smooth">
                        {listings.map((item, index) => (
                            <div key={index} className="min-w-[280px] max-w-[300px] snap-center shrink-0">
                                <PropertyCard {...item} />
                            </div>
                        ))}
                    </div>
                    <div className="hidden lg:grid grid-cols-3 gap-6">
                        {listings.map((item, index) => (
                            <PropertyCard key={index} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


function PropertyCard({ image, price, location, address }) {
    const isApartment =
        location === 'Tarpon Bay' ||
        location === 'Cove Red' ||
        location === 'Beverly Springfield';

    const badgeLabel = isApartment ? 'APARTMENTS' : 'HOUSE';

    return (
        <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="relative">
                <img src={image} alt={location} className="w-full h-48 object-cover" />
                <div className="absolute left-0 bottom-0 translate-y-1/2 bg-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-r-md flex items-center gap-1 shadow-md">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.159c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.54 1.118l-3.371-2.449a1 1 0 00-1.175 0l-3.371 2.449c-.784.57-1.838-.196-1.539-1.118l1.285-3.957a1 1 0 00-.363-1.118L2.07 9.385c-.783-.57-.38-1.81.588-1.81h4.158a1 1 0 00.951-.69l1.286-3.958z" />
                    </svg>
                    {badgeLabel}
                </div>
            </div>

            <div className="p-4 text-left">
                <div className="flex items-center justify-between">
                    <p className="text-indigo-600 font-bold">
                        {price} <span className="text-sm text-gray-500">/month</span>
                    </p>
                    <button
                        className="p-1 rounded-full bg-white border border-gray-200 
                         hover:bg-indigo-50 focus:bg-indigo-100 focus:ring-2 focus:ring-indigo-200 
                         active:bg-indigo-600 transition"
                    >
                        <svg
                            className="w-5 h-5 text-indigo-600 active:text-white transition-colors"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                         2 6 4 4 6.5 4c1.74 0 3.41 1.01 4.22 2.44C11.09 5.01 
                         12.76 4 14.5 4 17 4 19 6 19 8.5c0 3.78-3.4 6.86-8.55 
                         11.54L12 21.35z" />
                        </svg>
                    </button>
                </div>

                <h3 className="text-gray-800 font-semibold text-lg mt-2">{location}</h3>
                <p className="text-sm text-gray-500">{address}</p>
            </div>
        </div>
    );
}
