import { useParams } from 'react-router-dom'

export const Products = () => {
  const { id } = useParams()
  console.log(id)
  return <div>Products detail of id is :{id}</div>
}
