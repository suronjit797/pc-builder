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

export const categoryList = [
  {
    id: 1,
    name: "CPU / Processor",
    link: "/category/cpu",
    icon: <BsCpu />,
  },
  {
    id: 2,
    name: "Motherboard",
    link: "/category/motherboard",
    icon: <BsMotherboard />,
  },
  {
    id: 3,
    name: "RAM",
    link: "/category/ram",
    icon: <CgSmartphoneRam />,
  },
  {
    id: 4,
    name: "Power Supply Unit",
    link: "/category/powerSupplyUnit",
    icon: <MdOutlinePower />,
  },
  {
    id: 5,
    name: "Storage Device",
    link: "/category/storageDevice",
    icon: <GrStorage />,
  },
  {
    id: 6,
    name: "Monitor",
    link: "/category/monitor",
    icon: <FiMonitor />,
  },
  {
    id: 7,
    name: "Others",
    link: "/category/others",
    icon: <BsMouse />,
  },
];

export const base_url_api =
  (process.env.NODE_ENV === "production"
    ? "https://pc-builder-api-ten.vercel.app/api/v1"
    : "http://localhost:5000/api/v1") ||
  "https://pc-builder-api-ten.vercel.app/api/v1";

export const base_url_app =
  (process.env.NODE_ENV === "production"
    ? "https://pc-builder-kappa.vercel.app"
    : "http://localhost:3000") || "https://pc-builder-kappa.vercel.app";
