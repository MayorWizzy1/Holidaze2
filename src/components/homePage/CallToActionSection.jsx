import { Link } from 'react-router-dom';

export function CallToActionSection() {
  return (
    <div className="px-4 pb-8 sm:flex sm:justify-between sm:items-center sm:gap-2 lg:gap-3 lg:pb-20 lg:px-32">
      <div>
        <h1 className="text-xl font-bold mb-4">Explore all venues</h1>
        <Link
          to="/allVenues"
          className="block rounded-[10px] group overflow-hidden"
        >
          <img
            src="public/allVenues.jpg"
            alt="View all venues"
            className="rounded-[10px] aspect-[21/9] object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
      </div>
      <div className="mt-8 sm:mt-0">
        <h1 className="text-xl font-bold mb-4">List your property</h1>
        <Link className="block rounded-[10px] group overflow-hidden">
          <img
            src="public/property.jpg"
            alt="To your profile page"
            className="rounded-[10px] aspect-[21/9] object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
      </div>
    </div>
  );
}
