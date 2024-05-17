'use client';
// import { useState } from 'react';


import Link from "next/link";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logoImage from '../../public/images/logo1.png'
import logoImage1 from '../../public/icons/face.png'
import logoImage2 from '../../public/icons/ins.png'
import logoImage3 from '../../public/icons/link.png'
import logoImage4 from '../../public/icons/twi.png'
import logoImage5 from '../../public/icons/you.png'


export default function HomePage() {
  
    return (
        <div className="scroll-smooth text-gray-800">
            <div className="fullContainer bannerj" id="homeSection">
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
                                    <a href="/website/home" className="dropbtn link">ABOUT</a>
                                    <div class="dropdown-content">
                                        <Link href="/website/about" className="link">WHO WE ARE</Link>
                                        <Link href="/website/wedo" className="link">WHAT WE DO</Link>
                                        <Link href="/website/impact" className="link">OUR IMPACT</Link>
                                        <Link href="/website/team" className="link">OUR LEADERSHIP</Link>
                                        <Link href="/website/joinus" className="link bg-[#1f8cad] rounded-md">JOIN OUR TEAM</Link>
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
                    <h1><span>Join Us</span></h1>
                    <p className="text-lg">
                        Our foundation is committed to paying particular attention to children and youth within their programs who have suffered from violence and trauma, and aspires to sustain support for young people who have suffered trauma. Nalongo Lwokyaza Foundation also recognizes the power of functional education as a critical part of healing conflict and creating social cohesion in communities.
                    </p>
                    <button className="mb-5">
                        <Link href="#joinusSection">
                            JOIN US NOW
                        </Link>
                    </button>
                </div>
            </div>
            {/* Home section ends here */}

            <section className="fullContainer" id="aboutSection">
                <div className="container" id="joinusSection">
                    <h2 className="sectionTitle text-[#1f8cad]">
                        JOIN OUR TEAM
                    </h2>
                    <h1>Nalongo Lwokyaza Foundation is a family-based, non-profit organization established in 20xx in Jinja, Uganda, in memory of the late Nalongo Mukyala Lwokyaza, a wife, mother, educator, mentor, - - - ,  - - -.</h1>
                    <br/>
                    <h1>You can partner with us in the following ways: </h1>
                    <ul>
                        <li>Buy scholastic materials.</li>
                        <li>Give some upkeep to the children. </li>
                        <li>Donate books and other educational materials</li>
                        <li>Financial and Technical support in starting and operating a vocational school.  </li>
                        <li></li>
                    </ul>
                    <div className="title text-[#1f8cad]">
                         Open Positions:
                    </div>
                    <Link href="#">   
                        <div className="position-button" >
                            <div className=" box flex flex-col">
                                <div className="position-button  ">
                                    <div className="position-button  ">
                                        <div ><h2 >There are currently no open positions.  Follow us on our social media channels or subscribe to our newsletter to stay up to date for new job opportunities.</h2> </div> 
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Image src={logoImage1} width={50} className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-blue-500" alt="Logo Image"/>
                                    <Image src={logoImage2} width={50} className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-green-500" alt="Logo Image"/>
                                    <Image src={logoImage3} width={50} className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-red-500" alt="Logo Image"/>
                                    <Image src={logoImage4} width={50} className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-purple-500" alt="Logo Image"/>
                                    <Image src={logoImage5} width={50} className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-yellow-600" alt="Logo Image"/>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className="cards text-lg flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-4 mt-8 font-semibold">

                        {/* <div className="donationBox">
                            <div className="title text-[#1f8cad]">
                                Become Member
                            </div>
                            <p className="">
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi reiciendis harum eveniet odio sunt itaque in minus.
                            </p>
                            <button className="text-[#1f8cad]">
                                Become Now
                            </button>
                        </div> */}
                        {/* Donation Box end */}

                        {/* <div className="volunteerBox">
                            <div className="title text-[#1f8cad]">
                                Become a volunteer
                            </div>
                            <p>
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi reiciendis harum eveniet odio sunt itaque in minus.
                            </p>
                            <button className="text-[#1f8cad]">
                                Become Now
                            </button>
                        </div> */}
                        {/* Donation Box end */}

                        {/* <div className="scholarshipBox">
                            <div className="title text-[#1f8cad]">
                                Ask For Position
                            </div>
                            <p>
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi reiciendis harum eveniet odio sunt itaque in minus.
                            </p>
                            <button className="text-[#1f8cad]">
                                Ask Now
                            </button>
                        </div> */}
                        {/* Donation Box end */}

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
                                <Link href="/website/home" className="link">
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