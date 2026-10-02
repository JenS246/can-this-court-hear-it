const ROUND_LENGTH = 10;
const BINARY_PER_CATEGORY = 4;
const CHALLENGE_PER_ROUND = 2;

const elements = {
  homeScreen: document.querySelector("#home-screen"),
  gameScreen: document.querySelector("#game-screen"),
  playScreen: document.querySelector("#play-screen"),
  endScreen: document.querySelector("#end-screen"),
  startButton: document.querySelector("#start-button"),
  card: document.querySelector("#case-card"),
  category: document.querySelector("#category"),
  cardNumber: document.querySelector("#card-number"),
  scenario: document.querySelector("#scenario"),
  question: document.querySelector("#question"),
  feedback: document.querySelector("#feedback"),
  feedbackTitle: document.querySelector("#feedback-title"),
  feedbackText: document.querySelector("#feedback-text"),
  binaryAnswers: document.querySelector("#binary-answers"),
  binaryButtons: [...document.querySelectorAll("#binary-answers [data-answer]")],
  challengeAnswers: document.querySelector("#challenge-answers"),
  nextButton: document.querySelector("#next-button"),
  playAgainButton: document.querySelector("#play-again-button"),
  progress: document.querySelector("#progress"),
  score: document.querySelector("#score"),
  progressMarks: document.querySelector("#progress-marks"),
  finalScore: document.querySelector("#final-score"),
  finalAnswered: document.querySelector("#final-answered")
};

let round = [];
let previousRoundIds = new Set();
let currentIndex = 0;
let score = 0;
let answered = false;

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function takeFresh(pool, count) {
  const fresh = shuffle(pool.filter((card) => !previousRoundIds.has(card.id)));
  const repeats = shuffle(pool.filter((card) => previousRoundIds.has(card.id)));
  return [...fresh, ...repeats].slice(0, count);
}

function buildRound() {
  const subjectMatter = JURISDICTION_CARDS.filter(
    (card) => card.type === "binary" && card.category === "SUBJECT-MATTER JURISDICTION"
  );
  const personal = JURISDICTION_CARDS.filter(
    (card) => card.type === "binary" && card.category === "PERSONAL JURISDICTION"
  );
  const challenges = JURISDICTION_CARDS.filter((card) => card.type === "challenge");

  return shuffle([
    ...takeFresh(subjectMatter, BINARY_PER_CATEGORY),
    ...takeFresh(personal, BINARY_PER_CATEGORY),
    ...takeFresh(challenges, CHALLENGE_PER_ROUND)
  ]);
}

function buildProgressMarks() {
  elements.progressMarks.replaceChildren();
  for (let index = 0; index < ROUND_LENGTH; index += 1) {
    const mark = document.createElement("span");
    mark.className = "progress-mark";
    elements.progressMarks.append(mark);
  }
}

function updateProgress() {
  elements.progress.textContent = `${currentIndex + 1} / ${ROUND_LENGTH}`;
  elements.score.textContent = `${score} right`;
  [...elements.progressMarks.children].forEach((mark, index) => {
    mark.classList.toggle("is-complete", index < currentIndex);
    mark.classList.toggle("is-current", index === currentIndex);
  });
}

function buildChallengeChoices(card) {
  elements.challengeAnswers.replaceChildren();
  card.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "challenge-button";
    button.dataset.answer = choice;
    button.innerHTML = `<kbd aria-hidden="true">${index + 1}</kbd><span></span>`;
    button.querySelector("span").textContent = choice;
    button.addEventListener("click", () => chooseAnswer(choice));
    elements.challengeAnswers.append(button);
  });
}

function renderCard() {
  const card = round[currentIndex];
  answered = false;
  elements.category.textContent = card.category;
  elements.cardNumber.textContent = `FILE ${String(currentIndex + 1).padStart(2, "0")}`;
  elements.scenario.textContent = card.scenario;
  elements.question.textContent = card.question;
  elements.feedback.hidden = true;
  elements.feedback.classList.remove("is-wrong");
  elements.nextButton.hidden = true;
  elements.card.classList.remove("is-correct", "is-wrong", "is-entering");

  const isChallenge = card.type === "challenge";
  elements.binaryAnswers.hidden = isChallenge;
  elements.challengeAnswers.hidden = !isChallenge;
  if (isChallenge) buildChallengeChoices(card);

  void elements.card.offsetWidth;
  elements.card.classList.add("is-entering");
  updateProgress();
  elements.card.focus({ preventScroll: true });
}

function chooseAnswer(choice) {
  if (answered) return;
  answered = true;
  const card = round[currentIndex];
  const correct = choice === card.answer;
  if (correct) score += 1;

  const expected = card.type === "challenge" ? card.answer : card.answer === "yes" ? "YES" : "NO";
  elements.feedbackTitle.textContent = correct ? "CORRECT" : `NOT QUITE. ANSWER: ${expected}`;
  elements.feedbackText.textContent = card.explanation;
  elements.feedback.classList.toggle("is-wrong", !correct);
  elements.feedback.hidden = false;
  elements.card.classList.remove("is-entering");
  elements.card.classList.add(correct ? "is-correct" : "is-wrong");
  elements.binaryAnswers.hidden = true;
  elements.challengeAnswers.hidden = true;
  elements.nextButton.hidden = false;
  elements.score.textContent = `${score} right`;
  elements.nextButton.focus({ preventScroll: true });
}

function nextCard() {
  if (!answered) return;
  currentIndex += 1;
  if (currentIndex >= ROUND_LENGTH) {
    showEndScreen();
    return;
  }
  renderCard();
}

function showEndScreen() {
  elements.playScreen.hidden = true;
  elements.endScreen.hidden = false;
  elements.progress.textContent = `${ROUND_LENGTH} / ${ROUND_LENGTH}`;
  [...elements.progressMarks.children].forEach((mark) => {
    mark.classList.add("is-complete");
    mark.classList.remove("is-current");
  });
  elements.finalScore.textContent = score;
  elements.finalAnswered.textContent = `${ROUND_LENGTH} answered`;
  elements.playAgainButton.focus({ preventScroll: true });
}

function startGame() {
  round = buildRound();
  previousRoundIds = new Set(round.map((card) => card.id));
  currentIndex = 0;
  score = 0;
  answered = false;
  elements.homeScreen.hidden = true;
  elements.gameScreen.hidden = false;
  elements.endScreen.hidden = true;
  elements.playScreen.hidden = false;
  buildProgressMarks();
  renderCard();
}

elements.startButton.addEventListener("click", startGame);
elements.playAgainButton.addEventListener("click", startGame);
elements.nextButton.addEventListener("click", nextCard);
elements.binaryButtons.forEach((button) => {
  button.addEventListener("click", () => chooseAnswer(button.dataset.answer));
});

document.addEventListener("keydown", (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.repeat || elements.gameScreen.hidden) return;
  const card = round[currentIndex];
  const key = event.key.toLowerCase();
  if (!answered && card?.type === "binary" && key === "y") chooseAnswer("yes");
  if (!answered && card?.type === "binary" && key === "n") chooseAnswer("no");
  if (!answered && card?.type === "challenge" && /^[1-4]$/.test(key)) {
    chooseAnswer(card.choices[Number(key) - 1]);
  }
  if (answered && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    nextCard();
  }
});
