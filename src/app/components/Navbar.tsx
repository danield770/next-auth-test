import Link from 'next/link';

function NavBar() {
  return (
    <nav className='flex w-96 m-auto justify-between bg-blue-50'>
      <Link href='/'>Home</Link>
      <Link href='/api/auth/signin'>Sign In</Link>
      <Link href='/api/auth/signout'>Sign Out</Link>
      <Link href='/server'>Server</Link>
      <Link href='/client'>Client</Link>
      <Link href='/extra'>Extra</Link>
    </nav>
  );
}

export default NavBar;
