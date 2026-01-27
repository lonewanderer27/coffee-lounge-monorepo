create table payment_method (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    is_enabled bool default true,
    image text
)