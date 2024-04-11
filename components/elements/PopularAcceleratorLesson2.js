import Link from "next/link";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { SlEarphonesAlt } from "react-icons/sl";
import { HiOutlineLightBulb } from "react-icons/hi";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { PiLockKey } from "react-icons/pi";

SwiperCore.use([Navigation]);
import "swiper/css/grid";

const PopularAcceleratorLesson2 = () => {
    const data = [
        {
            image: "assets/imgs/page/online-courses/img1.png",
            title: "Pitching, Testing, and Prototyping",
            description:
            "We delve into the dynamic trio of pitching,testing,and prototyping in the enterpreneurial journey.Explore the art of carfting compelling pitches to effectively communicate your business ideas...more ",
        readTime: "16mins",
        author: {
            image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
        },
        type:"People"
        }, {
            image: "assets/imgs/page/online-courses/img1.png",
            title: "Identifying problems your product solves",
            description:
                "We delve into the dynamic trio of pitching,testing,and prototyping in the enterpreneurial journey.Explore the art of carfting compelling pitches to effectively communicate your business ideas...more ",
            readTime: "23 mins",
            author: {
                image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
          },  
          type:"Product"
      }, {
        image: "assets/imgs/page/online-courses/img2.jpg",
        title: "Product Ideation and Brainstorming",
        description:
            "We delve into the dynamic trio of pitching,testing,and prototyping in the enterpreneurial journey.Explore the art of carfting compelling pitches to effectively communicate your business ideas...more ",
        readTime: "34 mins",
        author: {
            image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
      },
      type:"Finance"
  }
    ];

    return (
        <>
            <div className="swiper-container swiper-group-5">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation={{
                        nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        575: {
                            slidesPerView: 2,
                        },
                        991: {
                            slidesPerView: 3,
                 
                        },
                      
                    }}
                    className="swiper-wrapper pb-10 pt-5 swiper-grid-jobobx"
                >
                    {data.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="swiper-slide hover-up">
                            <div className="card-content">
                                        <img
                                            loading="lazy"
                                            src={item.image}
                                            alt="Article featured image"
                                            className="featured-image"
                                        />
                                           <p className='image-text'>{item.type}</p>
                                        <div className="article-category"></div>
                                        <a href="/entrepreneur-academy">
                                                    <div className="article-title">{item.title}</div>
                                            </a>
                                        <p className="article-description-entrepreneur-academy">{item.description}</p>
                                        <div className="article-meta">
                                            <div className="author-info">
                                    
                                            <img
                                                    loading="lazy"
                                                    src={item.author.image}
                                                    alt={item.author.name}
                                                    className="author-image-entrepreneur-academy"
                                                />
                                            </div>
                                            <div className="read-time-entrepreneur-academy">{item.readTime}</div>
                                        </div>
                                    </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default PopularAcceleratorLesson2;
