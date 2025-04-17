import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import logo from '../images/Logo.svg';

export default function Footer() {
    return (
        <footer className="bg-white px-6 py-10 border-t border-gray-100 text-gray-500 text-sm">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="Estatery" className="w-5 h-5" />
                        <span className="text-gray-900 font-semibold text-lg">Estatery</span>
                    </div>

                    <ul className="flex flex-col items-center gap-2 lg:flex-row lg:gap-8">
                        <li><a href="#" className="hover:text-indigo-600">HELP CENTER</a></li>
                        <li><a href="#" className="hover:text-indigo-600">FAQ</a></li>
                        <li><a href="#" className="hover:text-indigo-600">TERMS & PRIVACY</a></li>
                    </ul>
                </div>
                <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
                    <p className="text-xs text-gray-400">&copy;2021 Estatery. All rights reserved</p>
                    <div className="flex gap-5 text-gray-400">
                        <a href="#" className="hover:text-indigo-600"><FaFacebookF size={16} /></a>
                        <a href="#" className="hover:text-indigo-600"><FaInstagram size={16} /></a>
                        <a href="#" className="hover:text-indigo-600"><FaTwitter size={16} /></a>
                        <a href="#" className="hover:text-indigo-600"><FaLinkedinIn size={16} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
