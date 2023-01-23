import accounts from "../mock/account.json";
import Friend from "../types/friend";

export const signIn = (username: string, password: string): Friend => {
  const user = accounts.find(
    (account) => account.username === username && account.password === password
  );
  return user as Friend;
};
