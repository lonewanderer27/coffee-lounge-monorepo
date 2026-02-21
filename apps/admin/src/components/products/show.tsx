'use client';

import ICategory from "@interfaces/categories";
import IProduct from "@interfaces/products";
import { TextField, MarkdownField, DateField } from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

const ProductShow = (props: {
  product: IProduct,
  category: ICategory
}) => {
  return (
    <div>
      <Title level={5}>{"ID"}</Title>
      <TextField value={props.product?.id} />
      <Title level={5}>{"Product"}</Title>
      <TextField value={props.product?.name} />
      <Title level={5}>{"Description"}</Title>
      <MarkdownField value={props.product?.description ?? "N/A"} />
      <Title level={5}>{"Category"}</Title>
      <TextField value={props.category?.name} />
      <Title level={5}>{"Created"}</Title>
      <DateField value={props.product?.created_at} />
      <Title level={5}>{"Updated"}</Title>
      <DateField value={props.product?.updated_at} />
    </div>
  )
}

export default ProductShow;