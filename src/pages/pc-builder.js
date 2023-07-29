import Layout1 from "@/components/Layouts/Layout1";
import React from "react";
import { Container } from "react-bootstrap";
// import { categoryList } from "@/_server/constant";
import PcBuilderCard from "@/components/PcBuilder/PcBuilderCard";
import { useSelector } from "react-redux";
import { Button } from "antd";
import Swal from "sweetalert2";

const PcBuilderPage = () => {
  const { categoryList, price, isComplete } = useSelector(
    (state) => state.category
  );

  const handleBuild = () => {
    Swal.fire({
      icon: "Success",
      title: "Congratulation",
      text: "You successfully build your pc!",
      timer: 1000,
      showConfirmButton: false,
      timerProgressBar: true,
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  };

  return (
    <Layout1>
      <Container className="mb-3">
        <div className="d-flex align-items-center justify-content-between bg-white mt-3 py-3 px-4">
          <div className="text_primary">PC builder - Build your own pc </div>
          <div className="bg-secondary-subtle px-4 py-2 text-secondary rounded-2 fw-bold">
            $ {price}
          </div>
        </div>

        {categoryList.map((category, ind) => (
          <PcBuilderCard category={category} key={ind} />
        ))}
        <Button type="primary" disabled={!isComplete} onClick={handleBuild}>
          Complete Build
        </Button>
      </Container>
    </Layout1>
  );
};

export default PcBuilderPage;
