window.CBTISAuth = {
  usersKey: 'cbtis128_jefes',
  demoSeedKey: 'cbtis128_demo_account_seeded',
  demoEmail: 'a.23308051280594@cbtis128.edu.mx',
  demoPassword: 'Ejemplo128#2026',

  normalizeEmail(email) {
    return String(email || '').trim().toLowerCase();
  },

  isInstitutionalEmail(email) {
    return /^a\.\d+@cbtis128\.edu\.mx$/i.test(String(email || '').trim());
  },

  getUsers() {
    try {
      const users = JSON.parse(localStorage.getItem(this.usersKey) || '[]');
      return Array.isArray(users) ? users : [];
    } catch {
      return [];
    }
  },

  seedDemoAccount() {
    if (localStorage.getItem(this.demoSeedKey) === 'true') return;

    const users = this.getUsers();
    const email = this.demoEmail;
    const index = users.findIndex(
      (user) => this.normalizeEmail(user.email || user.username) === email
    );
    const account = {
      ...(index >= 0 ? users[index] : {}),
      email,
      username: email,
      password: this.demoPassword
    };

    if (index >= 0) users[index] = account;
    else users.push(account);

    localStorage.setItem(this.usersKey, JSON.stringify(users));
    localStorage.setItem(this.demoSeedKey, 'true');
  },

  currentUser() {
    const email = sessionStorage.getItem('cbtis128_jefe');
    return this.getUsers().find((user) => (user.email || user.username) === email) || null;
  },

  register(email, password) {
    const normalizedEmail = this.normalizeEmail(email);
    if (!this.isInstitutionalEmail(normalizedEmail)) {
      return { error: 'Usa tu correo institucional con el formato a.número@cbtis128.edu.mx.' };
    }
    if (String(password || '').length < 8) {
      return { error: 'La contraseña debe tener al menos 8 caracteres.' };
    }

    const users = this.getUsers();
    if (users.some((user) => this.normalizeEmail(user.email || user.username) === normalizedEmail)) {
      return { error: 'Ese correo ya tiene una cuenta.' };
    }

    const user = { email: normalizedEmail, username: normalizedEmail, password };
    localStorage.setItem(this.usersKey, JSON.stringify([...users, user]));
    return { user };
  },

  login(email, password) {
    const normalizedEmail = this.normalizeEmail(email);
    if (!this.isInstitutionalEmail(normalizedEmail)) return null;
    const user = this.getUsers().find(
      (account) => this.normalizeEmail(account.email || account.username) === normalizedEmail && account.password === password
    );

    if (!user) return null;
    sessionStorage.setItem('cbtis128_jefe', user.email || user.username);
    return user;
  },

  logout() {
    sessionStorage.removeItem('cbtis128_jefe');
  }
};

window.CBTISAuth.seedDemoAccount();