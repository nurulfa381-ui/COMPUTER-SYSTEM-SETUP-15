const slides=[{"title": "PENYEDIAAN LAPORAN SISTEM KOMPUTER", "text": "Pengenalan KP15, tujuan pembelajaran dan kepentingan menyediakan laporan yang lengkap."}, {"title": "HASIL PEMBELAJARAN", "text": "Menjelaskan laporan sistem komputer, dokumentasi aset, laporan UAT, rajah terbina, rajah skematik, senarai semak dan pesanan kerja."}, {"title": "APA ITU LAPORAN?", "text": "Laporan ialah kenyataan formal yang menyampaikan maklumat lengkap tentang sesuatu keadaan, masalah atau hasil kerja."}, {"title": "TUJUAN LAPORAN SISTEM KOMPUTER", "text": "Merekod keadaan sistem, kerja yang dilakukan, keputusan ujian, masalah dan tindakan susulan."}, {"title": "CIRI LAPORAN YANG BAIK", "text": "Tepat, jelas, lengkap, tersusun, boleh disahkan dan mudah dirujuk."}, {"title": "STRUKTUR ASAS LAPORAN", "text": "Tajuk, tarikh, butiran pengguna, butiran komputer, kerja dilakukan, keputusan, pengesahan dan ulasan."}, {"title": "ALIRAN PENYEDIAAN LAPORAN", "text": "Kumpul maklumat → Semak bukti → Susun data → Tulis laporan → Sahkan → Simpan."}, {"title": "BUKTI DALAM LAPORAN", "text": "Gambar, nombor siri, keputusan ujian, senarai semak, tandatangan dan dokumen sokongan."}, {"title": "KESILAPAN BIASA", "text": "Maklumat tidak lengkap, tarikh salah, nombor aset tidak tepat, tiada bukti dan tiada pengesahan."}, {"title": "RUMUSAN BAHAGIAN 1", "text": "Laporan memastikan kerja pemasangan dan pengujian boleh disemak, dibuktikan dan dirujuk semula."}, {"title": "DOKUMENTASI ASET SYARIKAT", "text": "Dokumentasi terperinci tentang harta atau aset yang dimiliki dan disimpan oleh syarikat."}, {"title": "TUJUAN DOKUMENTASI ASET", "text": "Mengesan lokasi, pemilik, nilai, keadaan, sejarah penyelenggaraan dan status aset."}, {"title": "CONTOH ASET SYARIKAT", "text": "Komputer, pencetak, pengimbas, mesin faks, kabel rangkaian, peranti elektronik, perabot dan kenderaan."}, {"title": "MAKLUMAT REKOD ASET", "text": "Nombor aset, nama item, model, nombor siri, tarikh perolehan, lokasi, pemilik dan keadaan."}, {"title": "ASET KETARA", "text": "Aset fizikal yang boleh dilihat dan diukur seperti komputer, pencetak dan perabot."}, {"title": "ASET TIDAK KETARA", "text": "Aset bukan fizikal seperti perisian dan hak penggunaan yang memberi manfaat kepada organisasi."}, {"title": "SISTEM OPERASI SEBAGAI ASET", "text": "Sistem operasi menjadi sebahagian penting komputer kerana komputer tidak dapat berfungsi tanpanya."}, {"title": "PERISIAN SEBAGAI ASET", "text": "Perisian ialah aset tidak ketara yang digunakan dalam operasi syarikat untuk tempoh tertentu."}, {"title": "PEMACU PERANTI", "text": "Pemacu membolehkan perkakasan berfungsi dengan betul dan perlu sepadan dengan peranti yang dipasang."}, {"title": "SANDARAN DATA", "text": "Sandaran data membantu melindungi syarikat daripada kehilangan data dan menyokong pemulihan bencana."}, {"title": "KAD JAMINAN", "text": "Dokumen bertulis yang menyatakan janji pembaikan atau penggantian dalam tempoh tertentu."}, {"title": "MAKLUMAT KAD JAMINAN", "text": "Nama pelanggan, model, nombor siri, tarikh pembelian, tempoh jaminan, penjual dan syarat."}, {"title": "KEPENTINGAN JAMINAN BERTULIS", "text": "Memudahkan tuntutan, mengelakkan penipuan dan membuktikan hak pengguna."}, {"title": "RUMUSAN DOKUMENTASI ASET", "text": "Semua aset perlu direkod, disahkan dan dikemas kini untuk kawalan inventori yang berkesan."}, {"title": "LAPORAN UAT", "text": "Laporan Ujian Penerimaan Pengguna merekod keputusan ujian oleh pengguna sebenar."}, {"title": "TUJUAN UAT", "text": "Memastikan sistem boleh melaksanakan tugas dunia sebenar mengikut spesifikasi sebelum diterima."}, {"title": "KANDUNGAN LAPORAN UAT", "text": "Senario ujian, keputusan dijangka, keputusan sebenar, status, komen, tarikh dan pengesahan pengguna."}, {"title": "STATUS UAT", "text": "Lulus, gagal, perlu pembetulan, uji semula atau diterima dengan syarat."}, {"title": "RAJAH TERBINA", "text": "Rajah akhir yang menunjukkan keadaan sebenar selepas semua perubahan dan pemasangan disiapkan."}, {"title": "MAKLUMAT RAJAH TERBINA", "text": "Nota, pengubahsuaian, perubahan lokasi, laluan kabel, komponen dan tarikh semakan."}, {"title": "KEPENTINGAN RAJAH TERBINA", "text": "Menjadi rujukan penyelenggaraan, pembaikan, naik taraf dan audit pada masa hadapan."}, {"title": "RAJAH SKEMATIK", "text": "Rajah yang menggunakan simbol untuk menunjukkan hubungan dan susunan komponen komputer."}, {"title": "KELEBIHAN SIMBOL", "text": "Simbol memudahkan pemahaman merentas bahasa dan menjadikan rajah lebih ringkas."}, {"title": "RAJAH TERBINA VS SKEMATIK", "text": "Rajah terbina menunjukkan keadaan sebenar; rajah skematik menunjukkan hubungan melalui simbol."}, {"title": "SENARAI SEMAK SET-UP", "text": "Senarai tugasan yang memastikan semua tetapan komputer dilakukan secara konsisten dan lengkap."}, {"title": "KANDUNGAN SENARAI SEMAK", "text": "Perkakasan, sistem operasi, pemacu, aplikasi, rangkaian, keselamatan, ujian dan pengesahan."}, {"title": "LAPORAN PESANAN KERJA", "text": "Dokumen rujukan yang menerangkan kerja atau perubahan yang diminta dan perlu dilaksanakan."}, {"title": "LAPORAN SELEPAS KERJA", "text": "Menyatakan sama ada tugas berjaya, masalah yang ditemui, tindakan pembetulan dan status akhir."}, {"title": "SIMULASI PENYEDIAAN LAPORAN", "text": "Pelatih menyusun bukti, melengkapkan rekod aset dan menyediakan ringkasan kerja."}, {"title": "RUMUSAN KP15", "text": "Dokumentasi yang tepat memastikan aset, ujian, perubahan dan kerja set-up boleh disahkan."}];let currentSlide=0;let sequence=[];const correctSequence=["Kumpulkan maklumat dan bukti","Semak ketepatan data","Susun maklumat mengikut format","Sediakan laporan","Dapatkan pengesahan","Simpan dan arkibkan laporan"];document.addEventListener("DOMContentLoaded",()=>{renderSlide();renderMenu();showActivity("matching")});function renderSlide(){const item=slides[currentSlide];const icons=["📄","🎯","📘","🧾","✅","🗂️","🔄","📷","⚠️","🏆","🏢","🔍","🖥️","🔢","🪑","💿","🪟","📦","🧩","💾","🛡️","📋","✍️","📚","🤝","🧪","📝","✅","📐","🛠️","🔧","🔌","🌐","⚖️","☑️","📋","🧾","📊","🧑‍💻","🏁"];slideStage.innerHTML=`<article><p class="eyebrow">PAPARAN ${currentSlide+1} / 40</p><h2 class="slide-title">${item.title}</h2><div class="slide-grid"><div class="slide-content"><p>${item.text}</p><div class="info-box"><strong>INFO PENTING</strong><p>${getExtra(currentSlide)}</p></div></div><div class="visual"><div><div class="visual-icon">${icons[currentSlide]}</div><strong>${item.title}</strong></div></div></div></article>`;slideCounter.textContent=`${currentSlide+1} / 40`;progressBar.style.width=`${((currentSlide+1)/slides.length)*100}%`;prevBtn.disabled=currentSlide===0;nextBtn.textContent=currentSlide===slides.length-1?"SELESAI →":"SETERUSNYA →"}function getExtra(i){const t=["Laporan yang baik mesti boleh dibaca dan disahkan oleh pihak lain.","Gunakan nombor aset dan nombor siri yang tepat.","Bukti bergambar membantu menyokong maklumat dalam laporan.","Setiap perubahan pada sistem perlu direkodkan.","UAT mesti melibatkan pengguna sebenar.","Kad jaminan perlu disimpan bersama dokumen pembelian.","Senarai semak membantu mengurangkan kecuaian.","Rajah skematik menggunakan simbol, bukan gambar realistik."];return t[i%t.length]}function changeSlide(s){if(currentSlide===slides.length-1&&s>0){document.querySelector(".activity-panel").scrollIntoView({behavior:"smooth"});return}currentSlide=Math.max(0,Math.min(slides.length-1,currentSlide+s));renderSlide();window.scrollTo({top:0,behavior:"smooth"})}function renderMenu(){slideMenu.innerHTML=slides.map((s,i)=>`<button onclick="goSlide(${i})">${i+1}. ${s.title}</button>`).join("")}function showMenu(){menuModal.classList.remove("hidden")}function hideMenu(){menuModal.classList.add("hidden")}function goSlide(i){currentSlide=i;hideMenu();renderSlide();window.scrollTo({top:0,behavior:"smooth"})}function toggleProjector(){document.body.classList.toggle("projector")}function toggleFullscreen(){if(!document.fullscreenElement)document.documentElement.requestFullscreen?.();else document.exitFullscreen?.()}function speakCurrent(){if(!("speechSynthesis"in window))return alert("Audio tidak disokong.");speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(slides[currentSlide].title+". "+slides[currentSlide].text);u.lang="ms-MY";u.rate=.88;speechSynthesis.speak(u)}function shuffle(a){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b}function showActivity(t){if(t==="matching")renderMatching();if(t==="sequence")renderSequence();if(t==="asset")renderAsset();if(t==="uat")renderUAT()}function renderMatching(){const items=[["Dokumentasi aset","Rekod terperinci harta atau aset syarikat"],["Kad jaminan","Dokumen janji pembaikan atau penggantian"],["Laporan UAT","Rekod keputusan ujian oleh pengguna sebenar"],["Rajah terbina","Rajah akhir selepas perubahan sebenar"],["Rajah skematik","Rajah simbol hubungan komponen"]];const opts=items.map(x=>x[1]);activityContent.innerHTML=`<div class="activity-card"><h3>PADANKAN ISTILAH</h3>${shuffle(items).map(x=>`<div class="match-row" data-answer="${x[1]}"><strong>${x[0]}</strong><select><option value="">Pilih jawapan</option>${shuffle(opts).map(o=>`<option>${o}</option>`).join("")}</select></div>`).join("")}<button onclick="checkMatching()">SEMAK PADANAN</button><div id="matchResult" class="result"></div></div>`}function checkMatching(){const rows=[...document.querySelectorAll(".match-row")];const score=rows.filter(r=>r.querySelector("select").value===r.dataset.answer).length;matchResult.textContent=score===rows.length?"✅ Semua padanan betul.":"❌ "+score+" daripada "+rows.length+" padanan betul."}function renderSequence(){sequence=shuffle(correctSequence);drawSequence()}function drawSequence(){activityContent.innerHTML=`<div class="activity-card"><h3>SUSUN LANGKAH PENYEDIAAN LAPORAN</h3><div class="sequence-list">${sequence.map((x,i)=>`<div class="sequence-item"><span>${x}</span><div><button onclick="move(${i},-1)">▲</button><button onclick="move(${i},1)">▼</button></div></div>`).join("")}</div><button onclick="checkSequence()">SEMAK URUTAN</button><div id="sequenceResult" class="result"></div></div>`}function move(i,d){const n=i+d;if(n<0||n>=sequence.length)return;[sequence[i],sequence[n]]=[sequence[n],sequence[i]];drawSequence()}function checkSequence(){sequenceResult.textContent=sequence.every((x,i)=>x===correctSequence[i])?"✅ Urutan tepat.":"❌ Urutan belum tepat."}function renderAsset(){activityContent.innerHTML=`<div class="activity-card"><h3>SIMULASI REKOD ASET</h3><div class="form-row"><label>Nama aset</label><input id="assetName" type="text"></div><div class="form-row"><label>Nombor aset</label><input id="assetNo" type="text"></div><div class="form-row"><label>Nombor siri</label><input id="serialNo" type="text"></div><div class="form-row"><label>Lokasi</label><input id="locationInput" type="text"></div><button onclick="checkAsset()">SIMPAN REKOD</button><div id="assetResult" class="result"></div></div>`}function checkAsset(){assetResult.textContent=[assetName,assetNo,serialNo,locationInput].every(x=>x.value.trim())?"✅ Rekod aset lengkap dan boleh disimpan.":"❌ Lengkapkan semua maklumat aset."}function renderUAT(){activityContent.innerHTML=`<div class="activity-card"><h3>SIMULASI LAPORAN UAT</h3><div class="form-row"><label>Senario ujian</label><input id="scenario" type="text"></div><div class="form-row"><label>Keputusan dijangka</label><input id="expected" type="text"></div><div class="form-row"><label>Keputusan sebenar</label><input id="actual" type="text"></div><div class="form-row"><label>Status</label><select id="uatStatus"><option value="">Pilih</option><option>Lulus</option><option>Gagal</option><option>Uji semula</option></select></div><button onclick="checkUAT()">SIMPAN LAPORAN UAT</button><div id="uatResult" class="result"></div></div>`}function checkUAT(){uatResult.textContent=scenario.value.trim()&&expected.value.trim()&&actual.value.trim()&&uatStatus.value?"✅ Laporan UAT lengkap.":"❌ Lengkapkan semua medan UAT."}

