# Role × Module Access Matrix

Permission levels: **View** (read-only), **Edit** (create/update), **Approve** (sign-off actions), **None** (no access).

| Role                | Recruitment Approval | Onboarding Tasks | Offboarding Tasks | Dashboard | AI Assistant | Notification Settings | User/Role Management |
|---------------------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Recruiter           | Edit | View | None | View (own reqs) | View | None | None |
| Hiring Manager      | Approve | View | None | View (own team) | View | None | None |
| HR Operations       | View | Edit | Edit | Edit | View | Edit | None |
| IT                  | None | Edit (IT tasks only) | Edit (IT tasks only) | View (IT tasks) | View | None | Edit (accounts) |
| Admin               | None | Edit (Admin tasks only) | Edit (Admin tasks only) | View (Admin tasks) | View | None | None |
| Finance             | None | None | View (for FnF gating) | View (clearance status) | View | None | None |
| Reporting Manager   | None | View (own reports) | View (own reports) | View (own reports) | View | None | None |
| Employee            | None | View (own record) | View (own record) | View (own status) | View | None | None |
| Super Admin         | Approve | Edit | Edit | Edit | Edit | Edit | Edit |

## Notes

- "Own reqs"/"own team"/"own record" means scoped to records the role is directly responsible for or party to — enforced at the query layer, not just the UI.
- **Finance** access to Offboarding is read-only status visibility, used to enforce the PRD rule "FnF should not proceed with pending clearances" — Finance sees clearance state but does not edit department tasks.
- **IT** and **Admin** only edit the task rows belonging to their own department within Onboarding/Offboarding — not each other's.
- **AI Assistant** is view/query access for all roles (everyone can ask it questions); no role gets "Edit" since it has no persisted content to edit directly — its underlying source documents (policies/SOPs) are managed by HR Operations through the normal document/task edit permissions instead.
- **Super Admin** is a system-configuration role (not a PRD department) for initial setup, role assignment, and break-glass access.
