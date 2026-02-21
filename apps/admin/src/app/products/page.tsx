"use client";

import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
  getDefaultSortOrder
} from "@refinedev/antd";
import { type BaseRecord, useMany } from "@refinedev/core";
import { Space, Table } from "antd";

export default function ProductsList() {
  const { result, tableProps, sorters } = useTable({
    sorters: {
      initial: [
        {
          field: "name",
          order: "asc"
        }
      ]
    },
    meta: {
      select: "*, category(id)"
    }
  });

  const {
    result: { data: categories },
    query: { isLoading: categoryIsLoading },
  } = useMany({
    resource: "category",
    ids: result.data?.map((product) => product.category.id).filter(Boolean) ?? [],
    queryOptions: {
      enabled: !!result?.data
    }
  })

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={"ID"} />
        <Table.Column
          dataIndex="name"
          title={"Product"}
          sorter={{ multiple: 1 }}
          defaultSortOrder={getDefaultSortOrder("name", sorters)}
        />
        <Table.Column
          dataIndex={"category"}
          title={"Category"}
          render={(value) =>
            categoryIsLoading ? (
              <>Loading...</>
            ) : (
              categories?.find((item) => item.id === value?.id)?.name
            )
          }
        />
        <Table.Column
          dataIndex="description"
          title={"Description"}
          render={(value) => value ? value : 'N/A'}
        />
        <Table.Column
          dataIndex={["created_at"]}
          title={"Created"}
          render={(value: any) => <DateField value={value} />}
        />
        <Table.Column
          dataIndex={["updated_at"]}
          title={"Updated"}
          render={(value: any) => <DateField value={value} />}
        />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              {/* <DeleteButton hideText size="small" recordItemId={record.id}  */}
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
