import React, { useState, useEffect } from 'react';
import { Search, User, Edit, Trash2 } from 'lucide-react';
import '../styles/AdminDashboard.css';
import { useNavigate } from 'react-router-dom';

const AgentDashboard = ({ users, setUsers }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editFormData, setEditFormData] = useState({ name: '', email: '', role: '' });

  const navigate = useNavigate();

  useEffect(() => {
    const results = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
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
    const confirmDelete = window.confirm("Are you sure you want to delete this property?");
    if (confirmDelete) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Property Management</h1>
        <button
          className="add-user-btn"
          type="button"
          onClick={() => navigate('/add-property')}
        >
          Add Property
        </button>
      </div>

      <div className="search-filter">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search properties..."
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
              <th>Property Name</th>
              <th>Location</th>
              <th>Dimensions</th>
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
                      type="text"
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
    </div>
  );
};

export default AgentDashboard;
