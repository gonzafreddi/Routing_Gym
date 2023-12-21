import styles from "./Users.module.css";
import { CardUser } from "../CardUser/CardUser";
import { getUsers } from '../../../redux/actions';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersSB from "../UsersSB/UsersSB";

interface User {
  id: string;
  name: string;
  email: string;
}

const ClientUsers: React.FC = () => {
  const dispatch = useDispatch();

  
    useEffect(() => {
      dispatch(getUsers() as any); // Utiliza getUsers como una acción
    }, [dispatch]);

  const users: User[] = useSelector((state: any) => state.users);

  console.log(users);

  const [searchInput, setSearchInput] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value)
  }

  const filterUsers = (searchInput: string): User[] => {
    if (!searchInput) {
      return users;
    }

    const filteredUsers = users.filter((user: User) => {
      const { id, name, email } = user;
      const lowerCaseInput = searchInput.toLowerCase();

      return id.includes(lowerCaseInput) ||
        name.toLowerCase().includes(lowerCaseInput) ||
        email.toLowerCase().includes(lowerCaseInput);
    });

    return filteredUsers;
  };

  const [page, setPage] = useState<number>(1);

  const cardsPerPage: number = 6;
  const totalItems: number = users.length;

  const startIndex: number = (page - 1) * cardsPerPage;
  const endIndex: number = startIndex + cardsPerPage;
  const displayedData: User[] = filterUsers(searchInput).slice(startIndex, endIndex);

  // const handleBanOrDelete = (userId: string) => {
  //   dispatch(banOrDeleteUser(userId));
  // };

  // const handleUnban = (userId: string) => {
  //   dispatch(unbanUser(userId));
  // };

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <h1 className={styles.userTitle}>Usuarios</h1>
        <UsersSB handleInputChange={handleInputChange} placeholder={"Busca usuarios por id, nombre o email"} />
        <div className={styles.cardCont}>
          {displayedData.map((user: User) => (
            <CardUser
              key={user.id}
              user={user}
              // onBanOrDelete={handleBanOrDelete}
              // onUnban={handleUnban}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientUsers;





// import styles from "./adminUsers.module.css";
// import { CardUser } from "../CardUser/CardUser";
// import { getUsers, banOrDeleteUser, grantAdminAccess, unbanUser, removeAdminAccess } from '../../../redux/actions'; // Importa la acción getUsers
// import React, { useState, useEffect } from 'react';
// // import Pagination from "../../Pagination/Pagination";
// import { useDispatch, useSelector } from 'react-redux';
// import UsersSB from "../../SearchBar/UsersSB";

// export function AdminUsers() {
  
//   const dispatch = useDispatch();

//   useEffect(() => {
//       dispatch(getUsers());
//   }, [dispatch]);

//   const users=useSelector((state)=>state.users);

//   const [searchInput, setSearchInput] = useState('');

//   const handleInputChange = (event) => {
//     setSearchInput(event.target.value)
//   }
  
//   const filterUsers = (searchInput) => {
//     if (!searchInput) {
//       return users;
//     }

//     const filteredUsers = users.filter(user => {
//       const { id, name, email } = user;
//       const lowerCaseInput = searchInput.toLowerCase();

//       return id.includes(lowerCaseInput) ||
//              name.toLowerCase().includes(lowerCaseInput) ||
//              email.toLowerCase().includes(lowerCaseInput);
//     });

//     return filteredUsers;
//   };


//   const [page, setPage] = useState(1);


//   const cardsPerPage = 6;
//   const totalItems = users.length;

//   const startIndex = (page - 1) * cardsPerPage;
//   const endIndex = startIndex + cardsPerPage;
//   const displayedData = filterUsers(searchInput).slice(startIndex, endIndex);


//     const handleBanOrDelete = (userId) => { 
//         dispatch(banOrDeleteUser(userId));
//     };
  
//     const handleUnban = (userId) => {
//       dispatch(unbanUser(userId));
//     };
//     // const handleGrantAdmin = (userId) => {
//     //   dispatch(grantAdminAccess(userId));
//     // };

//     // const handleRemoveAdmin = (userId) => {
//     //   dispatch(removeAdminAccess(userId));
//     // };
  
 
//   return (
//     <div className={styles.container}>
//       <div className={styles.cards}>
//         <h1>Usuarios</h1>
//         <UsersSB handleInputChange={handleInputChange} placeholder={"Busca usuarios por id, nombre o email"}/>
//         <div className={styles.cardCont}>
//           {displayedData.map((user) => (
//               <CardUser
//                 key={user.id}
//                 user={user}
//                 onBanOrDelete={handleBanOrDelete}
//                 onUnban={handleUnban}
//                 // onGrantAdmin={handleGrantAdmin}
//                 // onRemoveAdmin={handleRemoveAdmin}
//               />
//             )
//           ) }
          
//         </div>
//         {/* <div className={styles.pagination}><Pagination  page={page} setPage={setPage} itemsPerPage={cardsPerPage} totalItems={totalItems}/></div> */}
//       </div>
    
//     </div>
//   );
// }