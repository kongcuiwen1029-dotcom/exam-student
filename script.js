const exams = [
  {
    id: "exam-ongoing",
    title: "工程师AI面试第一轮",
    filterGroup: "pending",
    hoverShadow: true,
    guideLabel: "考试说明",
    badgeTone: "is-ongoing",
    badgeText: "正在考试",
    date: { type: "today", value: "今" },
    examType: "AI面试",
    fields: [
      ["招聘岗位", "Java前端工程师"],
      ["考试类型", "AI面试"],
      ["开始时间", "2025-10-10 14:00 至 2025-10-11 14:00"],
      ["考试时长", "115分钟"],
    ],
    action: { kind: "button", label: "继续考试" },
  },
  {
    id: "exam-written",
    title: "秋招第一批笔试",
    filterGroup: "pending",
    guideLabel: "考试说明",
    badgeTone: "is-upcoming",
    badgeText: "即将考试",
    date: { type: "today", value: "今" },
    examType: "笔试",
    fields: [
      ["招生计划", "2025年秋招计划"],
      ["考试类型", "笔试"],
      ["开始时间", "2025-10-10 14:00 至 2025-10-11 14:00"],
      ["考试时长", "120分钟"],
    ],
    action: { kind: "link", label: "进入考试" },
  },
  {
    id: "exam-interview",
    title: "秋招第一批面试",
    filterGroup: "pending",
    guideLabel: "考试说明",
    badgeTone: "is-upcoming",
    badgeText: "即将考试",
    date: { type: "today", value: "今" },
    examType: "人工面试",
    fields: [
      ["招生计划", "2025年秋招计划"],
      ["考试类型", "人工面试"],
      ["开始时间", "2025-10-10 14:00"],
      ["考试时长", "120分钟"],
    ],
    action: { kind: "link", label: "面试详情" },
  },
  {
    id: "exam-psychology",
    title: "心理测评考试",
    filterGroup: "completed",
    badgeTone: "is-completed",
    badgeText: "缺考",
    date: { type: "calendar", month: "NOV", day: "22" },
    examType: "心理测评",
    fields: [
      ["招聘岗位", "Java工程师"],
      ["考试类型", "心理测评"],
      ["开始时间", "2025-10-10 14:00 至 2025-10-11 14:00"],
      ["考试时长", "120分钟"],
    ],
    action: { kind: "stamp", label: "不通过" },
  },
  {
    id: "exam-hybrid",
    title: "前端混合云考试",
    filterGroup: "completed",
    badgeTone: "is-completed",
    badgeText: "已完成",
    date: { type: "calendar", month: "NOV", day: "22" },
    examType: "混合考试",
    fields: [
      ["招聘岗位", "Java工程师"],
      ["考试类型", "混合考试"],
      ["开始时间", "2025-10-10 14:00 至 2025-10-11 14:00"],
      ["考试时长", "120分钟"],
    ],
    action: { kind: "text", label: "通过" },
  },
];

const calendarDays = [
  { day: "28", muted: true },
  { day: "29", muted: true },
  { day: "30", muted: true },
  { day: "01" },
  { day: "02" },
  { day: "03" },
  { day: "04" },
  { day: "05" },
  { day: "06" },
  { day: "07" },
  { day: "08", highlighted: true },
  { day: "09" },
  { day: "10" },
  { day: "11" },
  { day: "12" },
  { day: "13" },
  { day: "14" },
  { day: "15" },
  { day: "16" },
  { day: "17", highlighted: true, label: "考试中" },
  { day: "18" },
  { day: "19" },
  { day: "20" },
  { day: "21" },
  { day: "22" },
  { day: "23", selected: true, conflict: true, label: "考试中" },
  { day: "24" },
  { day: "25" },
  { day: "26" },
  { day: "27" },
  { day: "28" },
  { day: "29" },
  { day: "30" },
  { day: "01", muted: true },
  { day: "02", muted: true },
];

const schedule = [
  {
    time: "2022-12-23 10:30 至 2022-12-23 11:30",
    title: "考试名称123",
    tone: "normal",
  },
  {
    time: "2022-12-23 14:30 至 2022-12-25 11:30",
    title: "产品测试考试1",
    tone: "conflict",
  },
  {
    time: "2022-12-23 16:30 至 2022-12-23 17:30",
    title: "计算机考试",
    tone: "conflict",
    warning: "考试时间冲突，请合理安排考试时间！",
  },
  {
    time: "2022-12-23 18:30 至 2022-12-23 19:30",
    title: "计算机考试123",
    tone: "normal",
  },
];

const notices = [
  { time: "1天前", text: "考试系统2.0更新啦！" },
  { time: "1天前", text: "考试系统2.0更新啦！" },
  { time: "1天前", text: "南京降温提醒：11月29日降温预警，请各位考生注意防护保暖！" },
  { time: "1天前", text: "南京降温提醒：11月29日降温预警，请各位考生注意防护保暖！" },
];

const guideAssetBase = "./assets/guide";

const guideStep1Assets = {
  infoIcon: `${guideAssetBase}/icon-info.svg`,
  exampleCorrect: `${guideAssetBase}/step1-correct-example.svg`,
  checkIcon: `${guideAssetBase}/icon-success.svg`,
  wrongBlocked: `${guideAssetBase}/step1-wrong-blocked.svg`,
  wrongBlur: `${guideAssetBase}/step1-wrong-blur.svg`,
  wrongPartial: `${guideAssetBase}/step1-wrong-partial.svg`,
  wrongMulti: `${guideAssetBase}/step1-wrong-multi.svg`,
  errorIcon: `${guideAssetBase}/icon-error.svg`,
};

const guideStep2Assets = {
  qrImage: `${guideAssetBase}/step2-qr-live.svg`,
  arrowLeft: `${guideAssetBase}/arrow-left.svg`,
  hintIcon: `${guideAssetBase}/icon-hint.svg`,
  correctIllustration: `${guideAssetBase}/step2-correct-placement.svg`,
  successIcon: `${guideAssetBase}/icon-success.svg`,
  wrongBlur: `${guideAssetBase}/step2-wrong-blur.svg`,
  wrongBack: `${guideAssetBase}/step2-wrong-back.svg`,
  wrongAngle: `${guideAssetBase}/step2-wrong-angle.svg`,
  wrongMulti: `${guideAssetBase}/step2-wrong-multi.svg`,
  errorIcon: `${guideAssetBase}/icon-error.svg`,
};

const guideStep3Assets = {
  colorWheel: `${guideAssetBase}/step3-answer/color-wheel.png`,
  phoneDemo: `${guideAssetBase}/step3-answer/phone-demo.png`,
  infoIcon: `${guideAssetBase}/step3-answer/info-icon.svg`,
  correctIcon: `${guideAssetBase}/step3-answer/correct.svg`,
};

const mobileCameraBaseStorageKey = "codexMobileCameraBaseUrl";
const mobileCameraFallbackBaseUrl = "https://codex-five-zeta.vercel.app/";
const mobileRelayBaseUrl = "https://vdo.ninja/";
const mobileRelayViewerCss = `
html, body {
  margin: 0 !important;
  width: 100% !important;
  height: 100% !important;
  overflow: hidden !important;
  background: #111827 !important;
}

body,
#app,
#videos,
.videos,
.videoHolder,
.videoContainer,
.main,
.stage,
.player,
.remoteVideos {
  width: 100% !important;
  height: 100% !important;
  max-width: none !important;
  max-height: none !important;
  inset: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  background: #111827 !important;
  border: 0 !important;
  border-radius: 0 !important;
}

video,
.videoHolder video,
.videoContainer video,
.remoteVideos video {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  background: #111827 !important;
}
`.trim();
const mobileRelayPublisherCss = `
html, body {
  margin: 0 !important;
  width: 100% !important;
  height: 100% !important;
  overflow: hidden !important;
  background: #000 !important;
}

body,
#app,
#videos,
.videos,
.videoHolder,
.videoContainer,
.main,
.stage,
.player,
.localVideo,
.videoWrapper {
  width: 100% !important;
  height: 100% !important;
  max-width: none !important;
  max-height: none !important;
  inset: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  background: #000 !important;
  border: 0 !important;
  border-radius: 0 !important;
}

video,
.videoHolder video,
.videoContainer video,
.localVideo video {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  background: #000 !important;
}
`.trim();

function encodeBase64Text(value) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";

  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return window.btoa(binary);
}

function ensureTrailingSlash(url) {
  return url.endsWith("/") ? url : `${url}/`;
}

function createGuideSessionToken(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function ensureGuideMobileSession(examId = "") {
  if (!guideState.mobileRelaySessionId || guideState.mobileRelayExamId !== examId) {
    guideState.mobileRelayExamId = examId;
    guideState.mobileRelaySessionId = createGuideSessionToken("mobile");
    guideState.mobileRelayStreamId = `codex-${examId || "exam"}-${guideState.mobileRelaySessionId}`;
  }

  return {
    sessionId: guideState.mobileRelaySessionId,
    streamId: guideState.mobileRelayStreamId,
  };
}

function resetGuideMobileSession() {
  guideState.mobileRelayExamId = "";
  guideState.mobileRelaySessionId = "";
  guideState.mobileRelayStreamId = "";
}

function buildMobileRelayUrl(params) {
  const url = new URL(mobileRelayBaseUrl);

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null || value === false) {
      return;
    }

    url.searchParams.set(key, value === true ? "1" : String(value));
  });

  return url.toString();
}

function getMobileRelayViewerUrl(streamId) {
  const { sessionId } = ensureGuideMobileSession(guideState.examId);

  return buildMobileRelayUrl({
    view: streamId,
    api: sessionId,
    solo: true,
    cover: true,
    cleanoutput: true,
    transparent: true,
    noaudio: true,
    autoplay: true,
    muted: true,
    meshcast: true,
    base64css: encodeBase64Text(mobileRelayViewerCss),
  });
}

function getMobileRelayProbeUrl(streamId) {
  const { sessionId } = ensureGuideMobileSession(guideState.examId);

  return buildMobileRelayUrl({
    view: streamId,
    api: sessionId,
    cleanoutput: true,
    solo: true,
  });
}

function getMobileRelayPublisherUrl(streamId) {
  const { sessionId } = ensureGuideMobileSession(guideState.examId);

  return buildMobileRelayUrl({
    push: streamId,
    api: sessionId,
    webcam: true,
    autostart: true,
    cleanoutput: true,
    transparent: true,
    hideheader: true,
    noaudio: true,
    meshcast: true,
    facing: "environment",
    base64css: encodeBase64Text(mobileRelayPublisherCss),
  });
}

function resolveMobileCameraPageUrl(examId = "", streamId = "", relayApi = "") {
  const params = new URLSearchParams(window.location.search);
  const manualBase =
    params.get("mobileBase") ||
    window.localStorage.getItem(mobileCameraBaseStorageKey) ||
    mobileCameraFallbackBaseUrl;

  let targetUrl;

  try {
    if (window.location.protocol === "http:" || window.location.protocol === "https:") {
      targetUrl = new URL(window.location.href);
      targetUrl.pathname = targetUrl.pathname.replace(/[^/]*$/, "mobile-camera.html");
      targetUrl.search = "";
      targetUrl.hash = "";
    } else {
      targetUrl = new URL("mobile-camera.html", ensureTrailingSlash(manualBase));
    }
  } catch (error) {
    targetUrl = new URL("mobile-camera.html", mobileCameraFallbackBaseUrl);
  }

  if (examId) {
    targetUrl.searchParams.set("examId", examId);
  }

  if (streamId) {
    targetUrl.searchParams.set("streamId", streamId);
  }

  if (relayApi) {
    targetUrl.searchParams.set("relayApi", relayApi);
  }

  targetUrl.searchParams.set("v", "20260429-mobile-stream-v8");

  return targetUrl.toString();
}

function getMobileCameraGuidePayload(examId = "") {
  const { sessionId, streamId } = ensureGuideMobileSession(examId);
  const url = resolveMobileCameraPageUrl(examId, streamId, sessionId);

  return {
    pageUrl: url,
    qrImageUrl: `https://api.qrserver.com/v1/create-qr-code/?size=198x198&format=svg&data=${encodeURIComponent(url)}`,
    viewerUrl: getMobileRelayViewerUrl(streamId),
    probeUrl: getMobileRelayProbeUrl(streamId),
    streamId,
  };
}

function resolvePhotoUploadGuideUrl(examId = "") {
  let targetUrl;

  try {
    if (window.location.protocol === "http:" || window.location.protocol === "https:") {
      targetUrl = new URL(window.location.href);
    } else {
      targetUrl = new URL("https://codex-five-zeta.vercel.app/");
    }
  } catch (error) {
    targetUrl = new URL("https://codex-five-zeta.vercel.app/");
  }

  targetUrl.search = "";
  targetUrl.hash = "";

  if (examId) {
    targetUrl.searchParams.set("guideDemo", examId);
  }

  targetUrl.searchParams.set("guideStep", "3");
  targetUrl.searchParams.set("uploadPreview", "1");

  return targetUrl.toString();
}

function getPhotoUploadGuidePayload(examId = "") {
  const mobileGuidePayload = getMobileCameraGuidePayload(examId);

  return {
    pageUrl: mobileGuidePayload.pageUrl,
    qrImageUrl: mobileGuidePayload.qrImageUrl,
    viewerUrl: mobileGuidePayload.viewerUrl,
    probeUrl: mobileGuidePayload.probeUrl,
  };
}

function getGuideSubtitle(exam) {
  const byType = {
    AI面试: "用于帮助你在进入正式考试前完成设备准备和题型操作熟悉。弹窗仅用于说明与引导，不替代正式考试页面。",
    笔试: "用于帮助你在进入正式考试前完成设备准备和题型操作熟悉。弹窗仅用于说明与引导，不替代正式考试页面。",
    人工面试: "用于帮助你在进入正式考试前完成设备准备和题型操作熟悉。弹窗仅用于说明与引导，不替代正式考试页面。",
  };

  return byType[exam.examType] || "用于帮助你在进入正式考试前完成设备准备与操作熟悉。弹窗仅用于说明与引导，不替代正式考试页面。";
}

