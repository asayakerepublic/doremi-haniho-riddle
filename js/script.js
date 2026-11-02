
import { STEP1 } from "./steps/step1.js";
import { STEP2 } from "./steps/step2.js";
import { STEP_LAST } from "./steps/stepLast.js";

const app = document.getElementById("app");

// STEPの一覧
const steps = [
  STEP1,
  STEP2,
  STEP_LAST
];

// ========================================
// 開いている項目を管理
// ========================================

const openedItems = new Set();


// ========================================
// 項目を表示する
// ========================================


function renderItem(item, path, depth = 0) {

  const hasChildren = item.children && item.children.length > 0;
  const hasContent = item.content !== undefined;
  const isOpen = openedItems.has(path);

  return `
    <div class="tree-item">

      <button
        class="tree-button depth-${depth}"
        data-path="${path}"
      >
        ${item.name}
        ${(hasChildren || hasContent)
      ? `<span>${isOpen ? "⌄" : "›"}</span>`
      : ""
    }
      </button>

      ${isOpen ? `
        <div class="tree-content">

          ${hasContent ? `
            <div class="content-text">${item.content}</div>
          ` : ""}

          ${hasChildren ? `
            ${item.children.map((child, index) =>
      renderItem(child, `${path}-${index}`, depth + 1)
    ).join("")}
          ` : ""}

        </div>
      ` : ""}

    </div>
  `;
}

// ========================================
// STEPを表示する
// ========================================

function showSteps() {

  app.innerHTML = steps.map((step, index) => {

    const path = `step-${index}`;
    const isOpen = openedItems.has(path);

    return `
      <div class="step-item">

        <button
          class="step-button ${step.className}"
          data-path="${path}"
        >
          ${step.name}
          <span>${isOpen ? "⌄" : "›"}</span>
        </button>

        ${isOpen ? `
          <div class="step-content open">
            ${step.children.map((child, childIndex) =>
      renderItem(child, `${path}-${childIndex}`, 1)
    ).join("")}
          </div>
        ` : ""}

      </div>
    `;

  }).join("");


  // ========================================
  // ボタンの開閉処理
  // ========================================

  app.querySelectorAll("[data-path]").forEach(button => {

    button.addEventListener("click", () => {

      const path = button.dataset.path;

      if (openedItems.has(path)) {
        openedItems.delete(path);
      } else {
        openedItems.add(path);
      }

      showSteps();

    });

  });

}


// ========================================
// 初期表示
// ========================================

showSteps();
