
export const saveLocal = (key, themeBool) => {
    localStorage.setItem(key, themeBool);
  }
export function searchLocal() {
    const item = localStorage.getItem('theme');4
    return item
  }
export const removeLocal = (key) => {
    localStorage.removeItem(key);
  }

  