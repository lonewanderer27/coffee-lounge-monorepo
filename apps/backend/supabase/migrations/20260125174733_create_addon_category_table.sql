create table addon_category (
    id bigint primary key generated always as identity,
    name text,
    description text,
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now()
)