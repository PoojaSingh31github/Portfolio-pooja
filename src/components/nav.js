import React from 'react';
import './nav.css';
const Nav = () => {
    return (
        <nav id="desktop-nav">
            <button class="button" data-text="Awesome">
                <span class="actual-text">&nbsp;Pooja Singh&nbsp;</span>
                <span aria-hidden="true" class="hover-text">&nbsp;Pooja &nbsp;</span>
            </button>
            <div>
                <ul class="nav-links">
                    <button>
                        <a href="#about" class="btn2"><span class="spn2">ABOUT</span></a>
                    </button>
                    <button>
                        <a href="#experience" class="btn2"><span class="spn2">EXPERIENCE</span></a>
                    </button>
                    <button>
                        <a href="#projects" class="btn2"><span class="spn2">PROJECTS</span></a>
                    </button>
                    <button>
                        <a href="#contact" class="btn2"><span class="spn2">CONTACT</span></a>
                    </button>

                </ul>
            </div>
        </nav>
    )
}

export default Nav;