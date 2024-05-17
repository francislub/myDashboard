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
                                        <Link href="/website/germany" className="link bg-[#1f8cad] rounded-md">GERMANY</Link>
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
                    <h1>Chapters</h1>
                    <p className="text-lg">
                    
                    </p>
                    <button className="mb-5 hover:bg-[#197996]">
                        <Link href="/website/sponsor">
                            <span className="text-lg">Sponsor A Child Now</span>
                        </Link>
                    </button>
                </div>
            </div>
            {/* Home section ends here */}
            <section className="programs" id="programsSection">
                <div className="container">
                    <h1><span>CIYOTA's approach to strengthening community engagement goes beyond local communities. We have friends around the world, who care and love our work to transform communities in Africa. We welcome these people and extend the opportunity to build the community. </span></h1>
                    
                </div>
                <div className="container mx-5">
                    <h2 className="sectionTitle text-[#1f8cad]">
                       GERMANY
                    </h2>

                    <div className="boxContainer md:flex flex flex-col md:space-x-2  md:justify-center md:flex-row">

                        <div className="box flex flex-col col-md">
                            <div className="cardImage hidden md:flex"></div>
                            <div className="programTitle px-5">
                                <span className="text-xl text-[#1f8cad]">Anja Schäper</span>
                            </div>
                            <div className="programDesc">
                                <h2>
                                   President of CIYOTA Chapter in Germany. Anja was born in 1974 in Germany and studied education to become a secondary school teacher. In 2009 she read an article about Munyambanza, co-founder and CIYOTA in a 
                                </h2>
                            </div>
                            <button className="hover:bg-[#197996] w-40">
                                <Link href="/website/anja">
                                    Read More
                                </Link>
                            </button>
                        </div>
                        {/* Box ends here */}

                        <div className="box flex flex-col col-md">
                            <div className="cardImage hidden md:flex"></div>
                            <div className="programTitle px-5">
                                <span className="text-xl text-[#1f8cad]">Christoph Schäper</span>
                            </div>
                            <div className="programDesc">
                                <h2>He was born in 1974 in Germany and also studied education. He works as a secondary school teacher and is Anja's husband. Right from the beginning Christoph joined Anja in supporting CIYOTA and is an equal part in creating </h2>
                                
                            </div>
                            <button className=" w-40">
                                <Link href="/website/community">
                                    Read More
                                </Link>
                            </button>
                        </div>
                        {/* Box ends here */}

                        <div className="box flex flex-col col-md">
                            <div className="cardImage hidden md:flex"></div>
                            <div className="programTitle px-5">
                            <span className="text-xl text-[#1f8cad]">Brigitte Reinhold</span>
                            </div>
                            <div className="programDesc">
                                <h2>
                                I was born in 1969 in Stuttgart, Germany. Since 2000 I am a teacher at the Goethe-School in Koblenz. At CIYOTA, I became aware of my colleague Anja and her husband, Christoph Schäper, whose commitment I had admired 
                                </h2>
                            </div>
                            <button className=" w-40">
                                <Link href="#">
                                    Read More
                                </Link>
                            </button>
                        </div>

                        <div className="box flex flex-col col-md">
                          <div className="cardImage hidden md:flex"></div>
                            <div className="programTitle px-5">
                            <span className="text-xl text-[#1f8cad]">Kristina Jehle</span>
                            </div>
                            <div className="programDesc">
                                <h2>
                                My name is Kristina Jehle, I was born in 1987 and work as a teacher in Koblenz / Germany. At CIYOTA I became aware of Anja, who has been supporting the organization for several years. I support CIYOTA because the organization
                                </h2>
                            </div>
                            <button className=" w-40">
                                <Link href="#">
                                    Read More
                                </Link>
                            </button>
                        </div>
                        {/* Box ends here */}

                        <div className="box flex flex-col col-md">
                            <div className="cardImage hidden md:flex"></div>
                            <div className="programTitle px-5">
                            <span className="text-xl text-[#1f8cad]">Songul Walz</span>
                            </div>
                            <div className="programDesc">
                                <h2>
                                  I was born and raised in Izmir/Turkey in 1983. There I also studied philosophy. I came to Germany in 2008, learned German and started working as a Turkish teacher in 2010. I am the colleague of Anja Schäper, who 
                                </h2>
                            </div>
                            <button className=" w-40">
                                <Link href="#">
                                    Read More
                                </Link>
                            </button>
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
                    <Link href="/joinus">JOIN US </Link>
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
                                <Link href="/programs" className="link">
                                    Programs
                                </Link>
                            </li>
                            <li>
                                <Link href="/education" className="link">
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