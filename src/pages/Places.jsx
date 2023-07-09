import { NavLink, useParams } from "react-router-dom";
import Card from "../components/Card";
import { data } from "../data";
export default function Destinations() {
  const { continent, country } = useParams();
  const continentFound = data.continents.find((item) =>
    item.name.includes(continent)
  );
console.log(continentFound)
  const countryFound = continentFound?.countries.find((item) =>
    item.name.includes(country)
  );
  console.log({countryFound})
  return (
    <>
      <h3 className="m-10 text-2xl font-bold text-blue-500">
        Top destinations for your next holiday in {countryFound?.name}
      </h3>
      <div className="flex flex-row gap-4 relative">
        {countryFound?.destinations?.map((item) => (
          // <NavLink to={`/${continentFound.name.slice(0, 4)}/${countryFound.name.slice(0, 4)}/${item.name}`}>
            <Card item={item} />
          // </NavLink>
        ))}
      </div>
    </>
  );
}
