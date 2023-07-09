
import {data} from '../data'
import { NavLink } from 'react-router-dom'
import Card from '../components/Card'
import Countries from './Countries'
export default function Landing(){
  return <>
   <h3 className="m-10 text-2xl font-bold text-blue-500">Top continents for your next holiday</h3>
   <div className='flex flex-row gap-4 relative'>
    
    {
data?.continents?.map(item=><NavLink to={`/${item.name.slice(0,4)}`}><Card item={item}/></NavLink>)
    }
  </div>
  </>
  
}