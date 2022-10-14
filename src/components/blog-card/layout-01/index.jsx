import React, { useState } from "react";
import PropTypes from "prop-types";
import { Clock, ArrowUpRight } from "react-feather";
import BlogModal from "@components/modal-blog";
import { ImageType } from "@utils/types";
import Image from "@ui/image";

const BlogCard = ({
    title,
    category,
    image,
    date,
    content,
    readingTime,
    id,
    slug,
}) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div
                className="rn-blog"
                onClick={() => setShow(true)}
                onKeyPress={() => setShow(true)}
                role="button"
                tabIndex="-1"
            >
                <div className="inner">
                    <div className="thumbnail">
                        <a href={title.split(",")[1]}>
                            <Image
                                src={image.src}
                                alt={image.alt || title.split(",")[0]}
                            />
                        </a>
                    </div>
                    <div className="content">
                        <div className="category-info">
                            <div className="category-list">
                                <a href={title.split(",")[1]}>{category}</a>
                            </div>
                            <div className="meta">
                                {readingTime && (
                                    <span>
                                        <Clock size={13} /> {readingTime}
                                    </span>
                                )}
                            </div>
                        </div>
                        <h4 className="title">
                            <a href={title.split(",")[1]}>
                                {title.split(",")[0]}
                                <ArrowUpRight />
                            </a>
                        </h4>
                    </div>
                </div>
            </div>
            {/* <BlogModal
                show={show}
                setShow={setShow}
                title={title}
                date={date}
                image={image}
                content={content}
                slug={slug}
                id={id}
            /> */}
        </>
    );
};

BlogCard.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.shape(ImageType).isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    readingTime: PropTypes.string,
    slug: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default BlogCard;
