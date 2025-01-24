import { NavLink } from "react-router-dom";
import { TSidebarItem, TUserPath } from "../types";

export const sidebarItemsGenerator = (items: TUserPath[], role: string) => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => {
          if (child.name) {
            return {
              key: child.name,
              label: (
                <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
              ),
            };
          }
        }),
      });
    }

    return acc;
  }, []);

  return sidebarItems;
};

// update
// import { Layout, Menu } from 'antd';
// import { useAppSelector } from '../redux/hooks';
// import { TUser, useCurrentToken } from '../redux/fetures/auth/authSlice';
// import { verifyToken } from './verifyToken';

// const { Sider } = Layout;

// const userRole = {
//   ADMIN: 'admin',
//   FACULTY: 'faculty',
//   STUDENT: 'student',
// };

// const Sidebar = () => {
//   const token = useAppSelector(useCurrentToken);

//   let user;

//   if (token) {
//     user = verifyToken(token);
//   }

//   let sidebarItems;

//   switch ((user as TUser)!.role) {
//     case userRole.ADMIN:
//       sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
//       break;
//     case userRole.FACULTY:
//       sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY);
//       break;
//     case userRole.STUDENT:
//       sidebarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT);
//       break;

//     default:
//       break;
//   }

//   return (
//     <Sider
//       breakpoint="lg"
//       collapsedWidth="0"
//       style={{ height: '100vh', position: 'sticky', top: '0', left: '0' }}
//     >
//       <div
//         style={{
//           color: 'white',
//           height: '4rem',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <h1>PH Uni</h1>
//       </div>
//       <Menu
//         theme="dark"
//         mode="inline"
//         defaultSelectedKeys={['4']}
//         items={sidebarItems}
//       />
//     </Sider>
//   );
// };

// export default Sidebar;
