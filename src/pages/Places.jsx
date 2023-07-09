import { useParams } from 'react-router-dom';
import {data} from '../data'
import Card from '../components/Card'
export default function Countries(){
  const { continent, country } = useParams();
  const continentFound = data.continents.find((item) =>
    item.name.includes(continent)
  );

  const countryFound = continentFound.find(item=>  item.name.includes(country))
  return (
    <>
      <h3 className="m-10 text-2xl font-bold text-blue-500">
        Top destinations for your next holiday in {countryFound}
      </h3>
      <div className="flex flex-row gap-4 relative">
        {countryFound?.destinations?.map((item) => (
          <NavLink to={`/${item.name.slice(0, 4)}/${item.name.slice(0, 4)}`}>
            <Card item={item} />
          </NavLink>
        ))}
      </div>
    </>)
}