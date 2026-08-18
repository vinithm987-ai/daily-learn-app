* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg: #050816;
  --panel: rgba(12, 20, 42, 0.78);
  --panel2: rgba(17, 28, 55, 0.9);
  --text: #f5f7ff;
  --muted: #9ca9c7;
  --blue: #61d9ff;
  --purple: #9b7cff;
  --cyan: #35e0ff;
  --border: rgba(120, 190, 255, 0.18);
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at 15% 15%, rgba(42, 131, 255, 0.18), transparent 28%),
    radial-gradient(circle at 85% 20%, rgba(155, 124, 255, 0.15), transparent 30%),
    linear-gradient(135deg, #03050f, #071126 50%, #030510);
  overflow-x: hidden;
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

.background-glow {
  position: fixed;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.12;
  pointer-events: none;
  z-index: -1;
}

.glow-one {
  background: #00d9ff;
  top: 20%;
  left: -150px;
}

.glow-two {
  background: #8d5cff;
  right: -150px;
  bottom: 10%;
}

/* HEADER */

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  min-height: 75px;
  padding: 14px 5%;
  display: flex;
  align-items: center;
  gap: 30px;
  background: rgba(3, 7, 20, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}

.logo {
  font-size: 25px;
  font-weight: 800;
  white-space: nowrap;
}

.logo b {
  color: var(--cyan);
}

.nav {
  display: flex;
  gap: 7px;
  align-items: center;
  flex: 1;
  justify-content: center;
  flex-wrap: wrap;
}

.nav-btn {
  border: 1px solid transparent;
  color: var(--muted);
  background: transparent;
  padding: 10px 13px;
  border-radius: 12px;
  transition: 0.2s;
}

.nav-btn:hover,
.nav-btn.active {
  color: white;
  border-color: rgba(97, 217, 255, 0.35);
  background: rgba(97, 217, 255, 0.08);
}

.nav-btn small {
  color: var(--cyan);
}

.api-button {
  background: linear-gradient(135deg, #4c8dff, #7d5cff);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 11px 16px;
  font-weight: 700;
}

/* PAGE */

main {
  width: min(1200px, 92%);
  margin: auto;
}

.page {
  display: none;
  padding: 60px 0 100px;
  animation: fadeIn 0.3s ease;
}

.active-page {
  display: block;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* HERO */

.hero {
  min-height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.badge {
  display: inline-block;
  padding: 9px 17px;
  border-radius: 50px;
  border: 1px solid rgba(97, 217, 255, 0.35);
  background: rgba(97, 217, 255, 0.07);
  color: var(--cyan);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
}

.hero h1 {
  max-width: 900px;
  font-size: clamp(42px, 7vw, 82px);
  line-height: 1.05;
  margin: 30px 0 22px;
}

.hero h1 span {
  background: linear-gradient(90deg, var(--cyan), #9e86ff, #ff73c8);
  -webkit-background-clip: text;
  color: transparent;
}

.hero p {
  max-width: 760px;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.7;
}

/* SEARCH */

.home-search,
.search-box {
  width: min(850px, 100%);
  margin-top: 35px;
  display: flex;
  gap: 10px;
}

.home-search input {
  flex: 1;
}

input,
textarea,
select {
  width: 100%;
  border: 1px solid var(--border);
  outline: none;
  color: white;
  background: rgba(5, 10, 25, 0.9);
  border-radius: 14px;
  padding: 15px 17px;
}

textarea {
  resize: vertical;
}

input:focus,
textarea:focus,
select:focus {
  border-color: var(--cyan);
  box-shadow: 0 0 20px rgba(53, 224, 255, 0.08);
}

.primary-button,
.secondary-button {
  border-radius: 13px;
  padding: 13px 20px;
  border: 1px solid transparent;
  font-weight: 700;
  transition: 0.2s;
}

.primary-button {
  color: #02101b;
  background: linear-gradient(135deg, #6ce7ff, #8ea6ff);
}

.secondary-button {
  color: white;
  border-color: var(--border);
  background: rgba(255, 255, 255, 0.04);
}

.primary-button:hover,
.secondary-button:hover {
  transform: translateY(-2px);
  filter: brightness(1.08);
}

.quick-questions,
.suggestions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 9px;
  margin-top: 18px;
}

.quick-questions button,
.suggestions button {
  color: #c7d2ec;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid var(--border);
  border-radius: 30px;
  padding: 10px 14px;
}

.quick-questions button:hover,
.suggestions button:hover {
  border-color: var(--cyan);
  color: white;
}

/* STATS */

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  margin-bottom: 50px;
}

.stat-card {
  padding: 28px;
  text-align: center;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 20px;
}

.stat-card strong {
  display: block;
  font-size: 38px;
  color: var(--cyan);
}

.stat-card span {
  color: var(--muted);
}

/* SECTIONS */

.section-heading {
  text-align: center;
  margin-bottom: 35px;
}

.section-heading h2 {
  font-size: clamp(35px, 5vw, 55px);
  margin: 20px 0 12px;
}

.section-heading p {
  color: var(--muted);
  line-height: 1.6;
}

/* SEARCH */

.search-box {
  display: block;
  max-width: 950px;
  margin-left: auto;
  margin-right: auto;
}

.search-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 12px;
}

.answer-container {
  max-width: 950px;
  margin: 35px auto;
  padding: 30px;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 22px;
}

.answer-header {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  border-bottom: 1px solid var(--border);
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.answer-label {
  font-size: 12px;
  letter-spacing: 1.5px;
  color: var(--cyan);
}

.answer-header h3 {
  font-size: 27px;
  margin-top: 8px;
}

.icon-button {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid var(--border);
  color: white;
  background: rgba(255, 255, 255, 0.05);
}

.answer-section {
  margin: 22px 0;
}

.answer-section h4 {
  color: var(--cyan);
  margin-bottom: 8px;
}

.answer-section p,
.answer-section li {
  color: #d4dcef;
  line-height: 1.75;
}

.answer-section ul {
  padding-left: 20px;
}

.example {
  padding: 14px;
  margin: 8px 0;
  border-left: 3px solid var(--cyan);
  background: rgba(97, 217, 255, 0.05);
  border-radius: 5px;
}

.related {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 25px;
}

.related button {
  border: 1px solid var(--border);
  color: #c8d3eb;
  background: transparent;
  border-radius: 20px;
  padding: 8px 12px;
}

.recent-section {
  max-width: 950px;
  margin: 35px auto;
}

.section-small-title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  color: white;
  font-weight: 700;
}

#clearHistoryButton {
  background: none;
  border: none;
  color: var(--cyan);
}

.history-item {
  padding: 13px 15px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.025);
  border-radius: 10px;
  margin-bottom: 7px;
  color: #bdc9df;
  cursor: pointer;
}

/* VOCAB */

.vocab-controls {
  display: grid;
  grid-template-columns: 1fr 180px auto;
  gap: 12px;
  margin-bottom: 30px;
}

.vocabulary-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.vocab-card {
  padding: 22px;
  border: 1px solid var(--border);
  background: var(--panel);
  border-radius: 18px;
}

.vocab-card h3 {
  font-size: 25px;
  color: white;
}

.vocab-card .pronunciation {
  color: var(--cyan);
  margin: 5px 0;
}

.level {
  display: inline-block;
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 20px;
  background: rgba(155, 124, 255, 0.15);
  color: #c8baff;
}

.vocab-card p {
  color: var(--muted);
  line-height: 1.6;
  margin: 12px 0;
}

.vocab-card button {
  border: 1px solid var(--border);
  background: transparent;
  color: white;
  border-radius: 8px;
  padding: 7px 10px;
}

/* QUIZ */

.quiz-card,
.speaking-card {
  max-width: 850px;
  margin: auto;
  padding: 35px;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 24px;
}

.quiz-top {
  display: flex;
  justify-content: space-between;
  color: var(--muted);
}

.progress {
  height: 7px;
  background: rgba(255,255,255,0.08);
  border-radius: 20px;
  margin: 18px 0 30px;
  overflow: hidden;
}

#quizProgress {
  width: 5%;
  height: 100%;
  background: linear-gradient(90deg, var(--cyan), var(--purple));
  transition: 0.3s;
}

