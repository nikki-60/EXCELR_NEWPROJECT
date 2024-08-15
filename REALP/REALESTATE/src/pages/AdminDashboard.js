import React, { useState, useEffect } from 'react';
import { Search, User, Edit, Trash2, Menu } from 'lucide-react';
import '../styles/AdminDashboard.css';
import { useNavigate } from 'react-router-dom';

const UserManagementDashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Agent', mobile: '9999999999' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Client', mobile: '99999999' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Agent', mobile: '888888888' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editFormData, setEditFormData] = useState({ name: '', email: '', role: '', mobile: '' });

  const navigate = useNavigate();

  useEffect(() => {
    const results = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.mobile.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(results);
  }, [searchTerm, users]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEditClick = (user) => {
    setEditingUserId(user.id);
    setEditFormData(user);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleSaveClick = () => {
    setUsers(users.map(user => (user.id === editingUserId ? editFormData : user)));
    setEditingUserId(null);
  };

  const handleDeleteClick = (userId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">User Management</h1>
        <button className="add-user-btn" id="createAccountBtn"
        type="button"
        onClick={() => navigate('/register')}>Add User</button>
      </div>

      <div className="search-filter">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search users..."
            className="search-input"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className="search-icon" size={20} />
        </div>
      </div>

      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>Full Name </th>
              <th>Email</th>
              <th>Role</th>
              <th>Mobile</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td className="user-name">
                  <User size={20} className="user-icon" />
                  {editingUserId === user.id ? (
                    <input
                      type="text"
                      name="name"
                      value={editFormData.name}
                      onChange={handleInputChange}
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td>
                  {editingUserId === user.id ? (
                    <input
                      type="email"
                      name="email"
                      value={editFormData.email}
                      onChange={handleInputChange}
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td>
                  {editingUserId === user.id ? (
                    <input
                      type="text"
                      name="role"
                      value={editFormData.role}
                      onChange={handleInputChange}
                    />
                  ) : (
                    user.role
                  )}
                </td>
                <td>
                  {editingUserId === user.id ? (
                    <input
                      type="text"
                      name="mobile"
                      value={editFormData.mobile}
                      onChange={handleInputChange}
                    />
                  ) : (
                    user.mobile
                  )}
                </td>
                <td className="actions">
                  {editingUserId === user.id ? (
                    <button className="save-btn" onClick={handleSaveClick}>
                      Save
                    </button>
                  ) : (
                    <button className="edit-btn" onClick={() => handleEditClick(user)}>
                      <Edit size={20} />
                    </button>
                  )}
                  <button className="delete-btn" onClick={() => handleDeleteClick(user.id)}>
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mobile-user-list">
        {filteredUsers.map((user) => (
          <div key={user.id} className="mobile-user-card">
            <div className="mobile-user-header">
              <div className="mobile-user-name">
                <User size={20} className="user-icon" />
                <span>{user.name}</span>
              </div>
              <button className="mobile-menu-btn">
                <Menu size={20} />
              </button>
            </div>
            <div className="mobile-user-email">{user.email}</div>
            <div className="mobile-user-footer">
              <span className={`status-badge ${user.mobile.toLowerCase()}`}>
                {user.mobile}
              </span>
              <div className="mobile-actions">
                <button className="edit-btn" onClick={() => handleEditClick(user)}>
                  <Edit size={20} />
                </button>
                <button className="delete-btn" onClick={() => handleDeleteClick(user.id)}>
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagementDashboard;
