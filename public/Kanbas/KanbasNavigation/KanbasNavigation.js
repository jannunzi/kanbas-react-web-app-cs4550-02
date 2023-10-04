function KanbasNavigation() {
  const links = [
    { href: "/Kanbas/Account/Profile/screen.html", text: "Account" },
    { href: "/Kanbas/Dashboard/screen.html", text: "Dashboard" },
    { href: "/Kanbas/Courses/Home/screen.html", text: "Courses" },
    { href: "#", text: "Calendar", icon: "fa-regular fa-calendar" },
  ];

  return `
<ul class="wd-kanbas-navigator">
  ${links
    .map(
      (link) => `
  <li>
    <a href="${link.href}">
      ${link.text}
    </a>
  </li>
  `
    )
    .join("")}

</ul>
`;
}

export default KanbasNavigation;
