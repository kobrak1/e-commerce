// const isAdmin = window.location.pathname.startsWith("/admin");
const isAdmin = window.location.pathname.includes("/admin");
export default isAdmin;
