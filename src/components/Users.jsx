import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

const Wraper = styled.div`
  width: 50%;

  border: 1px solid red;
  display: grid;
  grid-template-columns: repeat(4, 20%);
  grid-gap: 1%;
  margin: auto;
  margin-top: 50px;
`
const Image = styled.img`
  max-width: 100%;
  display: inline-block;
`
const Belowraper = styled.div`
  width: 100%;
  border: 1px solid black;
`
export const Users = () => {
  const [users, setusers] = React.useState([])
  const [isLoading, setisLoading] = React.useState(true)

  const detail = (e) => {
    console.log(e)
  }

  const fetchUser = () => {
    setisLoading(true)
    fetch(`https://reqres.in/api/users`)
      .then((d) => d.json())
      .then((res) => {
        setusers(res.data)
        console.log(res.data)
      })
  }
  React.useEffect(() => {
    fetchUser()
  }, [])

  return (
    <Wraper>
      {users.map((e, i) => (
        <Link to={`/users/${e.id}`} key={i}>
          <Belowraper>
            <Image src={e.avatar} />
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
