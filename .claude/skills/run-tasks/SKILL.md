---
name: run-tasks
description: "Pull tasks.md and screenshots from GitHub, then build each page using the build-page skill. Each task has a page name and screenshot. After all tasks are done, deletes screenshots and tasks.md, then pushes to GitHub. Supports resuming after a token limit pause."
user-invocable: true
---

You are processing the build task queue for the Lionz Roofing website.

## Token limit / resume behavior

This skill is designed to survive context/token limit interruptions. After each task completes, the task is immediately removed from `tasks.md` and saved. If the session hits a token limit or is interrupted for any reason, simply run `/run-tasks` again — it will pull the latest `tasks.md` and resume from the remaining tasks. Already-built pages are never rebuilt.

If `tasks/tasks.md` does not exist when the skill starts, it means all tasks were already completed in a previous session. Report this and stop cleanly.

---

## Step 1 — Pull latest from GitHub

Run:
```
git pull
```

Confirm that `tasks/tasks.md` exists after the pull. If it does not exist, stop and tell the user: "No tasks.md found in tasks/. All tasks may already be complete."

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

   This is the critical step — it ensures that if a token limit interruption happens right after this task, re-running `/run-tasks` will not reprocess it.

Report: "✓ Task complete — <Page Name> built. Remaining: <N> tasks."

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
- Already-completed tasks have been removed from `tasks.md`
- The next `/run-tasks` run will pull the updated `tasks.md` and continue from where it left off
- No work is lost or duplicated
