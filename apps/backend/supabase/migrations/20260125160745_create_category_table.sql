create table category (
    id bigint primary key generated always as identity,
    name text,
    description text,
    long_name text null
)