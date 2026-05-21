# Lionz Roofing — Claude Code Skills Guide

This document covers all available Claude Code skills for this project and how to run automated 24/7 development using a task queue.

---

## Available Skills

### `/build-page`
Builds a new website page from a screenshot automatically.

**Usage:**
```
/build-page <Page Name>
[attach screenshot]
```

**Example:**
```
/build-page Testimonials
[attach testimonials-screenshot.jpg]
```

**What it does:**
- Analyzes the screenshot
- Creates the page route at `src/app/<page-slug>/page.tsx`
- Creates the image folder at `public/images/<page-slug>/`
- Reuses existing components (Header, Footer, CTASection, etc.)
- Updates navigation data
- Follows all brand, SEO, and accessibility rules

---

### `/push-to-github`
Stages, commits, and pushes local changes to GitHub.

**Usage:**
```
/push-to-github
```
or with a custom commit message:
```
/push-to-github add Testimonials and Gallery pages
```

**What it does:**
- Checks for sensitive files and skips them
- Auto-generates a commit message if none provided
- Stages all changes
- Commits and pushes to origin

---

### `/run-tasks`
Processes a queue of pages to build from a `tasks.md` file in the repo.

**Usage:**
```
/run-tasks
```

**What it does:**
- Pulls latest from GitHub
- Reads `tasks/tasks.md`
- Builds each page one by one using `/build-page`
- Deletes each screenshot after its page is built
- Removes completed tasks from `tasks.md` as it goes (resume-safe)
- Deletes `tasks.md` when all tasks are done
- Pushes everything to GitHub via `/push-to-github`

**Resume behavior:** If the session is interrupted (token limit, disconnect, etc.), just run `/run-tasks` again — it picks up from the remaining tasks. No work is duplicated.

---

## Task Queue Format

To queue pages for automated building, create `tasks/tasks.md` and push it to GitHub along with screenshots in `tasks/screenshots/`.

### Folder structure
```
tasks/
  tasks.md
  screenshots/
    screenshot-testimonials.jpg
    screenshot-gallery.jpg
    screenshot-about.jpg
```

### tasks.md format
```
Task 1:
Page Name: Testimonials
Screenshot: screenshot-testimonials.jpg

Task 2:
Page Name: Gallery
Screenshot: screenshot-gallery.jpg

Task 3:
Page Name: About
Screenshot: screenshot-about.jpg
```

---

## Running 24/7 Automated Dev

You can schedule Claude Code to automatically check for and process tasks without you being online.

### Option 1 — Schedule a recurring agent (Recommended)

Use the `/schedule` skill to create a remote agent that checks for `tasks/tasks.md` on a cron schedule and runs `/run-tasks` automatically.

**Setup (run once):**
```
/schedule
```

Then tell it:
> "Check every 30 minutes — if `tasks/tasks.md` exists in the repo, run `/run-tasks`"

This creates a persistent scheduled routine. Claude Code will:
- Wake up every 30 minutes (or your chosen interval)
- Pull the repo
- If `tasks/tasks.md` exists → process all tasks and push
- If not → go back to sleep until next check

### Option 2 — Manual trigger anytime

Whenever you push a `tasks.md` to the repo, open Claude Code and run:
```
/run-tasks
```

This is the simplest approach if you don't need fully automated processing.

### Option 3 — Loop while active

If you want Claude to keep checking while your session is open:
```
/loop 30m /run-tasks
```

This runs `/run-tasks` every 30 minutes during your active session.

---

## Typical Workflow

1. Design your pages (in Figma, screenshots, or grab from a reference site)
2. Save screenshots to `tasks/screenshots/`
3. Write `tasks/tasks.md` with the task list
4. Push `tasks/` folder to GitHub
5. Claude Code picks it up (automatically via schedule, or manually via `/run-tasks`)
6. Pages are built, screenshots deleted, `tasks.md` removed, and everything pushed back to GitHub
7. Pull the latest on your machine — new pages are ready

---

## Notes

- Never commit `.env` or `.env.local` — the push skill skips these automatically
- Screenshots are deleted from the repo after each page is built
- All built pages follow the brand colors, typography, and SEO rules defined in `CLAUDE.md`
- If a build fails mid-queue, the remaining tasks stay in `tasks.md` so nothing is lost
