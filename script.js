/* =====================================================
   LUMINA AI v2
   Daily Learning App
===================================================== */


/* =====================================================
   APP DATA
===================================================== */

const vocabulary = [

  ["Resilient","/rɪˈzɪliənt/","Able to recover quickly from difficulties.","She remained resilient after facing many challenges."],
  ["Abundant","/əˈbʌndənt/","Existing in large quantities.","The country has abundant natural resources."],
  ["Adapt","/əˈdæpt/","To change according to a new situation.","Successful people adapt to change."],
  ["Ambitious","/æmˈbɪʃəs/","Having a strong desire to achieve something.","She is ambitious about her career."],
  ["Efficient","/ɪˈfɪʃənt/","Working well without wasting time or resources.","The new system is very efficient."],
  ["Innovative","/ˈɪnəveɪtɪv/","Introducing new ideas or methods.","The company developed an innovative product."],
  ["Persistent","/pəˈsɪstənt/","Continuing despite difficulties.","His persistent effort brought success."],
  ["Reliable","/rɪˈlaɪəbəl/","Able to be trusted.","She is a reliable employee."],
  ["Strategic","/strəˈtiːdʒɪk/","Carefully planned to achieve a goal.","The company made a strategic decision."],
  ["Versatile","/ˈvɜːrsətaɪl/","Able to adapt to many different uses.","He is a versatile professional."],
  ["Confident","/ˈkɒnfɪdənt/","Having belief in yourself.","She gave a confident presentation."],
  ["Dedicated","/ˈdedɪkeɪtɪd/","Giving time and effort to something.","He is dedicated to his studies."],
  ["Curious","/ˈkjʊəriəs/","Wanting to know or learn something.","Curious students ask questions."],
  ["Practical","/ˈpræktɪkəl/","Useful and suitable for real situations.","This is a practical solution."],
  ["Analytical","/ˌænəˈlɪtɪkəl/","Using logical examination of information.","Finance requires analytical thinking."],
  ["Flexible","/ˈfleksəbəl/","Able to change easily.","A flexible employee can handle change."],
  ["Effective","/ɪˈfektɪv/","Successful in producing the desired result.","Communication is an effective skill."],
  ["Opportunity","/ˌɒpəˈtjuːnəti/","A favorable chance.","Education creates opportunities."],
  ["Perspective","/pəˈspektɪv/","A particular way of viewing something.","Try to understand the problem from another perspective."],
  ["Significant","/sɪɡˈnɪfɪkənt/","Important or meaningful.","The company achieved significant growth."],
  ["Sustainable","/səˈsteɪnəbəl/","Able to continue for a long time.","Businesses need sustainable strategies."],
  ["Transparent","/trænsˈpærənt/","Open and easy to understand.","The company has a transparent policy."],
  ["Integrity","/ɪnˈteɡrəti/","Honesty and strong moral principles.","A good leader should have integrity."],
  ["Motivate","/ˈməʊtɪveɪt/","To encourage someone to act.","Good leaders motivate their teams."],
  ["Evaluate","/ɪˈvæljueɪt/","To judge the value or quality of something.","Managers evaluate business performance."]
];


/* =====================================================
   QUIZ DATA
===================================================== */

