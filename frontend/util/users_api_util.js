export const fetchUsers = data => {
  return $.ajax({
    url: "/api/users",
    data
  });
};