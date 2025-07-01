import { readonly, ref } from 'vue';

const MOCK_USERS = {
  "1": { id: "1", name: "Moni Roy", email: "admin@vireakbuntham.com" }
};
const MOCK_PASSWORDS = {
  "admin@vireakbuntham.com": "password123"
};
const user = ref(null);
const useAuth = () => {
  const login = async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const foundUser = Object.values(MOCK_USERS).find((u) => u.email === email);
        if (foundUser && MOCK_PASSWORDS[email] === password) {
          user.value = foundUser;
          resolve();
        } else {
          reject(new Error("Invalid email or password."));
        }
      }, 500);
    });
  };
  const register = async (name, email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Object.values(MOCK_USERS).some((u) => u.email === email)) {
          reject(new Error("An account with this email already exists."));
          return;
        }
        const id = Date.now().toString();
        const newUser = { id, name, email };
        MOCK_USERS[id] = newUser;
        MOCK_PASSWORDS[email] = password;
        user.value = newUser;
        resolve();
      }, 500);
    });
  };
  const logout = () => {
    user.value = null;
  };
  const updateProfile = async (name) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user.value) {
          const updatedUser = { ...user.value, name };
          MOCK_USERS[user.value.id] = updatedUser;
          user.value = updatedUser;
          resolve();
        } else {
          reject(new Error("User not found."));
        }
      }, 500);
    });
  };
  const changePassword = async (currentPassword, newPassword) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user.value && MOCK_PASSWORDS[user.value.email] === currentPassword) {
          MOCK_PASSWORDS[user.value.email] = newPassword;
          resolve();
        } else {
          reject(new Error("Incorrect current password."));
        }
      }, 500);
    });
  };
  return {
    user: readonly(user),
    login,
    register,
    logout,
    updateProfile,
    changePassword
  };
};

export { useAuth as u };
//# sourceMappingURL=useAuth-C29yH_W7.mjs.map
