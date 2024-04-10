/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Subscription from "../../components/Layout/Subscription";
import YellowBanner from "../../components/elements/YellowBanner";
import EntrepreneurAcademy from "../../components/elements/EntrepreneurAcademy";
import dynamic from "next/dynamic";


function useLockBodyScroll(open) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [open]);
}
const OnlineCourseOne = dynamic(
  () => import("../../components/sliders/OnlineCourse1"),
  { ssr: false }
);
const OnlineCourseTwo = dynamic(
  () => import("../../components/sliders/OnlineCourse2"),
  { ssr: false }
)

const PopularCourseOne = dynamic(
  () => import("../../components/elements/PopularCourse1"),
  { ssr: false }
);
const PopularCourseTwo = dynamic(
  () => import("../../components/elements/PopuarCourse2"),
  { ssr: false }
);
export default function Index() {
  const [isOpen, setIsOpen] = useState(false);

  useLockBodyScroll(isOpen);

  return (
    <>
      <Layout>



        
        <div className="background-random-entrepreneur-academy mb-25">
        < EntrepreneurAcademy />
          <section className="section-box mt-25 mb-25">
            <YellowBanner />
          </section>
          <section className="section-box mt-50 mb-25">
        {/* < OnlineCourseVideo /> */}
        </section>


                    <div className="col d-flex justify-content-center align-items-center mt-50">
                                    <button className="btn btn-sign-up-inverted fs-6 hover-up font-force-lg">
                                        Subscribe For Full Access
                                    </button>
                                </div>


          <Subscription />
        </div>
      </Layout>
    </>
  );
}
                  