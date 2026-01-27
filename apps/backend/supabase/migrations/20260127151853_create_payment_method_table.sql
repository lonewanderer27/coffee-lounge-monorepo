create table payment_method (
    name text not null,
    is_enabled bool default true,
    image text
)