function createGuideSteps(exam) {
  return [
    {
      id: "desktop-camera",
      navName: "电脑端摄像头",
      navSummary: "检查浏览器权限与拍摄角度",
      title: "电脑端摄像头准备",
      description: `进入正式考试前，请确认电脑端摄像头可正常开启，画面包含人脸与肩部，避免逆光、俯拍或侧脸取景。`,
      demoType: "desktop-camera",
      keyPoints: [
        "请保持面部位于画面中央，头顶至肩部完整入镜。",
        "优先选择正前方光源，避免背光、强反光和大面积阴影。",
        "浏览器若提示权限申请，请点击允许；检测结果仅供参考，不影响正式进入考试。",
      ],
      tips: [
        "自动提示 1：将摄像头调整到与视线齐平的位置，能获得更稳定的人脸识别效果。",
        "自动提示 2：如预览画面偏暗，请优先调整光线，而不是贴近摄像头。",
        "自动提示 3：离开当前步骤或关闭弹窗后，页面会自动释放摄像头资源。",
      ],
      detection: {
        type: "camera",
        idleDetail: "进入当前步骤后，浏览器会自动尝试申请摄像头权限并展示实时预览。",
      },
    },
    {
      id: "mobile-camera",
      navName: "手机端摄像头",
      navSummary: "扫码连接手机并确认摆放位置",
      title: "手机端摄像头准备",
      description: `请使用手机扫码连接，并将手机固定在可以拍到侧后方桌面的角度。`,
      demoType: "mobile-camera",
      keyPoints: [
        "手机端建议横向固定，镜头略高于桌面，保证手部、桌面和电脑屏幕能同时被拍到。",
        "连接成功后不要随意移动手机，避免考试中画面丢失。",
        "若浏览器未连接成功，可重新扫码或在正式考试页再次确认，不作为阻断条件。",
      ],
      tips: [
        "自动提示 1：手机距离桌面约 40 到 60 厘米时，更容易兼顾桌面与考生动作。",
        "自动提示 2：建议提前关闭手机通知提醒，避免考试中弹窗遮挡画面。",
        "自动提示 3：连接结果为辅助反馈，正式考试时仍可再次检查第二机位状态。",
      ],
      detection: {
        type: "mobile",
        idleDetail: "当前显示为未连接状态。请使用手机扫描演示区二维码并允许后置摄像头权限；连接成功后，此区域会自动切换为实时视频。",
      },
    },
    {
      id: "photo-upload",
      navName: "拍照上传答案",
      navSummary: "查看扫码拍照、上传与反馈流程",
      title: "拍照上传答案说明",
      description: "请使用手机扫码进入拍照页，确保二维码完整入镜，并根据上传反馈及时重拍或确认。",
      demoType: "photo-upload",
      keyPoints: [
        "拍照前请保证答题区域平整、无遮挡，二维码与答案区域都需完整出现在画面中。",
        "彩色校准二维码用于辅助识别光线与色彩，请勿折叠、遮挡或离开镜头边界。",
        "上传反馈仅展示演示型流程，正式考试中请以实时上传结果提示为准。",
      ],
      tips: [
        "自动提示 1：拍照时让手机镜头与纸面尽量平行，可减少透视变形。",
        "自动提示 2：如上传反馈提示模糊，请优先重新对焦而不是放大截图。",
        "自动提示 3：演示型流程不会记录正式作答数据，结果仅供你熟悉操作。",
      ],
      detection: {
        type: "upload",
        idleDetail: "当前未开始演示型上传检测。你可以点击按钮模拟上传流程与反馈结果。",
      },
    },
    {
      id: "sorting-question",
      navName: "排序题操作",
      navSummary: "熟悉拖拽排序题的交互方式",
      title: "排序题操作说明",
      description: "正式考试时，你可以通过拖拽手柄调整选项顺序，并在提交前再次确认当前排列。",
      demoType: "sorting-question",
      keyPoints: [
        "按住每项左侧拖拽柄后，可上下移动选项顺序。",
        "拖拽过程中系统会实时显示当前位置，松手后立即生效。",
        "进入正式考试后仍可在提交前继续调整，不会因为本弹窗的操作产生正式答案数据。",
      ],
      tips: [
        "自动提示 1：排序题常见错误是只点击文本而未按住拖拽柄。",
        "自动提示 2：调整完成后建议从上到下快速复核一遍最终顺序。",
      ],
    },
    {
      id: "coding-question",
      navName: "算法题操作",
      navSummary: "熟悉代码编辑、运行与提交流程",
      title: "算法题操作说明",
      description: "正式考试时，你可以在编辑区编写代码、运行示例、查看输出，再选择提交。",
      demoType: "coding-question",
      keyPoints: [
        "编辑器支持多行输入，运行后可查看编译或执行反馈。",
        "建议先运行示例或自定义测试，再进行正式提交。",
        "本弹窗中的演示内容不会记录为正式考试作答结果。",
      ],
      tips: [
        "自动提示 1：先验证输入输出格式，再开始补充核心逻辑，能减少调试成本。",
        "自动提示 2：正式提交前请再次确认语言版本、主函数名称和边界条件处理。",
      ],
    },
  ];
}

const guideConfigs = Object.fromEntries(
  exams
    .filter((exam) => exam.guideLabel)
    .map((exam) => [
      exam.id,
      {
        examTitle: exam.title,
        subtitle: getGuideSubtitle(exam),
        steps: createGuideSteps(exam),
      },
    ]),
);

const state = {
  activeFilter: "all",
  keyword: "",
  type: "",
  start: "",
  end: "",
};

const guideState = {
  isOpen: false,
  examId: "",
  currentStepIndex: 0,
  tipIndex: 0,
  tipTimer: 0,
  pendingJobs: new Set(),
  sortingDemoJobs: new Set(),
  sortingDemoToken: 0,
  codingDemoJobs: new Set(),
  codingDemoToken: 0,
  codingDemoResizeObserver: null,
  codingDemoPaused: false,
  cameraStream: null,
  cameraRequestToken: 0,
  mobileRelayExamId: "",
  mobileRelaySessionId: "",
  mobileRelayStreamId: "",
  mobileRelayPollTimer: 0,
  lastFocusedElement: null,
};

const detectionStore = new Map();

const examList = document.getElementById("exam-list");
const calendarGrid = document.getElementById("calendar-grid");
const timelineList = document.getElementById("timeline-list");
const noticeList = document.getElementById("notice-list");
const filterForm = document.getElementById("filter-form");
const keywordInput = document.getElementById("keyword-input");
const typeSelect = document.getElementById("type-select");
const typeField = typeSelect ? typeSelect.closest(".field") : null;
const startInput = document.getElementById("start-input");
const endInput = document.getElementById("end-input");
const refreshButton = document.getElementById("refresh-button");
const segments = Array.from(document.querySelectorAll(".segment"));

const guideModalRoot = document.getElementById("guide-modal-root");
const guideModalSubtitle = document.getElementById("guide-modal-subtitle");
const guideStepCount = document.getElementById("guide-step-count");
const guideStepList = document.getElementById("guide-step-list");
const guideStepContent = document.getElementById("guide-step-content");
const guideCloseButton = document.getElementById("guide-close-button");

function renderDateChip(date) {
  if (date.type === "today") {
    return `<div class="date-chip is-today" aria-hidden="true">${date.value}</div>`;
  }

  return `
    <div class="date-chip is-calendar" aria-hidden="true">
      <span class="date-chip-month">${date.month}</span>
      <span class="date-chip-day">${date.day}</span>
    </div>
  `;
}

function renderAction(action) {
  if (action.kind === "button") {
    return `<button class="button button-primary" type="button">${action.label}</button>`;
  }

  if (action.kind === "link") {
    return `
      <button class="card-link" type="button" aria-label="${action.label}">
        <span class="card-link-text">${action.label}</span>
        <svg viewBox="0 0 14 14" aria-hidden="true">
          <path d="M5 3.25L8.75 7L5 10.75"></path>
        </svg>
      </button>
    `;
  }

  if (action.kind === "stamp") {
    return `<div class="result-stamp" aria-label="${action.label}"><span>${action.label}</span></div>`;
  }

  return `<div class="result-text">${action.label}</div>`;
}

