import { addCategoryItem } from "@/redux/features/category/category";
import { Button } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";

const CategoryCard = ({ product }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = () => {
    dispatch(addCategoryItem(product));
    router.push("/pc-builder");
  };

  return (
    <Card className="px-4 py-3 my-3 d-flex align-items-center flex-row ">
      <Image src={product?.image} height={100} width={100} alt={product.name} />
      <div className="me-auto px-4">
        <div className="text-primary fs-5 fw-bold text-capitalize">
          {product.name}
        </div>
        <div>
          <b> Category: </b> {product.category}
        </div>
        <div>
          <b>Rating: </b> {product.individualRating} of 5
        </div>
        <div>
          <b>Stock: </b>
          {product.quantity > 0 ? (
            <span className="text-success"> In Stock </span>
          ) : (
            <span className="text-danger"> Out of Stock </span>
          )}
        </div>
      </div>

      <div>
        <div className="mb-2 text-center">
          <b> $ {product.price} </b>
        </div>
        <Button type="primary" onClick={handleClick}>
          Add to build
        </Button>
      </div>
    </Card>
  );
};

export default CategoryCard;
