create table addon (
    id bigint primary key generated always as identity,
    name text,
    description text null,
    category_type_id bigint references addon_category
)