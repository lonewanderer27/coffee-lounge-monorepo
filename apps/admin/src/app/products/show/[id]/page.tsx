"use client";

import { DateField, MarkdownField, Show, TextField } from "@refinedev/antd";
import { useOne, useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export default function ProductShow() {
  const { result: product, query } = useShow({
    meta: {
      select: "*, category(id)",
    },
  });
  const { isLoading } = query;

  const {
    result: category,
    query: { isLoading: categoryIsLoading },
  } = useOne({
    resource: "category",
    id: product?.category_type_id || "",
    queryOptions: {
      enabled: !!product,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={product?.id} />
      <Title level={5}>{"Product"}</Title>
      <TextField value={product?.name} />
      <Title level={5}>{"Description"}</Title>
      <MarkdownField value={product?.description} />
      <Title level={5}>{"Category"}</Title>
      <TextField
        value={categoryIsLoading ? <>Loading...</> : <>{category?.name}</>}
      />
      <Title level={5}>{"Created"}</Title>
      <DateField value={product?.created_at} />
      <Title level={5}>{"Updated"}</Title>
      <DateField value={product?.updated_at} />
    </Show>
  );
}
