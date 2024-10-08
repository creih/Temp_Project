// this file is used for displaying profile information of the user
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './profileDisplay.css';

const ProfileDisplay = () => {
    const [profileData, setProfileData] = useState({
        username: '',
        email: '',
        role: '',
        hasChildren: false,
        children: [],
    });
    const navigate = useNavigate();
    useEffect(() => {
        const storedData = localStorage.getItem('profileData');
        if (storedData) {
            setProfileData(JSON.parse(storedData));
        }
    }, []);
    const handleEdit = () => {
        navigate('/edit');
    };
    return (
        <div className='profile-display'>
            <h2>User information</h2>
            {/* <ProfileImage imageUrl={user.profileImage} altText='User Profile pic'/> */}
            <p><strong>Name: </strong>:{profileData.username}</p>
            <p><strong>Email</strong>: {profileData.email}</p>
            <p><strong>Pswd</strong> : ****************</p>
            <p><strong>Role in Church:</strong> {profileData.role}</p>
            {profileData.hasChildren && (
                <div>
                    <strong>Children:</strong>
                    <ul>
                        {profileData.children.map((child, index) => (
                            <li key={index}>{child}</li>
                        ))}
                    </ul>
                </div>
            )}
            <div className='edit-button'>
                <button onClick={handleEdit}>Edit</button>
            </div>
        </div>
    );
};

export default ProfileDisplay;
