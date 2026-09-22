-- 001_init_schema.sql
-- Core schema for Recruitment -> Onboarding -> Offboarding lifecycle.
-- Run once against the project's Postgres/Supabase database.

create extension if not exists pgcrypto; -- gives us gen_random_uuid()

-- ========== Shared / foundation ==========

create table if not exists departments (
  id         uuid primary key default gen_random_uuid(),
  name       text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists employees (
  id                    uuid primary key default gen_random_uuid(),
  name                  text not null,
  email                 text unique,
  role_title            text,
  department_id         uuid references departments(id),
  reporting_manager_id  uuid references employees(id),
  lifecycle_stage       text not null default 'candidate'
                          check (lifecycle_stage in ('candidate','onboarding','active','offboarding','exited')),
  doj                   date,
  lwd                   date,
  created_at            timestamptz not null default now(),
  updated_at            timestamptz not null default now()
);
create index if not exists idx_employees_department on employees(department_id);
create index if not exists idx_employees_stage on employees(lifecycle_stage);

create table if not exists users (
  id             uuid primary key default gen_random_uuid(),
  employee_id    uuid references employees(id),
  email          text not null unique,
  password_hash  text not null,
  system_role    text not null
                   check (system_role in (
                     'Recruiter','Hiring Manager','HR Operations','IT',
                     'Admin','Finance','Reporting Manager','Employee','Super Admin'
                   )),
  created_at     timestamptz not null default now()
);

-- ========== Recruitment ==========

create table if not exists candidate_details (
  employee_id        uuid primary key references employees(id) on delete cascade,
  recruiter_id       uuid references employees(id),
  hiring_manager_id  uuid references employees(id),
  stage              text not null default 'applied'
                        check (stage in ('applied','screening','interview','offer','hired')),
  applied_on         date
);

create table if not exists approvals (
  id             uuid primary key default gen_random_uuid(),
  candidate_id   uuid not null references employees(id),
  requested_of   uuid references employees(id), -- hiring manager
  status         text not null default 'pending'
                   check (status in ('pending','approved','rejected')),
  requested_at   timestamptz not null default now()
);
create index if not exists idx_approvals_candidate on approvals(candidate_id);

-- ========== Onboarding ==========

create table if not exists onboarding_tasks (
  id             uuid primary key default gen_random_uuid(),
  employee_id    uuid not null references employees(id) on delete cascade,
  department_id  uuid references departments(id),
  title          text not null,
  owner          text,
  due_date       date,
  priority       text check (priority in ('low','medium','high')),
  status         text not null default 'not_started'
                   check (status in ('not_started','in_progress','blocked','done')),
  created_at     timestamptz not null default now()
);
create index if not exists idx_onboarding_tasks_employee on onboarding_tasks(employee_id);

create table if not exists onboarding_profile (
  employee_id          uuid primary key references employees(id) on delete cascade,
  buddy_id             uuid references employees(id),
  it_setup_status      text default 'not_started' check (it_setup_status in ('not_started','in_progress','done')),
  workstation_status   text default 'not_started' check (workstation_status in ('not_started','in_progress','done')),
  documentation_status text default 'not_started' check (documentation_status in ('not_started','in_progress','done')),
  readiness_score      int check (readiness_score between 0 and 5)
);

-- ========== Offboarding ==========

create table if not exists offboarding_tasks (
  id             uuid primary key default gen_random_uuid(),
  employee_id    uuid not null references employees(id) on delete cascade,
  department_id  uuid references departments(id),
  title          text not null,
  owner          text,
  due_date       date,
  priority       text check (priority in ('low','medium','high')),
  status         text not null default 'not_started'
                   check (status in ('not_started','in_progress','blocked','done')),
  created_at     timestamptz not null default now()
);
create index if not exists idx_offboarding_tasks_employee on offboarding_tasks(employee_id);

create table if not exists exit_details (
  employee_id        uuid primary key references employees(id) on delete cascade,
  kt_owner_id        uuid references employees(id),
  it_clearance       text default 'not_started' check (it_clearance in ('not_started','in_progress','blocked','done')),
  finance_clearance  text default 'not_started' check (finance_clearance in ('not_started','in_progress','blocked','done')),
  admin_clearance    text default 'not_started' check (admin_clearance in ('not_started','in_progress','blocked','done')),
  hr_clearance       text default 'not_started' check (hr_clearance in ('not_started','in_progress','blocked','done')),
  fnf_gate           text not null default 'blocked' check (fnf_gate in ('blocked','released')),
  clearance_score    int default 0
);

-- ========== Seed data ==========

insert into departments (name) values
  ('IT'), ('Admin'), ('HR Ops'), ('Finance')
on conflict (name) do nothing;
