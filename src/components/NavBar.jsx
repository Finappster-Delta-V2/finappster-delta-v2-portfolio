import { useEffect, useState } from 'react';
import { RiHome2Fill, RiTeamFill, RiFeedbackFill, RiMoreFill } from 'react-icons/ri'
import { GiNotebook } from 'react-icons/gi'
import { MdMeetingRoom, } from 'react-icons/md'
import { BsFilePost } from 'react-icons/bs'
import { HiDocumentCheck } from 'react-icons/hi2'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'

const Navbar = () => {
    const [currentAnchor, setCurrentAnchor] = useState('');

    useEffect(() => {
        const handleAnchorChange = () => {
            setCurrentAnchor(window.location.hash.slice(1));
        };
        window.addEventListener('hashchange', handleAnchorChange);
        return () => window.removeEventListener('hashchange', handleAnchorChange);
    }, []);

    return (
        <nav className="navbar">
            <div className={`navbar-icons ${currentAnchor === 'page1' ? 'active' : ''}`} id="#page1">
                <a href="#page1">
                    <RiHome2Fill />
                </a>
            </div>
            <div className={`navbar-icons ${currentAnchor === 'page2' ? 'active' : ''}`} id="#page2">
                <a href="#page2">
                    <RiTeamFill />
                </a>
            </div>
            <div className={`navbar-icons ${currentAnchor === 'page3' ? 'active' : ''}`} id="#page3">
                <a href="#page3">
                    <GiNotebook />
                </a>
            </div>

            <div className={`navbar-icons ${currentAnchor === 'page4' ? 'active' : ''}`} id="#page4">
                <a href="#page4">
                    <MdMeetingRoom />
                </a>
            </div>

            <div className={`navbar-icons ${currentAnchor === 'page5' ? 'active' : ''}`} id="#page6">
                <a href="#page6">
                    <HiDocumentCheck />
                </a>
            </div>

            <div className={`navbar-icons ${currentAnchor === 'page6' ? 'active' : ''}`} id="#page5">
                <a href="#page5">
                    <BsFilePost />
                </a>
            </div>

            <div className={`navbar-icons ${currentAnchor === 'page7' ? 'active' : ''}`} id="#page7">
                <a href="#page7">
                    <AiOutlineFundProjectionScreen />
                </a>
            </div>

            <div className={`navbar-icons ${currentAnchor === 'page8' ? 'active' : ''}`} id="#page8">
                <a href="#page8">
                    <RiFeedbackFill />
                </a>
            </div>

            <div className={`navbar-icons ${currentAnchor === 'page9' ? 'active' : ''}`} id="#page9">
                <a href="#page9">
                    <RiMoreFill />
                </a>
            </div>

        </nav>
    );
};

export default Navbar;