import { Link } from 'react-router-dom'

export const Users = () => {
  return (
    <div>
      {[
        { name: 'SmartPhone', price: 30, id: 0 },
        { name: 'Watch', price: 20, id: 1 },
        { name: 'Shirt', price: 50, id: 2 },
        { name: 'Pants', price: 100, id: 3 },
      ].map((e, i) => {
        ;<div key={i} style={{ margin: '10px' }}>
          <Link to={`/users/${e}`}>Users{e}</Link>
        </div>
      })}
    </div>
  )
}
