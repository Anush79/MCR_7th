import { NavLink, useParams } from "react-router-dom";
import { data } from "../data";
export default function Destination() {
  const { continent, country, destin } = useParams();
  const continentFound = data.continents.find((item) =>
    item.name.includes(continent)
  );
  console.log(continentFound);
  const countryFound = continentFound?.countries.find((item) =>
    item.name.includes(country)
  );
 const destinationFound = countryFound?.destinations?.find(item=>item.name.includes(destin))
 console.log(destinationFound)
  return (
    <>
      <h3 className="m-10 text-2xl font-bold text-blue-500">
       {destinationFound?.name}
      </h3>
     <div className="flex">
         <img src={destinationFound.image} alt="" className="w-1/2" />
        <p></p>
    </div>
    </>
  );
}