/* =========================
   FASA 2 PREMIUM
========================= */

const KP15_GAME_KEY = "c01_kp15_game_v2";

function defaultGameState(){
  return {
    xp: 0,
    coins: 0,
    badges: [],
    completedActivities: [],
    completed: false,
    progress: 0
  };
}

function loadGameState(){
  try{
    return {
      ...defaultGameState(),
      ...JSON.parse(localStorage.getItem(KP15_GAME_KEY) || "{}")
    };
  }catch(error){
    return defaultGameState();
  }
}

function saveGameState(state){
  localStorage.setItem(KP15_GAME_KEY, JSON.stringify(state));
  updateStats();
}

function rewardActivity(activityId, xp=20, coins=5, badge=null){
  const state = loadGameState();

  if(!state.completedActivities.includes(activityId)){
    state.completedActivities.push(activityId);
    state.xp += xp;
    state.coins += coins;

    if(badge && !state.badges.includes(badge)){
      state.badges.push(badge);
    }

    saveGameState(state);
    byteFeedback(`Syabas! Anda memperoleh ${xp} XP dan ${coins} coin.`);
  }
}

function updateStats(){
  const state = loadGameState();
  const slideProgress = Math.round(((currentSlide + 1) / slides.length) * 100);
  state.progress = Math.max(state.progress || 0, slideProgress);
  localStorage.setItem(KP15_GAME_KEY, JSON.stringify(state));

  const xpEl = document.getElementById("xpValue");
  const coinEl = document.getElementById("coinValue");
  const badgeEl = document.getElementById("badgeValue");
  const progressEl = document.getElementById("progressValue");

  if(xpEl) xpEl.textContent = state.xp;
  if(coinEl) coinEl.textContent = state.coins;
  if(badgeEl) badgeEl.textContent = state.badges.length;
  if(progressEl) progressEl.textContent = `${state.progress}%`;
}

