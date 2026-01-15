<!-- SYNC IMPACT REPORT
Version change: N/A -> 1.0.0
Modified principles: None (new constitution)
Added sections: All sections (new constitution)
Removed sections: None
Templates requiring updates:
  - .specify/templates/plan-template.md ⚠ pending
  - .specify/templates/spec-template.md ⚠ pending
  - .specify/templates/tasks-template.md ⚠ pending
  - .specify/templates/commands/*.md ⚠ pending
Deferred items: None
-->

# Phase II Todo Full-Stack Web Application Constitution

## Core Principles

### Spec-driven development
All implementation driven by specifications. Code must match spec requirements exactly. All endpoints must match REST endpoint specification.

### User isolation
Each user sees and modifies only their own tasks. User isolation enforced on database level. No data leakage between users.

### Security first
JWT authentication on all API endpoints. Zero authentication bypass vulnerabilities. All API responses must include user_id validation.

### Monorepo clarity
Single context for frontend and backend. Follow CLAUDE.md guidelines in each folder. Use prescribed stack (Next.js, FastAPI, SQLModel, Neon, Better Auth).

### Technology consistency
Use prescribed stack (Next.js, FastAPI, SQLModel, Neon, Better Auth). Use TypeScript in frontend, type hints in backend. No manual database queries (use SQLModel only). No inline styles (Tailwind only).

### Database integrity
All queries must enforce user_id filtering. Database schema matches specification exactly. ORM: SQLModel (no raw SQL).

## Key Standards

Specification compliance: Code must match spec requirements exactly. API contract: All endpoints must match REST endpoint specification. Database integrity: All queries must enforce user_id filtering. Code organization: Follow CLAUDE.md guidelines in each folder. Type safety: Use TypeScript in frontend, type hints in backend. Technology Stack (Non-Negotiable): Frontend: Next.js 16+ (App Router), TypeScript, Tailwind CSS. Backend: FastAPI, SQLModel, Pydantic. Database: Neon Serverless PostgreSQL. Authentication: Better Auth with JWT tokens. ORM: SQLModel (no raw SQL).

## Constraints

No manual database queries (use SQLModel only). No inline styles (Tailwind only). No server-side rendering exemptions without approval. API responses must include user_id validation. All environment variables must have defaults or explicit setup.

## Governance

Specification compliance: Code must match spec requirements exactly. API contract: All endpoints must match REST endpoint specification. Database integrity: All queries must enforce user_id filtering. Code organization: Follow CLAUDE.md guidelines in each folder. Type safety: Use TypeScript in frontend, type hints in backend. Success Criteria: All 5 basic features implemented and working. All REST endpoints functional with JWT authentication. Frontend can create, read, update, delete, and complete tasks. User isolation enforced (no data leakage between users). Database schema matches specification exactly. Zero authentication bypass vulnerabilities. Code passes linting and follows stack conventions.

**Version**: 1.0.0 | **Ratified**: 2026-01-14 | **Last Amended**: 2026-01-14