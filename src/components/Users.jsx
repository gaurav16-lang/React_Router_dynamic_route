import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

const Wraper = styled.div`
  width: 50%;

  display: grid;
  grid-template-columns: repeat(4, 23%);
  grid-gap: 2%;
  margin: auto;
  margin-top: 50px;
`
const Image = styled.img`
  max-width: 100%;
  display: inline-block;
`
const Belowraper = styled.div`
  width: 100%;
`
export const Users = () => {
  const [users, setusers] = React.useState([])
  const [isLoading, setisLoading] = React.useState(true)

  const detail = (e) => {
    console.log(e)
  }

  const fetchUser = () => {
    setisLoading(true)
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => setusers(json))
  }
  React.useEffect(() => {
    fetchUser()
  }, [])

  return (
    <Wraper>
      {users.map((e, i) => (
        <Link to={`/users/${e.id}`} key={i}>
          <Belowraper>
            <Image src={e.image} />
            <p>{e.price}</p>
          </Belowraper>
        </Link>
      ))}
    </Wraper>
  )
}
// style={{ margin: '10px' }}
{
  /*  */
}
