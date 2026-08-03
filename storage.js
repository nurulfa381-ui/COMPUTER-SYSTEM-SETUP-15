const C01Storage = {
  profileKey: "c01_student_profile",
  languageKey: "c01_language",

  defaultProfile() {
    return {
      name: "",
      id: "",
      avatar: "🧑‍💻",
      language: "ms",

      xp: 50,
      coins: 10,
      unlocked: 15,

      completed: [],
      scores: {},
      attempts: {},
      ktDetails: {},
      pendingAssessments: {},
      officialMarks: {},

      professionalScore: 0,
      badges: ["first-login"],

      workPerformance: {
        safety: 0,
        procedure: 0,
        accuracy: 0,
        quality: 0,
        documentation: 0
      },

      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  },

  loadProfile() {
    try {
      const raw = localStorage.getItem(this.profileKey);

      if (!raw) {
        return null;
      }

      const saved = JSON.parse(raw);

      return {
        ...this.defaultProfile(),
        ...saved,

        completed: Array.isArray(saved.completed)
          ? saved.completed
          : [],

        badges: Array.isArray(saved.badges)
          ? saved.badges
          : ["first-login"],

        scores: saved.scores || {},
        attempts: saved.attempts || {},
        ktDetails: saved.ktDetails || {},
        pendingAssessments: saved.pendingAssessments || {},
        officialMarks: saved.officialMarks || {},

        workPerformance: {
          ...this.defaultProfile().workPerformance,
          ...(saved.workPerformance || {})
        },

        unlocked: Math.max(
          Number(saved.unlocked || 1),
          15
        )
      };
    } catch (error) {
      console.error("Gagal membaca profil:", error);
      return null;
    }
  },

  saveProfile(profile) {
    try {
      const normalized = {
        ...this.defaultProfile(),
        ...profile,

        unlocked: Math.max(
          Number(profile?.unlocked || 1),
          15
        ),

        completed: Array.isArray(profile?.completed)
          ? profile.completed
          : [],

        badges: Array.isArray(profile?.badges)
          ? profile.badges
          : ["first-login"],

        scores: profile?.scores || {},
        attempts: profile?.attempts || {},
        ktDetails: profile?.ktDetails || {},
        pendingAssessments: profile?.pendingAssessments || {},
        officialMarks: profile?.officialMarks || {},

        updatedAt: new Date().toISOString()
      };

      localStorage.setItem(
        this.profileKey,
        JSON.stringify(normalized)
      );

      return normalized;
    } catch (error) {
      console.error("Gagal menyimpan profil:", error);
      return null;
    }
  },

  createProfile({
    name,
    id,
    avatar,
    language
  }) {
    return {
      ...this.defaultProfile(),

      name: name || "",
      id: id || "",
      avatar: avatar || "🧑‍💻",
      language: language || "ms",

      unlocked: 15,

      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  },

  requireProfile() {
    const profile = this.loadProfile();

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
        "Profil pelatih diperlukan."
      );
    }

    return profile;
  },

  updateProfile(updates = {}) {
    const current =
      this.loadProfile() ||
      this.defaultProfile();

    return this.saveProfile({
      ...current,
      ...updates,

      unlocked: Math.max(
        Number(
          updates.unlocked ??
          current.unlocked ??
          1
        ),
        15
      )
    });
  },

  setLanguage(language = "ms") {
    localStorage.setItem(
      this.languageKey,
      language
    );

    const profile = this.loadProfile();

    if (profile) {
      profile.language = language;
      this.saveProfile(profile);
    }

    return language;
  },

  getLanguage() {
    const profile = this.loadProfile();

    return (
      profile?.language ||
      localStorage.getItem(
        this.languageKey
      ) ||
      "ms"
    );
  },

  saveScore(missionId, score) {
    const profile =
      this.requireProfile();

    profile.scores =
      profile.scores || {};

    profile.scores[missionId] =
      Number(score) || 0;

    return this.saveProfile(profile);
  },

  saveAttempt(missionId) {
    const profile =
      this.requireProfile();

    profile.attempts =
      profile.attempts || {};

    profile.attempts[missionId] =
      Number(
        profile.attempts[missionId] || 0
      ) + 1;

    this.saveProfile(profile);

    return profile.attempts[missionId];
  },

  addCompletedMission(missionId) {
    const profile =
      this.requireProfile();

    profile.completed =
      profile.completed || [];

    if (
      !profile.completed.includes(
        missionId
      )
    ) {
      profile.completed.push(
        missionId
      );
    }

    return this.saveProfile(profile);
  },

  unlockMission(missionId) {
    const profile =
      this.requireProfile();

    profile.unlocked = Math.max(
      Number(profile.unlocked || 15),
      Number(missionId || 15),
      15
    );

    return this.saveProfile(profile);
  },

  addXp(amount = 0) {
    const profile =
      this.requireProfile();

    profile.xp =
      Number(profile.xp || 0) +
      Number(amount || 0);

    this.saveProfile(profile);

    return profile.xp;
  },

  addCoins(amount = 0) {
    const profile =
      this.requireProfile();

    profile.coins =
      Number(profile.coins || 0) +
      Number(amount || 0);

    this.saveProfile(profile);

    return profile.coins;
  },

  addBadge(badgeId) {
    const profile =
      this.requireProfile();

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

    this.saveProfile(profile);

    return profile.badges;
  },

  savePendingAssessment(
    missionId,
    record
  ) {
    const profile =
      this.requireProfile();

    profile.pendingAssessments =
      profile.pendingAssessments || {};

    profile.pendingAssessments[
      missionId
    ] = record;

    return this.saveProfile(profile);
  },

  clearSession() {
    localStorage.removeItem(
      this.profileKey
    );

    sessionStorage.clear();
  },

  resetProgress() {
    const current =
      this.requireProfile();

    const reset =
      this.createProfile({
        name: current.name,
        id: current.id,
        avatar: current.avatar,
        language:
          current.language || "ms"
      });

    return this.saveProfile(reset);
  }
};
