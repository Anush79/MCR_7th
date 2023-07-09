
import Card from '../components/Card'
import {data} from '../data'
import { NavLink, useParams } from 'react-router-dom'
export default function Countries(){
const {continent}= useParams()
  const continentFound= data.continents.find(item=>item.name.includes(continent))
  console.log(continentFound)
  return<><h3 className="m-10 text-2xl font-bold text-blue-500">Top continents for your next holiday</h3>
  <div className='flex flex-row gap-4 relative'>
  {
      continentFound?.countries?.map(item=><NavLink to={`/${item.name.slice(0,4)}/${item.name.slice(0,4)}`}><Card item={item}/>
        </NavLink>)
    }
  
  </div>
  </>
}