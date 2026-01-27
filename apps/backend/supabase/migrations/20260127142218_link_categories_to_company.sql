alter table category
add column company_id uuid references company;

alter table addon_category
add column company_id uuid references company;