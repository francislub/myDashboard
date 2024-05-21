// 'use client';
// import { useRef } from 'react';
// import { useState } from 'react';

// import { useClient } from 'next/react';
// import { Child } from '../../models/childModel';
// import React from 'react';
import Link from "next/link";
// import { useEffect, useState } from 'react'; // Importing useEffect and useState directly
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
import { fetchChilds } from "../../lib/data";


const HomePage = async ({ searchParams }) => {

    const q = searchParams?.q || "";
    const { count, childs } = await fetchChilds(q);
    const page = searchParams?.page || 1;

            return (
        <div className="scroll-smooth text-gray-800">
            <Image 
                src={logoImage} 
                height={90} 
                alt="Foundation Logo" 
                className="rounded-md"/>
            <div className="" id="homeSection">

                <div className="row background-color">
                    <div className="col-lg-7">
                      <Image src={bannerImage} alt="An image" width="800" className="educationImage"/>
                    </div>
                    <div className="col-lg-5">
                        <br />
                    <h1 ><span>Sponsor A Child</span></h1>
                        <h4 className="text-1g">
                          Help us keep refugee children in School. Below is the cost of education per child per year: 
                        </h4>
                        <br />
                        <h5><b>$200 :</b> Covers tuition per child per year </h5>
                        <h5><b>$50 :</b> Covers meals per child per year </h5>
                        <h5><b>$20 :</b> Covers books per child per year </h5>
                        <h5><b>$30 :</b> Covers school uniform per child </h5>
                        <div>
                            <Link href='#aboutSection'>
                              <button className="green-button">Sponsor A Child</button>
                            </Link>
                        </div>
                        <div>
                            <button className="blue-button">Give to a different cause</button>
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
                    <div className="space-y-20">
                        <div className="row background-color row-cols-1 row-cols-sm-2">
                            <div className="col">
                                <div className='row'>
                                    <div className="col-5">
                                        <br />
                                        <Image className="" src={educationImage3} alt="Education Image" />
                                    </div>
                                    <div className="col-7">
                                        <br />
                                        <h2>About</h2>
                                        {childs.map((child) => (
                                        <ul key={child.id}>
                                            <h5><b>Name:</b>{child.name}</h5>
                                            <h5><b>Student ID:</b>{child.studentID}</h5>
                                            <h5><b>Gender:</b>{child.gender}</h5>
                                            <h5><b>Age:</b>{child.age}</h5>
                                            <h5><b>Class:</b>{child.ekibiina}</h5>
                                            <h5><b>Nationality:</b>{child.nationality}</h5>
                                            <h5><b>Parent Status:</b>{child.parentStatus}</h5>
                                            <h5><b>Level of Need: </b>{child.levelOfNeed}</h5>
                                            <h5><b>Years left to graduate: </b>{child.yearsLeftToGraduate}</h5>
                                        </ul>
                                    ))}  
                                    </div>
                                    <div>
                                        {childs.map((child) => (
                                            <ul key={child.id}>
                                                    <h5>{child.description}</h5>
                                            </ul>
                                        ))} 
                                    </div>
                                </div>
                                <div className="button-container">
                                    <button className="previous rounded" >Previous</button>
                                    <button className="next rounded" >Next</button>
                                    <Link href="/sponsor">
                                        <button className="close rounded" >
                                        Close
                                        </button>
                                    </Link>
                                    
                                </div>
                            </div>
                            <div className="col">
                                {childs.map((child) => (
                                        <ul key={child.id}>
                                                <h2>Sponsor {child.name}</h2>
                                        </ul>
                                    ))} 
                                <div className="frame1 text-center">
                                    
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
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
                                <Link href="/about" className="link">
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
                                <Link href="/gallery" className="link">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/joinus" className="link">
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

export default HomePage;