'use client';
import { useRef } from 'react';

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
import bannerImage from '../../public/images/education1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

export default function ProgramsPage() {
    const aboutSectionRef = useRef(null);
  
    return (
        <div className="scroll-smooth text-gray-800">
            <Image 
                src={logoImage} 
                height={90} 
                alt="Foundation Logo" 
                className="rounded-md"/>
            <div className="" id="homeSection">

                <div class="row background-color">
                    <div class="col-lg-7">
                    <div>
                        <Image src={bannerImage} alt="An image" width="800" className="educationImage"/>
                    </div>
                    </div>
                    <div class="col-lg-5" >
                        <br />
                    <h1 ><span>Sponsor A Child</span></h1>
                        <h4 class="text-1g">
                          Help us keep refugee children in School. Below is the cost of education per child per year: 
                        </h4>
                        <br />
                        <h5>$200 : Covers tuition per child per year </h5>
                        <h5>$50 : Covers meals per child per year </h5>
                        <h5>$20 : Covers books per child per year </h5>
                        <h5>$30 : Covers school uniform per child </h5>
                        <div>
                            <Link href='#aboutSection'>
                              <button className="green-button">Sponsor A Child</button>
                            </Link>
                        </div>
                        <div>
                            <button class="blue-button">Give to a different cause</button>
                        </div>
                        <br /><br />
                    </div>
                </div>

            </div>
            {/* Home section ends here */}

            <section className="fullContainer -mt-20" id="aboutSection">
                <div className="container ">
                    <h2 className="text-center">
                        NALONGO FOUNDATION
                    </h2>
                    <h5 className="text-center">
                        Choose below a child you would like to support
                    </h5>
                    <div className="space-y-10">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
                            <div className="col">
                                    <div className="frame text-center background-color">
                                        <Image className="rounded-circle" src={educationImage3} alt="Education Image" />
                                        <Link href="/website/sponsorchild">
                                           <button className="btn btn-primary mt-3 custom-button">Sponsor</button>
                                        </Link>
                                    </div>
                            </div>
                            <div className="col">
                                    <div className="frame text-center background-color">
                                        <Image className="rounded-circle" src={educationImage3} alt="Education Image" />
                                        <Link href="/website/sponsorchild">
                                           <button className="btn btn-primary mt-3 custom-button">Sponsor</button>
                                        </Link>
                                    </div>
                            </div>
                            <div className="col">
                                <div className="frame text-center background-color">
                                        <Image className="rounded-circle" src={educationImage3} alt="Education Image" />
                                        <Link href="/website/sponsorchild">
                                           <button className="btn btn-primary mt-3 custom-button">Sponsor</button>
                                        </Link>
                                    </div>
                            </div>
                            <div className="col">
                                    <div className="frame text-center background-color">
                                        <Image className="rounded-circle" src={educationImage3} alt="Education Image" />
                                        <Link href="/website/sponsorchild">
                                           <button className="btn btn-primary mt-3 custom-button">Sponsor</button>
                                        </Link>
                                    </div>
                            </div>
                            <div className="col">
                                    <div className="frame text-center background-color">
                                        <Image className="rounded-circle" src={educationImage3} alt="Education Image" />
                                        <Link href="/website/sponsorchild">
                                           <button className="btn btn-primary mt-3 custom-button">Sponsor</button>
                                        </Link>
                                    </div>
                            </div>
                            <div className="col">
                                    <div className="frame text-center background-color">
                                        <Image className="rounded-circle" src={educationImage3} alt="Education Image" />
                                        <Link href="/website/sponsorchild">
                                           <button className="btn btn-primary mt-3 custom-button">Sponsor</button>
                                        </Link>
                                    </div>
                            </div>
                        </div>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
                            <div className="col">
                                    <div className="frame text-center background-color">
                                        <Image className="rounded-circle" src={educationImage3} alt="Education Image" />
                                        <Link href="/website/sponsorchild">
                                           <button className="btn btn-primary mt-3 custom-button">Sponsor</button>
                                        </Link>
                                    </div>
                            </div>
                            <div className="col">
                                    <div className="frame text-center background-color">
                                        <Image className="rounded-circle" src={educationImage3} alt="Education Image" />
                                        <Link href="/website/sponsorchild">
                                           <button className="btn btn-primary mt-3 custom-button">Sponsor</button>
                                        </Link>
                                    </div>
                            </div>
                            <div className="col">
                                <div className="frame text-center background-color">
                                        <Image className="rounded-circle" src={educationImage3} alt="Education Image" />
                                        <Link href="/website/sponsorchild">
                                           <button className="btn btn-primary mt-3 custom-button">Sponsor</button>
                                        </Link>
                                    </div>
                            </div>
                            <div className="col">
                                    <div className="frame text-center background-color">
                                        <Image className="rounded-circle" src={educationImage3} alt="Education Image" />
                                        <Link href="/website/sponsorchild">
                                           <button className="btn btn-primary mt-3 custom-button">Sponsor</button>
                                        </Link>
                                    </div>
                            </div>
                            <div className="col">
                                    <div className="frame text-center background-color">
                                        <Image className="rounded-circle" src={educationImage3} alt="Education Image" />
                                        <Link href="/website/sponsorchild">
                                           <button className="btn btn-primary mt-3 custom-button">Sponsor</button>
                                        </Link>
                                    </div>
                            </div>
                            <div className="col">
                                    <div className="frame text-center background-color">
                                        <Image className="rounded-circle" src={educationImage3} alt="Education Image" />
                                        <Link href="/website/sponsorchild">
                                           <button className="btn btn-primary mt-3 custom-button">Sponsor</button>
                                        </Link>
                                    </div>
                            </div>
                        </div>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
                            <div className="col">
                                    <div className="frame text-center background-color">
                                        <Image className="rounded-circle" src={educationImage3} alt="Education Image" />
                                        <Link href="/website/sponsorchild">
                                           <button className="btn btn-primary mt-3 custom-button">Sponsor</button>
                                        </Link>
                                    </div>
                            </div>
                            <div className="col">
                                    <div className="frame text-center background-color">
                                        <Image className="rounded-circle" src={educationImage3} alt="Education Image" />
                                        <Link href="/website/sponsorchild">
                                           <button className="btn btn-primary mt-3 custom-button">Sponsor</button>
                                        </Link>
                                    </div>
                            </div>
                            <div className="col">
                                <div className="frame text-center background-color">
                                        <Image className="rounded-circle" src={educationImage3} alt="Education Image" />
                                        <Link href="/website/sponsorchild">
                                           <button className="btn btn-primary mt-3 custom-button">Sponsor</button>
                                        </Link>
                                    </div>
                            </div>
                            <div className="col">
                                    <div className="frame text-center background-color">
                                        <Image className="rounded-circle" src={educationImage3} alt="Education Image" />
                                        <Link href="/website/sponsorchild">
                                           <button className="btn btn-primary mt-3 custom-button">Sponsor</button>
                                        </Link>
                                    </div>
                            </div>
                            <div className="col">
                                    <div className="frame text-center background-color">
                                        <Image className="rounded-circle" src={educationImage3} alt="Education Image" />
                                        <Link href="/website/sponsorchild">
                                           <button className="btn btn-primary mt-3 custom-button">Sponsor</button>
                                        </Link>
                                    </div>
                            </div>
                            <div className="col">
                                    <div className="frame text-center background-color">
                                        <Image className="rounded-circle" src={educationImage3} alt="Education Image" />
                                        <Link href="/website/sponsorchild">
                                           <button className="btn btn-primary mt-3 custom-button">Sponsor</button>
                                        </Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About section ends here */}

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