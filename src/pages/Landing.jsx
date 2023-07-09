
import {data} from '../data'


export default function Landing(){
  return <div>
    {
data?.continents?.map(item=>item.countries)
    }
  </div>
}