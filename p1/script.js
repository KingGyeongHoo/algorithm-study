document.addEventListener("DOMContentLoaded", () => {
  //1. 전체 블러 처리 과정
  const paragraphs = document.querySelectorAll(".content p");
  const map = {};
  const additionamMap = {};
  paragraphs.forEach((p) => {
    const words = p.textContent
      .toLowerCase()
      .replace(/[^a-z\uAC00-\uD7AF\s]/g, "")
      .split(/\s+/)
      .filter(Boolean);

    for (let w of words) {
      if (!map[w]) map[w] = 0;
      if (w.length >= 5) map[w] += 1;
    }
  });
  const blurred = Object.entries(map)
    .filter((el) => el[1] >= 6)
    .map((el) => el[0]);

  paragraphs.forEach((p) => {
    let htmlContent = p.innerHTML;
    blurred.forEach((word) => {
      const regex = new RegExp(`\\b(${word})\\b`, "gi");
      htmlContent = htmlContent.replace(
        regex,
        `<span class="blurred">${regex}</span>`
      );
    });
    p.innerHTML = htmlContent;
  });

  //2. 선택 영역 블러 처리 과정
  const storeSelection = () => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    selectedRange = selection.getRangeAt(0);
  };

  const applyBlurToStoredSelection = () => {
    if (!selectedRange) {
      alert("블러 처리 할 단어 및 문장을 드래그 해주세요.");
      return;
    }

    const range = selectedRange;
    const selectedText = range.toString();

    if (selectedText.trim() === "") {
      alert("블러 처리 할 단어 및 문장을 드래그 해주세요.");
      return;
    }
    if (selectedText.trim().length >= 5) {
      alert("5단어 이상 선택할 수 없습니다.");
      return;
    }
    if (map[selectedText] || additionamMap[selectedText]) {
      alert("이미 블러 처리 되어 있습니다.");
      return;
    }

    const span = document.createElement("span");
    span.className = "blurred";
    span.textContent = selectedText;

    range.deleteContents();
    range.insertNode(span);
    if (!additionamMap[selectedText]) additionamMap[selectedText] = 0;
    additionamMap[selectedText] += 1;

    selectedRange = null;
  };
  const resetBlur = () => {
    paragraphs.forEach((p) => {
      for (let add of Object.keys(additionamMap)) {
        additionamMap[add] -= 1;
        if (additionamMap[add] === 0) delete additionamMap[add];
        let htmlContent = p.innerHTML;
        htmlContent = htmlContent.replace(
          `<span class="blurred">${add}</span>`,
          add
        );
        p.innerHTML = htmlContent;
      }
    });
  };

  document.addEventListener("mouseup", storeSelection);

  const blurButton = document.getElementById("blurBtn");
  blurButton.addEventListener("click", applyBlurToStoredSelection);

  const resetButton = document.getElementById("resetBtn");
  resetButton.addEventListener("click", resetBlur);

  const removeBlurButton = document.getElementById("removeBlurBtn");
  removeBlurButton.addEventListener("click", showOriginalFor3Seconds);
});
