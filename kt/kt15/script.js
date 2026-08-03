const MCQ_QUESTIONS = [
  {
    question:"Apakah maksud laporan?",
    options:[
      "Kenyataan formal yang menyampaikan maklumat lengkap",
      "Senarai harga peralatan",
      "Arahan pemasangan sahaja",
      "Senarai nama pengguna"
    ],
    answer:"Kenyataan formal yang menyampaikan maklumat lengkap"
  },
  {
    question:"Apakah tujuan utama dokumentasi aset syarikat?",
    options:[
      "Mengesan aset, lokasi dan keadaan",
      "Meningkatkan kelajuan Internet",
      "Menggantikan sistem operasi",
      "Memadam semua data"
    ],
    answer:"Mengesan aset, lokasi dan keadaan"
  },
  {
    question:"Yang manakah contoh aset ketara?",
    options:[
      "Komputer dan pencetak",
      "Lesen perisian",
      "Hak cipta",
      "Nama domain"
    ],
    answer:"Komputer dan pencetak"
  },
  {
    question:"Mengapakah pemacu peranti diperlukan?",
    options:[
      "Membolehkan perkakasan berfungsi dengan betul",
      "Menambah kapasiti RAM secara fizikal",
      "Menggantikan kad grafik",
      "Menghapuskan nombor siri"
    ],
    answer:"Membolehkan perkakasan berfungsi dengan betul"
  },
  {
    question:"Apakah fungsi sandaran data?",
    options:[
      "Melindungi data daripada kehilangan",
      "Mengurangkan saiz monitor",
      "Menggantikan papan kekunci",
      "Meningkatkan voltan bekalan kuasa"
    ],
    answer:"Melindungi data daripada kehilangan"
  },
  {
    question:"Kad jaminan digunakan untuk?",
    options:[
      "Membuktikan hak pembaikan atau penggantian",
      "Mengukur suhu CPU",
      "Menguji kabel rangkaian",
      "Menyusun ikon desktop"
    ],
    answer:"Membuktikan hak pembaikan atau penggantian"
  },
  {
    question:"Siapakah yang menjalankan UAT?",
    options:[
      "Pengguna sebenar",
      "Pereka logo",
      "Pembekal elektrik",
      "Pengawal keselamatan"
    ],
    answer:"Pengguna sebenar"
  },
  {
    question:"Apakah kandungan penting laporan UAT?",
    options:[
      "Keputusan dijangka dan keputusan sebenar",
      "Senarai makanan",
      "Warna meja",
      "Jadual cuti"
    ],
    answer:"Keputusan dijangka dan keputusan sebenar"
  },
  {
    question:"Apakah rajah terbina?",
    options:[
      "Rajah akhir keadaan sebenar selepas perubahan",
      "Rajah sebelum projek bermula",
      "Gambar hiasan tanpa maklumat",
      "Senarai pembekal"
    ],
    answer:"Rajah akhir keadaan sebenar selepas perubahan"
  },
  {
    question:"Apakah rajah skematik?",
    options:[
      "Rajah simbol yang menunjukkan hubungan komponen",
      "Gambar realistik sahaja",
      "Jadual kewangan",
      "Senarai inventori makanan"
    ],
    answer:"Rajah simbol yang menunjukkan hubungan komponen"
  }
];

const MATCHING_ITEMS = [
  {term:"Dokumentasi aset",answer:"Rekod terperinci harta atau aset syarikat"},
  {term:"Kad jaminan",answer:"Dokumen hak pembaikan atau penggantian"},
  {term:"Laporan UAT",answer:"Rekod keputusan ujian pengguna sebenar"},
  {term:"Rajah terbina",answer:"Rajah akhir keadaan sebenar selepas perubahan"},
  {term:"Rajah skematik",answer:"Rajah simbol hubungan komponen"}
];

const CORRECT_SEQUENCE = [
  "Kumpulkan maklumat dan bukti",
  "Semak ketepatan data",
  "Susun maklumat mengikut format",
  "Sediakan laporan",
  "Dapatkan pengesahan",
  "Simpan dan arkibkan laporan"
];

let sequenceState = [];
let currentProfile = null;

