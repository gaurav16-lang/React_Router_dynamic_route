import { useParams } from 'react-router-dom'

export const UsersDetails = () => {
  const { userid } = useParams()
  return <div>Fetch data of user:{userid}</div>
}