function byteFeedback(message){
  const el = document.getElementById("byteMessage");
  if(el) el.textContent = message;
}

function speakByte(){
  const el = document.getElementById("byteMessage");
  if(!el || !("speechSynthesis" in window)) return;

  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(el.textContent);
  utterance.lang = "ms-MY";
  utterance.rate = 0.88;
  speechSynthesis.speak(utterance);
}

/* Tambah sokongan aktiviti baharu */
const originalShowActivity = showActivity;
showActivity = function(type){
  if(type === "serial") return renderSerialCheck();
  if(type === "report") return renderReportBuilder();
  return originalShowActivity(type);
};

function renderSerialCheck(){
  activityContent.innerHTML = `
    <div class="activity-card">
      <h3>SIMULASI SEMAK NOMBOR SIRI</h3>
      <p>Masukkan nombor siri dan padankan dengan rekod aset.</p>

      <div class="form-row">
        <label>Nombor siri pada peranti</label>
        <input id="deviceSerial" type="text" placeholder="Contoh: SN-2026-001">
      </div>

      <div class="form-row">
        <label>Nombor siri dalam rekod</label>
        <input id="recordSerial" type="text" placeholder="Contoh: SN-2026-001">
      </div>

      <button onclick="checkSerial()">SEMAK NOMBOR SIRI</button>
      <div id="serialResult" class="result"></div>
    </div>`;
}

