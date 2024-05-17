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
            <div className="fullContainer bannerh" id="homeSection">
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
                                <li className="dropdown">
                                    <a href="/website/home" className="dropbtn link bg-[#1f8cad] rounded-md">ABOUT</a>
                                    <div className="dropdown-content">
                                        <Link href="/website/about" className="link ">WHO WE ARE</Link>
                                        <Link href="/website/wedo" className="link">WHAT WE DO</Link>
                                        <Link href="/website/impact" className="link">OUR IMPACT</Link>
                                        <Link href="/website/team" className="link">OUR LEADERSHIP</Link>
                                        <Link href="/website/joinus" className="link">JOIN OUR TEAM</Link>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropbtn link">PROGRAMS</a>
                                    <div className="dropdown-content">
                                        <Link href="/website/education" className="link">EDUCATION</Link>
                                        <Link href="/website/community" className="link">COMMUNITY ENGAGEMENT</Link>
                                    </div>
                                </li>
                                {/* <li>
                                    <Link href="/programs" className="link">
                                        Programs
                                    </Link>
                                </li> */}
                                <li className="dropdown">
                                    <a href="#" className="dropbtn link">CHAPTERS</a>
                                    <div className="dropdown-content">
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
                    <h1>Education Unlocks Future </h1>
                    <p className="text-lg">
                        {/* For 15 years, we have committed to providing access to quality education for volunarable yet talented refugees. Donate today and help us create more refugee change makers like Ntakamaze Nziyonvira. */}
                    </p>
                    <button className="mb-5 hover:bg-[#197996]">
                        <Link href="/website/sponsor">
                            <span className="text-lg">Sponsor A Child Now</span>
                        </Link>
                    </button>
                </div>
            </div>
            {/* Home section ends here */}

            <section className="fullContainer" id="aboutSection">
                <div className="container">
                    <h2 className="sectionTitle text-[#1f8cad]">
                        About Us
                    </h2>
                    <p className="text-lg font-normal">
                        Nalongo Lwokyaza Foundation is a family-based, non-profit organization established in 2020 in Jinja, Uganda, in memory of the late Nalongo Mukyala Lwokyaza, a wife, mother, educator, mentor - in order to keep her legacy.
                    
                        {/* <br /><br />
                        Our team is fueled by a deep commitment to charity. We're a diverse group of patriots and volunteers who bring a wealth of experience and expertise to the table. Together, we work collaboratively to develop impactful programs that directly benefit native and foreign refugee children.
                        <br /><br />
                        Whether you're a passionate volunteer, a generous donor, or simply someone who believes in a better tomorrow, we welcome you to join our movement. Together, we can create a lasting positive impact on the lives of refugee children. */}
                    </p>
                    <div className="text-center mt-8">
                        <button className="bg-[#1f8cad] hover:bg-[#197996] text-white px-3 py-2 rounded">
                            <Link href="/website/about">
                                Explore More About Us
                            </Link>
                        </button>
                    </div>
                </div>
            </section>
            {/* About section ends here */}

            <section className="education" id="educationSection">
                
                {/* <video autoPlay loop muted>
                    <source src={videoSrc} type="video/mp4" />
                </video> */}
                <div>
                    <Image src={bannerImage} alt="An image" className="educationImage"/>
                </div>
                
                <div className="container">
                    <div className="sectionTitle">
                        <h1 className="md:text-white text-black font-normal">Education</h1>
                    </div>

                    <div className="educationContainer">
                        <h3>
                            Education Is Essential For <br />
                            <strong> BETTER FUTURE</strong>
                        </h3>
                        <p className="text-lg">
                        Nalongo Lwokyaza Foundation serves one of the world's most vulnerable communities by providing education to those least likely to be educated: those who come from families that cannot afford. A case story is from Mbirabira primary school. We also link students to available scholarships. We raise awareness on alternative educational pathways. 
                        </p>
                        <button className="bg-[#1f8cad] hover:translate-x-2 hover:transition-all hover:bg-[#197996]">
                            <Link href="/website/education">
                                EXPLORE NOW
                            </Link>
                        </button>
                    </div>
                </div>
            </section>
            {/* Education section ends here */}

            <section className="programs" id="programsSection">
                <div className="container mx-5">
                    <h2 className="sectionTitle text-[#1f8cad]">
                       OUR IMPACT
                    </h2>

                    <div className="boxContainer md:flex flex flex-col  md:justify-center md:space-x-12 md:flex-row">
                       <Link href="/website/impact">   
                            <div className="round-button" >
                                <div className=" box flex flex-col">
                                    <div className="round-button programDesc ">
                                        <div className="round-button programDesc ">
                                            <h1 className="sectionTitle text-[#1f8cad]">2,240</h1>
                                            <br />
                                            <div ><h2 >Conflict affected students we've educated </h2> </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href="/website/impact"> 
                            <div className="round-button">
                                <div className=" box flex flex-col">
                                    <div className="round-button programDesc ">
                                        <div className="round-button programDesc ">
                                            <h1 className="sectionTitle text-[#1f8cad]">48,372</h1>
                                            <br />
                                            <div ><h2 >People reached in our community service programs</h2> </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href="/website/impact"> 
                            <div className="round-button">
                                <div className=" box flex flex-col">
                                    <div className="round-button programDesc ">
                                            <h1 className="sectionTitle text-[#1f8cad]">73,529</h1>
                                            <br />
                                            <div ><h2 >People reach in our Peace building programs </h2> </div> 
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    {/* Box container ends here */}

                </div>
            </section>
            {/* our impact section ends here */}

            <section className="programs" id="programsSection">
                <div className="container mx-5">
                    <h2 className="sectionTitle text-[#1f8cad]">
                        OUR WORK
                    </h2>

                    <div className="boxContainer md:flex flex flex-col  md:justify-center md:space-x-12 md:flex-row">

                        <div className="box flex flex-col">
                            <div className="cardImage hidden md:flex"></div>
                            <div className="programTitle px-5">
                                <span className="text-xl text-[#1f8cad]">EDUCATION PROGRAMS</span>
                            </div>
                            {/* <div className="programDesc">
                                <p className="px-2">
                                    We empower individuals through knowledge. 
                                    <br />Our educational programs provide essential skills and resources, focusing on all education levels levels, literacy, STEM fields, job training. By investing in education, we unlock potential and create pathways to a brighter future. 
                                </p>
                            </div> */}
                            <button className="hover:bg-[#197996] w-40">
                                <Link href="/website/education">
                                    Explore More
                                </Link>
                            </button>
                        </div>
                        {/* Box ends here */}

                        <div className="box flex flex-col">
                            <div className="cardImage hidden md:flex"></div>
                            <div className="programTitle px-5">
                                <span className="text-xl text-[#1f8cad]">COMMUNITY BUILDING</span>
                            </div>
                            {/* <div className="programDesc">
                                <p className="px-2">
                                    We believe strong communities are the foundation<br /> for positive change. Through workshops, events, and mentorship programs, we foster collaboration, build trust, and empower communities to solve problems together. We create a space for shared goals and lasting connections.
                                </p>
                            </div> */}
                            <button className=" w-40">
                                <Link href="/website/community">
                                    Explore More
                                </Link>
                            </button>
                        </div>
                        {/* Box ends here */}

                        <div className="box flex flex-col">
                            <div className="cardImage hidden md:flex"></div>
                            <div className="programTitle px-5">
                            <span className="text-xl text-[#1f8cad]">CLEAN WATER FOR PEOPLE</span>
                            </div>
                            {/* <div className="programDesc">
                                <p className="px-2">
                                    Access to clean water is a fundamental<br /> human right. We implement sustainable solutions like well construction, rainwater harvesting, and hygiene education. By availing clean water, we promote health, dignity, and a foundation for a thriving community. 
                                </p>
                            </div> */}
                            <button className=" w-40">
                                <Link href="/programs">
                                    Explore More
                                </Link>
                            </button>
                        </div>
                        {/* Box ends here */}

                    </div>
                    {/* Box container ends here */}

                </div>
            </section>
            {/* Programs section ends here */}

            <section className="donate" id="donateSection">
                <div className="container mx-5">
                    <h2 className="sectionTitle text-[#1f8cad]">
                       SPONSOR A CHILD
                    </h2>

                    <div className="boxContainer md:flex grid  md:justify-center md:space-x-12 md:flex-row">

                        <div className="box flex flex-col">
                            <div className="cardImage"></div>
                            <div className="donateTitle px-5">
                                Education To Every Child
                            </div>
                            {/* <div className="donationCount">
                                Donation Goal : <span>$9845</span>
                            </div> */}
                            <button className="hover:bg-[#197996] w-40">
                                <Link href="/website/sponsor">
                                     Sponsor A Child
                                </Link>
                            </button>
                        </div>
                        {/* Box ends here */}

                        <div className="box flex flex-col">
                            <div className="cardImage"></div>
                            <div className="donateTitle px-5">
                                Make Life Easier For Them
                            </div>
                            {/* <div className="donationCount">
                                Donation Goal : <span>$9845</span>
                            </div> */}
                            <button className="hover:bg-[#197996] w-40">
                                <Link href="/website/sponsor">
                                     Sponsor A Child
                                </Link>
                            </button>
                        </div>
                        {/* Box ends here */}

                        <div className="box flex flex-col">
                            <div className="cardImage"></div>
                            <div className="donateTitle px-5">
                                Dedicating To Helping Kids
                            </div>
                            {/* <div className="donationCount">
                                Donation Goal : <span>$9845</span>
                            </div> */}
                            <button className="hover:bg-[#197996] w-40">
                                <Link href="/website/sponsor">
                                     Sponsor A Child
                                </Link>
                            </button>
                        </div>
                        {/* Box ends here */}

                        <div className="box flex flex-col">
                            <div className="cardImage"></div>
                            <div className="donateTitle px-5">
                                Clean Water For People
                            </div>
                            {/* <div className="donationCount">
                                Donation Goal : <span>$9845</span>
                            </div> */}
                            <button className="hover:bg-[#197996] w-40">
                                <Link href="/website/sponsor">
                                     Sponsor A Child
                                </Link>
                            </button>
                        </div>
                        {/* Box ends here */}

                    </div>
                    {/* Box container ends here */}

                </div>
            </section>
            {/* Donate section ends here */}
            
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