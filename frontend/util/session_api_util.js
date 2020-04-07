export const signup = (user) => (
  $.ajax({
    url: "/api/users",
    method: "POST",
    data: { user }
  })
);

export const login = (user) => (
  $.ajax({
    url: "/api/session",
    method: "POST",
    data: { user }
  })
);

export const logout = (user) => (
  $.ajax({
    url: "/api/session",
    method: "DELETE"
  })
);