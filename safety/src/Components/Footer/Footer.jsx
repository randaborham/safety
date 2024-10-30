import React from 'react';
import Logo from '../../Assets/Logo-removebg-preview.png';

const ContactItem = ({ icon, text, href, isLink = true }) => (
  <li className="flex items-center text-start space-x-2 pb-4">
    {icon}
    {isLink ? (
      <a className="text-[17px] cursor-pointer" href={href} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    ) : (
      <div className="text-[17px]">{text}</div>
    )}
  </li>
);

export default function Footer() {
  return (
    <footer className="mainBackGround text-white  py-8">
    <div className="grid grid-cols-12 gap-4 sm:px-5 px-5  py-5">
      <div className="col-span-12 lg:col-span-5">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-5 flex justify-center md:justify-start items-center">
            <img alt="Your Company" src={Logo} />
          </div>
          <div className="col-span-12 md:col-span-7 text-center md:text-left">
            <h1 className="text-[24px] pb-2 textNav text-center md:text-left">CONTACT US</h1>
            <ul >
              <ContactItem
                icon={<LocationIcon />}
                text="26 A Khader El Touny St., Apart. 109, Nasr City, Cairo"
                href="https://www.google.com/maps/search/?api=1&query=26+A+Khader+El+Touny+St.,+Apart.+109,+Nasr+City,+Cairo"
                isLink
              />
              <ContactItem
                icon={<PhoneIcon />}
                text="EGYPT: 01066226205 - 01157947206"
                href="tel:+201066226205"
                isLink
              />
              <ContactItem
                icon={<PhoneIcon />}
                text="KSA: +966564348896"
                href="tel:+966564348896"
                isLink
              />
              <ContactItem
                icon={<EmailIcon />}
                text="info@cschse.com"
                href="mailto:info@cschse.com"
                isLink
              />
            </ul>
            <div className='flex gap-3 '>
               <div className="face bg-white p-1 rounded-full">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" fill="#1F87BC"/>
</svg>
               </div>
               <div className="face bg-white p-1 rounded-full">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.93994 4.99999C6.93968 5.53043 6.72871 6.03903 6.35345 6.41391C5.97819 6.7888 5.46937 6.99926 4.93894 6.99899C4.40851 6.99873 3.89991 6.78776 3.52502 6.4125C3.15014 6.03724 2.93968 5.52843 2.93994 4.99799C2.94021 4.46756 3.15117 3.95896 3.52644 3.58407C3.9017 3.20919 4.41051 2.99873 4.94094 2.99899C5.47137 2.99926 5.97998 3.21023 6.35486 3.58549C6.72975 3.96075 6.94021 4.46956 6.93994 4.99999ZM6.99994 8.47999H2.99994V21H6.99994V8.47999ZM13.3199 8.47999H9.33994V21H13.2799V14.43C13.2799 10.77 18.0499 10.43 18.0499 14.43V21H21.9999V13.07C21.9999 6.89999 14.9399 7.12999 13.2799 10.16L13.3199 8.47999Z" fill="#0076B2"/>
</svg>

               </div>
            
      

            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-7 text-center">
        <h1 className="text-[20px] p-4 textNav text-center">HOW WE CAN HELP</h1>
        <p className="w-full md:w-[75%] lg:w-[50%] text-[17px] mx-auto">
          By addressing the technical, behavioral and cultural aspects of your operations, we help you develop a framework that maximizes your existing assets, mitigates risk, and drives continuous innovation.
        </p>
      </div>
    </div>
    <div className="border-[1px] border-[#F0940D] mt-5" />
    <h2 className="text-center text-[16px] md:text-[18px] lg:text-[20px] main-color pt-5">
      Copyright Creative Safety Consultants Info© 2024
    </h2>
  </footer>
  
  );
};


const LocationIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 13.5C11.2583 13.5 10.5333 13.2801 9.91661 12.868C9.29993 12.456 8.81928 11.8703 8.53545 11.1851C8.25162 10.4998 8.17736 9.74584 8.32206 9.01841C8.46675 8.29098 8.8239 7.6228 9.34835 7.09835C9.8728 6.5739 10.541 6.21675 11.2684 6.07206C11.9958 5.92736 12.7498 6.00162 13.4351 6.28545C14.1203 6.56928 14.706 7.04993 15.118 7.66661C15.5301 8.2833 15.75 9.00832 15.75 9.75C15.7488 10.7442 15.3533 11.6973 14.6503 12.4003C13.9473 13.1033 12.9942 13.4988 12 13.5ZM12 7.5C11.555 7.5 11.12 7.63196 10.75 7.8792C10.38 8.12643 10.0916 8.47783 9.92127 8.88896C9.75098 9.3001 9.70642 9.7525 9.79323 10.189C9.88005 10.6254 10.0943 11.0263 10.409 11.341C10.7237 11.6557 11.1246 11.87 11.561 11.9568C11.9975 12.0436 12.4499 11.999 12.861 11.8287C13.2722 11.6584 13.6236 11.37 13.8708 11C14.118 10.63 14.25 10.195 14.25 9.75C14.2494 9.15345 14.0122 8.5815 13.5903 8.15967C13.1685 7.73784 12.5966 7.5006 12 7.5Z" fill="white"/>
<path d="M12 22.5L5.67301 15.0382C5.58509 14.9262 5.49809 14.8135 5.41201 14.7C4.33179 13.276 3.74799 11.5373 3.75001 9.75C3.75001 7.56196 4.6192 5.46354 6.16637 3.91637C7.71355 2.36919 9.81197 1.5 12 1.5C14.188 1.5 16.2865 2.36919 17.8336 3.91637C19.3808 5.46354 20.25 7.56196 20.25 9.75C20.2517 11.5365 19.6682 13.2743 18.5888 14.6978L18.588 14.7C18.588 14.7 18.363 14.9955 18.3293 15.0353L12 22.5ZM6.60975 13.7963C6.60975 13.7963 6.7845 14.0272 6.82425 14.0767L12 20.181L17.1825 14.0685C17.2155 14.0272 17.391 13.7948 17.3918 13.794C18.2747 12.6309 18.7518 11.2103 18.75 9.75C18.75 7.95979 18.0388 6.2429 16.773 4.97703C15.5071 3.71116 13.7902 3 12 3C10.2098 3 8.4929 3.71116 7.22703 4.97703C5.96116 6.2429 5.25001 7.95979 5.25001 9.75C5.24815 11.2112 5.72584 12.6327 6.60975 13.7963Z" fill="white"/>
</svg>


);

const PhoneIcon = () => (
<svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.6112 16.9201V19.9201C22.6123 20.1986 22.5553 20.4743 22.4437 20.7294C22.3321 20.9846 22.1685 21.2137 21.9633 21.402C21.7581 21.5902 21.5158 21.7336 21.252 21.8228C20.9881 21.912 20.7086 21.9452 20.4312 21.9201C17.354 21.5857 14.3982 20.5342 11.8012 18.8501C9.38503 17.3148 7.33654 15.2663 5.8012 12.8501C4.11118 10.2413 3.05944 7.27109 2.7312 4.1801C2.70621 3.90356 2.73908 3.62486 2.8277 3.36172C2.91633 3.09859 3.05877 2.85679 3.24597 2.65172C3.43316 2.44665 3.66101 2.28281 3.91499 2.17062C4.16898 2.05843 4.44354 2.00036 4.7212 2.0001H7.7212C8.20651 1.99532 8.67699 2.16718 9.04496 2.48363C9.41293 2.80008 9.65328 3.23954 9.7212 3.7201C9.84782 4.68016 10.0827 5.62282 10.4212 6.5301C10.5557 6.88802 10.5849 7.27701 10.5051 7.65098C10.4254 8.02494 10.2401 8.36821 9.9712 8.6401L8.7012 9.9101C10.1248 12.4136 12.1977 14.4865 14.7012 15.9101L15.9712 14.6401C16.2431 14.3712 16.5864 14.1859 16.9603 14.1062C17.3343 14.0264 17.7233 14.0556 18.0812 14.1901C18.9885 14.5286 19.9311 14.7635 20.8912 14.8901C21.377 14.9586 21.8206 15.2033 22.1377 15.5776C22.4549 15.9519 22.6234 16.4297 22.6112 16.9201Z" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

);

const EmailIcon = () => (
<svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.6112 6C22.6112 4.9 21.7112 4 20.6112 4H4.61121C3.51121 4 2.61121 4.9 2.61121 6M22.6112 6V18C22.6112 19.1 21.7112 20 20.6112 20H4.61121C3.51121 20 2.61121 19.1 2.61121 18V6M22.6112 6L12.6112 13L2.61121 6" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    
);

