
import Card from '../components/Card'

import { useParams } from 'react-router-dom'
export default function Countries({countries}){

  
  return <div>
    {
      countries?.map(item=><Card item={item}/>)
    }
  </div>
}