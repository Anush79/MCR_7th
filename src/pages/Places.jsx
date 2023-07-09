
import Card from '../components/Card'
export default function Countries({destinations}){
  return <div>
    {
      destinations?.map(item=><Card item={item}/>)
    }
  </div>
}