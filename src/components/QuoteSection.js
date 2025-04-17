import { useState } from 'react';
import user1 from '../images/user1.png';
import user2 from '../images/user2.png';
import user3 from '../images/user3.png';

const testimonials = [
    {
        id: 0,
        name: 'Mira Culos',
        role: 'Renter',
        avatar: user1,
        text: `Estatery is the platform I go to on almost a daily basis for 2nd home and vacation condo shopping, or to just look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Estatery!`,
    },
    {
        id: 1,
        name: 'Mark Brown',
        role: 'Renter',
        avatar: user2,
        text: `I check Estatery almost every day — whether I’m seriously house hunting or just daydreaming about future getaways. It makes exploring new locations and comparing properties incredibly easy and enjoyable.`,
    },
    {
        id: 2,
        name: 'Jake White',
        role: 'Renter',
        avatar: user3,
        text: `Estatery turns home shopping into a daily delight. Whether I'm planning for the future or just exploring what’s out there, I always find something exciting and new.`,
    },
];

export default function TestimonialSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = testimonials[activeIndex];

    return (
        <section className="w-full bg-gradient-to-b from-white to-[#f4effe] px-4 py-16">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 pb-4">Testimonials</h2>
                <p className="text-sm text-gray-500 mt-1">
                    See what our property managers, landlords,<br />and tenants have to say
                </p>
                <p className="mt-8 min-h-[13rem] md:min-h-[6rem] lg:min-h-[6rem] text-gray-900 text-lg leading-relaxed">
                    “{active.text}”
                </p>
                <p className="mt-4 font-semibold text-gray-900">
                    {active.name} <span className="font-normal text-gray-500">, {active.role}</span>
                </p>
                <div className="mt-6 flex justify-center gap-4">
                    {testimonials.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveIndex(index)}
                            className={`relative w-14 h-14 rounded-full p-[2px] transition duration-300`}
                            style={{
                                background: activeIndex === index
                                    ? 'conic-gradient(from 0deg, #6366f1 0% 70%, #e5e7eb 75% 100%)'
                                    : 'transparent',
                            }}
                        >
                            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                                <img
                                    src={item.avatar}
                                    alt={item.name}
                                    className="w-12 h-12 object-cover rounded-full"
                                />
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
