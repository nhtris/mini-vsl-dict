import { IconType } from "react-icons";
import { NavLink } from "react-router";

interface NavigationIconProps {
  icon: IconType;
  text: string;
  to: string;
}

const NavigationIcon: React.FC<NavigationIconProps> = ({
  icon: Icon,
  text,
  to,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-purple-600" : "text-gray-800")}
    >
      <div className="flex flex-col items-center">
        <Icon className="h-6 w-6" />
        <div className="text-xs font-medium">{text}</div>
      </div>
    </NavLink>
  );
};

export default NavigationIcon;
