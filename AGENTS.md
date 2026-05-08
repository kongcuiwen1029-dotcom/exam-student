# Project Agent Rules

This workspace is the default home for future Codex work.

## Default Project Assumptions

- If the workspace is still empty, default to a simple web stack: HTML, CSS, and JavaScript.
- Save new work inside this workspace unless the user explicitly asks for another location.
- For small single-page experiments, prefer `index.html` at the project root.
- For larger work, place assets in `assets/` and organize code into clear feature-oriented files.

## Implementation Conventions

- Prefer simple, readable solutions over framework-heavy setups unless the codebase already establishes a stack.
- Use CSS variables for repeated colors, spacing, radii, and shadows.
- Avoid inline styles except for one-off dynamic values.
- Keep layouts responsive on both desktop and mobile.
- Reuse existing components and patterns before creating new ones.
- Do not add new packages for icons or visuals when local assets or existing styles are sufficient.

## Figma To Code Rules

- IMPORTANT: Start every Figma implementation by fetching structured design context for the exact node.
- IMPORTANT: Also fetch a screenshot of the same node before implementing UI.
- Treat Figma-generated code as reference material, not as final project style.
- Translate the design into this workspace's conventions instead of copying generated code verbatim.
- Prefer local assets returned by the Figma integration when available.
- Validate visual parity before considering the task complete.

## Code To Canvas Rules

- When the user asks to create or update a Figma screen from code, use the Figma screen-generation workflow rather than drawing ad hoc primitives.
- Before any Figma write action, load the `figma:figma-use` skill and follow its incremental write rules.
- When writing a full page or multi-section screen back to Figma, also load `figma:figma-generate-design` and build the screen section by section.
- Build large Figma screens incrementally, one major section at a time.
- Reuse design system components, variables, and styles whenever they exist.
- Ask for or infer the target Figma file URL first; if the user wants an in-place update, prefer a node URL with `node-id`.
- Return and preserve all created or updated node IDs for follow-up changes.
- Validate each major section visually before moving to the next one.

## Figma Write Workflow

- Treat "write back to Figma", "push this page to Figma", "update this frame", and similar requests as Figma write tasks.
- For write tasks, inspect the local code first to identify the page sections and the components used in each section.
- In Figma, prefer existing components, variables, and styles over hardcoded fills, spacing, or typography.
- Create a new screen when the user provides only a file link; update an existing frame when the user provides a node-specific link.
- Keep writes incremental and validate after each major section using Figma metadata and screenshots before proceeding.

## Empty Workspace Guidance

- If no app structure exists yet, create the smallest viable file set first.
- Prefer static prototypes before introducing build tools.
- If a framework would materially help, confirm or infer the simplest reasonable choice and keep the structure minimal.
