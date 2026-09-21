# Employee Onboarding & Offboarding — Product Requirements Document

**Prepared for:** Hexaview Engineering Team
**Document Version:** 1.0
**Date:** July 23, 2026
**Status:** For Engineering Review

## Objective

To develop an Employee Onboarding & Offboarding Management System that enables seamless employee lifecycle management from candidate selection to exit clearance by automating approvals, task assignments, notifications, reminders, and inter-departmental coordination across Recruitment, HR Operations, IT, Admin, Finance, and other stakeholders. The solution should ensure a smooth, efficient, and transparent process for all employees throughout their journey with the organization.

## Business Problem

The organization needs a centralized system to manage the complete employee lifecycle from candidate approval to onboarding and offboarding. A streamlined workflow is required to ensure seamless coordination between Recruitment, HR Operations, IT, Admin, Finance, and other stakeholders, enabling timely task completion, improved visibility, and a smooth employee experience throughout their journey with the organization.

## Scope

Recruitment approval workflow, onboarding management, offboarding management, notifications, reminders and dashboard tracking.

## Recruitment to Onboarding Workflow

- Recruiter marks candidate as Selected, Rejected or Hold
- Approval workflow for hiring manager
- Approved candidates move to offer stage
- Recruiter captures DOJ (Date of Joining) and employee details
- Automatic onboarding workflow triggered after DOJ entry

## Onboarding Requirements

- Onboarding request integrated with hiring tool or entered by HR
- Notify HR Operations, IT, Admin and Reporting Manager
- Create department-wise onboarding tasks
- Send reminders until tasks are marked ready
- Readiness dashboard for all departments
- Single-click credential dispatch on joining date

### IT Tasks
- Email creation
- User account creation
- System and software access provisioning
- Teams account setup

### Admin Tasks
- Laptop allocation
- ID card creation
- Workspace preparation
- Accessories allocation

### HR Operations Tasks
- Documentation
- Welcome kit
- Orientation scheduling
- Policy acknowledgements

## Offboarding Requirements

- HR captures Last Working Day (LWD)
- All departments notified about employee exit
- Employee receives clearance reminders
- Departments revoke access and update status
- Reminders continue until access/assets are cleared
- FnF (Full & Final settlement) should not proceed with pending clearances

## Notifications

Email, Microsoft Teams, and in-app notifications for task creation, reminders, escalations, joining alerts, and exit alerts.

## Good to Have Enhancements

- Integration with Active Directory for account creation and scheduled disabling
- Integration with Microsoft Teams for notifications and reminders
- Asset management integration and tracking

## Success Metrics

- 90% reduction in manual onboarding emails
- 95% onboarding readiness before DOJ
- 100% access revocation on LWD
- 0 FnF settlements with pending clearance

---

*Transcribed from the source PDF (`Employee_Onboarding_Offboarding_PRD.pdf`) so the requirement stays version-controlled alongside the code.*
