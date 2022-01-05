import { useParams } from 'react-router-dom'
import React from 'react'

export const UsersDetails = () => {
  const [user, setuser] = React.useState({})
  const [isLoading, setIsloading] = React.useState(false)
  const { usersid } = useParams()
  const getuserdetail = () => {
    fetch(`https://reqres.in/api/users/${usersid}`)
      .then((d) => d.json())
      .then((res) => {
        console.log(res.data)
        setuser(res.data)
      })
  }
  React.useEffect(() => {
    getuserdetail()
  }, [])

  return (
    <div>
      <img src={user.avatar} alt="h" />
      <p>{user.email}</p>
      <p>{user.first_name}</p>
      <p>{user.last_name}</p>
    </div>
  )
}
