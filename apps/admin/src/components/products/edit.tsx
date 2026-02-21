"use client";

import IProduct from "@interfaces/products";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export default function ProductEdit(props: { product: IProduct }) {
  const { formProps, saveButtonProps, query } = useForm({
    queryOptions: {
      initialData: {
        data: props.product
      }
    },
    meta: {
      select: "*, category(id)",
    },
  });

  const productData = query?.data?.data;

  const { selectProps: categorySelectProps } = useSelect({
    resource: "category",
    optionLabel: "name",
    queryOptions: {
      enabled: !!productData
    }
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Product"}
          name={["name"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Description"}
          name="description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea rows={5} />
        </Form.Item>
        <Form.Item
          label={"Category"}
          name={"category_type_id"}
          initialValue={formProps?.initialValues?.category?.id}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...categorySelectProps} />
        </Form.Item>
      </Form>
    </Edit>
  )
}