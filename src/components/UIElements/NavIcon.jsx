import { useLocation } from "react-router";

const NavIcon = (props) => {
  const { link, icon } = props;
  const location = useLocation();
  const currentAnchor = location.hash.slice(1);
  const activeClass = currentAnchor === link.slice(1) && "scale-150";

  return (
    <div
      className={`${activeClass} flex items-center justify-center transition-transform`}
      id={link}
    >
      <a href={link} className="mx-8 text-white">
        {icon}
      </a>
    </div>
  );
};

export default NavIcon;
