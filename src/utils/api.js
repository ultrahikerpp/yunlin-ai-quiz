// ── Demo questions (used only when VITE_GAS_URL is empty). Real questions come from the 題目 sheet. ──
const MOCK_QUESTIONS = [
  {
    id: 1,
    question: "「生成式 AI」的主要特徵是？",
    A: "能依提示產生新的文字、圖像或音訊等內容",
    B: "只能做數值計算",
    C: "專門用於資料庫查詢",
    D: "只能分析既有資料",
    answer: "A",
  },
  {
    id: 2,
    question: "GPT 中的 T（Transformer）指的是？",
    A: "一種作業系統",
    B: "一種資料庫",
    C: "一種加密方式",
    D: "一種神經網路架構",
    answer: "D",
  },
  {
    id: 3,
    question: "下列何者是 Google 推出的生成式 AI 模型系列？",
    A: "Gemini",
    B: "LLaMA",
    C: "GPT",
    D: "Mistral",
    answer: "A",
  },
  {
    id: 4,
    question: "「Prompt（提示詞）」是指？",
    A: "訓練模型的資料集",
    B: "使用者給 AI 的輸入指令",
    C: "AI 的輸出結果",
    D: "模型的參數",
    answer: "B",
  },
  {
    id: 5,
    question: "寫提示詞時，下列何者最能提升回答品質？",
    A: "越短越好",
    B: "只輸入關鍵字",
    C: "一次問十個不相關的問題",
    D: "明確說明角色、任務、背景與輸出格式",
    answer: "D",
  },
  {
    id: 6,
    question: "AI「幻覺（Hallucination）」指的是？",
    A: "AI 生成看似合理但實際錯誤的內容",
    B: "AI 運算速度過慢",
    C: "AI 無法辨識圖片",
    D: "AI 記憶體不足",
    answer: "A",
  },
  {
    id: 7,
    question: "取得 AI 產出的稅務法規說明後，最適當的做法是？",
    A: "請 AI 再說一次就當作正確",
    B: "不需處理",
    C: "對照法規原文或官方來源查證後再使用",
    D: "直接引用於公文",
    answer: "C",
  },
  {
    id: 8,
    question: "下列何者不適合直接輸入公開的生成式 AI 服務？",
    A: "一般的 Excel 函數問題",
    B: "活動宣傳文案草稿",
    C: "公開的政府新聞稿",
    D: "納稅人的姓名、身分證字號與稅籍資料",
    answer: "D",
  },
  {
    id: 9,
    question: "RAG（檢索增強生成）的主要目的是？",
    A: "壓縮模型大小",
    B: "加快模型訓練速度",
    C: "讓模型參考外部知識庫以提升回答的準確度",
    D: "把圖片轉成文字",
    answer: "C",
  },
  {
    id: 10,
    question: "NotebookLM 的特色是？",
    A: "只靠模型內建知識回答",
    B: "只能翻譯文件",
    C: "依據使用者上傳的來源資料回答並標註出處",
    D: "只能產生圖片",
    answer: "C",
  },
  {
    id: 11,
    question: "使用 AI 摘要會議逐字稿時，下列何者最重要？",
    A: "直接寄給所有人",
    B: "由人員確認摘要與決議事項是否正確",
    C: "刪除原始逐字稿",
    D: "隨意調整與會者姓名",
    answer: "B",
  },
  {
    id: 12,
    question: "AI 訓練資料若有偏誤，可能造成？",
    A: "電腦無法開機",
    B: "網路變慢",
    C: "檔案變大",
    D: "輸出結果存在不公平或偏頗",
    answer: "D",
  },
  {
    id: 13,
    question: "歐盟 AI Act 依風險程度將 AI 系統分類，下列何者屬於最高管制層級？",
    A: "不可接受風險（禁止）",
    B: "最小風險",
    C: "有限風險",
    D: "高風險",
    answer: "A",
  },
  {
    id: 14,
    question: "「Deepfake」是指？",
    A: "一種防毒軟體",
    B: "一種雲端儲存",
    C: "利用 AI 合成逼真的假影像或聲音",
    D: "一種資料備份技術",
    answer: "C",
  },
  {
    id: 15,
    question: "收到疑似主管以 AI 合成語音要求緊急匯款的電話，應該？",
    A: "透過原本已知的管道向本人查證",
    B: "立即照辦",
    C: "轉傳給同事",
    D: "回撥電話中提供的號碼",
    answer: "A",
  },
  {
    id: 16,
    question: "Fine-tuning（微調）與 Prompt Engineering 的差異是？",
    A: "提示詞工程需要 GPU 叢集",
    B: "微調會更新模型權重，提示詞工程不會",
    C: "微調不需要任何資料",
    D: "兩者完全相同",
    answer: "B",
  },
  {
    id: 17,
    question: "Token 在大型語言模型中通常指？",
    A: "模型的帳號",
    B: "文字被切分後的處理單位",
    C: "一個完整段落",
    D: "資料庫的主鍵",
    answer: "B",
  },
  {
    id: 18,
    question: "關於 AI 產出內容的著作權與引用，下列做法何者較適當？",
    A: "不需任何檢查",
    B: "確認授權與來源，必要時標註 AI 協助",
    C: "一律聲明為自己原創",
    D: "直接複製他人作品要求 AI 改寫",
    answer: "B",
  },
  {
    id: 19,
    question: "使用 Gemini 協助整理 Google Docs 內容時，下列何者較為妥當？",
    A: "不確認權限即分享",
    B: "關閉所有帳號安全設定",
    C: "確認文件分享權限與資料機敏程度後再使用",
    D: "把所有內部文件都貼進去",
    answer: "C",
  },
  {
    id: 20,
    question: "導入 AI 輔助公務作業時，「人在迴圈（Human in the loop）」的意思是？",
    A: "不需要人員參與",
    B: "由 AI 全自動決策",
    C: "只在系統故障時才有人",
    D: "關鍵決策由人員審核與負責",
    answer: "D",
  },
];

