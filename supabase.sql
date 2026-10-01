-- Dynasty 8 – zapis umów. Uruchom w Supabase: SQL Editor → New query → wklej → Run.
-- PRZED uruchomieniem zamień ADMIN@TWOJ-EMAIL.pl (w 2 miejscach, na dole) na e-mail konta admina
-- (ten sam, którego użyłeś przy tabeli listings).

create table if not exists public.contracts (
  id         bigint generated always as identity primary key,
  type       text not null check (type in ('sale','rent','inst')),
  title      text,
  data       jsonb not null default '{}'::jsonb,
  created_by uuid default auth.uid(),
  created_at timestamptz not null default now()
);

create index if not exists contracts_created_idx on public.contracts (created_at desc);

alter table public.contracts enable row level security;

grant select, insert, update, delete on public.contracts to authenticated;

-- Umowy zawierają dane osobowe (SSN), więc NIE ma dostępu publicznego:
-- czytać, dodawać, edytować i usuwać może wyłącznie konto admina.
drop policy if exists "umowy_admin" on public.contracts;
create policy "umowy_admin" on public.contracts
  for all to authenticated
  using      ((auth.jwt() ->> 'email') = 'ADMIN@TWOJ-EMAIL.pl')
  with check ((auth.jwt() ->> 'email') = 'ADMIN@TWOJ-EMAIL.pl');
