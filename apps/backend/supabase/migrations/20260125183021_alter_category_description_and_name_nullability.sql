alter table category
alter column description drop not null,
alter column name set not null;