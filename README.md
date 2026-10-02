# CAN THIS COURT HEAR IT?

CAN THIS COURT HEAR IT? is a small browser-based card game for paralegal students learning civil-litigation jurisdiction. Each round draws 10 randomized case files: four subject-matter jurisdiction cards, four personal jurisdiction cards, and two short challenge cards.

- Live game: <https://jens246.github.io/can-this-court-hear-it/>
- Source: <https://github.com/JenS246/can-this-court-hear-it>
- Backend: none

## How it works

Read one short case at a time, then decide whether the stated court can hear it. Correct and incorrect answers receive an immediate one- to three-sentence explanation. Challenge cards ask for one missing fact. A round tracks only the number correct and answered.

The deck contains 20 subject-matter jurisdiction cards, 20 personal jurisdiction cards, and 4 challenge cards. Round selection favors cards that did not appear in the immediately previous round.

## Run locally

The game has no build step, external assets, or dependencies. Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## Edit the deck

Cards live in `cards.js`. Binary cards use `yes` or `no` as the answer. Challenge cards include four choices and use the exact correct choice as the answer.

The content intentionally uses citizenship and domicile where diversity is at issue, states the amount threshold as exceeding $75,000, and avoids close personal-jurisdiction disputes that do not fit a quick classroom game.

## Deployment

The static site is published with GitHub Pages through `.github/workflows/pages.yml`. Pushes to `main` trigger deployment.

- Frontend URL: <https://jens246.github.io/can-this-court-hear-it/>
- API URL: none
- Service name and port: none; this is a static site
- Data location: the case deck is stored in `cards.js`
- Backup and restore: clone the GitHub repository; the game stores no runtime or user data

In the repository settings, Pages must use **GitHub Actions** as its source.

## Accessibility

- Large projector-friendly scenario text and controls
- Visible keyboard focus styles
- Keyboard shortcuts: `Y` and `N`, number keys `1` through `4`, and `Enter` for the next card
- Polite screen-reader announcements for answer feedback
- System light and dark color schemes
- Reduced-motion support
- Responsive layouts for phones, laptops, and classroom projectors

## Educational scope

This is a recognition and reasoning activity, not legal advice or a substitute for course materials. The cards teach introductory distinctions and deliberately avoid obscure exceptions.
