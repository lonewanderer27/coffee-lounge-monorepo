'use client';

import IProduct from "@interfaces/products";
import { TextField, MarkdownField, DateField } from "@refinedev/antd";
import { useOne } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

const ProductShow = (props: {
  product: IProduct
}) => {
  const {
    result: category,
    query: { isLoading: categoryIsLoading },
  } = useOne({
    resource: "category",
    id: props.product.category_type_id,
  });

  return (
    <div>
      <Title level={5}>{"ID"}</Title>
      <TextField value={props.product?.id} />
      <Title level={5}>{"Product"}</Title>
      <TextField value={props.product?.name} />
      <Title level={5}>{"Description"}</Title>
      <MarkdownField value={props.product?.description ?? ""} />
      <Title level={5}>{"Category"}</Title>
      <TextField
        value={categoryIsLoading ? <>Loading...</> : <>{category?.name}</>}
      />
      <Title level={5}>{"Created"}</Title>
      <DateField value={props.product?.created_at} />
      <Title level={5}>{"Updated"}</Title>
      <DateField value={props.product?.updated_at} />
    </div>
  )
}

export default ProductShow;