create table product_category (
    id bigint primary key generated always as identity,
    category_type_id bigint references category,
    product_id bigint references product
)