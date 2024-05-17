'use client';

import Link from "next/link";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logoImage from '../../public/images/logo1.png'
import logoImage1 from '../public/icons/face.png'
import logoImage2 from '../public/icons/ins.png'
import logoImage3 from '../public/icons/link.png'
import logoImage4 from '../public/icons/twi.png'
import logoImage5 from '../public/icons/you.png'

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
            <div className="fullContainer" id="homeSection">
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
            <section className="programs" id="programsSection">
                <div className="container mx-5">

                    <div className="boxContainer md:flex flex flex-col  md:justify-center md:space-x-12 md:flex-row">
                        <div className="row">
                            <div className="box flex flex-col">
                                <div className="cardImage hidden md:flex">
                                </div>
                                <div className="programDesc">
                                  <span className="text-xl text-[#1f8cad]">Anja Schäper</span>
                                    <h1>
                                    President of CIYOTA Chapter in Germany. Anja was born in 1974 in Germany and studied education to become a secondary school teacher. In 2009 she read an article about Munyambanza, co-founder and CIYOTA in a big German political magazine that moved her profoundly. Upon this she contacted Joseph and next to good friendships, her support for CIYOTA began. With this project Anja found something to support she was always looking for, especially in Africa. An NGO that was founded organized and lead by refugees FOR refugees who know best what, where and when something is needed. For Anja it was most important to find a project with a grassroot philosophy she could deeply trust: I know that every cent donated is effectively used for something important! Right from the beginning she integrated raising awareness for this project within her teachings. She realized quickly that it is more sustainable to raise money for the community of CIYOTA in Kyangwali, rather than sending school supplies from Germany. This is why she built a network in Germany to raise money as well collecting various goods (e.g. glasses) to send to Uganda. Above all, Anja's visits strengthened her part in the Ciyota family even more. 
                                    </h1>
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