# Advance Playwright Framework (2x)

This repository contains an advanced Playwright testing framework scaffold written in TypeScript. It includes a Page Object Model, reusable fixtures, utilities, and example tests.

Prerequisites
- Node.js 18+ and npm
- Git

Quick start
1. Install dependencies:

```bash
npm install
```

2. Install Playwright browsers (if needed):

```bash
npx playwright install --with-deps
```

3. Run tests:

```bash
npx playwright test
```

Project layout
- `src/`
	- `api/` — API clients
	- `config/` — environment configuration
	- `fixtures/` — Playwright fixtures
	- `pages/` — Page Object Model files
	- `testdata/` — test data files
	- `tests/` — Playwright test specs
	- `utils/` — reusable utilities and reporters
- `docs/` — documentation
- `rules/` — linting / repo rules
- `.github/` — CI/workflow configs

Files of interest
- `playwright.config.ts` — Playwright configuration
- `tsconfig.json` — TypeScript compiler settings

Contributing
- Create a feature branch, commit changes, and open a PR targeting `master`.

License
- Add your project license here.

See `src/` for implementation details and page objects.
