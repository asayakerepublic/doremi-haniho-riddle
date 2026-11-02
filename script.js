
const app = document.getElementById("app");

// ========================================
// 表示するデータ
// ========================================

const steps = [
  {
    name: "STEP1",
    className: "step1",
    children: [
      {
        name: "問題ド",
        children: [
          {
            name: "入るイラストの確認",
            content: "ここにイラストの内容"
          },
          {
            name: "ヒント①",
            content: "問題ドのヒント①の内容"
          },
          {
            name: "ヒント②",
            content: "問題ドのヒント②の内容"
          }
        ]
      },
      {
        name: "問題レ",
        children: [
          {
            name: "入るイラストの確認",
            content: "ここにイラストの内容"
          },
          {
            name: "ヒント①",
            content: "問題レのヒント①の内容"
          },
          {
            name: "ヒント②",
            content: "問題レのヒント②の内容"
          }
        ]
      },
      {
        name: "問題ミ",
        children: [
          {
            name: "入るイラストの確認",
            content: "ここにイラストの内容"
          },
          {
            name: "ヒント①",
            content: "問題ミのヒント①の内容"
          }
        ]
      },
      {
        name: "問題ファ",
        children: [
          {
            name: "入るイラストの確認",
            content: "ここにイラストの内容"
          },
          {
            name: "ヒント①",
            content: "問題ファのヒント①の内容"
          },
          {
            name: "ヒント②",
            content: "問題ファのヒント②の内容"
          }
        ]
      },
      {
        name: "問題ソ",
        children: [
          {
            name: "入るイラストの確認",
            content: "ここにイラストの内容"
          },
          {
            name: "ヒント①",
            content: "問題ソのヒント①の内容"
          }
        ]
      },
      {
        name: "問題ラ",
        children: [
          {
            name: "入るイラストの確認",
            content: "ここにイラストの内容"
          },
          {
            name: "ヒント①",
            content: "問題ラのヒント①の内容"
          },
          {
            name: "ヒント②",
            content: "問題ラのヒント②の内容"
          }
        ]
      },
      {
        name: "問題シ",
        children: [
          {
            name: "入るイラストの確認",
            content: "ここにイラストの内容"
          },
          {
            name: "ヒント①",
            content: "問題シのヒント①の内容"
          }
        ]
      }
    ]
  },

  // ========================================
  // STEP2
  // ========================================


  {
    name: "STEP2",
    className: "step2",
    children: [
      {
        name: "問題番号の確認",
        content: "問題番号の確認内容",
        children: [
          {
            name: "問題①",
            children: [
              {
                name: "組み合わせの確認",
                content: "問題①の組み合わせの確認内容",
                children: [
                  {
                    name: "組み合わせ①",
                    children: [
                      {
                        name: "ヒント①",
                        content: "問題①・組み合わせ①のヒント①"
                      },
                      {
                        name: "ヒント②",
                        content: "問題①・組み合わせ①のヒント②"
                      }
                    ]
                  },
                  {
                    name: "組み合わせ②",
                    children: [
                      {
                        name: "ヒント①",
                        content: "問題①・組み合わせ②のヒント①"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: "問題②",
            children: [
              {
                name: "組み合わせの確認",
                content: "問題②の組み合わせの確認内容",
                children: [
                  {
                    name: "組み合わせ①",
                    children: [
                      {
                        name: "ヒント①",
                        content: "問題②・組み合わせ①のヒント①"
                      },
                      {
                        name: "ヒント②",
                        content: "問題②・組み合わせ①のヒント②"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  // ========================================
  // STEP LAST
  // ========================================

  {
    name: "STEP LAST",
    className: "step-last",
    children: [
      {
        name: "ヒント①",
        content: "STEP LASTのヒント①の内容"
      },
      {
        name: "ヒント②",
        content: "STEP LASTのヒント②の内容"
      }
    ]
  }
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
