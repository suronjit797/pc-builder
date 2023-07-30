import React from "react";
import { categoryList } from "@/constant/constant";
import ListGroup from "react-bootstrap/ListGroup";
import Link from "next/link";

const SideNav = () => {
  return (
    <div className="position-sticky" style={{ top: "15px" }}>
      <ListGroup>
        {categoryList.map((category) => (
          <Link href={category.link} className="text-decoration-none">
            {" "}
            <ListGroup.Item> {category.name} </ListGroup.Item>{" "}
          </Link>
        ))}
      </ListGroup>
    </div>
  );
};

export default SideNav;
