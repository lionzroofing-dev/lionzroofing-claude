---
name: git-push
description: "Stage all changes, auto-generate a commit message from the diff, and force-push to the current branch on GitHub. Bypasses hooks and permission checks."
argument-hint: "[optional extra context for the commit message]"
user-invocable: true
---

You are pushing the current working changes to GitHub for the Lionz Roofing website.

## Step 1 — Read the current state
Run these in parallel:
- `git status`
- `git diff HEAD`
- `git log --oneline -5`
- `git branch --show-current`

## Step 2 — Generate commit message
Analyze the diff and status. Write a concise, specific commit message (1–2 sentences) that describes **what changed and why** — not generic. Examples:
- "Add filmstrip lightbox to gallery with keyboard navigation and auto-close on last image"
- "Update commercial roofing page images to jpg/webp and fix section layout"
- "Create roofing-replacement page with FAQ accordion and ServicesSlider"

If the user passed an argument to the skill, use it as additional context when writing the message.

## Step 3 — Stage, commit, and force-push
Run sequentially:

```bash
git add -A
git commit --no-verify -m "<generated message>"
git push --force --no-verify origin <current-branch>
```

Use `--no-verify` on both commit and push to bypass all hooks.
Use `--force` on push to overwrite any remote conflicts.

## Step 4 — Report
- Branch pushed to
- Commit message used
- Files committed (count + list of changed files)
- Any errors
