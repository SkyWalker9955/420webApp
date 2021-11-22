import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* column 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>General</h4>
                        <ul className="list-unstyled">
                            <li>
                                <a href="http://www.southeastern.edu/contact/">Contact Us</a>
                            </li>
                            <li>
                                <a href="mailto:enrollmentservice@southeastern.edu">Question or Comments</a>
                            </li>
                            <li>
                                <a href="http://www.southeastern.edu/resources/policies/">
                                    University Policies
                                </a>
                            </li>
                            <li>
                                <a href="http://www.southeastern.edu/resources/accessibility/index.html">
                                    Accessibility
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* column 2 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Academics</h4>
                        <ul className="list-unstyled">
                            <li>
                                <a href="http://www.southeastern.edu/contact/">Apply</a>
                            </li>
                            <li>
                                <a href="http://www.southeastern.edu/contact/">Cost, Aid and Scholarships</a>
                            </li>
                            <li>
                                <a href="http://www.southeastern.edu/admin/registrar/dates/calendar/index.html">
                                    Academic Calendar
                                </a>
                            </li>
                            <li>
                                <a href="http://www.southeastern.edu/admin/registrar/dates/exam_sch/index.html">
                                    Exam Schedule
                                </a>
                            </li>
                            <li>
                                <a href="http://www.southeastern.edu/acad_research/program-list/index.html">
                                    Programs of Study
                                </a>
                            </li>
                            <li>
                                <a href="http://www.southeastern.edu/admin/registrar/university_catalogue/index.html#gsc.tab=0">
                                    Catalogue
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* column 3 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Resources</h4>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://moodle.selu.edu/moodle/">Moodle</a>
                            </li>
                            <li>
                                <a href="http://www.southeastern.edu/library/index.html">Library</a>
                            </li>
                            <li>
                                <a href="http://www.southeastern.edu/map/">Campus Map</a>
                            </li>
                            <li>
                                <a href="http://www.southeastern.edu/admin/umc/about/pub-record/index.html">
                                    Request Public Records
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* column 4 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Quick as</h4>
                        <ul className="list-unstyled">
                            <li>
                                <a href="http://www.southeastern.edu/resources/policies/unive_disc/index.html">
                                    University Disclosures
                                </a>
                            </li>
                            <li>
                                <a href="http://www.southeastern.edu/admin/hr/jobs/">Employment</a>
                            </li>
                            <li>
                                <a href="http://www.southeastern.edu/admin/cs/help/index.html">Help Desk</a>
                            </li>
                            <li>
                                <a href="http://www.southeastern.edu/admin/stu_affairs/handbook/">
                                    Student Handbook
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bottom-bottom">
                <p className="text-xs-center">
                    &copy;{new Date().getFullYear} Southeastern Louisiana University - All Rights Reserved
                </p>
            </div>
        </div>
    );
}

export default Footer;
