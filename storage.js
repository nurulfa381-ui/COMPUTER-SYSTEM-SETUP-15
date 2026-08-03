const C01K15Storage = (() => {
  const KEY = "c01_kp15_profile_v1";

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

      return raw
        ? {
            ...defaults(),
            ...JSON.parse(raw)
          }
        : null;
    } catch (error) {
      console.error(
        "Gagal membaca profil KP15:",
        error
      );

      return null;
    }
  }

  function saveProfile(data) {
    try {
      const current =
        getProfile() || defaults();

      const profile = {
        ...current,
        ...data,

        scores: data?.scores || current.scores || {},
        attempts:
          data?.attempts ||
          current.attempts ||
          {},

        pendingAssessments:
          data?.pendingAssessments ||
          current.pendingAssessments ||
          {},

        officialMarks:
          data?.officialMarks ||
          current.officialMarks ||
          {},

        badges: Array.isArray(
          data?.badges
        )
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
        "c01k15_session",
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
    name,
    id,
    avatar,
    language
  }) {
    return saveProfile({
      ...defaults(),

      name: name || "",
      id: id || "",
      avatar: avatar || "🧑‍💻",
      language: language || "ms"
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

  function updateProgress(progress) {
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
        profile.attempts[
          missionId
        ] || 0
      ) + 1;

    saveProfile(profile);

    return profile.at
