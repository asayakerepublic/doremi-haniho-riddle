import { Message } from "./message.js";

const app = document.getElementById("app");

// 問題とヒントのデータ
const steps = [
  {
    name: "STEP1",
    className: "step1",
    problems: [
      {
        name: "問題1",
        hints: [Message.ILLUST_INSIDE, "ヒント②の内容"]
      },
      {
        name: "問題2",
        hints: ["ヒント①の内容", "ヒント②の内容"]
      }
    ]
  },
  {
    name: "STEP2",
    className: "step2",
    problems: [
      {
        name: "問題1",
        hints: ["ヒント①の内容", "ヒント②の内容"]
      },
      {
        name: "問題2",
        hints: ["ヒント①の内容"]
      }
    ]
  },
  {
    name: "STEP LAST",
    className: "step-last",
    problems: [
      {
        name: "問題1",
        hints: ["ヒント①の内容"]
      }
    ]
  }
];

// 開いている項目を管理
let openedSteps = [];
let openedProblems = [];
let openedHints = [];

// 画面を表示する
function showSteps() {
  app.innerHTML = steps.map((step, stepIndex) => `
    <div class="step-item">

      <button
        class="step-button ${step.className}"
        data-step="${stepIndex}">
        ${step.name}
        <span>${openedSteps.includes(stepIndex) ? "⌄" : "›"}</span>
      </button>

      <div class="step-content ${openedSteps.includes(stepIndex) ? "open" : ""
    }">

        ${step.problems.map((problem, problemIndex) => {
      const problemKey = `${stepIndex}-${problemIndex}`;

      return `
            <div class="problem-item">

              <button
                class="item-button"
                data-problem-step="${stepIndex}"
                data-problem="${problemIndex}">
                ${problem.name}
                <span>${openedProblems.includes(problemKey) ? "⌄" : "›"
        }</span>
              </button>

              <div class="problem-content ${openedProblems.includes(problemKey) ? "open" : ""
        }">

                ${problem.hints.map((hint, hintIndex) => {
          const hintKey = `${stepIndex}-${problemIndex}-${hintIndex}`;

          return `
                    <div class="hint-item">

                      <button
                        class="hint-button"
                        data-hint="${hintKey}">
                        ヒント${["①", "②", "③", "④", "⑤"][hintIndex] || hintIndex + 1}
                        <span>${openedHints.includes(hintKey) ? "⌄" : "›"
            }</span>
                      </button>

                      <div class="hint-content ${openedHints.includes(hintKey) ? "open" : ""
            }">
                        ${hint}
                      </div>

                    </div>
                  `;
        }).join("")}

              </div>
            </div>
          `;
    }).join("")}

      </div>
    </div>
  `).join("");

  // STEPの開閉
  app.querySelectorAll(".step-button").forEach(button => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.step);

      if (openedSteps.includes(index)) {
        openedSteps = openedSteps.filter(i => i !== index);
      } else {
        openedSteps.push(index);
      }

      showSteps();
    });
  });

  // 問題の開閉
  app.querySelectorAll(".item-button").forEach(button => {
    button.addEventListener("click", () => {
      const key = `${button.dataset.problemStep}-${button.dataset.problem}`;

      if (openedProblems.includes(key)) {
        openedProblems = openedProblems.filter(item => item !== key);
      } else {
        openedProblems.push(key);
      }

      showSteps();
    });
  });

  // ヒントの開閉
  app.querySelectorAll(".hint-button").forEach(button => {
    button.addEventListener("click", () => {
      const key = button.dataset.hint;

      if (openedHints.includes(key)) {
        openedHints = openedHints.filter(item => item !== key);
      } else {
        openedHints.push(key);
      }

      showSteps();
    });
  });
}

// 最初の画面を表示
showSteps();
