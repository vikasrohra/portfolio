import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Typed from "react-typed";
import Social, { SocialLink } from "@ui/social";
import SkillShare, { SkillItem } from "@ui/skill-share";
import Image from "@ui/image";
import Icon from "@ui/icon";
import {
    ImageType,
    HeadingType,
    TextType,
    SocialType,
    SkillType,
} from "@utils/types";

const HeroArea = ({ data, id }) => {
    const [specialEvent, setSpecialEvent] = useState("");

    useEffect(() => {
        getSpecialEvent();
    }, []);

    const getSpecialEvent = () => {
        // Set the date we're counting down to
        var countDownDate = new Date("Jan 1, 2024 12:01:00").getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {
            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            var minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // If the count down is over, write some text
            if (distance < 0) {
                clearInterval(x);
                setSpecialEvent("EXPIRED");
            }

            //Month difference
            var dateFrom = new Date();
            var dateTo = new Date("Jan 1, 2024 12:01:00");
            var months =
                dateTo.getMonth() -
                dateFrom.getMonth() +
                12 * (dateTo.getFullYear() - dateFrom.getFullYear());

            // Output the result in an element
            setSpecialEvent(
                days +
                    " days, " +
                    hours +
                    " hours, " +
                    minutes +
                    " minutes, " +
                    seconds +
                    " seconds "
            );
        }, 1000);
    };

    return (
        <div id={id} className="rn-slider-area">
            <div className="slide slider-style-1">
                <div className="container">
                    <div className="row row--30 align-items-center">
                        <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
                            <div className="content">
                                <div className="inner">
                                    {/* {data?.headings?.[0] && (
                                        <span className="subtitle">
                                            {data.headings[0].content}
                                        </span>
                                    )} */}
                                    {
                                        <div style={{ marginBottom: "20px" }}>
                                            <span
                                                className="subtitle"
                                                style={{ marginBottom: "5px" }}
                                            >
                                                Special life event in,
                                            </span>
                                            <span
                                                // className="subtitle"
                                                style={{
                                                    color: "#ffffff",
                                                    fontFamily: "Cursive",
                                                    background:
                                                        "linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44)",
                                                    WebkitBackgroundClip:
                                                        "text",
                                                    WebkitTextFillColor:
                                                        "transparent",
                                                }}
                                            >
                                                {specialEvent}
                                            </span>
                                        </div>
                                    }
                                    {data?.headings?.[1] && (
                                        <h1 className="title">
                                            <span
                                                className="title-main"
                                                dangerouslySetInnerHTML={{
                                                    __html: data.headings[1]
                                                        .content,
                                                }}
                                            />
                                            <br />
                                            {data?.animated_texts && (
                                                <span
                                                    className="header-caption"
                                                    id="page-top"
                                                >
                                                    <span className="cd-headline clip is-full-width">
                                                        <span>a </span>{" "}
                                                        <Typed
                                                            className="animated-texts"
                                                            strings={
                                                                data.animated_texts
                                                            }
                                                            typeSpeed={50}
                                                            backSpeed={50}
                                                            backDelay={1}
                                                            loop
                                                            smartBackspace
                                                        />
                                                    </span>
                                                </span>
                                            )}
                                        </h1>
                                    )}
                                    {data?.texts?.[0] && (
                                        <div>
                                            <p className="description">
                                                {data.texts[0].content}
                                            </p>
                                        </div>
                                    )}
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                                        {data?.socials && (
                                            <div className="social-share-inner-left">
                                                <span className="title">
                                                    Get in touch
                                                </span>
                                                <Social>
                                                    {data.socials.map(
                                                        (social) => (
                                                            <SocialLink
                                                                key={social.id}
                                                                path={
                                                                    social.path
                                                                }
                                                            >
                                                                <Icon
                                                                    name={
                                                                        social.icon
                                                                    }
                                                                />
                                                            </SocialLink>
                                                        )
                                                    )}
                                                </Social>
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12 mt_mobile--30">
                                        {data?.skills && (
                                            <div className="skill-share-inner">
                                                <span className="title">
                                                    Top tech stacks
                                                </span>
                                                <SkillShare>
                                                    {data.skills.map(
                                                        (skill) => (
                                                            <SkillItem
                                                                key={skill.id}
                                                                image={
                                                                    skill.image
                                                                }
                                                            />
                                                        )
                                                    )}
                                                </SkillShare>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 order-lg-2 col-lg-5">
                            {data?.images?.[0]?.src && (
                                <div className="thumbnail">
                                    <div className="inner">
                                        <Image
                                            src={data.images[0].src}
                                            alt={data.images[0]?.alt || "Hero"}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

HeroArea.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
        animated_texts: PropTypes.arrayOf(PropTypes.string),
        socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
        skills: PropTypes.arrayOf(PropTypes.shape(SkillType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    }),
};

HeroArea.defaultProps = {
    id: "home",
};

export default HeroArea;
