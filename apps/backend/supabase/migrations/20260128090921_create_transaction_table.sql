create table transaction (
    id bigint primary key generated always as identity,
    user_id bigint not null references public."user",
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now()
);