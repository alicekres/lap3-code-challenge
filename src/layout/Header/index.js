import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { IoMdArrowDropdownCircle } from 'react-icons/io';

import styles from './index.module.css';
import githubPic from '../../assets/images/github.png';
import bell from '../../assets/images/notification.png';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a href="/">
                    <img
                        src={githubPic}
                        alt="github logo"
                        width={40}
                        height={40}
                    />
                </a>
                <form className={`d-flex ${styles.form}`} role="search">
                    <label></label>
                    <input
                        className={`form-control mx-4 ${styles.input}`}
                        type="search"
                        placeholder="Search or jump to..."
                        aria-label="Search"
                    />
                </form>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={`nav-link ${styles.a}`} href="#">
                                Pull Requests
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.a}`} href="#">
                                Issues
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.a}`} href="#">
                                Marketplace
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.a}`} href="#">
                                Explore
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <img
                className={styles.image}
                src={bell}
                alt="notification bell icon"
                width={23}
                height={25}
            />
            <FaPlusCircle size={25} color="white" />
            <IoMdArrowDropdownCircle color="white" size={30} />
        </nav>
    );
};

export default Header;
