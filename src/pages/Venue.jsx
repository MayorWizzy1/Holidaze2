import { useParams } from 'react-router-dom';
import { useApi } from '../hooks/useApi';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarIcon from '@mui/icons-material/Star';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import LocalParkingRoundedIcon from '@mui/icons-material/LocalParkingRounded';
import FreeBreakfastOutlinedIcon from '@mui/icons-material/FreeBreakfastOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';

export function Venue() {
  let { id } = useParams();
  const url = `https://v2.api.noroff.dev/holidaze/venues/${id}?_owner=true`;
  const { data: venue } = useApi(url, {
    method: 'GET',
  });

  console.log(venue);

  const images = venue?.media?.map((media) => ({
    url: media.url,
    alt: media.alt,
  }));

  return (
    <div>
      <div>
        {images?.map((img, index) => (
          <img
            src={img.url}
            alt={img.alt}
            key={index}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        ))}
        <div>
          <button>
            <ShareOutlinedIcon />
            <p>Share</p>
          </button>
          <button>
            <FavoriteBorderOutlinedIcon />
            <p>Save</p>
          </button>
        </div>
        <div>
          <div>
            <h1>{venue.name}</h1>
            <div className="bg-orange py-1.5 pl-1.5 pr-2 text-white rounded-sm flex items-center gap-0.5 w-fit">
              <StarIcon className="!w-4 !h-4" />
              <p className="text-xs font-medium">{venue.rating}</p>
            </div>
          </div>
          <div className="text-outline flex items-center gap-1 mb-0.5">
            <PlaceOutlinedIcon className="!w-4" />
            <p className="text-sm">
              {venue.location?.city || 'Somewhere'},{' '}
              {venue.location?.country || 'in the world'}
            </p>
          </div>
          <div>
            <div className="text-outline flex items-center gap-1">
              <HotelOutlinedIcon className="!w-4" />
              <p className="text-sm">{venue.maxGuests} guests</p>
            </div>
            {venue.meta?.wifi && (
              <div>
                <WifiOutlinedIcon />
                <p>Free WiFi</p>
              </div>
            )}
            {venue.meta?.parking && (
              <div>
                <LocalParkingRoundedIcon />
                <p>Parking available</p>
              </div>
            )}
            {venue.meta?.breakfast && (
              <div>
                <FreeBreakfastOutlinedIcon />
                <p>Breakfast included</p>
              </div>
            )}
            {venue.meta?.pets && (
              <div>
                <PetsOutlinedIcon />
                <p>Pets allowed</p>
              </div>
            )}
          </div>
          <div>
            <h2>About</h2>
            <p>{venue.description}</p>
          </div>
          <div>
            <h2>Host</h2>
            <div>
              <img src={venue.owner.avatar.url} alt={venue.owner.avatar.alt} />
              <p>{venue.owner.name}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-0.5">
          <p className="text-xl font-bold">${venue.price}</p>
          <span className="text-xs text-outline">/ night</span>
        </div>
      </div>
    </div>
  );
}
