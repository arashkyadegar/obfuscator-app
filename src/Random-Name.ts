import crypto from "crypto";

export const getRandomName = () => {
  const firstChar = String.fromCharCode(97 + Math.floor(Math.random() * 26)); // Random lowercase letter
  const randomBytes = crypto.randomBytes(4).toString("hex"); // Random hex string
  return `${firstChar}${randomBytes}`;
};