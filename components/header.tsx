'use client';

import React, { useState } from 'react';
import { ChevronRight, Menu } from 'lucide-react';
import Image from 'next/image';
import SlideIn from './slide-in'; // Assuming SlideIn is in the same directory
import clsx from 'clsx';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className='p-4 flex justify-between items-center bg-[#eeeee1]'>
        <div className="flex-1">
          <p className='text-xs hidden md:block'>クリニックの開業支援・再建支援・後継者支援 医療コンサルの株式会社ボーラボ</p>
        </div>
        <div className="flex-1 flex justify-center">
          <Image src="/logo.png" alt="Logo" className="h-8" width={150} height={100} />
        </div>
        <div className="flex-1 flex justify-end">
          <Menu className="h-8 w-8 cursor-pointer" onClick={toggleMenu} />
        </div>
      </div>
      <div className={clsx(["fixed top-0 right-0 h-full w-full md:w-80 bg-[#eeeee1] shadow-lg z-50 transition duration-500", menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"])}>
        <div className="absolute top-4 right-4">
          <ChevronRight className="h-8 w-8 cursor-pointer" onClick={toggleMenu} />
        </div>
        <nav className="p-4">
          <ul>
            <li><a href="/" className="block py-2"><span className='text-lg'>トップページ</span><br /><span className='text-xs'>TOPPAGE</span></a></li>
            <li><a href="/" className="block py-2"><span className='text-lg'>代表メッセージ</span><br /><span className='text-xs'>PROFILE & MESSAGE</span></a></li>
            <li><a href="/" className="block py-2"><span className='text-lg'>事業内容</span><br /><span className='text-xs'>OUR MISSION</span></a></li>
            <li><a href="/" className="block py-2"><span className='text-lg'>導入事例</span><br /><span className='text-xs'>CUSTOMERS VOICES</span></a></li>
            <li><a href="/" className="block py-2"><span className='text-lg'>海外事業</span><br /><span className='text-xs'>OVERSEAS OPERATIONS</span></a></li>
            <li><a href="/" className="block py-2"><span className='text-lg'>問い合わせ</span><br /><span className='text-xs'>CONTACT</span></a></li>
          </ul>
        </nav>
        <div className="">
          <div className="flex items-center justify-center space-x-4">
            <a href="" className='border border-black p-4 rounded-full aspect-square' target="_blank" rel="noopener noreferrer">
              <Image src='/icon-instagram.png' width={24} height={24} alt="Instagram" />
            </a>
            <a href="" className='border border-black p-4 rounded-full aspect-square' target="_blank" rel="noopener noreferrer">
                <Image src='/icon-x.png' width={24} height={24} alt="X" />
            </a>
            <a href="" className='border border-black p-4 rounded-full aspect-square' target="_blank" rel="noopener noreferrer">
                <Image src='/icon-youtube.png' width={24} height={24} alt="youtube" />
            </a>
          </div>
          <p className="mt-4 text-xs text-center">Bow Lab Co., Ltd. All rights reserved.</p>
        </div>
      </div>
      <p className='text-[0.65rem] text-center p-4 md:hidden bg-gray-300/50'>クリニックの開業支援・再建支援・後継者支援 医療コンサルの株式会社ボーラボ</p>
    </header>
  );
};

export default Header;
