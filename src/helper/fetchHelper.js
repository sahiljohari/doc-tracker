export const getRequest = async (url = "") => {
  try {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow",
      referrer: "no-referrer" // no-referrer, *client
    });
    const json = await response.json();
    return json;
  }
  catch (error) {
    console.log("Error!", error);
    return error;
  }
};

export const sendRequest = async (url = "", method = "", data = {}) => {
  // Default options are marked with *
  try {
    const response = await fetch(url, {
      method: method,
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    const json = await response.json();
    return json;
  }
  catch (error) {
    console.log("Error!", error);
    return error;
  }
};
