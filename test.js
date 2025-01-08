export const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "<AdminDashboard></AdminDashboard>",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "<CreateFaculty></CreateFaculty>",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "<CreateStudent></CreateStudent>",
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: " <CreateAdmin></CreateAdmin>",
      },
    ],
  },
];

const newArray = adminPaths2.reduce((acc, item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: item.element,
    });
  }
  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: "Navlink",
      })),
    });
  }

  return acc;
}, []);
console.log(newArray);
