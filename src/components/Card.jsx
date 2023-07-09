import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function Card({ item }) {
  const { id, name, image } = item;
  return (
    <div>
      <img src={image} alt={name + id} className='w-80 rounded-xl'/>
      
      <p className='absolute bottom-0 text-white py-4 font-bold'> <LocationOnIcon/> {name}</p>

    </div>
  );
}
