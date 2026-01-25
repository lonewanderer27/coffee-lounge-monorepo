alter table product
add column created_at timestamp with time zone default now(),
add column updated_at timestamp with time zone default now();