function renderExamCards(list) {
  if (!examList) {
    return;
  }

  if (!list.length) {
    examList.innerHTML = `<div class="empty-state">暂无符合筛选条件的考试，请调整搜索条件后重试。</div>`;
    return;
  }

  examList.innerHTML = list
    .map((exam) => {
      const details = exam.fields
        .map(
          ([label, value]) => `
            <div class="exam-meta-row">
              <dt>${label}：</dt>
              <dd>${value}</dd>
            </div>
          `,
        )
        .join("");

      return `
        <article class="exam-card ${exam.hoverShadow ? "has-hover-shadow" : ""}" data-id="${exam.id}">
          ${
            exam.guideLabel
              ? `
                <button class="exam-note" type="button" aria-label="${exam.guideLabel}">
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M4 2.75H10.75L13 5V13.25H4V2.75Z"></path>
                    <path d="M10.5 2.75V5.25H13"></path>
                    <path d="M6 7.25H11"></path>
                    <path d="M6 9.5H10"></path>
                  </svg>
                  <span class="exam-note-text">${exam.guideLabel}</span>
                </button>
              `
              : ""
          }
          ${renderDateChip(exam.date)}
          <div class="exam-body">
            <div class="exam-head">
              <h3>${exam.title}</h3>
              <span class="status-badge ${exam.badgeTone}">${exam.badgeText}</span>
            </div>
            <dl class="exam-meta">${details}</dl>
          </div>
          <div class="exam-side">
            ${renderAction(exam.action)}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderCalendar() {
  if (!calendarGrid) {
    return;
  }

  calendarGrid.innerHTML = calendarDays
    .map((item) => {
      const classes = [
        "calendar-day",
        item.muted ? "is-muted" : "",
        item.highlighted ? "is-highlighted" : "",
        item.conflict ? "is-conflict" : "",
        item.selected ? "is-selected" : "",
      ]
        .filter(Boolean)
        .join(" ");

      return `
        <div class="${classes}">
          <span class="calendar-day-number">${item.day}</span>
          ${item.label ? `<span class="calendar-day-label">${item.label}</span>` : ""}
        </div>
      `;
    })
    .join("");
}

function renderSchedule() {
  if (!timelineList) {
    return;
  }

  timelineList.innerHTML = schedule
    .map(
      (item) => `
        <div class="timeline-item ${item.tone === "conflict" ? "is-conflict" : ""}">
          <div class="timeline-time">${item.time}</div>
          <div class="timeline-title">${item.title}</div>
          ${item.warning ? `<div class="timeline-warning">${item.warning}</div>` : ""}
        </div>
      `,
    )
    .join("");
}

function renderNotices() {
  if (!noticeList) {
    return;
  }

  noticeList.innerHTML = notices
    .map(
      (item) => `
        <article class="notice-item">
          <time>${item.time}</time>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");
}

function matchesFilter(exam) {
  const matchesGroup =
    state.activeFilter === "all" ? true : exam.filterGroup === state.activeFilter;

  const haystack = [exam.title, exam.examType, ...exam.fields.map(([, value]) => value)]
    .join(" ")
    .toLowerCase();
  const matchesKeyword = state.keyword ? haystack.includes(state.keyword) : true;
  const matchesType = state.type ? exam.examType === state.type : true;
  const matchesStart = state.start ? haystack.includes(state.start) : true;
  const matchesEnd = state.end ? haystack.includes(state.end) : true;

  return matchesGroup && matchesKeyword && matchesType && matchesStart && matchesEnd;
}

function syncSegments() {
  segments.forEach((button) => {
    const isActive = button.dataset.filter === state.activeFilter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function updateList() {
  syncSegments();
  renderExamCards(exams.filter(matchesFilter));
}

function syncSelectState() {
  if (!typeField || !typeSelect) {
    return;
  }

  typeField.classList.toggle("has-value", Boolean(typeSelect.value));
}

function applyFormState() {
  state.keyword = keywordInput ? keywordInput.value.trim().toLowerCase() : "";
  state.type = typeSelect ? typeSelect.value : "";
  state.start = startInput ? startInput.value.trim().toLowerCase() : "";
  state.end = endInput ? endInput.value.trim().toLowerCase() : "";
  syncSelectState();
  updateList();
}

function getGuideConfig(examId) {
  return guideConfigs[examId] || null;
}

function getCurrentGuideStep() {
  const config = getGuideConfig(guideState.examId);

  if (!config) {
    return null;
  }

  return config.steps[guideState.currentStepIndex] || null;
}

function getDetectionKey(examId, stepId) {
  return `${examId}:${stepId}`;
}

function getDetectionState(examId, step) {
  return (
    detectionStore.get(getDetectionKey(examId, step.id)) || {
      status: "idle",
      detail: step.detection?.idleDetail || "",
    }
  );
}

function setDetectionState(examId, stepId, nextState) {
  const key = getDetectionKey(examId, stepId);
  const currentState = detectionStore.get(key) || {};

  detectionStore.set(key, {
    ...currentState,
    ...nextState,
  });
}

function getGuideStepById(examId, stepId) {
  const config = getGuideConfig(examId);

  if (!config) {
    return null;
  }

  return config.steps.find((step) => step.id === stepId) || null;
}

function updatePhotoUploadDetection(status, detail) {
  const step = getGuideStepById(guideState.examId, "photo-upload");

  if (!guideState.examId || !step) {
    return;
  }

  const nextDetail = detail || step.detection?.idleDetail || "";
  const currentState = getDetectionState(guideState.examId, step);

  if (currentState.status === status && (currentState.detail || "") === nextDetail) {
    return;
  }

  setDetectionState(guideState.examId, step.id, {
    status,
    detail: nextDetail,
  });

  refreshGuideStepAfterDetection();
}

function getPhotoUploadSuccessDetail() {
  return "上传成功。当前仅展示演示型反馈，不影响正式考试进入。";
}

function stopGuideTipRotation() {
  if (guideState.tipTimer) {
    window.clearInterval(guideState.tipTimer);
    guideState.tipTimer = 0;
  }
}

function scheduleGuideJob(callback, delay) {
  const timeoutId = window.setTimeout(() => {
    guideState.pendingJobs.delete(timeoutId);
    callback();
  }, delay);

  guideState.pendingJobs.add(timeoutId);
}

function clearGuideJobs() {
  guideState.pendingJobs.forEach((timeoutId) => window.clearTimeout(timeoutId));
  guideState.pendingJobs.clear();
}

function clearSortingDemoJobs() {
  guideState.sortingDemoToken += 1;
  guideState.sortingDemoJobs.forEach((job) => {
    window.clearTimeout(job.timeoutId);
    job.resolve(false);
  });
  guideState.sortingDemoJobs.clear();
}

function clearCodingDemoJobs() {
  guideState.codingDemoToken += 1;
  guideState.codingDemoJobs.forEach((job) => {
    window.clearTimeout(job.timeoutId);
    job.resolve(false);
  });
  guideState.codingDemoJobs.clear();
  guideState.codingDemoPaused = false;

  if (guideState.codingDemoResizeObserver) {
    guideState.codingDemoResizeObserver.disconnect();
    guideState.codingDemoResizeObserver = null;
  }
}

function getGuideMobileDetectionStep() {
  const config = getGuideConfig(guideState.examId);

  if (!config) {
    return null;
  }

  return config.steps.find((step) => step.id === "mobile-camera") || null;
}

function updateGuideMobileDetection(status, detail) {
  const step = getGuideMobileDetectionStep();

  if (!guideState.examId || !step) {
    return;
  }

  const nextDetail = detail || step.detection?.idleDetail || "";
  const currentState = getDetectionState(guideState.examId, step);

  if (currentState.status === status && (currentState.detail || "") === nextDetail) {
    return;
  }

  setDetectionState(guideState.examId, step.id, {
    status,
    detail: nextDetail,
  });

  refreshGuideStepAfterDetection();
}

function getGuideMobileViewerFrame() {
  return (
    document.getElementById("guide-step2-live-frame") ||
    document.getElementById("guide-step3-live-probe")
  );
}

function requestGuideMobileViewerState() {
  const iframe = getGuideMobileViewerFrame();

  if (!iframe?.contentWindow) {
    return;
  }

  iframe.contentWindow.postMessage({ getDetailedState: true }, "*");
  iframe.contentWindow.postMessage({ getStreamIDs: true }, "*");
}

function stopGuideMobileRelayPolling() {
  if (guideState.mobileRelayPollTimer) {
    window.clearInterval(guideState.mobileRelayPollTimer);
    guideState.mobileRelayPollTimer = 0;
  }
}

function startGuideMobileRelayPolling() {
  stopGuideMobileRelayPolling();
  requestGuideMobileViewerState();

  guideState.mobileRelayPollTimer = window.setInterval(() => {
    requestGuideMobileViewerState();
  }, 2200);
}

function isGuideMobileRelayMessage(data) {
  if (!data || typeof data !== "object") {
    return false;
  }

  if (Array.isArray(data.streamIDs) && data.streamIDs.includes(guideState.mobileRelayStreamId)) {
    return true;
  }

  const directCandidates = [
    data.streamID,
    data.streamId,
    data.id,
    data.label,
    data.value && typeof data.value === "object" ? data.value.streamID : "",
  ];

  return directCandidates.includes(guideState.mobileRelayStreamId);
}

function handleGuideMobileRelayMessage(event) {
  if (!guideState.isOpen || !guideState.mobileRelayStreamId) {
    return;
  }

  const iframe = getGuideMobileViewerFrame();

  if (!iframe?.contentWindow || event.source !== iframe.contentWindow) {
    return;
  }

  const data = event.data;

  if (!data || typeof data !== "object") {
    return;
  }

  const action = typeof data.action === "string" ? data.action : "";
  const currentStep = getCurrentGuideStep();

  if (action === "video-element-added" || action === "guest-connected") {
    updateGuideMobileDetection("success", "手机第二机位已连接，演示区正在展示实时画面。正式进入考试前，请再次确认手机摆放角度。");
    updatePhotoUploadDetection("success", getPhotoUploadSuccessDetail());
    return;
  }

  if (action === "video-element-removed") {
    updateGuideMobileDetection("idle", "手机连接已断开。请重新扫码连接第二机位，连接成功后此区域会恢复实时视频。");
    updatePhotoUploadDetection("idle", "当前未开始演示型上传检测。请点击二维码进入拍照上传演示。");
    return;
  }

  if (action === "push-connection" || action === "view-connection") {
    if (data.value === false || data.value === "false" || data.value === 0) {
      updateGuideMobileDetection("idle", "手机连接已断开。请重新扫码连接第二机位，连接成功后此区域会恢复实时视频。");
      updatePhotoUploadDetection("idle", "当前未开始演示型上传检测。请点击二维码进入拍照上传演示。");
      return;
    }

    updateGuideMobileDetection("success", "手机第二机位已连接，演示区正在展示实时画面。正式进入考试前，请再次确认手机摆放角度。");
    updatePhotoUploadDetection("success", getPhotoUploadSuccessDetail());
    return;
  }

  if (Array.isArray(data.streamIDs) && data.streamIDs.includes(guideState.mobileRelayStreamId)) {
    updateGuideMobileDetection("success", "手机第二机位已连接，演示区正在展示实时画面。正式进入考试前，请再次确认手机摆放角度。");
    updatePhotoUploadDetection("success", getPhotoUploadSuccessDetail());
    return;
  }

  if (action === "details" && isGuideMobileRelayMessage(data)) {
    updateGuideMobileDetection("success", "手机第二机位已连接，演示区正在展示实时画面。正式进入考试前，请再次确认手机摆放角度。");
    updatePhotoUploadDetection("success", getPhotoUploadSuccessDetail());
    return;
  }

  if (currentStep?.id === "mobile-camera" && !action && isGuideMobileRelayMessage(data)) {
    updateGuideMobileDetection("success", "手机第二机位已连接，演示区正在展示实时画面。正式进入考试前，请再次确认手机摆放角度。");
    updatePhotoUploadDetection("success", getPhotoUploadSuccessDetail());
  }
}

function waitForSortingDemo(token, delay) {
  return new Promise((resolve) => {
    const job = {
      timeoutId: 0,
      resolve,
    };

    job.timeoutId = window.setTimeout(() => {
      guideState.sortingDemoJobs.delete(job);
      resolve(isSortingDemoCurrent(token));
    }, delay);

    guideState.sortingDemoJobs.add(job);
  });
}

function isSortingDemoCurrent(token) {
  return guideState.isOpen && token === guideState.sortingDemoToken && getCurrentGuideStep()?.id === "sorting-question";
}

function waitForCodingDemo(token, delay) {
  return new Promise((resolve) => {
    const job = {
      timeoutId: 0,
      resolve,
      remaining: delay,
      startedAt: 0,
    };

    job.start = () => {
      if (guideState.codingDemoPaused) {
        return;
      }

      job.startedAt = Date.now();
      job.timeoutId = window.setTimeout(() => {
        guideState.codingDemoJobs.delete(job);
        resolve(isCodingDemoCurrent(token));
      }, Math.max(0, job.remaining));
    };

    guideState.codingDemoJobs.add(job);
    job.start();
  });
}

function isCodingDemoCurrent(token) {
  return guideState.isOpen && token === guideState.codingDemoToken && getCurrentGuideStep()?.id === "coding-question";
}

function setCodingDemoPausedState(frame, paused) {
  if (frame) {
    frame.classList.toggle("is-paused", paused);
  }

  guideState.codingDemoPaused = paused;
}

function pauseCodingDemo(frame) {
  if (guideState.codingDemoPaused) {
    return;
  }

  guideState.codingDemoJobs.forEach((job) => {
    window.clearTimeout(job.timeoutId);
    job.timeoutId = 0;

    if (job.startedAt) {
      const elapsed = Date.now() - job.startedAt;
      job.remaining = Math.max(0, job.remaining - elapsed);
    }
  });

  setCodingDemoPausedState(frame, true);
}

function resumeCodingDemo(frame) {
  if (!guideState.codingDemoPaused) {
    return;
  }

  setCodingDemoPausedState(frame, false);
  guideState.codingDemoJobs.forEach((job) => {
    job.start?.();
  });
}

function getSortingDemoElements() {
  const shell = guideStepContent?.querySelector("[data-guide-sort-demo]");
  const list = shell?.querySelector("[data-guide-sort-list]");
  const cursor = shell?.querySelector("[data-guide-sort-cursor]");
  const hint = shell?.querySelector("[data-guide-sort-hint]");
  const target = shell?.querySelector("[data-sort-item='mobile']");

  if (!shell || !list || !cursor || !hint || !target) {
    return null;
  }

  return { shell, list, cursor, hint, target };
}

function resetSortingDemoOrder(list) {
  [...list.querySelectorAll("[data-sort-item]")]
    .sort((left, right) => Number(left.dataset.sortOrder) - Number(right.dataset.sortOrder))
    .forEach((item) => list.appendChild(item));
}

function animateGuideSortList(list, action) {
  const items = [...list.querySelectorAll(".guide-step4-item")];
  const firstRects = new Map(items.map((item) => [item, item.getBoundingClientRect()]));

  action();

  const reorderedItems = [...list.querySelectorAll(".guide-step4-item")];

  reorderedItems.forEach((item) => {
    const firstRect = firstRects.get(item);

    if (!firstRect) {
      return;
    }

    const lastRect = item.getBoundingClientRect();
    const deltaY = firstRect.top - lastRect.top;

    if (Math.abs(deltaY) < 1) {
      return;
    }

    item.style.transition = "none";
    item.style.transform = `translate3d(0, ${deltaY}px, 0)`;
  });

  void list.getBoundingClientRect();

  reorderedItems.forEach((item) => {
    if (!item.style.transform) {
      return;
    }

    item.style.transition = "";
    item.style.transform = "";
  });
}

function updateSortingHint(hint, text, tone) {
  hint.textContent = text;
  hint.classList.toggle("is-done", tone === "done");
  hint.classList.add("is-visible");
}

function hideSortingHint(hint) {
  hint.classList.remove("is-visible", "is-done");
}

function setSortingCursorPosition(cursor, x, y, duration, visible) {
  cursor.style.setProperty("--guide-sort-cursor-duration", `${duration}ms`);
  cursor.style.setProperty("--guide-sort-cursor-x", `${Math.round(x)}px`);
  cursor.style.setProperty("--guide-sort-cursor-y", `${Math.round(y)}px`);
  cursor.classList.toggle("is-visible", visible);
}

function moveSortingCursorToElement(shell, cursor, element, duration, offsets = {}) {
  const shellRect = shell.getBoundingClientRect();
  const rect = element.getBoundingClientRect();
  const x = rect.left - shellRect.left + (offsets.x ?? 14);
  const y = rect.top - shellRect.top + (offsets.y ?? rect.height / 2);

  setSortingCursorPosition(cursor, x, y, duration, true);
}

function resetSortingDemoVisuals(elements) {
  const { shell, list, cursor, hint, target } = elements;

  resetSortingDemoOrder(list);
  shell.classList.remove("is-dragging");
  list.classList.remove("is-dragging");
  cursor.classList.remove("is-holding");
  target.classList.remove("is-active");
  target.classList.remove("is-settled");
  hideSortingHint(hint);
  setSortingCursorPosition(cursor, list.clientWidth + 40, list.clientHeight + 28, 0, false);
}

async function runSortingQuestionDemoLoop(token, elements) {
  const { shell, list, cursor, hint, target } = elements;

  while (isSortingDemoCurrent(token)) {
    resetSortingDemoVisuals(elements);

    if (!(await waitForSortingDemo(token, 280))) {
      return;
    }

    setSortingCursorPosition(cursor, list.clientWidth + 22, list.clientHeight - 6, 0, true);

    if (!(await waitForSortingDemo(token, 220))) {
      return;
    }

    moveSortingCursorToElement(shell, cursor, target, 920, { x: 18 });

    if (!(await waitForSortingDemo(token, 960))) {
      return;
    }

    target.classList.add("is-active");
    shell.classList.add("is-dragging");
    list.classList.add("is-dragging");
    cursor.classList.add("is-holding");
    updateSortingHint(hint, "按住并拖动选项", "hold");

    if (!(await waitForSortingDemo(token, 420))) {
      return;
    }

    const firstItem = list.querySelector(".guide-step4-item");

    if (!firstItem) {
      return;
    }

    moveSortingCursorToElement(shell, cursor, firstItem, 760, { x: 18 });

    if (!(await waitForSortingDemo(token, 260))) {
      return;
    }

    animateGuideSortList(list, () => {
      list.insertBefore(target, list.firstElementChild);
    });

    if (!(await waitForSortingDemo(token, 860))) {
      return;
    }

    cursor.classList.remove("is-holding");
    setSortingCursorPosition(cursor, list.clientWidth + 32, 8, 0, false);
    shell.classList.remove("is-dragging");
    list.classList.remove("is-dragging");
    target.classList.remove("is-active");
    target.classList.add("is-settled");
    updateSortingHint(hint, "如需调整，可继续拖动修改", "done");

    if (!(await waitForSortingDemo(token, 2000))) {
      return;
    }

    hideSortingHint(hint);
    target.classList.remove("is-settled");

    animateGuideSortList(list, () => {
      resetSortingDemoOrder(list);
    });

    if (!(await waitForSortingDemo(token, 720))) {
      return;
    }
  }
}

function startSortingQuestionDemo() {
  const elements = getSortingDemoElements();

  if (!elements) {
    return;
  }

  clearSortingDemoJobs();
  const token = guideState.sortingDemoToken;

  window.requestAnimationFrame(() => {
    if (isSortingDemoCurrent(token)) {
      runSortingQuestionDemoLoop(token, elements);
    }
  });
}

function startCodingQuestionDemo() {
  const shell = guideStepContent?.querySelector("[data-guide-step5-shell]");
  const viewport = shell?.querySelector(".guide-step5-viewport");
  const frame = shell?.querySelector("[data-guide-step5-demo]");
  const canvas = frame?.querySelector(".guide-step5-demo-canvas");
  const focusBox = frame?.querySelector(".guide-step5-focus-box");
  const mouse = frame?.querySelector(".guide-step5-mouse");
  const promptText = frame?.querySelector("[data-guide-step5-prompt]");
  const langWrap = frame?.querySelector(".guide-step5-lang-wrap");
  const editableText = frame?.querySelector(".guide-step5-editable-text");
  const pastedInline = frame?.querySelector(".guide-step5-pasted-inline");
  const typingCursor = frame?.querySelector(".guide-step5-cursor");
  const panelBody = frame?.querySelector(".guide-step5-panel-body");
  const tabCase = frame?.querySelector("[data-guide-step5-tab='case']");
  const tabResult = frame?.querySelector("[data-guide-step5-tab='result']");
  const runButton = frame?.querySelector("[data-guide-step5-action='run']");
  const submitButton = frame?.querySelector("[data-guide-step5-action='submit']");
  const resultTitle = frame?.querySelector("[data-guide-step5-result-title]");
  const resultDesc = frame?.querySelector("[data-guide-step5-result-desc]");
  const questionPanel = frame?.querySelector(".guide-step5-question-panel");
  const workspacePanel = frame?.querySelector(".guide-step5-workspace-panel");
  const editorCard = frame?.querySelector(".guide-step5-editor-card");
  const resultBlock = frame?.querySelector(".guide-step5-bottom-panel");
  const typingLine = frame?.querySelector(".guide-step5-typing-line");
  const languageSelect = frame?.querySelector("[data-guide-step5-language-select]");
  const languageDropdown = frame?.querySelector("[data-guide-step5-language-dropdown]");
  const toolbar = frame?.querySelector(".guide-step5-toolbar");
  const resetButton = frame?.querySelector("[data-guide-step5-tool='reset']");
  const fullscreenButton = frame?.querySelector("[data-guide-step5-tool='fullscreen']");
  const copyButton = frame?.querySelector("[data-guide-step5-tool='copy']");
  const pasteButton = frame?.querySelector("[data-guide-step5-tool='paste']");

  if (
    !shell ||
    !viewport ||
    !frame ||
    !canvas ||
    !focusBox ||
    !mouse ||
    !promptText ||
    !langWrap ||
    !editableText ||
    !pastedInline ||
    !typingCursor ||
    !panelBody ||
    !tabCase ||
    !tabResult ||
    !runButton ||
    !submitButton ||
    !resultTitle ||
    !resultDesc ||
    !questionPanel ||
    !workspacePanel ||
    !editorCard ||
    !resultBlock ||
    !typingLine ||
    !languageSelect ||
    !languageDropdown ||
    !toolbar ||
    !resetButton ||
    !fullscreenButton ||
    !copyButton ||
    !pasteButton
  ) {
    return;
  }

  clearCodingDemoJobs();
  const token = guideState.codingDemoToken;

  const iconButtons = {
    reset: resetButton,
    fullscreen: fullscreenButton,
    copy: copyButton,
    paste: pasteButton,
  };

  const baseWidth = 856;
  const baseHeight = 490;
  const sampleCode = "return a + b;";
  let currentScaleX = 1;
  let currentScaleY = 1;

  function updateScale() {
    const rect = viewport.getBoundingClientRect();

    if (!rect.width || !rect.height) {
      return;
    }

    currentScaleX = rect.width / baseWidth;
    currentScaleY = rect.height / baseHeight;
    frame.style.transform = `translate(-50%, -50%) scale(${currentScaleX}, ${currentScaleY})`;
  }

  updateScale();

  if ("ResizeObserver" in window) {
    guideState.codingDemoResizeObserver = new ResizeObserver(() => {
      updateScale();
    });
    guideState.codingDemoResizeObserver.observe(viewport);
  }

  function resolveTarget(target) {
    if (typeof target === "string") {
      return frame.querySelector(target);
    }

    return target;
  }

  function getTargetRect(targets, padding = 10) {
    const nodes = []
      .concat(targets)
      .map(resolveTarget)
      .filter(Boolean);

    if (!nodes.length) {
      return null;
    }

    const canvasRect = canvas.getBoundingClientRect();
    const rects = nodes.map((node) => node.getBoundingClientRect());
    const left = Math.min(...rects.map((rect) => rect.left));
    const top = Math.min(...rects.map((rect) => rect.top));
    const right = Math.max(...rects.map((rect) => rect.right));
    const bottom = Math.max(...rects.map((rect) => rect.bottom));

    return {
      left: (left - canvasRect.left) / currentScaleX - padding,
      top: (top - canvasRect.top) / currentScaleY - padding,
      width: (right - left) / currentScaleX + padding * 2,
      height: (bottom - top) / currentScaleY + padding * 2,
    };
  }

  function showFocusRect(rect) {
    focusBox.style.left = `${rect.left}px`;
    focusBox.style.top = `${rect.top}px`;
    focusBox.style.width = `${rect.width}px`;
    focusBox.style.height = `${rect.height}px`;
    focusBox.classList.add("is-visible");
  }

  function showFocus(targets, padding = 10) {
    const rect = getTargetRect(targets, padding);

    if (!rect) {
      focusBox.classList.remove("is-visible");
      return;
    }

    showFocusRect(rect);
  }

  function hideFocus() {
    focusBox.classList.remove("is-visible");
  }

  function showMouse(target, offsetX = 0, offsetY = 0) {
    const element = resolveTarget(target);

    if (!element) {
      return;
    }

    const canvasRect = canvas.getBoundingClientRect();
    const rect = element.getBoundingClientRect();
    const x = (rect.left - canvasRect.left) / currentScaleX + rect.width / currentScaleX / 2 + offsetX;
    const y = (rect.top - canvasRect.top) / currentScaleY + rect.height / currentScaleY / 2 + offsetY;

    mouse.style.left = `${x}px`;
    mouse.style.top = `${y}px`;
    mouse.classList.add("is-visible");
  }

  function hideMouse() {
    mouse.classList.remove("is-visible", "is-clicking");
  }

  async function pause(delay) {
    return waitForCodingDemo(token, delay);
  }

  async function clickMouse(target, offsetX = 0, offsetY = 0) {
    showMouse(target, offsetX, offsetY);

    if (!(await pause(260))) {
      return false;
    }

    mouse.classList.add("is-clicking");

    if (!(await pause(160))) {
      return false;
    }

    mouse.classList.remove("is-clicking");
    return true;
  }

  async function typeCode(text) {
    editableText.textContent = "";

    for (let index = 0; index < text.length; index += 1) {
      editableText.textContent += text[index];

      if (!(await pause(60))) {
        return false;
      }
    }

    return true;
  }

  async function pulseButton(button) {
    button.classList.add("is-pressed");

    if (!(await pause(180))) {
      return false;
    }

    button.classList.remove("is-pressed");
    return true;
  }

  function activateToolbarButton(name) {
    Object.entries(iconButtons).forEach(([key, button]) => {
      button.classList.toggle("is-active", key === name);
      button.classList.toggle("is-emphasis", key === name);
    });
  }

  function setResultMode(active) {
    panelBody.classList.toggle("is-result", active);
    tabCase.classList.toggle("is-active", !active);
    tabResult.classList.toggle("is-active", active);
  }

  function setPrompt(stepIndex, text) {
    promptText.textContent = `${stepIndex}.${text}`;
  }

  function setPromptHtml(stepIndex, html) {
    promptText.innerHTML = `${stepIndex}.${html}`;
  }

  function clearStates() {
    setCodingDemoPausedState(frame, false);
    langWrap.classList.remove("is-open");
    canvas.classList.remove("is-fullscreen");
    editableText.textContent = "";
    editableText.classList.remove("is-selected");
    pastedInline.classList.remove("is-visible");
    panelBody.classList.remove("is-result");
    tabCase.classList.add("is-active");
    tabResult.classList.remove("is-active");
    runButton.classList.remove("is-active");
    submitButton.classList.remove("is-active");
    resultTitle.textContent = "3";
    resultDesc.textContent = "当前测试用例输出结果为 3。";

    Object.values(iconButtons).forEach((button) => {
      button.classList.remove("is-active", "is-emphasis", "is-pressed");
    });

    typingCursor.style.opacity = "1";
    hideFocus();
    hideMouse();
  }

  function toggleCodingDemoPlayback() {
    if (guideState.codingDemoPaused) {
      resumeCodingDemo(frame);
      return;
    }

    pauseCodingDemo(frame);
  }

  frame.addEventListener("click", toggleCodingDemoPlayback);

  async function playStepWithGap(stepPlayer) {
    if (!(await stepPlayer())) {
      return false;
    }

    return pause(300);
  }

  async function playStep1() {
    setPrompt(1, "请选择自己熟悉的编程语言进行作答。");
    showFocus([languageSelect, languageDropdown], 12);

    if (!(await clickMouse(languageSelect))) {
      return false;
    }

    langWrap.classList.add("is-open");
    return pause(2200);
  }

  async function playStep2() {
    setPrompt(2, "请在编译区内完成代码编写");
    langWrap.classList.remove("is-open");
    const editorRect = getTargetRect(editorCard, 8);

    if (editorRect) {
      showFocusRect(editorRect);
    }

    showMouse(typingLine, 80, 0);

    if (!(await pause(280))) {
      return false;
    }

    if (!(await typeCode(sampleCode))) {
      return false;
    }

    return pause(1200);
  }

  async function playStep3() {
    setPrompt(3, "选中编译器内的文字后，点击【复制】即可复制选中的内容。");
    editableText.classList.add("is-selected");
    activateToolbarButton("copy");
    showFocus([toolbar, editorCard], 16);

    if (!(await pause(700))) {
      return false;
    }

    if (!(await clickMouse(copyButton))) {
      return false;
    }

    if (!(await pulseButton(copyButton))) {
      return false;
    }

    return pause(1800);
  }

  async function playStep4() {
    setPrompt(4, "复制粘贴按钮仅对编译器内部的文字有效，且不受整张试卷禁止复制粘贴配置影响。");
    editableText.classList.remove("is-selected");
    activateToolbarButton("paste");
    showFocus([toolbar, editorCard], 16);

    if (!(await clickMouse(pasteButton))) {
      return false;
    }

    if (!(await pulseButton(pasteButton))) {
      return false;
    }

    pastedInline.classList.add("is-visible");

    if (!(await pause(1200))) {
      return false;
    }

    pastedInline.classList.remove("is-visible");
    return pause(900);
  }

  async function playStep5() {
    setPromptHtml(5, '如误改模板代码或想清空当前已有代码，可点击重置；<span class="guide-step5-prompt-danger">重置后你已编写的代码也会被清空。</span>');
    activateToolbarButton("reset");
    showFocus(resetButton, 14);

    if (!(await clickMouse(resetButton))) {
      return false;
    }

    if (!(await pulseButton(resetButton))) {
      return false;
    }

    return pause(2900);
  }

  async function playStep6() {
    setPrompt(6, "点击可切换全屏状态，再次点击可返回试卷。");
    activateToolbarButton("fullscreen");
    showFocus(fullscreenButton, 14);

    if (!(await clickMouse(fullscreenButton))) {
      return false;
    }

    if (!(await pulseButton(fullscreenButton))) {
      return false;
    }

    canvas.classList.add("is-fullscreen");

    if (!(await pause(450))) {
      return false;
    }

    showFocus([workspacePanel, editorCard, resultBlock, questionPanel], 18);
    return pause(1850);
  }

  async function playStep7() {
    setPrompt(7, "【运行】按钮用于运行当前测试用例。每次运行间隔为10秒，请珍惜每次运行机会。");
    runButton.classList.add("is-active");
    showFocus(runButton, 16);

    if (!(await clickMouse(runButton))) {
      return false;
    }

    if (!(await pause(260))) {
      return false;
    }

    resultTitle.textContent = "3";
    resultDesc.textContent = "当前测试用例输出结果为 3。";
    setResultMode(true);
    return pause(2200);
  }

  async function playStep8() {
    setPrompt(8, "【提交】按钮用于判断你的回答是否能通过最终验证。");
    runButton.classList.remove("is-active");
    submitButton.classList.add("is-active");
    showFocus(submitButton, 16);

    if (!(await clickMouse(submitButton))) {
      return false;
    }

    if (!(await pause(260))) {
      return false;
    }

    resultTitle.textContent = "通过";
    resultDesc.textContent = "代码已通过最终验证。";
    return pause(2000);
  }

  async function runLoop() {
    while (isCodingDemoCurrent(token)) {
      clearStates();

      if (!(await pause(500))) {
        return;
      }

      if (!(await playStepWithGap(playStep1))) {
        return;
      }

      if (!(await playStepWithGap(playStep2))) {
        return;
      }

      if (!(await playStepWithGap(playStep3))) {
        return;
      }

      if (!(await playStepWithGap(playStep4))) {
        return;
      }

      if (!(await playStepWithGap(playStep5))) {
        return;
      }

      if (!(await playStepWithGap(playStep6))) {
        return;
      }

      if (!(await playStepWithGap(playStep7))) {
        return;
      }

      if (!(await playStepWithGap(playStep8))) {
        return;
      }

      hideFocus();
      hideMouse();
    }
  }

  window.requestAnimationFrame(() => {
    if (isCodingDemoCurrent(token)) {
      updateScale();
      runLoop();
    }
  });
}

function resetRunningDetectionsForExam(examId) {
  const config = getGuideConfig(examId);

  if (!config) {
    return;
  }

  config.steps.forEach((step) => {
    if (!step.detection) {
      return;
    }

    const key = getDetectionKey(examId, step.id);
    const currentState = detectionStore.get(key);

    if (currentState?.status === "running") {
      detectionStore.set(key, {
        ...currentState,
        status: "idle",
        detail: step.detection.idleDetail,
      });
    }
  });
}

function stopGuideCameraStream() {
  guideState.cameraRequestToken += 1;

  if (guideState.cameraStream) {
    guideState.cameraStream.getTracks().forEach((track) => track.stop());
    guideState.cameraStream = null;
  }
}

function getDetectionBadge(step, detection) {
  if (!step.detection) {
    return {
      text: "无需检测",
      tone: "is-idle",
    };
  }

  if (step.detection.type === "mobile") {
    if (detection.status === "success") {
      return { text: "已连接", tone: "is-success" };
    }

    if (detection.status === "running") {
      return { text: "连接中", tone: "is-running" };
    }

    if (detection.status === "error") {
      return { text: "连接异常", tone: "is-error" };
    }

    return { text: "未连接", tone: "is-idle" };
  }

  if (detection.status === "success") {
    return { text: "检测成功", tone: "is-success" };
  }

  if (detection.status === "running") {
    return { text: "检测中", tone: "is-running" };
  }

  if (detection.status === "error") {
    return { text: "检测异常", tone: "is-error" };
  }

  return { text: "未开始", tone: "is-idle" };
}

function renderCameraPreviewFrame(detection) {
  if (detection.status === "success" && guideState.cameraStream) {
    return `<video class="guide-preview-video" id="guide-camera-preview" autoplay muted playsinline></video>`;
  }

  const previewStatusText =
    detection.status === "running"
      ? "正在读取摄像头权限"
      : detection.status === "error"
        ? "摄像头预览未开启"
        : "等待预览开始";

  const previewTitle =
    detection.status === "error"
      ? "检测未成功"
      : detection.status === "running"
        ? "准备预览中"
        : "点击下方按钮开始";

  return `
    <div class="guide-preview-placeholder">
      <span class="guide-preview-status">${previewStatusText}</span>
      <strong>${previewTitle}</strong>
      <span>浏览器授权成功后，会在此区域展示实时预览画面。</span>
    </div>
  `;
}

function renderCodingQuestionDemo() {
  return `
    <section class="guide-demo-surface guide-demo-surface-step5" data-guide-step5-shell aria-hidden="true">
      <div class="guide-step5-viewport">
        <div class="guide-step5-demo-frame" data-guide-step5-demo>
          <div class="guide-step5-demo-canvas">
            <div class="guide-step5-main-layout">
              <aside class="guide-step5-question-panel">
                <div class="guide-step5-crumb">计算a+b</div>
                <div class="guide-step5-example-card">
                  <p><strong>输入：</strong> a = 1, b = 2</p>
                  <p><strong>输出：</strong> 3</p>
                </div>
              </aside>

              <section class="guide-step5-workspace-panel">
                <div class="guide-step5-workspace-top">
                  <div class="guide-step5-lang-wrap">
                    <div class="guide-step5-lang-select" data-guide-step5-language-select>
                      <span>C</span>
                      <span class="guide-step5-caret"></span>
                    </div>
                    <div class="guide-step5-lang-dropdown" data-guide-step5-language-dropdown>
                      <div class="guide-step5-lang-option is-active">C</div>
                      <div class="guide-step5-lang-option">C++</div>
                      <div class="guide-step5-lang-option">Java</div>
                      <div class="guide-step5-lang-option">Python</div>
                    </div>
                  </div>

                  <div class="guide-step5-toolbar">
                    <button class="guide-step5-icon-button" type="button" data-guide-step5-tool="reset" aria-label="重置">
                      <svg viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M5.14258 6.27441C5.14258 6.59 4.88688 6.8457 4.57129 6.8457C4.25576 6.84563 4 6.58996 4 6.27441V3.10547C2.56649 4.30023 1.71387 6.07777 1.71387 8C1.71387 11.5048 4.52856 14.3456 8 14.3457C8.31545 14.3458 8.57117 14.6044 8.57129 14.9229C8.57129 15.2414 8.31553 15.4999 8 15.5C3.89738 15.4999 0.571289 12.1421 0.571289 8C0.571289 6.02795 1.33195 4.18337 2.64062 2.80762H0.577148C0.258523 2.80762 0 2.54909 0 2.23047C0.000162323 1.91198 0.258623 1.6543 0.577148 1.6543H5.14258V6.27441ZM8 0.5C12.1026 0.500076 15.4287 3.85791 15.4287 8C15.4287 9.97312 14.6674 11.8177 13.3594 13.1924H15.4229C15.7415 13.1924 16 13.4509 16 13.7695C15.9998 14.088 15.7414 14.3457 15.4229 14.3457H10.8574V9.72559C10.8574 9.41 11.1131 9.1543 11.4287 9.1543C11.7442 9.15437 12 9.41004 12 9.72559V12.8955C13.4324 11.7019 14.2852 9.92353 14.2852 8C14.2852 4.49516 11.4714 1.65437 8 1.6543C7.68455 1.65422 7.42883 1.39562 7.42871 1.07715C7.42871 0.75857 7.68447 0.500076 8 0.5Z"></path>
                      </svg>
                    </button>
                    <button class="guide-step5-icon-button" type="button" data-guide-step5-tool="fullscreen" aria-label="全屏">
                      <svg viewBox="0 0 16 16" aria-hidden="true">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 6H0V2C0 0.89543 0.89543 0 2 0H6V1H2C1.48716 1 1.06449 1.38604 1.00673 1.88338L1 2V6ZM15 10H16V14C16 15.1046 15.1046 16 14 16H10V15H14C14.5128 15 14.9355 14.614 14.9933 14.1166L15 14V10ZM10 0V1H14L14.1166 1.00673C14.1652 1.01237 14.2128 1.02151 14.259 1.03387L8.96447 6.32843L9.67157 7.03553L14.9661 1.74098C14.9882 1.82359 15 1.91042 15 2V6H16V2C16 0.89543 15.1046 0 14 0H10ZM6 15V16H2C1.6291 16 1.28177 15.899 0.984016 15.7231L0.964466 15.7426L0.877053 15.6552C0.667833 15.513 0.486989 15.3322 0.344773 15.1229L0.257359 15.0355L0.27691 15.016C0.100965 14.7182 0 14.3709 0 14V10H1V14C1 14.0896 1.01178 14.1764 1.03387 14.259L6.62132 8.67157L7.32843 9.37868L1.74098 14.9661C1.78721 14.9785 1.83476 14.9876 1.88338 14.9933L2 15H6Z"></path>
                      </svg>
                    </button>
                    <button class="guide-step5-icon-button" type="button" data-guide-step5-tool="copy" aria-label="复制">
                      <svg viewBox="0 0 16 16" aria-hidden="true">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 2C16 0.89543 15.1046 0 14 0H6C4.89543 0 4 0.89543 4 2V4H2C0.89543 4 0 4.89543 0 6V14C0 15.1046 0.89543 16 2 16H10C11.1046 16 12 15.1046 12 14V12H14C15.1046 12 16 11.1046 16 10V2ZM12 11H14C14.5128 11 14.9355 10.614 14.9933 10.1166L15 10V2C15 1.48716 14.614 1.06449 14.1166 1.00673L14 1H6C5.48716 1 5.06449 1.38604 5.00673 1.88338L5 2V4H10C11.1046 4 12 4.89543 12 6V11ZM6 12H11V14L10.9933 14.1166C10.9355 14.614 10.5128 15 10 15H2L1.88338 14.9933C1.38604 14.9355 1 14.5128 1 14V6L1.00673 5.88338C1.06449 5.38604 1.48716 5 2 5H4V10C4 11.1046 4.89543 12 6 12ZM5 5H10L10.1166 5.00673C10.614 5.06449 11 5.48716 11 6V11H6L5.88338 10.9933C5.38604 10.9355 5 10.5128 5 10V5Z"></path>
                      </svg>
                    </button>
                    <button class="guide-step5-icon-button" type="button" data-guide-step5-tool="paste" aria-label="粘贴">
                      <svg viewBox="0 0 16 16" aria-hidden="true">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3661 1.19787L14.8917 0.34713C14.5264 0.121456 14.1048 0 13.6667 0H13.108V1H13.6667C13.9178 1 14.1576 1.06909 14.3661 1.19787ZM15 2.52699H16V2.33333C16 2.00388 15.9314 1.68314 15.8003 1.38775L14.8862 1.79331C14.9609 1.96162 15 2.14426 15 2.33333V2.52699ZM16 4.52699H15V3.52699H16V4.52699ZM15 6.52699H16V5.52699H15V6.52699ZM16 8.52699H15V7.52699H16V8.52699ZM14.8538 10.2746L15.7433 10.7315C15.9112 10.4046 16 10.0415 16 9.66667V9.52699H15V9.66667C15 9.88166 14.9494 10.0883 14.8538 10.2746ZM13.6127 12V11H13.6667C13.8968 11 14.1174 10.942 14.3135 10.833L14.7996 11.7069C14.4558 11.8981 14.0681 12 13.6667 12H13.6127ZM12 11H12.6127V12H12V14C12 15.1046 11.1046 16 10 16H2C0.89543 16 0 15.1046 0 14V6C0 4.89543 0.89543 4 2 4H4V3.75237H5V4H10C11.1046 4 12 4.89543 12 6V11ZM9.61269 12V11H10.6127V12H9.61269ZM7.61269 11V12H8.61269V11H7.61269ZM5.43386 11.8202L5.81957 10.8976C5.98061 10.9649 6.15409 11 6.33333 11H6.61269V12H6.33333C6.02107 12 5.71654 11.9384 5.43386 11.8202ZM5.00113 9.72236L4.00197 9.76315C4.01981 10.2002 4.15874 10.6168 4.39971 10.973L5.22794 10.4126C5.09036 10.2092 5.01134 9.97225 5.00113 9.72236ZM4 7.75237H5V8.75237H4V7.75237ZM5 5.75237H4V6.75237H5V5.75237ZM5.06649 1.91594L4.11664 1.60323C4.03966 1.83706 4 2.08283 4 2.33333V2.75237H5V2.33333C5 2.1894 5.02263 2.04917 5.06649 1.91594ZM6.03886 0.0184572L6.16407 1.01059C5.91762 1.04169 5.68751 1.14082 5.49595 1.29568L4.86728 0.518002C5.20238 0.247116 5.6065 0.0730229 6.03886 0.0184572ZM8.10795 1V0H7.10795V1H8.10795ZM10.108 0V1H9.10795V0H10.108ZM12.108 1V0H11.108V1H12.108ZM10 5H2C1.48716 5 1.06449 5.38604 1.00673 5.88338L1 6V14C1 14.5128 1.38604 14.9355 1.88338 14.9933L2 15H10C10.5128 15 10.9355 14.614 10.9933 14.1166L11 14V6C11 5.48716 10.614 5.06449 10.1166 5.00673L10 5Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="guide-step5-editor-card">
                  <div class="guide-step5-editor-grid"></div>
                  <div class="guide-step5-code-area">
                    <div class="guide-step5-code-line">
                      <div class="guide-step5-line-no">1</div>
                      <div class="guide-step5-code"><span class="guide-step5-kw">#include</span> <span class="guide-step5-sym">&lt;stdio.h&gt;</span></div>
                    </div>
                    <div class="guide-step5-code-line">
                      <div class="guide-step5-line-no">2</div>
                      <div class="guide-step5-code"><span class="guide-step5-kw">#include</span> <span class="guide-step5-sym">&lt;stdlib.h&gt;</span></div>
                    </div>
                    <div class="guide-step5-code-line">
                      <div class="guide-step5-line-no">3</div>
                      <div class="guide-step5-code"><span class="guide-step5-kw">#include</span> <span class="guide-step5-sym">&lt;string.h&gt;</span></div>
                    </div>
                    <div class="guide-step5-code-line">
                      <div class="guide-step5-line-no">4</div>
                      <div class="guide-step5-code"> </div>
                    </div>
                    <div class="guide-step5-code-line">
                      <div class="guide-step5-line-no">5</div>
                      <div class="guide-step5-code"><span class="guide-step5-kw">int</span> <span class="guide-step5-func">sumab</span>(<span class="guide-step5-kw">int</span> a, <span class="guide-step5-kw">int</span> b) {</div>
                    </div>
                    <div class="guide-step5-code-line guide-step5-typing-line">
                      <div class="guide-step5-line-no">6</div>
                      <div class="guide-step5-code">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span class="guide-step5-editable-text"></span>
                        <span class="guide-step5-pasted-inline">
                          <span class="guide-step5-pasted-text">return a + b;</span>
                        </span>
                        <span class="guide-step5-cursor"></span>
                      </div>
                    </div>
                    <div class="guide-step5-code-line">
                      <div class="guide-step5-line-no">7</div>
                      <div class="guide-step5-code">}</div>
                    </div>
                  </div>
                </div>

                <div class="guide-step5-bottom-panel">
                  <div class="guide-step5-tabs">
                    <button class="guide-step5-tab is-active" type="button" data-guide-step5-tab="case">测试用例</button>
                    <button class="guide-step5-tab" type="button" data-guide-step5-tab="result">执行结果</button>
                  </div>
                  <div class="guide-step5-panel-body">
                    <div class="guide-step5-test-panel">
                      <div class="guide-step5-case-row">
                        <div class="guide-step5-case-tag">case1</div>
                        <div class="guide-step5-case-outline">自定义</div>
                      </div>
                      <div class="guide-step5-input-grid">
                        <div class="guide-step5-input-card">
                          <label>a =</label>
                          <div class="guide-step5-input-box">1</div>
                        </div>
                        <div class="guide-step5-input-card">
                          <label>b =</label>
                          <div class="guide-step5-input-box">2</div>
                        </div>
                      </div>
                    </div>

                    <div class="guide-step5-result-panel">
                      <div class="guide-step5-result-card">
                        <div class="guide-step5-result-title" data-guide-step5-result-title>3</div>
                        <div class="guide-step5-result-desc" data-guide-step5-result-desc>当前测试用例输出结果为 3。</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="guide-step5-action-row">
                  <button class="guide-step5-action-btn" type="button" data-guide-step5-action="run">运行</button>
                  <button class="guide-step5-action-btn" type="button" data-guide-step5-action="submit">提交</button>
                </div>
              </section>
            </div>

            <div class="guide-step5-focus-box"></div>
            <div class="guide-step5-prompt-card">
              <div class="guide-step5-prompt-text" data-guide-step5-prompt>1.请选择自己熟悉的编程语言进行作答。</div>
            </div>
            <div class="guide-step5-mouse"></div>
            <div class="guide-step5-pause-overlay" aria-hidden="true">
              <div class="guide-step5-pause-icon">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderGuideDemo(step, detection) {
  if (step.demoType === "desktop-camera") {
    const previewStatus =
      detection.status === "success"
        ? { text: "监控中", tone: "is-success" }
        : detection.status === "running"
          ? { text: "申请中", tone: "is-running" }
          : detection.status === "error"
            ? { text: "异常", tone: "is-error" }
            : { text: "待申请", tone: "is-idle" };

    const previewContent =
      detection.status === "success" && guideState.cameraStream
        ? `<video class="guide-preview-video" id="guide-camera-preview" autoplay muted playsinline></video>`
        : `
            <div class="guide-step1-preview-empty">
              <p class="guide-step1-preview-empty-title">检测会尝试读取浏览器摄像头权限</p>
              <p class="guide-step1-preview-empty-detail">${
                detection.status === "running"
                  ? "正在请求浏览器授权，请留意左上角权限提示。"
                  : "进入当前步骤后，浏览器会自动发起摄像头权限申请。"
              }</p>
            </div>
          `;

    const correctItems = [
      { text: "摄像头视角与视线平齐", noWrap: true },
      { text: "面部居中、肩部完整入镜" },
      { text: "环境光线均匀" },
      { text: "允许浏览器提示权限" },
    ];

    const wrongItems = [
      { label: "面部遮挡", image: guideStep1Assets.wrongBlocked },
      { label: "晃动模糊", image: guideStep1Assets.wrongBlur },
      { label: "拍摄不全", image: guideStep1Assets.wrongPartial },
      { label: "多人入境", image: guideStep1Assets.wrongMulti },
    ];

    return `
      <section class="guide-demo-surface guide-demo-surface-step1">
        <div class="guide-demo-header">
          <span class="guide-demo-title">演示区域</span>
          <span class="guide-demo-state guide-demo-state-step1">当前步骤自动演示中</span>
        </div>
        <div class="guide-step1-grid">
          <article class="guide-step1-preview-card">
            <h4>摄像头预览</h4>
            <div class="guide-step1-preview-frame">
              <span class="guide-step1-preview-badge ${previewStatus.tone}">
                <span class="guide-step1-preview-dot"></span>
                ${previewStatus.text}
              </span>
              ${previewContent}
            </div>
            <div class="guide-step1-preview-hint">
              <img alt="" src="${guideStep1Assets.infoIcon}">
              <span>请正对摄像头</span>
            </div>
          </article>
          <div class="guide-step1-side">
            <article class="guide-step1-card guide-step1-card-correct">
              <h4>正确拍摄示例</h4>
              <div class="guide-step1-correct-layout">
                <div class="guide-step1-correct-visual">
                  <img alt="" src="${guideStep1Assets.exampleCorrect}">
                </div>
                <ul class="guide-step1-rule-list">
                  ${correctItems
                    .map(
                      (item) => `
                        <li>
                          <span class="guide-step1-icon guide-step1-icon-success">
                            <img alt="" src="${guideStep1Assets.checkIcon}">
                          </span>
                          <span class="${item.noWrap ? "guide-step1-text-nowrap" : ""}">${item.text}</span>
                        </li>
                      `,
                    )
                    .join("")}
                </ul>
              </div>
            </article>
            <article class="guide-step1-card guide-step1-card-wrong">
              <h4>错误拍摄示例</h4>
              <div class="guide-step1-wrong-gallery">
                ${wrongItems
                  .map(
                    (item) => `
                      <div class="guide-step1-wrong-tile">
                        <div class="guide-step1-thumb">
                          <img alt="" src="${item.image}">
                        </div>
                        <div class="guide-step1-wrong-caption">
                          <span class="guide-step1-icon guide-step1-icon-error">
                            <img alt="" src="${guideStep1Assets.errorIcon}">
                          </span>
                          <span>${item.label}</span>
                        </div>
                      </div>
                    `,
                  )
                  .join("")}
              </div>
            </article>
          </div>
        </div>
      </section>
    `;
  }

  if (step.demoType === "mobile-camera") {
    const mobileGuidePayload = getMobileCameraGuidePayload(guideState.examId);
    const mobileState =
      detection.status === "success"
        ? { text: "已连接", tone: "is-success" }
        : detection.status === "running"
          ? { text: "连接中", tone: "is-running" }
          : detection.status === "error"
            ? { text: "连接异常", tone: "is-error" }
            : { text: "未连接", tone: "is-idle" };
    const correctItems = [
      "桌面、键盘和考生动作需同时入镜",
      "连接成功后不要随意移动手机",
      "浏览器若未连接成功，可重新扫码",
    ];

    const wrongItems = [
      { label: "晃动模糊", image: guideStep2Assets.wrongBlur },
      { label: "背对镜头", image: guideStep2Assets.wrongBack },
      { label: "角度不当", image: guideStep2Assets.wrongAngle },
      { label: "多人入境", image: guideStep2Assets.wrongMulti },
    ];

    return `
      <section class="guide-demo-surface guide-demo-surface-step2">
        <div class="guide-demo-header">
          <span class="guide-demo-title">演示区域</span>
          <span class="guide-demo-state guide-demo-state-step2">当前步骤自动演示中</span>
        </div>
        <div class="guide-step2-grid">
          <article class="guide-step2-preview-card">
            <h4>扫码连接说明</h4>
            <div class="guide-step2-preview-frame ${detection.status === "success" ? "is-live" : ""}">
              <div class="guide-step2-live-shell ${detection.status === "success" ? "is-visible" : ""}">
                <iframe
                  class="guide-step2-live-frame"
                  id="guide-step2-live-frame"
                  title="第二机位实时监控画面"
                  src="${mobileGuidePayload.viewerUrl}"
                  allow="autoplay; fullscreen"
                  referrerpolicy="origin"
                ></iframe>
              </div>
              <div class="guide-step2-preview-status ${mobileState.tone}">
                <span class="guide-step2-preview-dot"></span>
                <span>${mobileState.text}</span>
              </div>
              <div class="guide-step2-preview-overlay ${detection.status === "success" ? "is-hidden" : ""}">
                <div class="guide-step2-preview-banner">手机扫码开启手机摄像头</div>
                <img class="guide-step2-arrow guide-step2-arrow-left" alt="" src="${guideStep2Assets.arrowLeft}">
                <div class="guide-step2-qr-shell">
                  <a class="guide-step2-qr-link" href="${mobileGuidePayload.pageUrl}" target="_blank" rel="noreferrer">
                    <img alt="扫码打开手机后置摄像头连接页" src="${mobileGuidePayload.qrImageUrl}">
                  </a>
                </div>
                <img class="guide-step2-arrow guide-step2-arrow-right" alt="" src="${guideStep2Assets.arrowLeft}">
              </div>
            </div>
            <div class="guide-step2-preview-hint">
              <img alt="" src="${guideStep2Assets.hintIcon}">
              <span>连接后，请检查手机摆放角度</span>
            </div>
          </article>
          <div class="guide-step2-side">
            <article class="guide-step2-card guide-step2-card-correct">
              <h4>如何正确摆放手机摄像头</h4>
              <div class="guide-step2-correct-layout">
                <div class="guide-step2-correct-visual">
                  <img alt="" src="${guideStep2Assets.correctIllustration}">
                </div>
                <ul class="guide-step2-rule-list">
                  ${correctItems
                    .map(
                      (item) => `
                        <li>
                          <span class="guide-step2-icon guide-step2-icon-success">
                            <img alt="" src="${guideStep2Assets.successIcon}">
                          </span>
                          <span>${item}</span>
                        </li>
                      `,
                    )
                    .join("")}
                </ul>
              </div>
            </article>
            <article class="guide-step2-card guide-step2-card-wrong">
              <h4>错误摆放示例</h4>
              <div class="guide-step2-wrong-gallery">
                ${wrongItems
                  .map(
                    (item) => `
                      <div class="guide-step2-wrong-tile">
                        <div class="guide-step2-thumb">
                          <img alt="" src="${item.image}">
                        </div>
                        <div class="guide-step2-wrong-caption">
                          <span class="guide-step2-icon guide-step2-icon-error">
                            <img alt="" src="${guideStep2Assets.errorIcon}">
                          </span>
                          <span>${item.label}</span>
                        </div>
                      </div>
                    `,
                  )
                  .join("")}
              </div>
            </article>
          </div>
        </div>
      </section>
    `;
  }

  if (step.demoType === "photo-upload") {
    const photoUploadPayload = getPhotoUploadGuidePayload(guideState.examId);
    const shouldShowUploadSuccess = detection.status === "success";
    const uploadState =
      shouldShowUploadSuccess
        ? { text: "上传成功", tone: "is-success" }
        : detection.status === "running"
          ? { text: "跳转中", tone: "is-running" }
          : { text: "待扫码", tone: "is-idle" };
    const pointItems = [
      "电脑端先展示扫码二维码，手机扫码后进入拍照上传页",
      "网页会展示彩色校准二维码，使用手机拍摄屏幕中的二维码后上传",
      "上传结果仅用于演示反馈，不做持久化记录",
    ];

    return `
      <section class="guide-demo-surface guide-demo-surface-step3">
        <div class="guide-demo-header">
          <span class="guide-demo-title">演示区域</span>
          <span class="guide-demo-state guide-demo-state-step3">当前步骤自动演示中</span>
        </div>
        <div class="guide-step3-grid">
          <article class="guide-step3-preview-card">
            <h4>扫码连接说明</h4>
            <div class="guide-step3-preview-frame is-upload-qr">
              ${
                shouldShowUploadSuccess
                  ? `
                      <div class="guide-step3-preview-success">
                        <span class="guide-step3-preview-success-icon">
                          <img alt="" src="${guideStep3Assets.correctIcon}">
                        </span>
                        <strong>上传成功</strong>
                      </div>
                    `
                  : `
                      <div class="guide-step3-preview-upload">
                        <iframe
                          class="guide-step3-live-probe"
                          id="guide-step3-live-probe"
                          title="第三步手机连接状态监听"
                          src="${photoUploadPayload.probeUrl}"
                          allow="autoplay; fullscreen; camera; microphone; display-capture"
                          referrerpolicy="origin"
                          tabindex="-1"
                          aria-hidden="true"
                        ></iframe>
                        <div class="guide-step2-preview-status ${uploadState.tone}">
                          <span class="guide-step2-preview-dot"></span>
                          <span>${uploadState.text}</span>
                        </div>
                        <div class="guide-step2-preview-banner">手机扫码进入拍照上传页</div>
                        <img class="guide-step2-arrow guide-step2-arrow-left" alt="" src="${guideStep2Assets.arrowLeft}">
                        <div class="guide-step2-qr-shell">
                          <button
                            class="guide-step2-qr-link guide-step3-qr-trigger"
                            type="button"
                            data-guide-action="start-upload-preview"
                            aria-label="模拟扫码进入拍照上传页"
                          >
                            <img alt="扫码进入拍照上传页" src="${photoUploadPayload.qrImageUrl}">
                          </button>
                        </div>
                        <img class="guide-step2-arrow guide-step2-arrow-right" alt="" src="${guideStep2Assets.arrowLeft}">
                      </div>
                    `
              }
            </div>
            <div class="guide-step3-preview-hint">
              <img alt="" src="${guideStep3Assets.infoIcon}">
              <span class="guide-step3-preview-hint-text">请使用手机拍摄屏幕上的校准图后上传</span>
            </div>
          </article>
          <div class="guide-step3-side">
            <article class="guide-step3-visual-card">
              <div class="guide-step3-phone-demo" aria-hidden="true">
                <div class="guide-step3-phone-backdrop"></div>
                <div class="guide-step3-phone-step guide-step3-phone-step-1">
                  <div class="guide-step3-phone-shell">
                    <svg fill="none" viewBox="0 0 84 164" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <rect x="1" y="1" width="82" height="162" rx="10" fill="#273245" stroke="#273245" stroke-width="2" />
                        <path d="M11 3.5C6.85786 3.5 3.5 6.85786 3.5 11V153C3.5 157.142 6.85786 160.5 11 160.5H73C77.1421 160.5 80.5 157.142 80.5 153V11C80.5 6.85786 77.1421 3.5 73 3.5H58.9024V6.5C58.9024 9.26142 56.6639 11.5 53.9024 11.5H30.0976C27.3361 11.5 25.0976 9.26142 25.0976 6.5V3.5H11Z" fill="#EEF0F5" fill-rule="evenodd" clip-rule="evenodd" />
                        <path d="M37 6.5H47" stroke="#050412" stroke-width="3" stroke-linecap="round" />
                        <path d="M29.5 156.5H54.5" stroke="#050412" stroke-width="2" stroke-linecap="round" />
                        <rect x="8.5" y="18.5" width="67" height="127" rx="5" fill="#fff" />
                      </g>
                      <g>
                        <path d="M20 39.5C20 38.1193 21.1193 37 22.5 37H61.5C62.8807 37 64 38.1193 64 39.5V103.5C64 104.881 62.8807 106 61.5 106H22.5C21.1193 106 20 104.881 20 103.5L20 39.5Z" fill="#F8F8FA" fill-rule="evenodd" clip-rule="evenodd" />
                        <path d="M27.5 48H56.5" stroke="#CCD0D9" stroke-width="2" stroke-linecap="round" />
                        <path d="M27.5 56H36.5" stroke="#CCD0D9" stroke-width="2" stroke-linecap="round" />
                        <path d="M41.5 56H56.5" stroke="#CCD0D9" stroke-width="2" stroke-linecap="round" />
                        <path d="M27.5 64H42.5" stroke="#CCD0D9" stroke-width="2" stroke-linecap="round" />
                        <path d="M47.5 64H56.5" stroke="#CCD0D9" stroke-width="2" stroke-linecap="round" />
                        <path d="M27.5 72H41.5" stroke="#CCD0D9" stroke-width="2" stroke-linecap="round" />
                        <path d="M27.5 80H56.5" stroke="#CCD0D9" stroke-width="2" stroke-linecap="round" />
                        <path d="M27.5 88H56.5" stroke="#CCD0D9" stroke-width="2" stroke-linecap="round" />
                        <path d="M27.5 96H47.5" stroke="#CCD0D9" stroke-width="2" stroke-linecap="round" />
                      </g>
                      <g>
                        <path d="M16 43.5V37.5C16 35.2909 17.7909 33.5 20 33.5H26V33.5" stroke="#6484EE" stroke-width="2" />
                        <path d="M68 43V37C68 34.7909 66.2091 33 64 33H58V33" stroke="#6484EE" stroke-width="2" />
                        <path d="M16 100V106C16 108.209 17.7909 110 20 110H26V110" stroke="#6484EE" stroke-width="2" />
                        <path d="M68 99.5V105.5C68 107.709 66.2091 109.5 64 109.5H58V109.5" stroke="#6484EE" stroke-width="2" />
                      </g>
                      <circle cx="41" cy="123" r="8" fill="#5478EE" />
                    </svg>
                    <div class="guide-step3-phone-hand">
                      <svg width="60" height="75" viewBox="0 0 86.4832 108.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M56.4832 37.5C56.4832 33.3579 59.841 30 63.9832 30C68.1253 30 71.4832 33.3579 71.4832 37.5V47.5C71.4832 43.3579 74.841 40 78.9832 40C83.1253 40 86.4832 43.3579 86.4832 47.5C86.4832 47.5 86.4832 63.4924 86.4832 74.5834C86.4832 81.8029 85.8434 89.5875 85.1547 95.8755C84.3549 103.179 78.0907 108.5 70.7439 108.5H46.9862C39.9015 108.5 33.3456 104.752 29.7513 98.6468L1.357 50.4178C-1.01883 47.0248 -0.194219 42.3482 3.19882 39.9724C6.59186 37.5965 11.2685 38.4211 13.6443 41.8142L26.4832 63.2608V7.5C26.4832 3.35786 29.841 0 33.9832 0C38.1253 0 41.4832 3.35786 41.4832 7.5V27.5C41.4832 23.3579 44.841 20 48.9832 20C53.1253 20 56.4832 23.3579 56.4832 27.5V37.5Z" fill="#FFD9D8" fill-rule="evenodd" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p class="guide-step3-phone-desc"><span>Step 1:</span> 请使用手机对准答案「拍照」</p>
                </div>
                <div class="guide-step3-phone-step guide-step3-phone-step-2">
                  <div class="guide-step3-phone-shell">
                    <svg fill="none" viewBox="0 0 84 164" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="1" width="82" height="162" rx="10" fill="#273245" stroke="#273245" stroke-width="2" />
                      <path d="M11 3.5C6.85786 3.5 3.5 6.85786 3.5 11V153C3.5 157.142 6.85786 160.5 11 160.5H73C77.1421 160.5 80.5 157.142 80.5 153V11C80.5 6.85786 77.1421 3.5 73 3.5H58.9024V6.5C58.9024 9.26142 56.6639 11.5 53.9024 11.5H30.0976C27.3361 11.5 25.0976 9.26142 25.0976 6.5V3.5H11Z" fill="#EEF0F5" fill-rule="evenodd" clip-rule="evenodd" />
                      <path d="M37 6.5H47" stroke="#050412" stroke-width="3" stroke-linecap="round" />
                      <path d="M29.5 156.5H54.5" stroke="#050412" stroke-width="2" stroke-linecap="round" />
                      <rect x="8.5" y="18.5" width="67" height="127" rx="5" fill="#fff" />
                    </svg>
                    <div class="guide-step3-phone-paper">
                      <svg fill="none" viewBox="0 0 51 80" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 2.5C0 1.11929 1.11929 0 2.5 0H48.5C49.8807 0 51 1.11929 51 2.5V77.5C51 78.8807 49.8807 80 48.5 80H2.5C1.11929 80 0 78.8807 0 77.5L0 2.5Z" fill="#F8F8FA" fill-rule="evenodd" clip-rule="evenodd" />
                        <path d="M9 12.5H43" stroke="#CCD0D9" stroke-width="2" stroke-linecap="round" />
                        <path d="M9 21.5H19" stroke="#CCD0D9" stroke-width="2" stroke-linecap="round" />
                        <path d="M25 21.5H42" stroke="#CCD0D9" stroke-width="2" stroke-linecap="round" />
                        <path d="M9 30.5H26" stroke="#CCD0D9" stroke-width="2" stroke-linecap="round" />
                        <path d="M32 30.5H42" stroke="#CCD0D9" stroke-width="2" stroke-linecap="round" />
                        <path d="M9 40.5H25" stroke="#CCD0D9" stroke-width="2" stroke-linecap="round" />
                        <path d="M9 49.5H43" stroke="#CCD0D9" stroke-width="2" stroke-linecap="round" />
                        <path d="M9 58.5H43" stroke="#CCD0D9" stroke-width="2" stroke-linecap="round" />
                        <path d="M9 67.5H32" stroke="#CCD0D9" stroke-width="2" stroke-linecap="round" />
                      </svg>
                    </div>
                    <div class="guide-step3-phone-actions">
                      <span class="guide-step3-phone-chip guide-step3-phone-chip-muted">取消</span>
                      <span class="guide-step3-phone-chip guide-step3-phone-chip-primary guide-step3-phone-chip-upload">上传</span>
                    </div>
                  </div>
                  <p class="guide-step3-phone-desc"><span>Step 2:</span> 确认无误后点击「上传」</p>
                </div>
              </div>
            </article>
            <div class="guide-step3-points">
              <h4>操作要点</h4>
              <ul class="guide-step3-point-list">
                ${pointItems
                .map(
                  (item) => `
                    <li>
                      <span class="guide-step3-point-icon">
                        <img alt="" src="${guideStep3Assets.correctIcon}">
                      </span>
                      <span>${item}</span>
                    </li>
                  `,
                )
                .join("")}
              </ul>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  if (step.demoType === "sorting-question") {
    return `
      <section class="guide-demo-surface guide-demo-surface-step4">
        <div class="guide-demo-header">
          <span class="guide-demo-title">拖拽排序题演示</span>
          <span class="guide-demo-state guide-demo-state-step4">当前步骤自动演示中</span>
        </div>
        <div class="guide-step4-demo-stage" aria-hidden="true">
          <div class="guide-step4-board">
            <div class="guide-step4-board-header">
              <div class="guide-step4-board-copy">
                <span class="guide-step4-board-label">排序题题目区域</span>
                <h4>请按 考试开始前的优先级排序以下准备事项</h4>
                <p>拖拽左侧手柄即可调整顺序，越重要的事项越靠前。</p>
              </div>
              <span class="guide-step4-board-chip">循环演示中</span>
            </div>
            <div class="guide-step4-list-shell" data-guide-sort-demo>
              <div class="guide-step4-drop-slot"></div>
              <div class="guide-step4-toast" data-guide-sort-hint>按住并拖动选项</div>
              <div class="guide-step4-list" data-guide-sort-list>
                <div class="guide-step4-item guide-step4-item-a" data-sort-item="camera" data-sort-order="1">
                  <span class="guide-step4-item-handle"><span></span><span></span><span></span></span>
                  <div class="guide-step4-item-copy">
                    <strong>检查浏览器与摄像头权限</strong>
                  </div>
                </div>
                <div class="guide-step4-item guide-step4-item-b guide-step4-item-target" data-sort-item="mobile" data-sort-order="2">
                  <span class="guide-step4-item-handle"><span></span><span></span><span></span></span>
                  <div class="guide-step4-item-copy">
                    <strong>连接手机第二机位</strong>
                  </div>
                  <span class="guide-step4-item-tag">当前选中项</span>
                </div>
                <div class="guide-step4-item guide-step4-item-c" data-sort-item="desktop" data-sort-order="3">
                  <span class="guide-step4-item-handle"><span></span><span></span><span></span></span>
                  <div class="guide-step4-item-copy">
                    <strong>调整电脑端摄像头画面</strong>
                  </div>
                </div>
                <div class="guide-step4-item guide-step4-item-d" data-sort-item="environment" data-sort-order="4">
                  <span class="guide-step4-item-handle"><span></span><span></span><span></span></span>
                  <div class="guide-step4-item-copy">
                    <strong>确认答题环境与桌面整洁</strong>
                  </div>
                </div>
              </div>
              <div class="guide-step4-cursor" data-guide-sort-cursor>
                <svg viewBox="0 0 28 28" aria-hidden="true">
                  <path d="M5.5 3.5L19.5 16.2L13.2 17.7L16.4 24.5L12.7 26.1L9.5 19.3L4.8 23.8L5.5 3.5Z" fill="#7C3AED" stroke="#7C3AED" stroke-linejoin="round" stroke-width="1.2"/>
                </svg>
              </div>
            </div>
            <div class="guide-step4-footer-note">
              松开鼠标后，列表顺序会立即更新，并可继续拖动修改。
            </div>
          </div>
        </div>
      </section>
    `;
  }

  if (step.demoType === "coding-question") {
    return renderCodingQuestionDemo();
  }

  return `
    <section class="guide-demo-surface">
      <div class="guide-demo-header">
        <span class="guide-demo-title">演示区域</span>
        <span class="guide-demo-state">当前步骤自动演示中</span>
      </div>
      <div class="guide-code-layout">
        <article class="guide-code-window">
          <div class="guide-code-toolbar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <pre class="guide-code-body">function solve(input) {
  const lines = input.trim().split("\\n");
  // 先处理输入，再编写核心逻辑
  return lines.length;
}

console.log(solve(input));</pre>
        </article>
        <div class="guide-code-actions">
          <span class="guide-action-chip">编辑代码</span>
          <span class="guide-action-chip">运行示例</span>
          <span class="guide-action-chip">查看输出</span>
          <span class="guide-action-chip">正式提交</span>
        </div>
        <article class="guide-static-card">
          <h4>代码编辑、运行、提交说明</h4>
          <p>编程题的关键流程通常包含编辑代码、运行测试、查看输出与提交结果。弹窗内只做操作说明，不触发真实编译或正式提交。</p>
        </article>
      </div>
    </section>
  `;
}

function renderGuideDetection(step, detection) {
  const badge = getDetectionBadge(step, detection);

  if (!step.detection) {
    return `
      <section class="guide-detect-card">
        <div class="guide-card-header">
          <h4>检测结果区</h4>
          <span class="guide-detect-status ${badge.tone}">${badge.text}</span>
        </div>
        <div class="guide-empty-detect">当前步骤以题型说明为主，不涉及额外设备检测。你可以直接通过左侧导航切换其他步骤继续查看。</div>
      </section>
    `;
  }

  const detail = detection.detail || step.detection.idleDetail;

  if (step.detection.type === "camera") {
    return `
      <section class="guide-detect-card">
        <div class="guide-card-header">
          <h4>检测结果区</h4>
          <span class="guide-detect-status ${badge.tone}">${badge.text}</span>
        </div>
        <p class="guide-detect-detail">${detail}</p>
        <div class="guide-detect-preview">
          <h4>浏览器授权说明</h4>
          <p>检测会尝试读取浏览器摄像头权限。授权成功后展示实时预览；授权失败时，会显示失败提示与处理建议。</p>
        </div>
        <div class="guide-detect-actions">
          ${
            detection.status === "error"
              ? `<button class="button button-primary" type="button" data-guide-action="run-detection">重新检测</button>`
              : ""
          }
          ${
            detection.status === "success"
              ? `<button class="guide-ghost-button" type="button" data-guide-action="stop-camera">停止预览</button>`
              : ""
          }
        </div>
      </section>
    `;
  }

  if (step.detection.type === "mobile") {
    return `
      <section class="guide-detect-card">
        <div class="guide-card-header">
          <h4>检测结果区</h4>
          <span class="guide-detect-status ${badge.tone}">${badge.text}</span>
        </div>
        <p class="guide-detect-detail">${detail}</p>
        <div class="guide-detect-preview">
          <h4>连接状态说明</h4>
          <p>请使用手机扫描演示区二维码并允许后置摄像头权限。连接成功后，桌面端演示区域会自动切换为实时视频流。</p>
        </div>
      </section>
    `;
  }

  return `
    <section class="guide-detect-card">
      <div class="guide-card-header">
        <h4>检测结果区</h4>
        <span class="guide-detect-status ${badge.tone}">${badge.text}</span>
      </div>
      <p class="guide-detect-detail">${detail}</p>
      <div class="guide-detect-preview">
        <h4>上传反馈说明</h4>
        <p>该检测为演示型上传流程，不会触发真实后端提交，也不会保存任何正式考试答案数据。</p>
      </div>
      <div class="guide-detect-actions">
        <button class="button button-primary" type="button" data-guide-action="run-detection">模拟上传反馈</button>
        ${
          detection.status === "success"
            ? `<button class="guide-ghost-button" type="button" data-guide-action="reset-detection">重新演示</button>`
            : ""
        }
      </div>
    </section>
  `;
}

function renderGuideCurrentStep(config, step, resetTip) {
  if (!guideStepContent) {
    return;
  }

  guideStepContent.classList.toggle("is-sorting-question", step.id === "sorting-question");

  if (step.id !== "sorting-question") {
    clearSortingDemoJobs();
  }

  if (step.id !== "coding-question") {
    clearCodingDemoJobs();
  }

  if (resetTip) {
    guideState.tipIndex = 0;
  }

  const detection = getDetectionState(guideState.examId, step);
  const tipText = step.tips[guideState.tipIndex] || step.tips[0] || "";
  const shouldRenderPanelGrid = !["desktop-camera", "mobile-camera", "photo-upload", "sorting-question", "coding-question"].includes(step.id);

  guideStepContent.innerHTML = `
    <div class="guide-step-panel is-${step.id}">
      <div>
        <div class="guide-step-meta">STEP ${String(guideState.currentStepIndex + 1).padStart(2, "0")} / ${String(config.steps.length).padStart(2, "0")}</div>
        <h3>${step.title}</h3>
        <p class="guide-step-description">${step.description}</p>
      </div>
      ${renderGuideDemo(step, detection)}
      ${
        shouldRenderPanelGrid
          ? `
              <div class="guide-panel-grid">
                <section class="guide-points-card">
                  <div class="guide-card-header">
                    <h4>操作要点 / 自动播放提示</h4>
                    <span class="guide-autoplay-indicator">当前步骤自动演示中</span>
                  </div>
                  <ul class="guide-points-list">
                    ${step.keyPoints.map((item) => `<li>${item}</li>`).join("")}
                  </ul>
                  <div class="guide-tip-box">
                    <span class="guide-tip-label">自动播放提示</span>
                    <p class="guide-tip-text" data-guide-tip-text>${tipText}</p>
                  </div>
                </section>
                ${renderGuideDetection(step, detection)}
              </div>
            `
          : ""
      }
    </div>
  `;

  if (resetTip) {
    guideStepContent.scrollTop = 0;
  }

  startGuideTipRotation(step);
  attachGuideCameraStream();
  attachGuideMobileRelayFrame();
}

function renderGuideSidebar(config) {
  if (!guideStepList || !guideStepCount) {
    return;
  }

  guideStepCount.textContent = `共 ${config.steps.length} 步`;
  guideStepList.innerHTML = config.steps
    .map((step, index) => {
      const isActive = index === guideState.currentStepIndex;

      return `
        <button class="guide-step-nav ${isActive ? "is-active" : ""}" type="button" data-guide-step-index="${index}">
          <span class="guide-step-index">${String(index + 1).padStart(2, "0")}</span>
          <span>
            <span class="guide-step-name">${step.navName}</span>
            <span class="guide-step-summary">${step.navSummary}</span>
          </span>
        </button>
      `;
    })
    .join("");
}

function startGuideTipRotation(step) {
  stopGuideTipRotation();

  if (!step.tips || step.tips.length <= 1) {
    return;
  }

  guideState.tipTimer = window.setInterval(() => {
    guideState.tipIndex = (guideState.tipIndex + 1) % step.tips.length;

    const tipTarget = guideStepContent?.querySelector("[data-guide-tip-text]");

    if (tipTarget) {
      tipTarget.textContent = step.tips[guideState.tipIndex];
    }
  }, 2800);
}

function renderGuideModal(resetTip, runEntryEffects) {
  const config = getGuideConfig(guideState.examId);
  const step = getCurrentGuideStep();

  if (!config || !step || !guideModalSubtitle) {
    return;
  }

  guideModalSubtitle.textContent = config.subtitle;
  renderGuideSidebar(config);
  renderGuideCurrentStep(config, step, resetTip);

  if (runEntryEffects) {
    runGuideStepEntryEffects(step);
  }
}

function openGuideModal(examId) {
  const config = getGuideConfig(examId);

  if (!config || !guideModalRoot) {
    return;
  }

  guideState.lastFocusedElement = document.activeElement;
  guideState.isOpen = true;
  guideState.examId = examId;
  guideState.currentStepIndex = 0;
  guideState.tipIndex = 0;
  ensureGuideMobileSession(examId);

  guideModalRoot.hidden = false;
  document.body.classList.add("is-modal-open");
  renderGuideModal(true, true);
  guideCloseButton?.focus();
}

function closeGuideModal() {
  if (!guideState.isOpen || !guideModalRoot) {
    return;
  }

  stopGuideTipRotation();
  clearGuideJobs();
  clearSortingDemoJobs();
  clearCodingDemoJobs();
  stopGuideMobileRelayPolling();
  stopGuideCameraStream();
  resetRunningDetectionsForExam(guideState.examId);
  resetGuideMobileSession();

  guideState.isOpen = false;
  guideState.examId = "";
  guideState.currentStepIndex = 0;
  guideState.tipIndex = 0;

  guideModalRoot.hidden = true;
  document.body.classList.remove("is-modal-open");

  if (guideState.lastFocusedElement instanceof HTMLElement) {
    guideState.lastFocusedElement.focus();
  }
}

function setGuideStep(index) {
  const config = getGuideConfig(guideState.examId);

  if (!config || index < 0 || index >= config.steps.length) {
    return;
  }

  clearSortingDemoJobs();
  clearCodingDemoJobs();
  stopGuideMobileRelayPolling();
  stopGuideCameraStream();
  guideState.currentStepIndex = index;
  renderGuideModal(true, true);
}

function attachGuideCameraStream() {
  const step = getCurrentGuideStep();
  const video = document.getElementById("guide-camera-preview");

  if (!step || step.id !== "desktop-camera" || !video || !guideState.cameraStream) {
    return;
  }

  video.srcObject = guideState.cameraStream;
  video.onloadedmetadata = () => {
    video.play().catch(() => {});
  };
}

function attachGuideMobileRelayFrame() {
  const step = getCurrentGuideStep();
  const iframe = getGuideMobileViewerFrame();

  if (!step || !["mobile-camera", "photo-upload"].includes(step.id) || !iframe) {
    stopGuideMobileRelayPolling();
    return;
  }

  iframe.addEventListener(
    "load",
    () => {
      requestGuideMobileViewerState();
    },
    { once: true },
  );

  startGuideMobileRelayPolling();
}

function refreshGuideStepAfterDetection() {
  if (!guideState.isOpen) {
    return;
  }

  renderGuideModal(false, false);
}

function getCameraErrorMessage(error) {
  if (!window.isSecureContext) {
    return "当前页面环境不支持直接读取摄像头。若在本地原型中无法授权，可改用 localhost 或在正式考试环境中再次检测。";
  }

  if (error && error.name === "NotAllowedError") {
    return "浏览器已拒绝摄像头权限，请在地址栏或浏览器设置中允许访问后重试。";
  }

  if (error && error.name === "NotFoundError") {
    return "未检测到可用摄像头设备，请检查外设连接或系统权限设置。";
  }

  return "摄像头检测未成功，请检查浏览器授权、系统隐私设置或稍后重试。";
}

async function runCameraDetection(step) {
  const examId = guideState.examId;

  if (!examId) {
    return;
  }

  stopGuideCameraStream();
  setDetectionState(examId, step.id, {
    status: "running",
    detail: "正在请求浏览器摄像头权限并准备实时预览，请稍候…",
  });
  refreshGuideStepAfterDetection();

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    setDetectionState(examId, step.id, {
      status: "error",
      detail: "当前浏览器不支持摄像头检测。你仍可继续进入正式考试，检测结果仅供参考。",
    });
    refreshGuideStepAfterDetection();
    return;
  }

  const requestToken = guideState.cameraRequestToken + 1;
  guideState.cameraRequestToken = requestToken;

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "user",
        width: { ideal: 1280 },
        height: { ideal: 960 },
        resizeMode: "crop-and-scale",
      },
      audio: false,
    });

    if (!guideState.isOpen || requestToken !== guideState.cameraRequestToken || guideState.examId !== examId) {
      stream.getTracks().forEach((track) => track.stop());
      return;
    }

    guideState.cameraStream = stream;
    setDetectionState(examId, step.id, {
      status: "success",
      detail: "摄像头授权成功，当前已展示实时预览。正式进入考试前可再次确认拍摄角度与光线。",
    });
    refreshGuideStepAfterDetection();
  } catch (error) {
    if (requestToken !== guideState.cameraRequestToken) {
      return;
    }

    setDetectionState(examId, step.id, {
      status: "error",
      detail: getCameraErrorMessage(error),
    });
    refreshGuideStepAfterDetection();
  }
}

