create table product_price (
    product_id bigint references product,
    code_id text references country,
    price decimal
)