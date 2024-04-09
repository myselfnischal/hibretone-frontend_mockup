import React from "react";
import OnlineCourseSearchButton from './OnlineCourseSearchButton';;
import { IoShareSocialOutline } from "react-icons/io5";


const OnlineCourse = () => {

    return (
        <>

            <section className="section-box">
                <div className="banner-hero1 bg-img-entrepreneur-academy">
                    <div className="container d-flex align-items-center">
                        <div className="row">
                            <div className="col">
                                <h2 style={{ marginBottom: '20px', fontSize: '60px' }}>Entrepreneur Academy</h2>
                                <p className="sub-heading-text-enacdemy">UK’s leading evidence driven online entrepreneurship learning programme.<span className="color-blue">Empowering every aspirer</span> the confidence and opportunity <span className="color-blue">to start a successful enterprise</span>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box mt-50 mb-25">
                <div className="container">
                    <div className="flex-container">
                        <div className="share-icon-container">
                            <button className="btn-share-search">
                                <IoShareSocialOutline className="share-icon" />
                            </button>
                        </div>
                        <div className="text-center">
                            <h2 className="section-title mb-10" style={{fontSize:'36px !important'}}>
                              Upskilling  for Better-paying Careers
                            </h2>
                            <p className="font-lg fw-bold color-text-paragraph w-lg-50 mx-auto"style={{color:'#435579'}}>
                               Creating opportunities through education
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-box mt-25 mb-25">
                <div className="container">
                    <div className="banner-hero1">
                        <div className="block-banner1">
                           <OnlineCourseSearchButton />
                       
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OnlineCourse;