const GAS_URL = import.meta.env.VITE_GAS_URL;
const QUESTION_COUNT = parseInt(
  import.meta.env.VITE_QUESTION_COUNT || "10",
  10,
);

/**
 * Fetch N random questions from GAS (no 解答 column returned).
 * Falls back to mock data when VITE_GAS_URL is not configured.
 */
export async function fetchQuestions() {
  if (!GAS_URL) {
    // Mock mode — shuffle and pick
    const shuffled = [...MOCK_QUESTIONS].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, QUESTION_COUNT);
  }

  const url = new URL(GAS_URL);
  url.searchParams.set("action", "getQuestions");
  url.searchParams.set("count", QUESTION_COUNT);

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`GAS error: ${res.status}`);
  const data = await res.json();
  if (data.error) throw new Error(data.error);
  return data.questions;
}

/**
 * Submit the player's result to GAS.
 * @param {string} playerId
 * @param {number} score
 * @param {number} total
 * @param {boolean} passed
 */
export async function submitScore(playerId, score, total, passed) {
  if (!GAS_URL) {
    console.info("[mock] submitScore", { playerId, score, total, passed });
    return { success: true };
  }

  // Use GET + query params — GAS doesn't support CORS preflight (triggered by
  // POST with Content-Type: application/json), so POST never actually reaches doPost.
  const url = new URL(GAS_URL);
  url.searchParams.set("action", "submitScore");
  url.searchParams.set("playerId", playerId);
  url.searchParams.set("score", score);
  url.searchParams.set("total", total);
  url.searchParams.set("passed", passed ? "1" : "0");

  // Plain GET — GAS sets Access-Control-Allow-Origin: * on doGet responses,
  // so we don't need no-cors and can actually read errors.
  const res = await fetch(url.toString());
  const data = await res.json().catch(() => ({}));
  if (data.error) console.error("[GAS submitScore error]", data.error);
  return { success: true };
}