.quiz-card h3 {
  font-size: 27px;
  line-height: 1.4;
  margin-bottom: 25px;
}

.quiz-options {
  display: grid;
  gap: 12px;
}

.quiz-option {
  padding: 16px;
  border-radius: 13px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.03);
  color: white;
  text-align: left;
}

.quiz-option:hover {
  border-color: var(--cyan);
}

.quiz-option.correct {
  border-color: #39df9b;
  background: rgba(57, 223, 155, 0.12);
}

.quiz-option.wrong {
  border-color: #ff657c;
  background: rgba(255, 101, 124, 0.12);
}

.quiz-explanation {
  margin: 20px 0;
  padding: 17px;
  border-radius: 13px;
  color: #d8e0f2;
  background: rgba(97,217,255,0.06);
  line-height: 1.6;
}

/* SPEAKING */

.phrase-number {
  color: var(--cyan);
  margin-bottom: 25px;
}

.speaking-card h3 {
  font-size: 35px;
  line-height: 1.5;
  margin-bottom: 30px;
}

.speaking-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.speech-result {
  margin: 25px 0;
  padding: 18px;
  border-radius: 13px;
  background: rgba(255,255,255,0.04);
  color: var(--muted);
  line-height: 1.6;
}

.accuracy-box {
  text-align: center;
  padding: 20px;
  border: 1px solid var(--border);
  border-radius: 15px;
}

