export const Utilities = {
  key: 'interview',
  getReadableDate: () => new Date(Date.now()).toLocaleString(),
  saveSessionItem: item => {
    sessionStorage.setItem(Utilities.key, JSON.stringify(item));
  },
  getSessionItem: () => JSON.parse(sessionStorage.getItem(Utilities.key)),
  removeSessionItem: () => { sessionStorage.removeItem(Utilities.key) },
  clearSession: () => {
    sessionStorage.clear();
  }
};
