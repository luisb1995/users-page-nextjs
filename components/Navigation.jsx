import Image from 'next/image'
import Link from 'next/link'
export default function Navigation() {
  return (
    <header className='navig'>
           
                <Image
                    src="/vercel.svg"
                    width={120}
                    height={100}
                    alt="Picture of the author"
                  
                />
                <ul className='navigation'>
                  <Link href="/" className='navv'>Home</Link>
                  <Link href="/about" className='navv'>Sobre mi</Link>
                  <Link href="/contacto" className='navv'>Contacto</Link>
                </ul>
            
 </header>
  )
}
