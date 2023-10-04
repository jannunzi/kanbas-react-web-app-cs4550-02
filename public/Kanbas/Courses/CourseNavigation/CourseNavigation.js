function CourseNavigation(active) {
  const links = [
    { href: "/Kanbas/Courses/Home/screen.html", text: "Home" },
    { href: "/Kanbas/Courses/Assignments/screen.html", text: "Assignments" },
    { href: "/Kanbas/Courses/Grades/screen.html", text: "Grades" },
  ];
  return `
<div class="container-fluid mt-2">
  <ul class="list-group wd-course-navigation">
  ${links
    .map(
      (link) => `
    <li class="list-group-item ${
      active === link.text ? "active" : ""
    }" aria-current="true">
      <a href="${link.href}">${link.text}</a>
    </li>
    `
    )
    .join("")}
  </ul>
</div>
`;
}

export default CourseNavigation;