const quizzes = [

  {
    q: 'What does "Resilient" mean?',
    options: [
      "Able to recover quickly",
      "Very expensive",
      "Very angry",
      "Extremely tired"
    ],
    answer: 0
  },

  {
    q: 'What does "Efficient" mean?',
    options: [
      "Working well without wasting resources",
      "Working very slowly",
      "Being unsuccessful",
      "Being expensive"
    ],
    answer: 0
  },

  {
    q: 'What is Finance mainly concerned with?',
    options: [
      "Money and investments",
      "Weather",
      "Cooking",
      "Sports"
    ],
    answer: 0
  },

  {
    q: 'What does AI stand for?',
    options: [
      "Artificial Intelligence",
      "Automatic Internet",
      "Advanced Information",
      "Applied Innovation"
    ],
    answer: 0
  },

  {
    q: 'What does MBA stand for?',
    options: [
      "Master of Business Administration",
      "Master of Banking Analysis",
      "Management Business Academy",
      "Modern Business Application"
    ],
    answer: 0
  },

  {
    q: 'What is a budget?',
    options: [
      "A plan for income and expenses",
      "A type of loan",
      "A stock exchange",
      "A business employee"
    ],
    answer: 0
  },

  {
    q: 'What is an investment?',
    options: [
      "Putting money into something expecting future benefit",
      "Spending all your money",
      "Avoiding savings",
      "Paying a bill"
    ],
    answer: 0
  },

  {
    q: 'What does "Innovative" mean?',
    options: [
      "Introducing new ideas",
      "Avoiding change",
      "Copying everything",
      "Being inactive"
    ],
    answer: 0
  },

  {
    q: 'What is communication?',
    options: [
      "Exchange of information and ideas",
      "Only writing",
      "Only speaking",
      "Only listening"
    ],
    answer: 0
  },

  {
    q: 'What is a goal?',
    options: [
      "Something you aim to achieve",
      "A random activity",
      "A financial loss",
      "A type of exam"
    ],
    answer: 0
  }

];


/* =====================================================
   APP STATE
===================================================== */

let state = JSON.parse(
  localStorage.getItem("luminaState")
) || {

  xp: 0,
  streak: 1,
  words: 0,
  quizScore: 0,
  correct: 0,
  totalQuestions: 0,
  bookmarkedWords: [],
  completedGoals: [],
  currentWord: 0,
  currentQuiz: 0

};


function saveState() {

  localStorage.setItem(
    "luminaState",
    JSON.stringify(state)
  );

}


/* =====================================================
   PAGE NAVIGATION
===================================================== */

const pages =
  document.querySelectorAll(".page");

const navButtons =
  document.querySelectorAll(
    "[data-page]"
  );

const pageTitle =
  document.getElementById("pageTitle");


function showPage(pageName) {

  pages.forEach(page => {

    page.classList.remove(
      "active-page"
    );

  });


  const page =
    document.getElementById(pageName);

  if (page) {

    page.classList.add(
      "active-page"
    );

  }


  navButtons.forEach(button => {

    button.classList.toggle(
      "active",
      button.dataset.page === pageName
    );

  });


  const titles = {

    home: "Good morning, Vinith 👋",
    learn: "Learning Hub 📚",
    ai: "Lumina AI ✦",
    quiz: "Smart Quiz 🧠",
    progress: "Your Progress 📊",
    profile: "Your Profile ♙"

  };


  pageTitle.textContent =
    titles[pageName] || "Lumina AI";


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


navButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      showPage(
        button.dataset.page
      );

    }
  );

});


/* =====================================================
   MOBILE SIDEBAR
===================================================== */

const mobileMenu =
  document.getElementById(
    "mobileMenu"
  );

const sidebar =
  document.querySelector(
    ".sidebar"
  );


mobileMenu.addEventListener(
  "click",
  () => {

    sidebar.classList.toggle(
      "open"
    );

  }
);


/* =====================================================
   THEME
===================================================== */

const themeBtn =
  document.getElementById(
    "themeBtn"
  );


let lightMode =
  localStorage.getItem(
    "luminaTheme"
  ) === "light";


if (lightMode) {

  document.body.classList.add(
    "light"
  );

  themeBtn.textContent =
    "☀ Light Mode";

}


themeBtn.addEventListener(
  "click",
  () => {

    document.body.classList.toggle(
      "light"
    );

    lightMode =
      document.body.classList.contains(
        "light"
      );

    localStorage.setItem(
      "luminaTheme",
      lightMode ? "light" : "dark"
    );

    themeBtn.textContent =
      lightMode
        ? "☀ Light Mode"
        : "☾ Dark Mode";

  }
);


/* =====================================================
   TOAST
===================================================== */

const toast =
  document.getElementById(
    "toast"
  );


function showToast(message) {

  toast.textContent =
    message;

  toast.classList.add(
    "show"
  );


  setTimeout(
    () => {

      toast.classList.remove(
        "show"
      );

    },
    2500
  );

}


/* =====================================================
   UPDATE DASHBOARD
===================================================== */

