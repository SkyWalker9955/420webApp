import * as React from "react";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

export default function Home() {
    return (
        <div style={{ background: "white" }}>
            <div className="titleSpacer">
                <h1> Checkout Our Concentrations </h1>
            </div>

            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        src="https://gardner-webb.edu/wp-content/uploads/2020/11/computer-science-feature.jpg"
                        alt="First slide"
                        width="900"
                        height="500"
                    ></img>
                    <h1 className="carouselSpacer">Scientific</h1>
                    <div className="descriptionWrapper">
                        <p>
                            The Scientific Concentration provides a comprehensive computer science foundation
                            that prepares students to design and implement software to solve computing
                            problems. It covers applied topics, but emphasizes theoretical understanding of
                            computer science, including an ability to use advanced mathematics to solve
                            scientific problems and to work closely with other scientists to devise new ways
                            of using computers. This concentration is especially appropriate for students
                            wishing to pursue a graduate degree in computer science, leading ultimately to a
                            career in academic or industrial research.
                        </p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        //className="d-block w-100"
                        //className="imagine"
                        src="https://techgenies.com/wp-content/uploads/2021/04/the-best-data-science-software-stack-for-projects.jpg"
                        alt="First slide"
                        width="900"
                        height="500"
                    ></img>
                    <h1 className="carouselSpacer">Pre-MBA</h1>
                    <div className="descriptionWrapper">
                        <p>
                            The Pre-MBA Concentration is intended for students who want to apply computer
                            science in a management setting. Having grown out of a business perspective, this
                            concentration focuses on managing information, projects, and other technical
                            professionals. Although it still contains a significant core of theoretical and
                            applied computer science, the curriculum also includes business and management
                            courses to educate students in the organizational side of computer science, as
                            well as fairly advanced mathematics, enabling students to manage scientific
                            computing projects and personnel more effectively. Upon graduation, students can
                            earn an MBA degree from Southeastern within one year, assuming they take BLAW 231
                            their graduating semester and meet the admissions requirements for graduate
                            school.{" "}
                        </p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        //className="d-block w-100"
                        //className="imagine"
                        src="https://i.insider.com/60144316a7c0c4001991dde6?width=1000&format=jpeg&auto=webp"
                        alt="First slide"
                        width="900"
                        height="500"
                    ></img>
                    <h1 className="carouselSpacer">Information Technology</h1>
                    <div className="descriptionWrapper">
                        <p>
                            The Bachelor of Science in Information Technology prepares students with
                            practical, hands-on expertise to solve everyday computing problems. This program
                            is accredited by the Computing Accreditation Commission of ABET,
                            http://www.abet.org. High achieving students can apply for the ACE program
                            (Accelerated Computing Engagement) program which is a pathway to earning the
                            Bachelor's in Information Technology in three years and includes several perks
                            including a direct opportunity to an internship experience. The curriculum
                            includes theoretical computer science topics and enough mathematics for graduates
                            to successfully converse with other computing professionals. However, this
                            concentration focuses much more on the applications of computer science, and as
                            such does not require as many higher mathematics courses as the other
                            concentrations. As part of this applied focus, students in this concentration
                            satisfy an application area component, a series of electives designed to enable a
                            deeper study of one particular computing application. Careers in this
                            concentration focus on developing, supporting, and administrating the computing
                            technology that has become critical to all organizations.
                        </p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        //className="d-block w-100"
                        //className="imagine"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyhkpJ4senBA_-oP7RrgAQuVhq-G5hId35SA&usqp=CAU"
                        alt="First slide"
                        width="900"
                        height="500"
                    ></img>
                    <h1 className="carouselSpacer">Data Science</h1>
                    <div className="descriptionWrapper">
                        <p>
                            The Data Science Concentration is a multi-disciplinary field that mainly
                            integrates computer science, math, and information science. This concentration
                            aims to teach how to process data and utilize the processed data by means of
                            algorithms that mimics human intelligence. The Data Science concentration is
                            especially appropriate for students wishing to pursue a graduate degree in data
                            science leading ultimately to a research career or application development for
                            data analysis.
                        </p>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
