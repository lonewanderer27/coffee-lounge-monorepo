create table public."order" (
    id bigint primary key generated always as identity,
    transaction_id bigint not null references transaction,
    product_id bigint not null references product,
    addon_ids bigint[],
    quantity integer default 1
);