function updateDashboard() {

  document.getElementById(
    "streakValue"
  ).textContent =
    state.streak;


  document.getElementById(
    "xpValue"
  ).textContent =
    state.xp;


  const accuracy =
    state.totalQuestions > 0
      ? Math.round(
          state.correct /
          state.totalQuestions *
          100
        )
      : 0;


  document.getElementById(
    "accuracyValue"
  ).textContent =
    accuracy;


  document.getElementById(
    "wordsValue"
  ).textContent =
    state.words;


  document.getElementById(
    "profileXP"
  ).textContent =
    state.xp;


  document.getElementById(
    "profileWords"
  ).textContent =
    state.words;


  document.getElementById(
    "profileCorrect"
  ).textContent =
    state.correct;


  document.getElementById(
    "profileStreak"
  ).textContent =
    state.streak + " days";


  updateLevel();

  updateGoal();

}


/* =====================================================
   XP / LEVEL
===================================================== */

function updateLevel() {

  const level =
    Math.floor(
      state.xp / 100
    ) + 1;


  const currentXP =
    state.xp % 100;


  document.getElementById(
    "levelNumber"
  ).textContent =
    level;


  document.getElementById(
    "levelBar"
  ).style.width =
    currentXP + "%";


  document.getElementById(
    "levelText"
  ).textContent =
    `${currentXP} / 100 XP`;

}


/* =====================================================
   DAILY GOAL
===================================================== */

const goalChecks =
  document.querySelectorAll(
    ".goal-check"
  );


goalChecks.forEach(
  (check, index) => {

    check.checked =
      state.completedGoals.includes(
        index
      );


    check.addEventListener(
      "change",
      () => {

        if (check.checked) {

          if (
            !state.completedGoals.includes(
              index
            )
          ) {

            state.completedGoals.push(
              index
            );

            state.xp +=
              Number(
                check.dataset.xp
              );

            showToast(
              "🎉 Goal completed! XP earned."
            );

          }

        } else {

          state.completedGoals =
            state.completedGoals.filter(
              item => item !== index
            );

        }


        saveState();

        updateDashboard();

      }
    );

  }
);


function updateGoal() {

  const total =
    goalChecks.length;

  const completed =
    state.completedGoals.length;

  const percent =
    total
      ? Math.round(
          completed / total * 100
        )
      : 0;


  document.getElementById(
    "goalPercent"
  ).textContent =
    percent + "%";


  document.getElementById(
    "goalRingText"
  ).textContent =
    percent + "%";


  const degrees =
    percent * 3.6;


  document.getElementById(
    "goalRing"
  ).style.background =
    `radial-gradient(circle,
      var(--surface) 58%,
      transparent 60%),
     conic-gradient(
      var(--purple) ${degrees}deg,
      rgba(255,255,255,.07)
      ${degrees}deg
     )`;

}


/* =====================================================
   VOCABULARY
===================================================== */

function loadWord() {

  const word =
    vocabulary[state.currentWord];


  document.getElementById(
    "word"
  ).textContent =
    word[0];


  document.getElementById(
    "pronunciation"
  ).textContent =
    word[1];


  document.getElementById(
    "meaning"
  ).textContent =
    word[2];


  document.getElementById(
    "example"
  ).textContent =
    word[3];


  const letter =
    word[0].charAt(0);


  document.querySelector(
    ".word-letter"
  ).textContent =
    letter;


  const bookmarked =
    state.bookmarkedWords.includes(
      state.currentWord
    );


  document.getElementById(
    "bookmarkWord"
  ).textContent =
    bookmarked ? "★" : "☆";

}


document
  .getElementById(
    "newWordBtn"
  )
  .addEventListener(
    "click",
    () => {

      state.currentWord++;

      if (
        state.currentWord >=
        vocabulary.length
      ) {

        state.currentWord = 0;

      }


      state.words++;

      state.xp += 5;

      saveState();

      loadWord();

      updateDashboard();

      showToast(
        "📚 New vocabulary learned! +5 XP"
      );

    }
  );


document
  .getElementById(
    "bookmarkWord"
  )
  .addEventListener(
    "click",
    () => {

      const index =
        state.currentWord;


      if (
        state.bookmarkedWords.includes(
          index
        )
      ) {

        state.bookmarkedWords =
          state.bookmarkedWords.filter(
            item => item !== index
          );

        showToast(
          "Bookmark removed."
        );

      } else {

        state.bookmarkedWords.push(
          index
        );

        showToast(
          "⭐ Word bookmarked!"
        );

      }


      saveState();

      loadWord();

    }
  );