function runMockDetection(step) {
  const examId = guideState.examId;

  if (!examId) {
    return;
  }

  const runningDetail =
    step.detection.type === "mobile"
      ? "正在模拟扫码连接手机端机位，请保持当前考试说明弹窗开启…"
      : "正在模拟拍照上传流程与结果反馈，请稍候…";

  const successDetail =
    step.detection.type === "mobile"
      ? "模拟连接成功，当前已切换为“已连接”状态。正式考试时请使用同一账号扫码并保持手机机位稳定。"
      : "模拟上传完成，当前已返回演示型上传成功反馈。正式考试中请以真实上传结果提示为准。";

  setDetectionState(examId, step.id, {
    status: "running",
    detail: runningDetail,
  });
  refreshGuideStepAfterDetection();

  scheduleGuideJob(() => {
    setDetectionState(examId, step.id, {
      status: "success",
      detail: successDetail,
    });
    refreshGuideStepAfterDetection();
  }, 1400);
}

function resetGuideDetection(step) {
  if (!guideState.examId || !step.detection) {
    return;
  }

  if (step.detection.type === "camera") {
    stopGuideCameraStream();
  }

  if (step.detection.type === "mobile") {
    stopGuideMobileRelayPolling();
    resetGuideMobileSession();
    ensureGuideMobileSession(guideState.examId);
  }

  setDetectionState(guideState.examId, step.id, {
    status: "idle",
    detail: step.detection.idleDetail,
  });
  refreshGuideStepAfterDetection();
}

