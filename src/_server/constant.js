import { BsCpu, BsMotherboard, BsMouse } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { MdOutlinePower } from "react-icons/md";
import { GrStorage } from "react-icons/gr";
import { FiMonitor } from "react-icons/fi";

export const productEnum = [
  "cpu/processor",
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
    link: "cpu/processor",
    icon: <BsCpu />,
  },
  {
    name: "Motherboard",
    link: "motherboard",
    icon: <BsMotherboard />,
  },
  {
    name: "RAM",
    link: "ram",
    icon: <CgSmartphoneRam />,
  },
  {
    name: "Power Supply Unit",
    link: "powerSupplyUnit",
    icon: <MdOutlinePower />,
  },
  {
    name: "Storage Device",
    link: "storageDevice",
    icon: <GrStorage />,
  },
  {
    name: "Monitor",
    link: "monitor",
    icon: <FiMonitor />,
  },
  {
    name: "Others",
    link: "others",
    icon: <BsMouse />,
  },
];
