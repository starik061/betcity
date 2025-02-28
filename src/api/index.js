import { useAppStore } from "@/stores/appStore"; // Импортируем хранилище

const BASE_URL = "https://app.betcity.tech";

const authHeaders = () => {
  const { initDataUnsafe } = window.Telegram.WebApp;

  return {
    "tg-web-app-auth-date": initDataUnsafe.auth_date,
    "tg-web-app-query-id": 1,
    "tg-web-app-user": encodeURIComponent(JSON.stringify(initDataUnsafe.user)),
    "tg-web-app-hash": initDataUnsafe.hash
  };
};

const testAuthHeaders = {
  "tg-web-app-auth-date": 1740489867,
  "tg-web-app-query-id": 1,
  "tg-web-app-user":
    "%7B%22id%22%3A91816918%2C%22first_name%22%3A%22%D0%AF%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22kiberYashka%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F75z-Wp2fYIdyCtf5n1gql97vk_8ShGjiaME8DY1jkkw.svg%22%7D",
  "tg-web-app-hash": "04252da5f5e5a03503ae28735fa09ea0e1fd16983d22fb8029ab6ea166d71d91"
};

export async function authUser() {
  const appStore = useAppStore();
  let startParam = "";
  if (appStore && appStore.initDataUnsafe && appStore.initDataUnsafe.start_param) {
    startParam = "ref" + appStore.initDataUnsafe.start_param;
  } else {
    // Если нет, проверяем URL
    const params = new URLSearchParams(window.location.search);
    const startApp = params.get("startapp");
    const startAttach = params.get("startattach");

    if (startApp) {
      startParam = "ref" + startApp;
    } else if (startAttach) {
      startParam = "ref" + startAttach;
    }
  }

  let headers;
  if (appStore.platform === "tdesktop" || appStore.platform === "ios" || appStore.platform === "android") {
    headers = authHeaders();
  } else {
    headers = testAuthHeaders;
  }
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
      body: JSON.stringify({
        startParam
      })
    });

    // Проверяем статус ответа
    if (response.status !== 200 && response.status !== 201) {
      throw new Error(`Ошибка авторизации: ${response.status}`);
    }

    // Проверяем, есть ли данные в теле ответа
    const text = await response.text(); // Сначала получаем текстовый ответ
    const data = text ? JSON.parse(text) : null; // Преобразуем в JSON, если есть текст

    if (data) {
      appStore.gameUserInfo = data;
    } else {
      console.error("Ответ пустой или не является JSON");
    }

    return true;
  } catch (error) {
    console.error("Ошибка авторизации:", error);
    this.$router.push("/error");
    return false;
  }
}

// _____________________
export async function getUserProfile() {
  const appStore = useAppStore();
  let headers;
  if (appStore.platform === "tdesktop" || appStore.platform === "ios" || appStore.platform === "android") {
    headers = authHeaders();
  } else {
    headers = testAuthHeaders;
  }
  try {
    const response = await fetch(`${BASE_URL}/users/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    });

    // Проверяем статус ответа
    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }
    // Проверяем, есть ли данные в теле ответа
    const text = await response.text(); // Сначала получаем текстовый ответ
    const data = text ? JSON.parse(text) : null; // Преобразуем в JSON, если есть текст

    if (data) {
      appStore.gameUserInfo = data;
    } else {
      console.error("Ответ пустой или не является JSON");
    }
  } catch (error) {
    console.error("Ошибка авторизации:", error);
  }
}
// _____________________

export async function getMatchesLive() {
  const appStore = useAppStore();
  let headers;
  if (appStore.platform === "tdesktop" || appStore.platform === "ios" || appStore.platform === "android") {
    headers = authHeaders();
  } else {
    headers = testAuthHeaders;
  }
  try {
    const response = await fetch(`${BASE_URL}/matches`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    });

    // Проверяем статус ответа
    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }

    const data = await response.json();
    appStore.liveMatches = data;
  } catch (error) {
    console.error("Ошибка авторизации:", error);
  }
}

// _____________________

export async function getActiveBets() {
  const appStore = useAppStore();
  let headers;
  if (appStore.platform === "tdesktop" || appStore.platform === "ios" || appStore.platform === "android") {
    headers = authHeaders();
  } else {
    headers = testAuthHeaders;
  }
  try {
    const response = await fetch(`${BASE_URL}/bet`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    });

    // Проверяем статус ответа
    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }

    const data = await response.json();
    appStore.activeBets = data;
  } catch (error) {
    console.error("Ошибка авторизации:", error);
  }
}

// _____________________

export async function createBet(betID, amount, coefficientKey) {
  const appStore = useAppStore();
  let headers;
  if (appStore.platform === "tdesktop" || appStore.platform === "ios" || appStore.platform === "android") {
    headers = authHeaders();
  } else {
    headers = testAuthHeaders;
  }

  const requestBody = {
    amount: 5, // Здесь используем переданные значения
    coefficientKey: "Tb"
  };

  console.log("body", JSON.stringify(requestBody)); // Логируем, чтобы убедиться, что тело запроса правильное

  try {
    const response = await fetch(`${BASE_URL}/bet/${betID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
      body: JSON.stringify(requestBody) // Преобразуем объект в строку
    });

    // Проверяем статус ответа
    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }
  } catch (error) {
    console.error("Ошибка авторизации:", error);
  }
}

