const C01K15Storage = (() => {
  const KEY = "c01_kp15_profile_v1";
  const SESSION_KEY = "c01k15_session";

  function defaults() {
    return {
      name: "",
      id: "",
      avatar: "🧑‍💻",
      language: "ms",

      xp: 50,
      coins: 0,
      kp15Progress: 0,

      scores: {},
      attempts: {},
      pendingAssessments: {},
      officialMarks: {},

      badges: ["first-login"],

      updatedAt: new Date().toISOString()
    };
  }

  function getProfile() {
    try {
      const raw = localStorage.getItem(KEY);

      if (!raw) {
        return null;
      }

      const saved = JSON.parse(raw);

      return {
        ...defaults(),
        ...saved,

        scores: saved.scores || {},
        attempts: saved.attempts || {},
        pendingAssessments:
          saved.pendingAssessments || {},
        officialMarks:
          saved.officialMarks || {},

        badges: Array.isArray(saved.badges)
          ? saved.badges
          : ["first-login"]
      };
    } catch (error) {
      console.error(
        "Gagal membaca profil KP15:",
        error
      );

      return null;
    }
  }

  function saveProfile(data = {}) {
    try {
      const current =
        getProfile() || defaults();

      const profile = {
        ...current,
        ...data,

        scores:
          data.scores ||
          current.scores ||
          {},

        attempts:
          data.attempts ||
          current.attempts ||
          {},

        pendingAssessments:
          data.pendingAssessments ||
          current.pendingAssessments ||
          {},

        officialMarks:
          data.officialMarks ||
          current.officialMarks ||
          {},

        badges: Array.isArray(data.badges)
          ? data.badges
          : current.badges || [
              "first-login"
            ],

        updatedAt:
          new Date().toISOString()
      };

      localStorage.setItem(
        KEY,
        JSON.stringify(profile)
      );

      sessionStorage.setItem(
        SESSION_KEY,
        "active"
      );

      return profile;
    } catch (error) {
      console.error(
        "Gagal menyimpan profil KP15:",
        error
      );

      return null;
    }
  }

  function createProfile({
    name = "",
    id = "",
    avatar = "🧑‍💻",
    language = "ms"
  } = {}) {
    return saveProfile({
      ...defaults(),
      name,
      id,
      avatar,
      language
    });
  }

  function requireProfile() {
    const profile = getProfile();

    if (
      !profile ||
      !profile.name ||
      !profile.id
    ) {
      const path =
        window.location.pathname.toLowerCase();

      if (
        path.includes("/kp/") ||
        path.includes("/kt/")
      ) {
        window.location.href =
          "../../login.html";
      } else {
        window.location.href =
          "login.html";
      }

      throw new Error(
        "Profil pelatih belum lengkap."
      );
    }

    return profile;
  }

  function updateProgress(progress = 0) {
    const profile = requireProfile();

    profile.kp15Progress = Math.max(
      Number(
        profile.kp15Progress || 0
      ),
      Number(progress || 0)
    );

    return saveProfile(profile);
  }

  function saveScore(
    missionId,
    score
  ) {
    const profile = requireProfile();

    profile.scores =
      profile.scores || {};

    profile.scores[missionId] =
      Number(score) || 0;

    return saveProfile(profile);
  }

  function addAttempt(missionId) {
    const profile = requireProfile();

    profile.attempts =
      profile.attempts || {};

    profile.attempts[missionId] =
      Number(
        profile.attempts[missionId] || 0
      ) + 1;

    saveProfile(profile);

    return profile.attempts[missionId];
  }

  function addXp(amount = 0) {
    const profile = requireProfile();

    profile.xp =
      Number(profile.xp || 0) +
      Number(amount || 0);

    saveProfile(profile);

    return profile.xp;
  }

  function addCoins(amount = 0) {
    const profile = requireProfile();

    profile.coins =
      Number(profile.coins || 0) +
      Number(amount || 0);

    saveProfile(profile);

    return profile.coins;
  }

  function addBadge(badgeId) {
    const profile = requireProfile();

    profile.badges =
      profile.badges || [];

    if (
      badgeId &&
      !profile.badges.includes(
        badgeId
      )
    ) {
      profile.badges.push(
        badgeId
      );
    }

    saveProfile(profile);

    return profile.badges;
  }

  function clearSession() {
    localStorage.removeItem(KEY);
    sessionStorage.removeItem(
      SESSION_KEY
    );
  }

  return {
    getProfile,
    saveProfile,
    createProfile,
    requireProfile,
    updateProgress,
    saveScore,
    addAttempt,
    addXp,
    addCoins,
    addBadge,
    clearSession
  };
})();
