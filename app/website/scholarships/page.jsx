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

import bannerImage from '../../public/images/1.jpg'
import educationImage from '../../public/images/gallery/8.jpg'
import galleryImage1 from '../../public/images/gallery/1.jpg'
import galleryImage2 from '../../public/images/gallery/2.jpg'
import galleryImage3 from '../../public/images/gallery/3.jpg'
import galleryImage4 from '../../public/images/gallery/4.jpg'
import galleryImage5 from '../../public/images/gallery/5.jpg'
import galleryImage6 from '../../public/images/gallery/6.jpg'
import galleryImage7 from '../../public/images/gallery/7.jpg'
import galleryImage8 from '../../public/images/gallery/8.jpg'

export default function HomePage() {

    return (
        <div className="scroll-smooth">
            <div className="fullContainer bannerd" id="homeSection">
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
                                        <Link href="/website/about" className="link ">WHO WE ARE</Link>
                                        <Link href="/website/wedo" className="link">WHAT WE DO</Link>
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

            </div>
            {/* Home section ends here */}
            <section className="fullContainer" id="aboutSection">
                <div className="container mx-5">

                    <div className="space-y-20 md:flex flex flex-col md:flex-row">
                        <div className="row">
                            <div className="box flex flex-col">
                                
                                <div className="programDesc">
                                  <span className="text-xl text-[#1f8cad]">Scholarships</span>
                                    <p className="text-lg">
                                      Nalongo Lwokyaza Foundation offers financial scholarships or material support to students in Primary school, Secondary school or at the University. Financial support in form of school tuition fees, scholastic material, accommodation and mentorship from the Foundation or through the Foundation partnerships. Such educational measures enable students to realize their visions. 
                                    </p>
                                    <br />
                                    <p className="text-lg">A need assessment of the individual students is made. Full scholarships are given to those who come from families that cannot afford paying tuition at all; Half Scholarships are given to those who have some few means. All this depends on the available resources from the Foundation and also in partnership with some schools. </p>
                                    <br />
                                    <span className="text-2xl text-[#1f8cad]">SCHOLARSHIP SELECTION PROCESS</span>
                                    <p className="text-lg">Nalongo Lwokyaza Foundation identifies the students. There is an agreement with Mbirabira primary school to spot the poor and promising students. It is also possible for the students to apply for a scholarship.</p>
                                    <br />
                                    <h1 className="text-lg">Application forms are filled in and submitted to the scholarship committee. This criterion is as follows:</h1>
                                    <ul class="text-lg">
                                        <li>   . High academic performance: Division one and two (D1 & D2). D3 can be considered in case the student had disruptions and valid reasons (illness, etc). A ‘Level requirement is 10 points and two principle passes.<br/></li>
                                        <li>   . Students from financially disadvantaged families. <br/></li>
                                        {/* <li>Be from an area ravaged by poverty or have a disability.<br/></li> */}
                                        <li>   . The student commits to giving back to the community after education.<br/></li>
                                    </ul>
                                    <br />
                                    <h1 className="text-lg">For more details, contact</h1> <p className="text-1xl text-[#1f8cad]">scholarshipmanager@foundationname.org</p>
                                </div>
                            </div>
                        </div>
                        {/* Box ends here */}

                    </div>
                    {/* Box container ends here */}

                </div>
            </section>
            {/* Programs section ends here */}
            
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