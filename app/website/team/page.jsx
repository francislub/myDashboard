'use client';

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

import educationImage1 from '../../public/images/programs/1.jpg';
import educationImage2 from '../../public/images/programs/2.jpg';
import educationImage3 from '../../public/images/programs/3.jpg';
import bannerImage from '../../public/images/banner.jpg'
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProgramsPage() {
  
    return (
        <div className="scroll-smooth text-gray-800 bg-gray-100">

                <header>
                    <div className="container">
                        <div className="logo">
                            <Image 
                                src={logoImage} 
                                height={100} 
                                alt="Foundation Logo" 
                                className="rounded-md"/>
                        </div>
                        <h1><span>Meet Our Team </span></h1>
                        <nav className="pt-5">
                            <ul>
                                <li class="dropdown">
                                    <a href="/" className="dropbtn link">ABOUT</a>
                                    <div class="dropdown-content">
                                        <Link href="/website/about" className="link">WHO WE ARE</Link>
                                        <Link href="/website/wedo" className="link">WHAT WE DO</Link>
                                        <Link href="/website/impact" className="link">OUR IMPACT</Link>
                                        <Link href="/website/team" className="link bg-[#1f8cad] rounded-md">OUR LEADERSHIP</Link>
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

            {/* Home section ends here */}

            {/* <section className="fullContainer" id="aboutSection"> */}
                <div className="container">
                    <h2 className="sectionTitle text-[#1f8cad]">
                       Board Members
                    </h2>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Link href="/website/ala" className="section col-4" style={{ marginRight: '80px', cursor: 'pointer' }}>
                    <div className="frame2 text-center">
                        <Image className="rounded-circle2" src={educationImage3} alt="Education Image" />
                        <h2><b>Benson Wereje</b></h2>
                        <h3>CEO, ALA</h3>
                    </div>
                    <br /><br />
                </Link>
                <Link href="/website/ala" className="section col-4" style={{ marginRight: '80px' }}>
                    <div className="frame2 text-center">
                        <Image className="rounded-circle2" src={educationImage3} alt="Education Image" />
                        <h2><b>Benson Wereje</b></h2>
                        <h3>CEO, ALA</h3>
                    </div>
                    <br /><br />
                </Link>
                <Link href="/website/ala"ton className="section col-4">
                    <div className="frame2 text-center">
                        <Image className="rounded-circle2" src={educationImage3} alt="Education Image" />
                        <h2><b>Benson Wereje</b></h2>
                        <h3>CEO, ALA</h3>
                    </div>
                </Link>
            </div>

            {/* </section> */}

            {/* <section className="fullContainer -mt-20" id="aboutSection"> */}
                <div className="container">
                    <h3 className="sectionTitle2 text-[#1f8cad]">
                       Senior Leadership Team
                    </h3>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link href="/website/ala" className="section col-4" style={{ marginRight: '80px' }}>
                        <div className="frame2 text-center">
                            <Image className="rounded-circle2" src={educationImage3} alt="Education Image" />
                            <h2><b>Benson Wereje</b></h2>
                            <h3>CEO, ALA</h3>
                        </div>
                        <br /><br />
                    </Link>
                    <Link href="/website/ala" className="section col-4" style={{ marginRight: '80px' }}>
                        <div className="frame2 text-center">
                            <Image className="rounded-circle2" src={educationImage3} alt="Education Image" />
                            <h2><b>Benson Wereje</b></h2>
                            <h3>CEO, ALA</h3>
                        </div>
                        <br /><br />
                    </Link>
                    <Link href="/website/ala" className="section col-4">
                        <div className="frame2 text-center">
                            <Image className="rounded-circle2" src={educationImage3} alt="Education Image" />
                            <h2><b>Benson Wereje</b></h2>
                            <h3>CEO, ALA</h3>
                        </div>
                    </Link>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link href="/ala" className="section col-4" style={{ marginRight: '80px' }}>
                        <div className="frame2 text-center">
                            <Image className="rounded-circle2" src={educationImage3} alt="Education Image" />
                            <h2><b>Benson Wereje</b></h2>
                            <h3>CEO, ALA</h3>
                        </div>
                        <br /><br />
                    </Link>
                    <Link href="/website/ala" className="section col-4" style={{ marginRight: '80px' }}>
                        <div className="frame2 text-center">
                            <Image className="rounded-circle2" src={educationImage3} alt="Education Image" />
                            <h2><b>Benson Wereje</b></h2>
                            <h3>CEO, ALA</h3>
                        </div>
                        <br /><br />
                    </Link>
                    <Link href="/website/ala" className="section col-4">
                        <div className="frame2 text-center">
                            <Image className="rounded-circle2" src={educationImage3} alt="Education Image" />
                            <h2><b>Benson Wereje</b></h2>
                            <h3>CEO, ALA</h3>
                        </div>
                    </Link>
                </div>
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