function checkSerial(){
  const a = document.getElementById("deviceSerial").value.trim().toUpperCase();
  const b = document.getElementById("recordSerial").value.trim().toUpperCase();
  const result = document.getElementById("serialResult");

  if(!a || !b){
    result.textContent = "❌ Lengkapkan kedua-dua nombor siri.";
    byteFeedback("Lengkapkan nombor siri pada peranti dan dalam rekod.");
    return;
  }

  if(a === b){
    result.textContent = "✅ Nombor siri sepadan.";
    result.classList.add("success-flash");
    rewardActivity("serial-check",25,5,"Pemeriksa Nombor Siri");
  }else{
    result.textContent = "❌ Nombor siri tidak sepadan. Semak semula rekod aset.";
    byteFeedback("Semak semula nombor siri. Maklumat masih belum tepat.");
  }
}

function renderReportBuilder(){
  activityContent.innerHTML = `
    <div class="activity-card">
      <h3>SIMULASI BINA LAPORAN SISTEM KOMPUTER</h3>

      <div class="form-row">
        <label>Nama pengguna</label>
        <input id="reportUser" type="text">
      </div>

      <div class="form-row">
        <label>Nombor aset</label>
        <input id="reportAsset" type="text">
      </div>

      <div class="form-row">
        <label>Kerja yang dilakukan</label>
        <input id="reportWork" type="text">
      </div>

      <div class="form-row">
        <label>Keputusan ujian</label>
        <select id="reportStatus">
          <option value="">Pilih status</option>
          <option>Lulus</option>
          <option>Gagal</option>
          <option>Perlu uji semula</option>
        </select>
      </div>

      <div class="form-row">
        <label>Ulasan</label>
        <input id="reportComment" type="text">
      </div>

      <button onclick="generateReport()">HASILKAN LAPORAN</button>
      <div id="reportResult" class="result"></div>
      <div id="reportPreview" class="report-preview"></div>
    </div>`;
}