function runGuideStepEntryEffects(step) {
  if (step.demoType === "sorting-question") {
    startSortingQuestionDemo();
    return;
  }

  if (step.demoType === "coding-question") {
    startCodingQuestionDemo();
    return;
  }

  if (!step.detection) {
    return;
  }

  if (step.detection.type === "camera") {
    runCameraDetection(step);
  }
}

function handleGuideAction(action) {
  const step = getCurrentGuideStep();

  if (!step) {
    return;
  }

  if (action === "run-detection") {
    if (step.detection?.type === "camera") {
      runCameraDetection(step);
      return;
    }

    if (step.detection?.type === "upload") {
      runMockDetection(step);
    }

    return;
  }

  if (action === "start-upload-preview") {
    if (step.detection?.type === "upload") {
      setDetectionState(guideState.examId, step.id, {
        status: "success",
        detail: getPhotoUploadSuccessDetail(),
      });
      refreshGuideStepAfterDetection();
    }

    return;
  }

  if (action === "reset-detection") {
    resetGuideDetection(step);
    return;
  }

  if (action === "stop-camera") {
    resetGuideDetection(step);
  }
}

function openGuideModalFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const targetExamId = params.get("guideDemo");
  const targetStep = Number(params.get("guideStep") || "1");
  const shouldShowUploadPreview = params.get("uploadPreview") === "1";

  if (!targetExamId || !guideConfigs[targetExamId]) {
    return;
  }

  openGuideModal(targetExamId);

  if (Number.isFinite(targetStep) && targetStep > 1) {
    window.setTimeout(() => {
      setGuideStep(Math.min(targetStep - 1, guideConfigs[targetExamId].steps.length - 1));

      if (shouldShowUploadPreview) {
        setDetectionState(targetExamId, "photo-upload", {
          status: "success",
          detail: getPhotoUploadSuccessDetail(),
        });
        refreshGuideStepAfterDetection();
      }
    }, 60);
    return;
  }

  if (shouldShowUploadPreview) {
    setGuideStep(2);
    setDetectionState(targetExamId, "photo-upload", {
      status: "success",
      detail: getPhotoUploadSuccessDetail(),
    });
    refreshGuideStepAfterDetection();
  }
}

