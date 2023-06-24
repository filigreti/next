import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type FooterColumnProps = {
  title: string
  links: Array<string>
}

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div className='footer_column'>
    <h4 className='font-semibold'>{title}</h4>
    <ul className='flex flex-col gap-2 font-normal'>
      {links.map((link) => (
        <Link href='/' key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
)

const Footer = () => {
  return (
    <footer className=' flexStart footer'>
      <div className='flex flex-col gap-12 w-full'>
        <div className='flex items-start flex-col'>
          <Image
            src='/logo-purple.svg'
            width={115}
            height={43}
            alt='Flexibits Logo'
          />
          <p className='text-start text-sm font-normal mt-5 max-w-xs'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
            reiciendis itaque doloribus
          </p>
        </div>
        <div className='grid grid-cols-5'>
          {footerLinks.map((column) => (
            <FooterColumn
              key={column.title}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
