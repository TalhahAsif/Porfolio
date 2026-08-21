import React from "react";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import LocalCafeRoundedIcon from "@mui/icons-material/LocalCafeRounded";
import BugReportRoundedIcon from "@mui/icons-material/BugReportRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";

export const traits = [
  { label: "Code", icon: CodeRoundedIcon },
  { label: "Design", icon: DesignServicesRoundedIcon },
  { label: "Debug", icon: BugReportRoundedIcon },
  { label: "Ship", icon: RocketLaunchRoundedIcon },
  { label: "Coffee", icon: LocalCafeRoundedIcon },
];

const TraitPills = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-wrap justify-center md:justify-start gap-3 ${className}`}
    >
      {traits.map(({ label, icon: Icon }) => (
        <span
          key={label}
          className="group flex items-center cursor-pointer gap-1.5 dark:text-text_silver text-sm font-medium bg-black/5 dark:bg-white/10 px-3 py-1.5 rounded-full"
        >
          <Icon
            fontSize="small"
            className="text-yellow-400 group-hover:text-blue-300 group-hover:animate-shake"
          />
          {label}
        </span>
      ))}
    </div>
  );
};

export default TraitPills;
