import React from 'react';

const Footer = () => {
    return (
        <footer className='w-full z-100 flex flex-col'>   
            <div className=' bg-text py-10'>
                <div className='mx-auto flex max-w-7xl px-4 py-2 justify-between items-stretch w-full md:flex-row flex-col'>
                    <div className='flex flex-col items-center'>
                        <img src="/logo/logo-footer.png" className='max-w-[244px]' />
                        <img src="/logo/logo-moulis-medoc-footer.png" className='max-w-[140px] mt-7' />
                    </div>
                    <div className='flex flex-col md:items-end items-center md:mt-0 mt-10 justify-between min-h-full'>
                        <div className='flex'>
                            <div className='p-3 bg-beigeDark mr-[1px]'>
                                <img src="/icon/insta.png" className='inline-block' />
                            </div>
                            <div className='p-3 bg-beigeDark'>
                                <img src="/icon/fb.png" className='inline-block' />
                            </div>
                        </div>
                        <div className='flex text-white md:mt-0 mt-5'>
                            <p className='mr-5 font-source'>Ⓒ 2024</p>
                            <a className='cursor-pointer font-source'>Mentions légales</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' py-7 px-4 bg-white mx-auto flex md:flex-row flex-col max-w-7xl justify-between w-full'>
                <div className='flex'>
                    <img src="/logo/exploitation.png" className='max-w-[244px] mx-auto' />
                    <img src="/logo/independant.png" className='max-w-[244px] mx-auto ml-3' />
                </div>
                <img src="/logo/aquitaine.png" className='max-w-[122px] md:mx-0 mx-auto md:mt-0 mt-10' />
            </div>
        </footer>

    );
};

export default Footer;