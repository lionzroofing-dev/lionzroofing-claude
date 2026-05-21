---
name: run-tasks
description: "Pull tasks.md and screenshots from GitHub, then build each page using the build-page skill. Each task has a page name and screenshot. After all tasks are done, deletes screenshots and tasks.md, then pushes to GitHub. Supports resuming after a token limit pause."
user-invocable: true
---

You are processing the build task queue for the Lionz Roofing website.

## IMPORTANT — Always pull from GitHub first

**Before doing anything else, always run `git pull` to get the latest files from GitHub.** This is mandatory every time the skill runs — even on resume after a token limit. Never skip this step. The tasks.md and screenshots must always be fetched fresh from the remote repo before processing begins.

---

## Token limit / resume behavior

This skill is designed to survive context/token limit interruptions. After each task completes, the built page and updated `tasks.md` are immediately pushed to GitHub. If the session hits a token limit or is interrupted for any reason, simply run `/run-tasks` again — it pulls the latest state from GitHub first, then resumes from the remaining tasks. Already-built pages are on GitHub and are never lost or rebuilt.

If `tasks/tasks.md` does not exist when the skill starts, it means all tasks were already completed in a previous session. Report this and stop cleanly.

---

## Step 1 — Pull latest from GitHub (MANDATORY FIRST STEP)

This must always be the very first action. Run:
```
git pull
```

Do not read any files, do not parse any tasks, do not do anything else until this pull completes successfully.

If the pull fails, stop and tell the user: "Git pull failed — please check your connection and remote config before retrying."

After the pull, confirm that `tasks/tasks.md` exists. If it does not exist, stop and tell the user: "No tasks.md found in tasks/. All tasks may already be complete."

---

## Step 2 — Parse tasks.md

Read the file at `tasks/tasks.md`.

Parse every task in this format:
```
Task 1:
Page Name: Sample
Screenshot: shot1.jpg

Task 2:
Page Name: Sample2
Screenshot: shot2.jpg
```

Extract an ordered list of tasks, each with:
- `page_name` — the value after `Page Name:`
- `screenshot` — the filename after `Screenshot:`
- Full screenshot path: `tasks/screenshots/<screenshot>`

If no tasks are found or the file is empty, stop and tell the user: "tasks.md is empty — nothing to process."

---

## Step 3 — Process each task one by one

For each task in order:

### 3a — Confirm screenshot exists
Check that `tasks/screenshots/<screenshot>` exists. If it does not, skip the task and warn: "Skipping — screenshot not found: <screenshot>"

### 3b — Run build-page
Invoke the `build-page` skill, passing:
- The page name as the skill argument
- The screenshot file at `tasks/screenshots/<screenshot>` as the attached image

Wait for `build-page` to fully complete before continuing.

### 3c — Remove task from tasks.md immediately
After `build-page` completes successfully:

1. Delete the screenshot:
   ```
   rm tasks/screenshots/<screenshot>
   ```

2. Remove this task's entry from `tasks/tasks.md` and save the file. The file should contain only the remaining unprocessed tasks after this edit. If this was the last task, the file will be empty.

### 3d — Push to GitHub immediately after each task

This is critical for token limit safety. After every completed task, push all changes to GitHub right away — do not wait until the end:

```
git add -A
git commit -m "Build <Page Name> page"
git push origin HEAD
```

This ensures that if a token limit hits before all tasks are done, the already-built pages are safely stored on GitHub. When the skill resumes and runs `git pull`, it gets back exactly where it left off with no lost work.

Report: "✓ Task complete — <Page Name> built and pushed. Remaining: <N> tasks."

---

## Step 4 — Delete tasks.md

After all tasks have been processed and `tasks/tasks.md` is empty, delete it:
```
rm tasks/tasks.md
```

Report: "✓ tasks.md removed."

---

## Step 5 — Push to GitHub

Invoke the `push-to-github` skill to commit and push all newly built pages and the cleanup to GitHub.

---

## Step 6 — Final report

Report a summary in this format:

```
✓ All tasks complete

Pages built:   <list of page names>
Screenshots:   deleted
tasks.md:      deleted
GitHub:        pushed
```

If any tasks were skipped, list them under "Skipped:" with the reason.

---

## If interrupted mid-session

If the session ends due to a token limit before all tasks are finished:
- Already-completed tasks have been removed from `tasks.md` and pushed to GitHub
- The next `/run-tasks` run pulls from GitHub first, getting the updated `tasks.md` and all previously built pages
- Processing continues from the remaining tasks only
- No work is lost, overwritten, or duplicated