window.addEventListener("message", handleGuideMobileRelayMessage);

segments.forEach((button) => {
  button.addEventListener("click", () => {
    state.activeFilter = button.dataset.filter || "all";
    updateList();
  });
});

if (filterForm) {
  filterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    applyFormState();
  });

  filterForm.addEventListener("reset", () => {
    window.setTimeout(() => {
      state.keyword = "";
      state.type = "";
      state.start = "";
      state.end = "";
      state.activeFilter = "all";
      updateList();
    }, 0);
  });
}

if (keywordInput) {
  keywordInput.addEventListener("input", applyFormState);
}

if (typeSelect) {
  typeSelect.addEventListener("change", applyFormState);
}

if (examList) {
  examList.addEventListener("click", (event) => {
    const link = event.target.closest(".card-link");
    const note = event.target.closest(".exam-note");

    if (note) {
      const card = note.closest(".exam-card");
      const examId = card?.dataset.id;

      if (examId) {
        openGuideModal(examId);
      }

      return;
    }

    if (link) {
      event.preventDefault();
    }
  });
}

if (guideStepList) {
  guideStepList.addEventListener("click", (event) => {
    const stepButton = event.target.closest("[data-guide-step-index]");

    if (!stepButton) {
      return;
    }

    setGuideStep(Number(stepButton.dataset.guideStepIndex));
  });
}

if (guideStepContent) {
  guideStepContent.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-guide-action]");

    if (!actionButton) {
      return;
    }

    handleGuideAction(actionButton.dataset.guideAction || "");
  });
}

if (guideModalRoot) {
  guideModalRoot.addEventListener("click", (event) => {
    if (event.target.closest("[data-guide-close]")) {
      closeGuideModal();
    }
  });
}

if (guideCloseButton) {
  guideCloseButton.addEventListener("click", closeGuideModal);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && guideState.isOpen) {
    closeGuideModal();
  }
});

if (refreshButton) {
  refreshButton.addEventListener("click", () => {
    refreshButton.classList.remove("is-spinning");
    void refreshButton.offsetWidth;
    refreshButton.classList.add("is-spinning");
    window.setTimeout(() => {
      refreshButton.classList.remove("is-spinning");
    }, 650);
    updateList();
  });
}

renderCalendar();
renderSchedule();
renderNotices();
syncSelectState();
updateList();
openGuideModalFromQuery();