.accuracy-box span {
  display: block;
  color: var(--muted);
}

.accuracy-box strong {
  display: block;
  font-size: 42px;
  color: var(--cyan);
}

/* GRAMMAR */

.grammar-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.grammar-card {
  padding: 25px;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 18px;
}

.grammar-card h3 {
  margin-bottom: 12px;
  color: var(--cyan);
}

.grammar-card p {
  color: var(--muted);
  line-height: 1.7;
}

.grammar-example {
  margin-top: 15px;
  padding: 12px;
  border-left: 3px solid var(--purple);
  color: #dce3f4;
}

/* LOADING */

.loading {
  max-width: 950px;
  margin: 25px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: var(--cyan);
}

.spinner {
  width: 22px;
  height: 22px;
  border: 3px solid rgba(255,255,255,0.15);
  border-top-color: var(--cyan);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* MODAL */

.modal {
  position: fixed;
  inset: 0;
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: rgba(0,0,0,0.75);
  backdrop-filter: blur(8px);
}

.modal-content {
  position: relative;
  width: min(500px, 100%);
  padding: 30px;
  border: 1px solid var(--border);
  background: #0a1125;
  border-radius: 22px;
}

.modal-content h2 {
  margin-bottom: 12px;
}

.modal-content p {
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 18px;
}

.modal-close {
  position: absolute;
  right: 17px;
  top: 15px;
  border: none;
  background: transparent;
  color: white;
  font-size: 30px;
}

.modal-actions {
  display: flex;
  gap: 10px;
  margin-top: 12px;
}

.warning {
  font-size: 12px;
  color: #ffcc72 !important;
  margin-top: 20px;
}

.hidden {
  display: none !important;
}

/* TOAST */

.toast {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1000;
  max-width: 350px;
  padding: 14px 18px;
  background: #111b34;
  color: white;
  border: 1px solid var(--border);
  border-radius: 12px;
  transform: translateY(100px);
  opacity: 0;
  transition: 0.3s;
}

.toast.show {
  transform: translateY(0);
  opacity: 1;
}

/* MOBILE */

@media (max-width: 900px) {

  .header {
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav {
    order: 3;
    width: 100%;
  }

  .stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .vocabulary-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .grammar-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {

  .header {
    gap: 12px;
  }

  .nav-btn {
    padding: 8px 9px;
    font-size: 12px;
  }

  .api-button {
    font-size: 12px;
  }

  .hero {
    min-height: 550px;
  }

  .home-search {
    flex-direction: column;
  }

  .stats {
    grid-template-columns: 1fr;
  }

  .vocab-controls {
    grid-template-columns: 1fr;
  }

  .vocabulary-grid {
    grid-template-columns: 1fr;
  }

  .quiz-card,
  .speaking-card,
  .answer-container {
    padding: 20px;
  }

  .speaking-card h3 {
    font-size: 25px;
  }
}