/* =====================================================
   TEXT TO SPEECH
===================================================== */

document
  .getElementById(
    "speakWordBtn"
  )
  .addEventListener(
    "click",
    () => {

      const word =
        vocabulary[state.currentWord][0];

      const speech =
        new SpeechSynthesisUtterance(
          word
        );

      speech.lang =
        "en-US";

      speech.rate =
        .75;

      speechSynthesis.speak(
        speech
      );

    }
  );


/* =====================================================
   AI
===================================================== */

const aiInput =
  document.getElementById(
    "aiInput"
  );

const sendAI =
  document.getElementById(
    "sendAI"
  );

const chatMessages =
  document.getElementById(
    "chatMessages"
  );


function addMessage(
  text,
  type
) {

  const message =
    document.createElement(
      "div"
    );


  message.className =
    "message " +
    (
      type === "user"
        ? "user-message"
        : "ai-message"
    );


  message.innerHTML = `

    <div class="message-avatar">
      ${type === "user" ? "V" : "✦"}
    </div>

    <div class="message-content">

      <strong>
        ${type === "user"
          ? "You"
          : "Lumina AI"}
      </strong>

      <p>${text}</p>

    </div>

  `;


  chatMessages.appendChild(
    message
  );


  chatMessages.scrollTop =
    chatMessages.scrollHeight;

}


function getAIAnswer(question) {

  const q =
    question.toLowerCase();


  if (
    q.includes("finance")
  ) {

    return `
      <strong>Finance</strong> is the management
      of money, investments and financial resources.

      <br><br>

      <strong>Example:</strong>
      A company uses finance to decide how to
      raise money, invest money and manage costs.
    `;

  }


  if (
    q.includes("ai") ||
    q.includes(
      "artificial intelligence"
    )
  ) {

    return `
      <strong>Artificial Intelligence (AI)</strong>
      is technology that enables computers to
      perform tasks that normally require human
      intelligence.

      <br><br>

      Examples include ChatGPT,
      recommendation systems and voice assistants.
    `;

  }


  if (
    q.includes("english") ||
    q.includes("speaking")
  ) {

    return `
      To improve English speaking:

      <br><br>

      1. Speak for 10 minutes every day.
      <br>
      2. Learn five new words.
      <br>
      3. Read aloud.
      <br>
      4. Practice conversations.
      <br>
      5. Do not fear mistakes.
    `;

  }


  if (
    q.includes("mba")
  ) {

    return `
      <strong>MBA</strong> means
      Master of Business Administration.

      <br><br>

      Important MBA areas include Finance,
      Marketing, HR, Operations and Strategy.
    `;

  }


  if (
    q.includes("vocabulary") ||
    q.includes("word")
  ) {

    const word =
      vocabulary[
        Math.floor(
          Math.random() *
          vocabulary.length
        )
      ];

    return `
      <strong>${word[0]}</strong>
      ${word[1]}

      <br><br>

      ${word[2]}

      <br><br>

      <strong>Example:</strong>
      ${word[3]}
    `;

  }


  return `
    I understand your question:

    <br><br>

    <strong>${question}</strong>

    <br><br>

    I'm currently running in
    <strong>offline learning mode</strong>.
    Try asking me about English, Finance,
    MBA, AI, vocabulary or communication.

    <br><br>

    You can later connect a secure AI API
    to make Lumina answer general questions.
  `;

}


function askAI(question) {

  if (!question.trim())
    return;


  addMessage(
    question,
    "user"
  );


  aiInput.value = "";


  setTimeout(
    () => {

      addMessage(
        getAIAnswer(question),
        "ai"
      );

      state.xp += 2;

      saveState();

      updateDashboard();

    },
    400
  );

}


sendAI.addEventListener(
  "click",
  () => {

    askAI(
      aiInput.value
    );

  }
);


aiInput.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Enter"
    ) {

      askAI(
        aiInput.value
      );

    }

  }
);


/* =====================================================
   VOICE SEARCH
===================================================== */

