create table company (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    description text,
    image text
)