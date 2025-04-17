import houseImage from '../images/House.png';
import mapImage from '../images/Map.png';

export default function MainSection() {
  return (
    <section className="w-full bg-white px-4 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-900">
            Buy, rent, or sell your property easily
          </h2>
          <p className="mt-4 text-gray-600 text-base">
            A great platform to buy, sell, or even rent your properties without any commissions.
          </p>

          <div className="mt-8 flex flex-row sm:flex-row gap-6 justify-evenly lg:justify-start">
            <StatBox value="50k+" label="renters" />
            <StatBox value="10k+" label="properties" />
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <img
            src={mapImage}
            alt="Map"
            className="w-full max-w-md left-2 rounded-xl shadow-md lg:ml-8"
          />
          <div className="absolute p-2 -left-10 md:left-20 lg:left-0 bottom-14 md:bottom-[7.5rem] lg:bottom-18 z-10 bg-white rounded-xl shadow-xl scale-[0.6] md:scale-[0.9] lg:scale-100">
            <img
              src={houseImage}
              alt="House"
              className="w-full h-32 object-cover rounded-lg"
            />
            <div className="mt-3">
              <p className="text-indigo-600 font-bold">
                $2,700 <span className="text-sm text-gray-500">/month</span>
              </p>
              <h3 className="text-gray-800 font-semibold">Beverly Springfield</h3>
              <p className="text-sm text-gray-500">2821 Lake Sevilla, Palm Harbor, TX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBox({ value, label }) {
  return (
    <div className="relative pl-6">
      <div className="before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-14 before:bg-gray-300">
        <p className="text-2xl font-bold text-indigo-600">{value}</p>
        <p className="text-sm text-gray-600">{label}</p>
      </div>
    </div>
  );
}