// _____________________

export async function changeBet(betID, amount, coefficientKey) {
  const appStore = useAppStore();
  let headers;
  if (appStore.platform === "tdesktop" || appStore.platform === "ios" || appStore.platform === "android") {
    headers = authHeaders();
  } else {
    headers = testAuthHeaders;
  }

  const requestBody = {
    amount: 5, // Здесь используем переданные значения
    coefficientKey: "Tb"
  };

  console.log("body", JSON.stringify(requestBody)); // Логируем, чтобы убедиться, что тело запроса правильное

  try {
    const response = await fetch(`${BASE_URL}/bet/${betID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
      body: JSON.stringify(requestBody) // Преобразуем объект в строку
    });

    // Проверяем статус ответа
    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }
  } catch (error) {
    console.error("Ошибка авторизации:", error);
  }
}

// _____________________

export async function setPhoneNumber(phone) {
  const appStore = useAppStore();
  let headers;
  if (appStore.platform === "tdesktop" || appStore.platform === "ios" || appStore.platform === "android") {
    headers = authHeaders();
  } else {
    headers = testAuthHeaders;
  }

  try {
    const response = await fetch(`${BASE_URL}/users/phone`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
      body: JSON.stringify({ phone })
    });

    // Проверяем статус ответа
    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

// _____________________
export async function generateRefLink() {
  const appStore = useAppStore();
  let headers;
  if (appStore.platform === "tdesktop" || appStore.platform === "ios" || appStore.platform === "android") {
    headers = authHeaders();
  } else {
    headers = testAuthHeaders;
  }

  const url = `https://moongivBot/wallet?startapp=ref${appStore?.gameUserInfo?.id}`;

  try {
    const response = await fetch(`${BASE_URL}/links/shorten`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
      body: JSON.stringify({ url })
    });

    // Проверяем статус ответа
    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }
    // Проверяем, есть ли данные в теле ответа
    const text = await response.text(); // Сначала получаем текстовый ответ
    const data = text ? JSON.parse(text) : null; // Преобразуем в JSON, если есть текст

    if (data) {
      appStore.refLink = data?.shortUrl;
    } else {
      console.error("Ответ пустой или не является JSON");
    }
  } catch (error) {
    console.error("Ошибка генерации реф.:", error);
  }
}

// _____________________

export async function getDailyRewardStatus() {
  const appStore = useAppStore();
  let headers;
  if (appStore.platform === "tdesktop" || appStore.platform === "ios" || appStore.platform === "android") {
    headers = authHeaders();
  } else {
    headers = testAuthHeaders;
  }
  try {
    const response = await fetch(`${BASE_URL}/users/daily/reward-status`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    });

    // Проверяем статус ответа
    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }

    const data = await response.json();
    appStore.getDailyReward = data;
  } catch (error) {
    console.error("Ошибка авторизации:", error);
  }
}
