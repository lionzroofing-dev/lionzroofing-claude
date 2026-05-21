---
name: push-to-github
description: "Push local changes to GitHub. Stages changed files, creates a commit with a descriptive message, and pushes to the remote origin. Use after making changes you want to save to GitHub."
argument-hint: "[optional commit message]"
user-invocable: true
---

You are pushing local changes to GitHub for the Lionz Roofing project.

## Step 1 — Check current state

Run these in parallel:
- `git status` — see what files are changed or untracked
- `git diff` — see unstaged changes
- `git log --oneline -5` — see recent commit messages for style reference
- `git remote -v` — confirm the remote origin is configured

If there is no remote configured, stop and tell the user: "No GitHub remote is configured. Please add one with: `git remote add origin <your-repo-url>`"

## Step 2 — Determine commit message

**If a commit message was passed as the skill argument** (e.g. `/push-to-github fix hero layout`):
- Use that as the commit message.

**If no argument was provided:**
- Analyze the changed files and write a short, descriptive commit message (imperative mood, under 72 characters).
- Examples: `Add About page`, `Fix mobile nav overflow`, `Update hero CTA copy`
- Do NOT ask the user to confirm the message — derive it and proceed.

## Step 3 — Safety checks

Before staging anything:
- Do NOT stage `.env`, `.env.local`, or any file containing secrets or credentials.
- If any such files appear in `git status`, skip them and warn the user.
- If there are no changes to commit (clean working tree), report: "Nothing to commit — working tree is clean." and stop.

## Step 4 — Stage, commit, and push

Run sequentially:

1. Stage all changed tracked and untracked files (excluding secrets):
   ```
   git add -A
   ```
   But first check if any sensitive files would be staged — if so, stage specific files by name instead.

2. Commit with the message from Step 2:
   ```
   git commit -m "$(cat <<'EOF'
   <commit message here>

   Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
   EOF
   )"
   ```

3. Push to origin:
   ```
   git push origin HEAD
   ```

If the push fails because the remote branch doesn't exist yet, retry with:
```
git push -u origin HEAD
```

## Step 5 — Report

Report in this format:

```
✓ Pushed to GitHub

Branch:   <branch name>
Commit:   <short hash> — <commit message>
Files:    <count> changed
```

If anything failed, explain what went wrong and the exact command the user can run to fix it.