function generateReport(){
  const user = document.getElementById("reportUser").value.trim();
  const asset = document.getElementById("reportAsset").value.trim();
  const work = document.getElementById("reportWork").value.trim();
  const status = document.getElementById("reportStatus").value;
  const comment = document.getElementById("reportComment").value.trim();
  const result = document.getElementById("reportResult");
  const preview = document.getElementById("reportPreview");

  if(!user || !asset || !work || !status || !comment){
    result.textContent = "❌ Lengkapkan semua medan laporan.";
    byteFeedback("Maklumat laporan masih belum lengkap.");
    return;
  }

  preview.textContent =
`LAPORAN SISTEM KOMPUTER
Nama Pengguna : ${user}
Nombor Aset   : ${asset}
Kerja         : ${work}
Keputusan     : ${status}
Ulasan        : ${comment}
Tarikh        : ${new Date().toLocaleDateString("ms-MY")}`;

  result.textContent = "✅ Laporan berjaya dihasilkan.";
  preview.classList.add("success-flash");
  rewardActivity("report-builder",35,10,"Penyedia Laporan");
}

function completeKP15(){
  const state = loadGameState();

  if(state.completedActivities.length < 4){
    byteFeedback("Lengkapkan sekurang-kurangnya empat aktiviti sebelum menamatkan KP15.");
    alert("Lengkapkan sekurang-kurangnya 4 aktiviti interaktif.");
    return;
  }

  if(!state.completed){
    state.completed = true;
    state.progress = 100;
    state.xp += 100;
    state.coins += 25;

    if(!state.badges.includes("Pakar Dokumentasi")){
      state.badges.push("Pakar Dokumentasi");
    }

    saveGameState(state);
  }

  byteFeedback("Tahniah! Anda telah menamatkan KP15 dan memperoleh Badge Pakar Dokumentasi.");
  alert("🎉 KP15 selesai. Badge Pakar Dokumentasi diperoleh.");
}

