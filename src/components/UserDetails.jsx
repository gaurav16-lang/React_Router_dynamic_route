import { useParams } from 'react-router-dom'
import React from 'react'

export const UsersDetails = () => {
  const [user, setuser] = React.useState({})
  const [isLoading, setIsloading] = React.useState(false)
  const { usersid } = useParams()
  const getuserdetail = () => {
    fetch(`https://fakestoreapi.com/products/${usersid}`)
      .then((res) => res.json())
      .then((json) => setuser(json))
  }
  React.useEffect(() => {
    getuserdetail()
  }, [])

  return (
    <div>
      <img src={user.image} alt="h" />
      <p>{user.description}</p>
      <p>{user.price}</p>
    </div>
  )
}