const voiceBtn =
  document.getElementById(
    "voiceBtn"
  );


voiceBtn.addEventListener(
  "click",
  () => {

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

      showToast(
        "Voice search is not supported in this browser."
      );

      return;

    }


    const recognition =
      new SpeechRecognition();


    recognition.lang =
      "en-US";


    recognition.start();


    showToast(
      "🎤 Listening..."
    );


    recognition.onresult =
      event => {

        const text =
          event.results[0][0].transcript;


        aiInput.value =
          text;


        askAI(text);

      };

  }
);


/* =====================================================
   QUICK AI BUTTONS
===================================================== */

window.askAI =
  askAI;


/* =====================================================
   QUIZ
===================================================== */

let quizAnswered =
  false;


function loadQuiz() {

  const quiz =
    quizzes[state.currentQuiz];


  quizAnswered =
    false;


  document.getElementById(
    "quizCounter"
  ).textContent =
    `Question ${state.currentQuiz + 1} / ${quizzes.length}`;


  document.getElementById(
    "quizProgress"
  ).style.width =
    (
      (state.currentQuiz + 1) /
      quizzes.length *
      100
    ) + "%";


  document.getElementById(
    "quizQuestion"
  ).textContent =
    quiz.q;


  const options =
    document.getElementById(
      "quizOptions"
    );


  options.innerHTML = "";


  quiz.options.forEach(
    (option,index) => {

      const button =
        document.createElement(
          "button"
        );


      button.className =
        "quiz-option";


      button.textContent =
        option;


      button.addEventListener(
        "click",
        () => {

          answerQuiz(
            index,
            button
          );

        }
      );


      options.appendChild(
        button
      );

    }
  );


  document.getElementById(
    "quizFeedback"
  ).textContent =
    "";


  updateQuizStats();

}


function answerQuiz(
  index,
  button
) {

  if (quizAnswered)
    return;


  quizAnswered =
    true;


  const quiz =
    quizzes[state.currentQuiz];


  state.totalQuestions++;


  if (
    index === quiz.answer
  ) {

    button.classList.add(
      "correct"
    );

    state.correct++;

    state.quizScore += 10;

    state.xp += 10;


    document.getElementById(
      "quizFeedback"
    ).textContent =
      "🎉 Correct! You earned 10 XP.";

  } else {

    button.classList.add(
      "wrong"
    );


    document.getElementById(
      "quizFeedback"
    ).textContent =
      `❌ Correct answer: ${quiz.options[quiz.answer]}`;

  }


  saveState();

  updateDashboard();

  updateQuizStats();

}


document
  .getElementById(
    "nextQuiz"
  )
  .addEventListener(
    "click",
    () => {

      state.currentQuiz++;


      if (
        state.currentQuiz >=
        quizzes.length
      ) {

        state.currentQuiz = 0;

        showToast(
          "🏆 Quiz completed! Great work."
        );

      }


      loadQuiz();

      saveState();

    }
  );


function updateQuizStats() {

  const accuracy =
    state.totalQuestions
      ? Math.round(
          state.correct /
          state.totalQuestions *
          100
        )
      : 0;


  document.getElementById(
    "quizScore"
  ).textContent =
    state.quizScore;


  document.getElementById(
    "correctCount"
  ).textContent =
    state.correct;


  document.getElementById(
    "quizAccuracy"
  ).textContent =
    accuracy + "%";

}


/* =====================================================
   LEARNING CATEGORY
===================================================== */

document
  .querySelectorAll(
    ".category-card"
  )
  .forEach(
    card => {

      card.addEventListener(
        "click",
        () => {

          const topic =
            card.dataset.topic;


          showPage("ai");


          setTimeout(
            () => {

              askAI(
                `Teach me ${topic} in simple words`
              );

            },
            200
          );

        }
      );

    }
  );


/* =====================================================
   NOTIFICATION
===================================================== */

document
  .getElementById(
    "notificationBtn"
  )
  .addEventListener(
    "click",
    () => {

      showToast(
        "🔔 Your daily learning goal is waiting!"
      );

    }
  );


/* =====================================================
   START
===================================================== */

loadWord();

loadQuiz();

updateDashboard();