function downloadCertificate(){
  const state = loadGameState();

  if(!state.completed){
    alert("Selesaikan KP15 dahulu sebelum memuat turun sijil.");
    return;
  }

  const certificate = `
SIJIL TAMAT PEMBELAJARAN

KP15
PENYEDIAAN LAPORAN SISTEM KOMPUTER

Status: SELESAI
XP: ${state.xp}
Coin: ${state.coins}
Badge: ${state.badges.join(", ")}

Tarikh: ${new Date().toLocaleDateString("ms-MY")}
`;

  const blob = new Blob([certificate], {type:"text/plain;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Sijil-KP15.txt";
  a.click();
  URL.revokeObjectURL(url);
}

/* Sambungkan ganjaran kepada aktiviti sedia ada */
const oldCheckMatching = checkMatching;
checkMatching = function(){
  oldCheckMatching();
  const rows = [...document.querySelectorAll(".match-row")];
  const score = rows.filter(r => r.querySelector("select").value === r.dataset.answer).length;
  if(score === rows.length) rewardActivity("matching",20,5,"Pakar Padanan");
};

const oldCheckSequence = checkSequence;
checkSequence = function(){
  oldCheckSequence();
  if(sequence.every((x,i)=>x===correctSequence[i])){
    rewardActivity("sequence",25,5,"Pakar Prosedur");
  }
};

const oldCheckAsset = checkAsset;
checkAsset = function(){
  oldCheckAsset();
  const ok = [assetName,assetNo,serialNo,locationInput].every(x=>x.value.trim());
  if(ok) rewardActivity("asset-record",30,10,"Penyelia Aset");
};

const oldCheckUAT = checkUAT;
checkUAT = function(){
  oldCheckUAT();
  const ok = scenario.value.trim() && expected.value.trim() && actual.value.trim() && uatStatus.value;
  if(ok) rewardActivity("uat-report",30,10,"Pemeriksa UAT");
};

/* Kemas kini statistik setiap kali slaid berubah */
const oldRenderSlide = renderSlide;
renderSlide = function(){
  oldRenderSlide();
  updateStats();
  byteFeedback(`Paparan ${currentSlide + 1}: ${slides[currentSlide].title}.`);
};

document.addEventListener("DOMContentLoaded", updateStats);
