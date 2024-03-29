export const domainFromURL = (url) => {
  return url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split(/[/?#]/)[0];
};

export const transformURL = (url) => {
  return `${url}${
    url.includes("?") ? "&" : "?"
  }utm_source=edsonfrainlar.com&utm_medium=website&utm_campaign=recommended`;
};
