import { Disclosure, DisclosureButton } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './Navbar.module.css'
import Logo from '../../Assets/Logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [navigation, setNavigation] = useState([
    { name: 'Home', href: '/', current: true },
    { name: 'About us', href: '/about_us', current: false },
    { name: 'Services', href: '/services', current: false },
    { name: 'Contact Us', href: '/contact', current: false },
    { name: 'Clients', href: '/clients', current: false },
    { name: 'News', href: '/news', current: false },
    { name: 'Careers', href: '/career', current: false },
    { name: 'Advanced search', href: '/advanced_search', current: false },
  ]);
  const handleNavigationClick = (clickedItem) => {
    const updatedNavigation = navigation.map((item) =>
      item.name === clickedItem.name
        ? { ...item, current: true }
        : { ...item, current: false }
    );
    setNavigation(updatedNavigation);
  };
  
  return (
    <Disclosure as="nav" className="">
    <div className="mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center">
        <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
          {/* Mobile menu button*/}
          <DisclosureButton className="group relative  items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
          </DisclosureButton>
        </div>

        {/* Logo Section */}
        <div className="flex flex-1   items-center">
          <img
            alt="Your Company"
            src={Logo}
            className="h-12 w-auto"
          />
        </div>

        {/* Navigation Section */}
        <div className="absolute inset-x-0 flex justify-center">
          <div className="hidden lg:block">
            <div className="flex   ">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current 
                      ? 'text-[#F0940D]  underline underline-offset-8 border-[#F0940D]' 
                      : ` hover:text-[#F0940D]`,
                    'textNav px-3 py-2 text-[18px] '
                  )}
                  onClick={() => handleNavigationClick(item)}
                >
                  
                  {item.name}
                </Link>
              ))}


            </div>
            
          </div>
        </div>
        <div className="absolute right-0  lg:flex hidden  items-center">
      <div className="face  bg-white rounded-full p-2">
        <svg className='cursor-pointer' width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
            fill="#1F87BC"
          />
        </svg>
      </div>

      <div className="face  bg-white rounded-full p-2">
        <svg className='cursor-pointer' width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.93994 4.99999C6.93968 5.53043 6.72871 6.03903 6.35345 6.41391C5.97819 6.7888 5.46937 6.99926 4.93894 6.99899C4.40851 6.99873 3.89991 6.78776 3.52502 6.4125C3.15014 6.03724 2.93968 5.52843 2.93994 4.99799C2.94021 4.46756 3.15117 3.95896 3.52644 3.58407C3.9017 3.20919 4.41051 2.99873 4.94094 2.99899C5.47137 2.99926 5.97998 3.21023 6.35486 3.58549C6.72975 3.96075 6.94021 4.46956 6.93994 4.99999ZM6.99994 8.47999H2.99994V21H6.99994V8.47999ZM13.3199 8.47999H9.33994V21H13.2799V14.43C13.2799 10.77 18.0499 10.43 18.0499 14.43V21H21.9999V13.07C21.9999 6.89999 14.9399 7.12999 13.2799 10.16L13.3199 8.47999Z"
            fill="#0076B2"
          />
        </svg>
      </div>
    </div>
        
      </div>
    </div>

    <Disclosure.Panel className="lg:hidden ">
    <div className="flex flex-col">
  {navigation.map((item) => (
    <DisclosureButton
      key={item.name}
      as="a"
      href={item.href}
      aria-current={item.current ? 'page' : undefined}
      className={classNames(
        item.current ? 'text-[#F0940D] underline underline-offset-8 border-[#F0940D]' : 'textNav  hover:text-[#F0940D]',
        'rounded-md px-3 py-2 text-sm font-medium'
      )}
    >
      {item.name}
    </DisclosureButton>
  ))}
  <div className='flex gap-3 p-2  items-center'>
               <div className="face bg-white  rounded-full">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" fill="#1F87BC"/>
</svg>
               </div>
               <div className="face bg-white rounded-full">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.93994 4.99999C6.93968 5.53043 6.72871 6.03903 6.35345 6.41391C5.97819 6.7888 5.46937 6.99926 4.93894 6.99899C4.40851 6.99873 3.89991 6.78776 3.52502 6.4125C3.15014 6.03724 2.93968 5.52843 2.93994 4.99799C2.94021 4.46756 3.15117 3.95896 3.52644 3.58407C3.9017 3.20919 4.41051 2.99873 4.94094 2.99899C5.47137 2.99926 5.97998 3.21023 6.35486 3.58549C6.72975 3.96075 6.94021 4.46956 6.93994 4.99999ZM6.99994 8.47999H2.99994V21H6.99994V8.47999ZM13.3199 8.47999H9.33994V21H13.2799V14.43C13.2799 10.77 18.0499 10.43 18.0499 14.43V21H21.9999V13.07C21.9999 6.89999 14.9399 7.12999 13.2799 10.16L13.3199 8.47999Z" fill="#0076B2"/>
</svg>

               </div>
            
      

            </div>
</div>
    </Disclosure.Panel>
  </Disclosure>
  )
}
