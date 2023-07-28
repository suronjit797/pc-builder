import { BsCpu, BsMotherboard, BsMouse } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { MdOutlinePower } from "react-icons/md";
import { GrStorage } from "react-icons/gr";
import { FiMonitor } from "react-icons/fi";

export const productEnum = [
  "cpu",
  "motherboard",
  "ram",
  "powerSupplyUnit",
  "storageDevice",
  "monitor",
  "others",
];

export const methods = {
  post: "POST",
  get: "GET",
  patch: "PATCH",
  delete: "DELETE",
};

export const categoryList = [
  {
    name: "CPU / Processor",
    link: "/category/cpu",
    icon: <BsCpu />,
  },
  {
    name: "Motherboard",
    link: "/category/motherboard",
    icon: <BsMotherboard />,
  },
  {
    name: "RAM",
    link: "/category/ram",
    icon: <CgSmartphoneRam />,
  },
  {
    name: "Power Supply Unit",
    link: "/category/powerSupplyUnit",
    icon: <MdOutlinePower />,
  },
  {
    name: "Storage Device",
    link: "/category/storageDevice",
    icon: <GrStorage />,
  },
  {
    name: "Monitor",
    link: "/category/monitor",
    icon: <FiMonitor />,
  },
  {
    name: "Others",
    link: "/category/others",
    icon: <BsMouse />,
  },
];
