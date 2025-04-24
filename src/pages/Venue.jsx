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
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { useEffect, useState } from 'react';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useForm, Controller } from 'react-hook-form';

export function Venue() {
  let { id } = useParams();
  const url = `https://v2.api.noroff.dev/holidaze/venues/${id}?_owner=true`;
  const { data: venue } = useApi(url, {
    method: 'GET',
  });

  const images = venue?.media?.map((media) => ({
    url: media.url,
    alt: media.alt,
  }));

  const [guests, setGuests] = useState(1);
  const { register, handleSubmit, setValue, control, watch } = useForm();
  const [nights, setNights] = useState(0);

  const handleIncrease = () => {
    if (guests < venue.maxGuests) {
      const updated = guests + 1;
      setGuests(updated);
      setValue('Guests', updated);
    }
  };

  const handleDecrease = () => {
    if (guests > 1) {
      const updated = guests - 1;
      setGuests(updated);
      setValue('Guests', updated);
    }
  };

  const getNights = (start, end) => {
    if (!start || !end) return 0;
    const msPerDay = 1000 * 60 * 60 * 24;
    return Math.round((end - start) / msPerDay);
  };

  const handleBooking = (data) => {
    console.log(data);
  };

  const watchDateRange = watch('dateRange');
  useEffect(() => {
    const [checkInDate, checkOutDate] = watchDateRange || [];
    if (checkInDate && checkOutDate) {
      setNights(getNights(checkInDate, checkOutDate));
    } else {
      setGuests(0);
    }
  }, [watchDateRange]);

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
    });
  };

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
              <img
                src={venue.owner?.avatar?.url}
                alt={venue.owner?.avatar?.alt}
              />
              <p>{venue.owner?.name}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-0.5">
          <p className="text-xl font-bold">${venue.price}</p>
          <span className="text-xs text-outline">/ night</span>
        </div>
        <form onSubmit={handleSubmit(handleBooking)}>
          <Controller
            control={control}
            name="dateRange"
            defaultValue={[null, null]}
            render={({ field }) => (
              <DatePicker
                selectsRange
                startDate={field.value[0]}
                endDate={field.value[1]}
                onChange={(update) => {
                  field.onChange(update);
                  if (!update[0] && !update[1]) {
                    setNights(0);
                  }
                }}
                isClearable
                placeholderText="Check in - Check out"
                className="border border-outline py-3.5 px-4 rounded-[8px]"
                value={
                  field.value[0] || field.value[1]
                    ? `${field.value[0] ? formatDate(field.value[0]) : 'Check in'} - ${field.value[1] ? formatDate(field.value[1]) : 'Check out'}`
                    : ''
                }
                minDate={new Date()}
              />
            )}
          />
          <div>
            <div>
              <PersonOutlineOutlinedIcon />
              <p>Travelers</p>
            </div>
            <div>
              <button type="button" onClick={handleDecrease}>
                <RemoveIcon />
              </button>
              <input {...register('Guests')} value={guests} />
              <button type="button" onClick={handleIncrease}>
                <AddIcon />
              </button>
            </div>
          </div>
          <button type="submit">Book</button>
        </form>
        <div>
          {nights !== 0 ? (
            <div>
              <p>
                ${venue.price} x {nights} nights
              </p>
              <p>${venue.price * nights}</p>
            </div>
          ) : (
            <div>
              <p>
                ${venue.price}
                <span>/ night</span>
              </p>
            </div>
          )}
          {nights !== 0 ? (
            <div>
              <h3>Total</h3>
              <h3>${venue.price * nights}</h3>
            </div>
          ) : (
            <div>
              <h3>Total</h3>
              <h3>--</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
