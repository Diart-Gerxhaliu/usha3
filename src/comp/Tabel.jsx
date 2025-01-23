import React, { useState } from 'react';

function Tabel() {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
    const [selectedUser, setSelectedUser] = useState(null); // Store the selected user's data for editing

    // Handle delete
    const handleDelete = (index) => {
        const updatedUsers = users.filter(user => user.index !== index);
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    };

    // Handle save edits
    const handleSave = () => {
        const updatedUsers = users.map(user => 
            user.index === selectedUser.index ? selectedUser : user
        );
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setSelectedUser(null); // Close the config section
    };

    return (
        <>
            {/* Config Section */}
            {selectedUser && (
                <div className="config">
                    <h2>Edit User</h2>
                    <label>
                        Name:
                        <input 
                            type="text" 
                            value={selectedUser.name} 
                            onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })} 
                        />
                    </label>
                    <label>
                        Surname:
                        <input 
                            type="text" 
                            value={selectedUser.surname} 
                            onChange={(e) => setSelectedUser({ ...selectedUser, surname: e.target.value })} 
                        />
                    </label>
                    <label>
                        Email:
                        <input 
                            type="email" 
                            value={selectedUser.email} 
                            onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })} 
                        />
                    </label>
                    <label>
                        Address:
                        <input 
                            type="text" 
                            value={selectedUser.adress} 
                            onChange={(e) => setSelectedUser({ ...selectedUser, adress: e.target.value })} 
                        />
                    </label>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setSelectedUser(null)}>Cancel</button>
                </div>
            )}

            {/* Table Section */}
            <div className="tabel">
                <table>
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Delete</th>
                            <th>Config</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.index}</td>
                                <td>{user.name}</td>
                                <td>{user.surname}</td>
                                <td>{user.email}</td>
                                <td>{user.adress}</td>
                                <td>
                                    <button onClick={() => handleDelete(user.index)}>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => setSelectedUser(user)}>
                                        Config
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Tabel;
