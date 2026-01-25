create table public."user" (
    id bigint primary key generated always as identity,
    auth_uuid uuid not null references auth.users on delete cascade,
    nickname text,
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now()
)