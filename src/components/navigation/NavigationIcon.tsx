import { IconType } from "react-icons";

interface NavigationIconProps {
  icon: IconType;
  text: string;
}

const NavigationIcon: React.FC<NavigationIconProps> = ({
  icon: Icon,
  text,
}) => {
  return (
    <div className="flex flex-col items-center">
      <Icon className="h-6 w-6" />
      <div className="text-xs">{text}</div>
    </div>
  );
};

export default NavigationIcon;