function shuffle(array){
  const copy = [...array];
  for(let i = copy.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

document.addEventListener("DOMContentLoaded", function(){
  currentProfile = getProfile();
  showCandidate();
  renderMCQ();
  renderMatching();
  renderSequence();
  restoreLockedResult();
});

function getProfile(){
  if(typeof C01Storage !== "undefined" && C01Storage.requireProfile){
    return C01Storage.requireProfile();
  }

  const raw = localStorage.getItem("c01_student_profile");
  const profile = raw ? JSON.parse(raw) : null;

  if(!profile){
    location.href = "../../login.html";
    throw new Error("Profil pelatih diperlukan.");
  }

  return profile;
}

function saveProfile(profile){
  if(typeof C01Storage !== "undefined" && C01Storage.saveProfile){
    return C01Storage.saveProfile(profile);
  }

  localStorage.setItem("c01_student_profile", JSON.stringify(profile));
  return profile;
}

function showCandidate(){
  candidateName.textContent = currentProfile.name || "Pelatih";
  candidateId.textContent = currentProfile.id || "-";

  currentProfile.attempts = currentProfile.attempts || {};
  attemptNo.textContent = (currentProfile.attempts[15] || 0) + 1;
}

function renderMCQ(){
  const questions = shuffle(MCQ_QUESTIONS);

  mcqContainer.innerHTML = questions.map((item,index)=>{
    const choices = shuffle(item.options);

    return `
      <article class="question-card" data-answer="${encodeURIComponent(item.answer)}">
        <p>${index + 1}. ${item.question}</p>
        ${choices.map(choice=>`
          <label class="answer-option">
            <input type="radio" name="mcq_${index}" value="${encodeURIComponent(choice)}">
            ${choice}
          </label>
        `).join("")}
      </article>
    `;
  }).join("");
}

function renderMatching(){
  const options = MATCHING_ITEMS.map(item=>item.answer);

  matchingContainer.innerHTML = shuffle(MATCHING_ITEMS).map((item,index)=>`
    <div class="match-row" data-answer="${encodeURIComponent(item.answer)}">
      <strong>${index + 1}. ${item.term}</strong>
      <select>
        <option value="">Pilih jawapan</option>
        ${shuffle(options).map(option=>`
          <option value="${encodeURIComponent(option)}">${option}</option>
        `).join("")}
      </select>
    </div>
  `).join("");
}

function renderSequence(){
  sequenceState = shuffle(CORRECT_SEQUENCE);

  if(sequenceState.every((item,index)=>item === CORRECT_SEQUENCE[index])){
    sequenceState = shuffle(CORRECT_SEQUENCE);
  }

  drawSequence();
}

function drawSequence(){
  sequenceContainer.innerHTML = `
    <div class="sequence-list">
      ${sequenceState.map((item,index)=>`
        <div class="sequence-item">
          <span>${item}</span>
          <div class="sequence-controls">
            <button type="button" onclick="moveStep(${index},-1)">▲</button>
            <button type="button" onclick="moveStep(${index},1)">▼</button>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function moveStep(index,direction){
  const newIndex = index + direction;

  if(newIndex < 0 || newIndex >= sequenceState.length){
    return;
  }

  [sequenceState[index],sequenceState[newIndex]] =
    [sequenceState[newIndex],sequenceState[index]];

  drawSequence();
}

function allAnswered(){
  const allMcq = [...document.querySelectorAll(".question-card")].every(card=>
    card.querySelector("input:checked")
  );

  const allMatching = [...document.querySelectorAll(".match-row select")].every(select=>
    select.value
  );

  const reportComplete =
    reportUser.value.trim() &&
    reportAsset.value.trim() &&
    reportSerial.value.trim() &&
    reportWork.value.trim() &&
    reportUat.value &&
    reportComment.value.trim();

  return allMcq && allMatching && reportComplete;
}

function scoreMCQ(){
  const cards = [...document.querySelectorAll(".question-card")];
  let correct = 0;

  cards.forEach(card=>{
    const selected = card.querySelector("input:checked");
    if(selected && selected.value === card.dataset.answer){
      correct++;
    }
  });

  return correct * 4;
}

function scoreMatching(){
  const rows = [...document.querySelectorAll(".match-row")];
  const correct = rows.filter(row=>
    row.querySelector("select").value === row.dataset.answer
  ).length;

  return correct * 4;
}

function scoreSequence(){
  const correct = sequenceState.filter((item,index)=>
    item === CORRECT_SEQUENCE[index]
  ).length;

  return Math.round((correct / CORRECT_SEQUENCE.length) * 20);
}

function scoreReport(){
  let score = 0;

  if(reportUser.value.trim().length >= 3) score += 3;
  if(reportAsset.value.trim().length >= 4) score += 4;
  if(reportSerial.value.trim().length >= 4) score += 4;
  if(reportWork.value.trim().length >= 5) score += 4;
  if(reportUat.value) score += 3;
  if(reportComment.value.trim().length >= 5) score += 2;

  return score;
}

function submitKT15(){
  currentProfile = getProfile();

  if(currentProfile.officialMarks?.[15]?.locked){
    alert("Markah rasmi KT15 telah dikunci.");
    restoreLockedResult();
    return;
  }

  if(currentProfile.pendingAssessments?.[15]){
    showPending(currentProfile.pendingAssessments[15]);
    return;
  }

  if(!allAnswered()){
    alert("Sila jawab semua soalan dan lengkapkan simulasi laporan.");
    return;
  }

  const sectionA = scoreMCQ();
  const sectionB = scoreMatching();
  const sectionC = scoreSequence();
  const sectionD = scoreReport();
  const total = sectionA + sectionB + sectionC + sectionD;
  const passed = total >= 60;

  currentProfile.scores = currentProfile.scores || {};
  currentProfile.attempts = currentProfile.attempts || {};
  currentProfile.pendingAssessments = currentProfile.pendingAssessments || {};
  currentProfile.completed = currentProfile.completed || [];

  currentProfile.scores[15] = total;
  currentProfile.attempts[15] = (currentProfile.attempts[15] || 0) + 1;

  const record = {
    score: total,
    sectionA,
    sectionB,
    sectionC,
    sectionD,
    passed,
    status: passed ? "MENUNGGU_PENGESAHAN" : "BELUM_TERAMPIL",
    submittedAt: new Date().toISOString(),
    attempt: currentProfile.attempts[15]
  };

  if(passed){
    currentProfile.pendingAssessments[15] = record;

    if(!currentProfile.completed.includes(15)){
      currentProfile.completed.push(15);
    }

    currentProfile.xp = Number(currentProfile.xp || 0) + 150;
    currentProfile.coins = Number(currentProfile.coins || 0) + 30;
  }

  saveProfile(currentProfile);
  attemptNo.textContent = currentProfile.attempts[15] + 1;

  if(passed){
    showPending(record);
  }else{
    showFail(record);
  }
}

function showPending(record){
  candidateStatus.textContent = "MENUNGGU PENGESAHAN";

  resultPanel.innerHTML = `
    <div class="result-card pass">
      <h2>Markah Sementara: ${record.score}%</h2>

      <div class="score-grid">
        <div><span>Bahagian A</span><strong>${record.sectionA}/40</strong></div>
        <div><span>Bahagian B</span><strong>${record.sectionB}/20</strong></div>
        <div><span>Bahagian C</span><strong>${record.sectionC}/20</strong></div>
        <div><span>Bahagian D</span><strong>${record.sectionD}/20</strong></div>
      </div>

      <h3>⏳ MENUNGGU PENGESAHAN PEGAWAI PENILAI</h3>
      <p>Markah ini belum rasmi sehingga disahkan oleh Pegawai Penilai.</p>
    </div>
  `;

  submitButton.disabled = true;
  submitButton.textContent = "MENUNGGU PENGESAHAN";
}

function showFail(record){
  candidateStatus.textContent = "BELUM TERAMPIL";

  resultPanel.innerHTML = `
    <div class="result-card fail">
      <h2>Markah: ${record.score}%</h2>

      <div class="score-grid">
        <div><span>Bahagian A</span><strong>${record.sectionA}/40</strong></div>
        <div><span>Bahagian B</span><strong>${record.sectionB}/20</strong></div>
        <div><span>Bahagian C</span><strong>${record.sectionC}/20</strong></div>
        <div><span>Bahagian D</span><strong>${record.sectionD}/20</strong></div>
      </div>

      <h3>❌ BELUM TERAMPIL</h3>
      <p>Ulang kaji KP15 dan cuba semula. Markah lulus ialah 60%.</p>
    </div>
  `;
}

function restoreLockedResult(){
  currentProfile = getProfile();

  const official = currentProfile.officialMarks?.[15];
  const pending = currentProfile.pendingAssessments?.[15];

  if(official?.locked){
    candidateStatus.textContent = "TERAMPIL";
    submitButton.disabled = true;
    submitButton.textContent = "MARKAH RASMI DIKUNCI";

    resultPanel.innerHTML = `
      <div class="result-card official">
        <h2>Markah Rasmi: ${official.score}%</h2>
        <h3>✅ TERAMPIL</h3>
        <p>Markah telah disahkan oleh Pegawai Penilai.</p>
      </div>
    `;
    return;
  }

  if(pending){
    showPending(pending);
  }
}

function resetCurrentAttempt(){
  currentProfile = getProfile();

  if(currentProfile.pendingAssessments?.[15] || currentProfile.officialMarks?.[15]?.locked){
    alert("Jawapan tidak boleh diset semula kerana penilaian sedang menunggu pengesahan atau telah dikunci.");
    return;
  }

  location.reload();
}

function toggleFullscreen(){
  if(!document.fullscreenElement){
    document.documentElement.requestFullscreen?.();
  }else{
    document.exitFullscreen?.();
  }
}
