import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-6">
      <div className="container mx-auto md:flex justify-between items-center">
        <div className="md:flex items-center">
          <div className="flex justify-center items-center space-x-4 mb-4 md:mb-0">
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
          <p className="ml-4 hidden md:block">Bow Lab Co., Ltd. All rights reserved.</p>
        </div>
        <div className='text-center'>
            <Button asChild className='bg-linear-to-r from-[#eeeee1] to-[#FFFFFF] text-[#3b3b3b] rounded-full border px-12 py-4'>
                <Link href="/">お問い合わせ</Link>
            </Button>
        </div>
        <p className="mt-4 text-center md:hidden">Bow Lab Co., Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
