import React from 'react';

import styles from './index.module.css';
import githubPic from '../../assets/images/github.png';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <a href="/">
                    <img
                        src={githubPic}
                        alt="github logo"
                        width={40}
                        height={40}
                    />
                </a>
                <form class="d-flex" role="search" className={styles.form}>
                    <label></label>
                    <input
                        className={`form-control mx-4 ${styles.input}`}
                        type="search"
                        placeholder="Search or jump to..."
                        aria-label="Search"
                    />
                </form>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a className={`nav-link ${styles.a}`} href="#">
                                Pull Requests
                            </a>
                        </li>
                        <li class="nav-item">
                            <a className={`nav-link ${styles.a}`} href="#">
                                Issues
                            </a>
                        </li>
                        <li class="nav-item">
                            <a className={`nav-link ${styles.a}`} href="#">
                                Marketplace
                            </a>
                        </li>
                        <li class="nav-item">
                            <a className={`nav-link ${styles.a}`} href="#">
                                Explore
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
