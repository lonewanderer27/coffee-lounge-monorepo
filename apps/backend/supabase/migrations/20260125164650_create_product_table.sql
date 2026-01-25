create table product (
    id bigint primary key generated always as identity,
    name text,
    description text null,
    image text null,
    category_type_id bigint references category
)