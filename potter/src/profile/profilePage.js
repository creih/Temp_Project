// this is for the profile page editting part for the user's profile

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import ProfileEditor from './profileEditor';
import './profilePage.css';

const ProfilePage = () => {
    const navigate = useNavigate();
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isMember, setIsMember] = useState(false);
    const [role, setRole] = useState('');
    const [hasChildren, setHasChildren] = useState(false);
    const [children, setChildren] = useState([]);
    const [childName, setChildName] = useState('');

    const addChild = () => {
        if (childName.trim() !== '') {
            setChildren([...children, childName]);
            setChildName('');
        }
    };
    
    const removeChild = (index) => {
        const updateChildren = children.filter((_, i) => i !== index);
        setChildren(updateChildren);
    };

    const handleSave = () => {
        const formData = {
            username,
            email,
            password,
            isMember,
            role,
            hasChildren,
            children,
        };
        localStorage.setItem('profileData', JSON.stringify(formData));
        navigate('/display', {state: { formData } });
    };

    return (
        <div className='profile-page'>
            <h2>User' s Profile Portal</h2>
            <div className='profile-pic-container'>
                <ProfileEditor />
            </div>
            <div className='form-group'>
                
                <input 
                    type="text"
                    placeholder='Enter your name'
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            {/* user email is entered chosen here no data validation as of yet */}
            <div className='form-group'>
                <input 
                    type="email"
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            {/* user password is entered here */}
            <div className='form-group'>
                <input 
                    type="password"
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {/* we ask if the user is a member or  */}
            <div className='form-group'>
                <label>
                    <input 
                        type="checkbox"
                        checked={isMember}
                        onChange={(e) => setIsMember(e.target.checked)}
                    />
                    Are you a member?
                </label>
            </div>
            {isMember && (
                <div className='form-group'>
                    <select
                        value={role}
                        placeholder = 'Role in church'
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value='admin'>Admin</option>
                        <option value='Financier'>Finance staff</option>
                        <option value='member'>Member</option>
                        <option value='pastor'>Pastor</option>
                    </select>
                </div>
            )}
            {/* whether user has children or not is checked here */}
            <div className="form-group">
                <label>
                    <input
                        type="checkbox"
                        checked={hasChildren}
                        onChange={() => setHasChildren(!hasChildren)}
                    />
                    Do you have children?
                </label>
            </div>
            {/* Add children names even for users with multiple children */}
            {hasChildren && (
                <div className='form-group'>
                    <input 
                        type="text"
                        placeholder="Child's name"
                        value={childName}
                        onChange={(e) => setChildName(e.target.value)}
                    />
                    <button
                        className = 'optionalInput'
                        type='button'
                        onClick={addChild}
                        >
                        Add
                    </button>
                </div>
            )}
            {/* displaying list of added children */}
            {children.length > 0 && (
                <div className='form-group'>
                    <ul>
                        {children.map((name, index) => (
                            <li key={index}>
                            {name}                    
                            <button
                                type='button'
                                onClick={() => removeChild(index)}
                                style={{background: 'red'}}
                            >delete
                            </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="form-actions">
                <button onClick={handleSave}>Save</button>
                <button onClick={() => window.location.reload()}>Cancel</button>
            </div>
        </div>
    )
}
export default ProfilePage;
