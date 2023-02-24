import {
  RiHome2Fill,
  RiTeamFill,
  RiFeedbackFill,
  RiMoreFill,
} from "react-icons/ri";
import { GiNotebook } from "react-icons/gi";
import { MdMeetingRoom } from "react-icons/md";
import { BsFilePost } from "react-icons/bs";
import { HiDocumentCheck } from "react-icons/hi2";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import NavIcon from "./NavIcon";

const navIconSize = 50;

const navigations = [
  { link: "#page1", icon: <RiHome2Fill size={navIconSize} /> },
  { link: "#page2", icon: <RiTeamFill size={navIconSize} /> },
  { link: "#page3", icon: <GiNotebook size={navIconSize} /> },
  { link: "#page4", icon: <MdMeetingRoom size={navIconSize} /> },
  { link: "#page5", icon: <HiDocumentCheck size={navIconSize} /> },
  { link: "#page6", icon: <BsFilePost size={navIconSize} /> },
  {
    link: "#page7",
    icon: <AiOutlineFundProjectionScreen size={navIconSize} />,
  },
  { link: "#page8", icon: <RiFeedbackFill size={navIconSize} /> },
  { link: "#page9", icon: <RiMoreFill size={navIconSize} /> },
];

const Navbar = () => {
  return (
    <nav className="fixed left-1/2 top-0 z-50 mt-6 flex w-1/4 translate-x-[-50%] items-center justify-center text-4xl no-underline">
      {navigations.map((navigation) => (
        <NavIcon
          key={navigation.link}
          link={navigation.link}
          icon={navigation.icon}
        />
      ))}
    </nav>
  );
};

export default Navbar;
