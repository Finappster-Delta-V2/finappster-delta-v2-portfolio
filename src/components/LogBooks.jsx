import React, { useEffect } from 'react'
import { BsFileEarmarkWord } from 'react-icons/bs'

const LogBook = () => {

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-left");
                } else {
                    entry.target.classList.remove("fade-left");
                }
            });
        });
        document.querySelectorAll(".logbook-row").forEach(row => {
            observer.observe(row);
        });

        // Clean up function to disconnect the observer when the component unmounts
        return () => observer.disconnect();

    }, []);

    return (
        <div className='section' data-anchor='page3'>
            <div className='logbook-header-container'>
                <div className='logbook-title'>Log Books</div>
            </div>
            <div className='logbook-wrapper'>
                <div className='fade-left'>
                    <div className='logbook-contents'>
                        <div className='logbook-row'>
                            <a className='logbook-icon' href="https://github.com">
                                <BsFileEarmarkWord size={150} />
                            </a>
                            <div className='logbook-name'>Peter An</div>
                        </div>
                        <div className='logbook-row' >
                            <a className='logbook-icon' href="https://github.com">
                                <BsFileEarmarkWord size={150} />
                            </a>
                            <div className='logbook-name'>Jameson Yeo</div>
                        </div>
                        <div className='logbook-row' >
                            <a className='logbook-icon' href="https://github.com">
                                <BsFileEarmarkWord size={150} />
                            </a>
                            <div className='logbook-name'>Christopher Li</div>
                        </div>
                        <div className='logbook-row'>
                            <a className='logbook-icon' href="https://github.com">
                                <BsFileEarmarkWord size={150} />
                            </a>
                            <div className='logbook-name'>Renjo Angeles</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default LogBook;
