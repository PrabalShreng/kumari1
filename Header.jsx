import React from 'react'
import { CiBellOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { RiEnglishInput } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from 'next/link';



function Header() {
    return (
        <>
            <section className='bg-info py-2 text-center'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <ul className='d-flex justify-between gap-3  a'>
                                <li><Link href='/sir/'>Personal Banking</Link></li>
                                <li><Link href='/sir/'>Business Banking</Link></li>
                                <li><Link href='/sir/'>Trade Finance</Link></li>
                                <li><Link href='/sir/'>Remittance</Link></li>
                                <li><Link href='/sir/'>Kumagi capital</Link></li>
                                <button className='bg-warning border'>Auction Sales</button>
                            </ul>
                        </div>
                        <div className="col-lg-4 text-end">
                            <ul className='d-flex gap-3 justify-content-end'>
                                <CiBellOn />
                                <CiSearch />
                                <button className='bg-light c'>
                                    <RiEnglishInput /><IoIosArrowDown /></button>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-1 bg-light'>
                <div className="container b">
                    <div className="row align-items-center">
                        <div className="col-lg-2">
                            <img className='w-100' src="https://www.kumaribank.com/images/logo.png" alt="" />
                        </div>
                        <div className="col-lg-6">
                            <ul className='d-flex gap-4 a text-primary'>
                                <li><Link href='/Branches/'>Branches</Link></li>
                                <li><Link href='/Branches/'>ATM</Link></li>
                                <li><Link href='/Branches/'>Services Charge</Link></li>
                                <li><Link href='/Branches/'>Interest Rate</Link></li>
                                <li><Link href='/Branches/'>Forex</Link></li>
                                <li><Link href='/Branches/'>Calendar</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 ">
                            <ul className='d-flex gap-2 '>
                                <button className='bg-warning border border-light c'>
                                    Feedback & Grievance<IoMdArrowDropdown />

                                </button>
                                <button className='bg-warning border border-light c'>login<IoMdArrowDropdown />
                                </button>
                                <button className='bg-warning border border-light c'>Digital Service<IoMdArrowDropdown />
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <hr />

            <section className='py-1 bg-light text-primary'>
                <div className="container d-flex gap-4">
                    <div class="dropdown a1">
                        <span>About <IoIosArrowDown />
                        </span>
                        <div class="dropdown-content a">
                            <li>About Us</li>
                            <li>Directors</li>
                            <li>Management</li>

                        </div>
                    </div>
                    <div class="dropdown a1">
                        <span>Retirement Fund <IoIosArrowDown />
                        </span>
                        <div class="dropdown-content a">
                            <li>Kumari bank Retirement Fund</li>

                        </div>
                    </div>
                    <div class="dropdown a1">
                        <span>Digital Banking <IoIosArrowDown />
                        </span>
                        <div class="dropdown-content a">
                            <li>Kumari bank Retirement Fund</li>

                        </div>
                    </div>
                    <div class="dropdown a1">
                        <span>Cards <IoIosArrowDown />
                        </span>
                        <div class="dropdown-content a">
                            <li>Kumari bank Retirement Fund</li>

                        </div>
                    </div>
                    <div class="dropdown a1">
                        <span>Account and Deposite <IoIosArrowDown />
                        </span>
                        <div class="dropdown-content a">
                            <li>Kumari bank Retirement Fund</li>

                        </div>
                    </div>
                    <div class="dropdown a1">
                        <span>Lone and Borrowing <IoIosArrowDown />
                        </span>
                        <div class="dropdown-content a">
                            <li>Kumari bank Retirement Fund</li>

                        </div>
                    </div>
                    <div className='a1'>
                        <span>Offers</span>
                    </div>
                    <div className='a1'>
                        <span>Contacts</span>
                    </div>
                </div>
            </section>



        </>
    )
}

export default Header
