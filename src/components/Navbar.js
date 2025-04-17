import { useState } from 'react';
import logo from '../images/Logo.svg';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-sm z-50 relative">
            <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex items-center justify-between">

                    <div className="flex items-center">
                        <img src={logo} alt="Estatery" className="w-6 h-6" />
                        <span className="ml-2 text-xl font-semibold text-gray-800">Estatery</span>
                    </div>

                    <div className="hidden lg:flex items-center gap-12">
                        <div className="flex gap-8">
                            {['Rent', 'Buy', 'Sell', 'Manage Property', 'Resources'].map((label) => (
                                <NavLink key={label} label={label} />
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <button
                                className="px-6 py-2 rounded-lg border border-gray-300 text-gray-800 font-medium bg-white
                           hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2
                           active:border-indigo-600 active:text-indigo-600 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed"
                            >
                                Login
                            </button>

                            <button
                                className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium
                           hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2
                           active:bg-indigo-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
                            >
                                Sign up
                            </button>
                        </div>
                    </div>

                    <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-gray-700 z-50">
                        {menuOpen ? (
                            <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="fixed inset-0 bg-white z-40 px-6 py-8 flex flex-col gap-6">
                    <div className="flex flex-col gap-4 text-lg font-medium">
                        {['Rent', 'Buy', 'Sell', 'Manage Property', 'Resources'].map((label) => (
                            <MobileNavLink key={label} label={label} />
                        ))}
                    </div>

                    <div className="mt-4 flex flex-col gap-4">
                        <button
                            className="w-full py-2 border border-gray-300 rounded-lg text-gray-800 font-medium
                         bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2
                         active:border-indigo-600 active:text-indigo-600"
                        >
                            Login
                        </button>
                        <button
                            className="w-full py-2 bg-indigo-600 text-white rounded-lg font-medium
                         hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2
                         active:bg-indigo-700"
                        >
                            Sign up
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}

function NavLink({ label }) {
    return (
        <a
            href="/"
            className="text-gray-700 hover:text-indigo-600 font-medium transition"
        >
            {label}
        </a>
    );
}

function MobileNavLink({ label }) {
    return (
        <a
            href="/"
            className="text-gray-800 hover:text-indigo-600 block transition"
        >
            {label}
        </a>
    );
}
