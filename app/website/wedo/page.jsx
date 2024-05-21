'use client';
// import { useState } from 'react';

import Link from "next/link";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import logoImage1 from '../../public/icons/face.png'
import logoImage2 from '../../public/icons/ins.png'
import logoImage3 from '../../public/icons/link.png'
import logoImage4 from '../../public/icons/twi.png'
import logoImage5 from '../../public/icons/you.png'

import { useRouter } from 'next/navigation';
import logoImage from '../../public/images/logo1.png'
import educationImage3 from '../../public/images/programs/3.jpg';

export default function HomePage() {
  
    return (
        <div className="scroll-smooth text-gray-800">
            <div className="fullContainer bannerw" id="homeSection">
                <header>
                    <div className="container">
                        <div className="logo">
                            <Image 
                                src={logoImage} 
                                height={100} 
                                alt="Foundation Logo" 
                                className="rounded-md"/>
                        </div>

                        <nav className="pt-5">
                            <ul>
                                <li class="dropdown">
                                    <a href="/" className="dropbtn link">ABOUT</a>
                                    <div class="dropdown-content">
                                        <Link href="/website/about" className="link">WHO WE ARE</Link>
                                        <Link href="/website/wedo" className="link bg-[#1f8cad] rounded-md">WHAT WE DO</Link>
                                        <Link href="/website/impact" className="link">OUR IMPACT</Link>
                                        <Link href="/website/team" className="link">OUR LEADERSHIP</Link>
                                        <Link href="/website/joinus" className="link">JOIN OUR TEAM</Link>
                                    </div>
                                </li>
                                <li class="dropdown">
                                    <a href="#" className="dropbtn link">PROGRAMS</a>
                                    <div class="dropdown-content">
                                        <Link href="/website/education" className="link">EDUCATION</Link>
                                        <Link href="/website/community" className="link">COMMUNITY ENGAGEMENT</Link>
                                    </div>
                                </li>
                                {/* <li>
                                    <Link href="/programs" className="link">
                                        Programs
                                    </Link>
                                </li> */}
                                <li class="dropdown">
                                    <a href="#" className="dropbtn link">CHAPTERS</a>
                                    <div class="dropdown-content">
                                        <Link href="/website/denmark" className="link">DENMARK</Link>
                                        <Link href="/website/switzerland" className="link">SWITZERLAND</Link>
                                        <Link href="/website/germany" className="link">GERMANY</Link>
                                    </div>
                                </li>
                                <li>
                                    <Link href="/website/gallery" className="link">
                                        Gallery
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="/joinus" className="link">
                                        Join Us
                                    </Link>
                                </li> */}
                                <li>
                                    <Link href="/website/donate" className="link bg-amber-700 rounded-lg">
                                        Donate
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </header>
                {/* Header ends here */}

                <div className="container">
                    <h1>WHAT WE DO</h1>
                    <p className="text-lg">
                    </p>
                    <button className="mb-5">
                        <Link href="#joinusSection">
                            JOIN US NOW
                        </Link>
                    </button>
                </div>
            </div>
            {/* Home section ends here */}

            <section className="fullContainer bg-gray-100" id="aboutSection">
                <div className="container" id="joinusSection">
                    <h2 className="sectionTitle text-[#1f8cad]">
                       WHAT WE DO
                    </h2>
                    <br/>
                    <br/>
                        <div className="position-button1" >
                            <div className=" box flex flex-col">

                            <div className="flex justify-between xl:flex-row flex-col  xl:space-x-20 space-y-4 xl:space-y-0">

                                <div className="space-y-3">
                                    <h2 className="text-4xl text-[#1f8cad]">Education</h2>
                                    <p className="text-lg">
                                       Nalongo Lwokyaza Foundation serves one of the world’s most vulnerable communities by providing education to those least likely to be educated: those who come from families that cannot afford.  A case story is from Mbirabira primary school.  
                                    </p> 
                                    <button className="hover:bg-[#197996] w-40 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
                                        <Link href="/website/education">
                                            Learn More
                                        </Link>
                                    </button>
                                </div>
                                <Image className="rounded-circle1" src={educationImage3} alt="Education Image" />
                                {/* <Image 
                                    className="rounded w-full hidden xl:flex" 
                                    src={educationImage3}
                                /> */}
                                </div>
                            </div>
                        </div>

                        <br/>
                        <br/>

                        <div className="position-button1" >
                            <div className=" box flex flex-col">

                            <div className="flex justify-between xl:flex-row flex-col  xl:space-x-20 space-y-4 xl:space-y-0">
                                    <Image className="rounded-circle1" src={educationImage3} alt="Education Image" />
                                        {/* <Image 
                                            className="rounded w-full hidden xl:flex" 
                                            src={educationImage3}
                                        /> */}
                                    <div className="space-y-3">
                                        <h2 className="text-4xl text-[#1f8cad]">Community Building</h2>
                                        <p className="text-lg">
                                          Our community-based program seeks to improve the livelihoods of the community members,
                                        </p> 
                                        <button className="hover:bg-[#197996] w-40 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
                                            <Link href="/website/community">
                                                Learn More
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <br/>
                        <br/>

                        <div className="position-button1" >
                            <div className=" box flex flex-col">

                            <div className="flex justify-between xl:flex-row flex-col  xl:space-x-20 space-y-4 xl:space-y-0">

                                <div className="space-y-3">
                                    <h2 className="text-4xl text-[#1f8cad]"></h2>
                                    {/* <p className="text-lg">
                                    Bringing multiple tribes together to build innovative enterprises for sustainable peace, and development in the DRC. 
                                    </p>  */}
                                    <button className="hover:bg-[#197996] w-40 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
                                        <Link href="#">
                                            Learn More
                                        </Link>
                                    </button>
                                </div>
                                <Image className="rounded-circle1" src={educationImage3} alt="Education Image" />
                                {/* <Image 
                                    className="rounded w-full hidden xl:flex" 
                                    src={educationImage3}
                                /> */}
                                </div>
                            </div>
                        </div>
                </div>
            </section>
            {/* About section ends here */}
            
            <section className="join" id="joinSection">
                <div className="container">
                    <div className="joinTitle">
                        SPONSOR A CHILD 
                        {/* & <span>SAVE LIVES</span> */}
                    </div>
                    <p className="text-lg">
                      Nalongo Lwokyaza Foundation is a family-based, non-profit organization established in 2020 in Jinja, Uganda, in memory of the late Nalongo Mukyala Lwokyaza, a wife, mother, educator, mentor - in order to keep her legacy.
                    </p>
                    <button className="joinNow rounded">
                    <Link href="/website/joinus">JOIN US </Link>
                    </button>
                    <button className="adoptBtn rounded">
                       <Link href="/website/sponsor">Sponsor A Child Now</Link>
                    </button>
                </div>
            </section>

            {/* Join us section ends here */}

            <footer className="">
                <div className="container flex md:flex-row md:justify-between md:space-x-10 space-y-5 flex-col">

                    <div className="newsLetterContainer md:w-96">
                        <Image src={logoImage} 
                        width={80}
                        className="rounded-md pb-5" 
                        alt="Logo Image"/>
                        <p>
                            For 15 years, we have committed to providing access to quality education for volunarable yet talented refugees. Donate today and help us create more refugee change makers like Ntakamaze Nziyonvira.
                        </p>
                        <input 
                            type="text" 
                            placeholder="Enter your email address" />
                    </div>
                    {/* NewsLetter container ends here */}

                    <div className="linksContainer">
                        <div className="title">
                            Useful Links
                        </div>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="link">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/website/about" className="link">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/website/programs" className="link">
                                    Programs
                                </Link>
                            </li>
                            <li>
                                <Link href="/website/education" className="link">
                                    Education
                                </Link>
                            </li>
                            <li>
                                <Link href="/website/gallery" className="link">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/website/joinus" className="link">
                                    Join Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* LinksContainer ends here */}

                    <div className="connectContainer space-y-6">
                        <div className="title flex items-center">
                            follow us 
                            
                        </div>
                        <div className="flex items-center gap-4">
                            <Image src={logoImage1} width={50} className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-blue-500" alt="Logo Image"/>
                            <Image src={logoImage2} width={50} className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-green-500" alt="Logo Image"/>
                            <Image src={logoImage3} width={50} className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-red-500" alt="Logo Image"/>
                            <Image src={logoImage4} width={50} className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-purple-500" alt="Logo Image"/>
                            <Image src={logoImage5} width={50} className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-yellow-600" alt="Logo Image"/>
                        </div>




                        <span>Mailing address:</span>
                        <br />
                        <span>Phone:</span>
                        <span>Email:</span> info@abcde.org
                        <br />
                        <p>
                            Contact - Uganda <br />
                        </p>
                        <p>
                            Contact - Denmark <br />
                        </p>
                        <p>
                            Contact - Switzerland <br />
                        </p>
                        <span>Mailing address:</span>
                        <br />
                        <span>Physical address:</span>
                        <br />
                        <span>Phone:</span> +256-
                        <span>Email:</span> info@abced.org
                    </div>
                    {/* ConnectContainer ends here */}

                </div>
            </footer>



        </div>
    )
}