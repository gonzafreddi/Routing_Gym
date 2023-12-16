import styles from "./Users.module.css";
import { CardUser, User } from "../CardUser/CardUser"; // Asegúrate de importar 'User' si es un tipo definido
import { getUsers } from '../../../redux/actions'; // Importa las acciones necesarias
import React, { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersSB from "../UsersSB/UsersSB";

export default function Users() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const users: User[] = useSelector((state): User[] => state.users);

  const [searchInput, setSearchInput] = useState<string>(''); // Tipo string para el estado del input

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
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

  // const handleUnban = (userId: string) => {
  //   dispatch(unbanUser(userId));
  // };

  // const handleRemoveAdmin = (userId: string) => {
  //   dispatch(removeAdminAccess(userId));
  // };

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <h1>Usuarios</h1>
        <UsersSB handleInputChange={handleInputChange} placeholder={"Busca usuarios por id, nombre o email"} />
        <div className={styles.cardCont}>
          {displayedData.map((user: User) => (
            <CardUser
              key={user.id}
              user={user}
              // onUnban={handleUnban}
              // onRemoveAdmin={handleRemoveAdmin}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
