import React from "react";
import Image from "next/image";
import { Card } from "antd";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const { Meta } = Card;

const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product._id}`} className='d-block' style={{ textDecoration: "none" }}>
      <Card
        className={styles.homeCard}
        hoverable
        cover={
          <Image
            alt="pc"
            src={product.image ? product.image : "/images/slider1.webp"}
            layout="responsive"
            width={250}
            height={300}
            style={{ maxWidth: "250px" }}
          />
        }
      >
        <Meta
          className="text-capitalize mb-1"
          title={<span className="fw-bold fs-5"> {product?.name} </span>}
        />
        <div className="text-capitalize">
          <p className="mb-1">
            <b>Price:</b> {product?.price}
          </p>
          <p className="mb-1">
            <b>Category:</b> {product?.category}
          </p>
          <p className="mb-1">
            <b>Status:</b>
            {product?.quantity > 0 ? (
              <span className="text-success"> In Stock </span>
            ) : (
              <span className="text-danger"> Out of Stock </span>
            )}
          </p>
        </div>
        <p className="mb-1">
          <b>Rating:</b> {product?.individualRating || 0} of 5
        </p>
      </Card>
    </Link>
  );
};

export default ProductCard;
