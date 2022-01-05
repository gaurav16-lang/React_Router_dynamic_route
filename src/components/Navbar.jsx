import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about" style={{ margin: '10px' }}>
        About
      </Link>
      <Link to="/ContactUS">Contact</Link>
    </>
  )
}
