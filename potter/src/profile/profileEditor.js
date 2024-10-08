// this file only changes the avatar picture of the user and only that not the whole details
import React, { useState } from 'react';
import ProfileImage from './profileImage';
import './profileEditor.css';

const ProfileEditor = () => {
    const [profileImaage, setProfileImage] = useState('https://via.placeholder.com/150');
    const [newImage, setNewImage] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if(file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleSave = () => {
        setProfileImage(newImage);
        setNewImage('');
    };
    return (
        <div className="profile-editor">
            <ProfileImage imageUrl={profileImaage} altText='current Profile Picture' x='150px' y='150px'/>
            {/* new profile pic preview settings */}
            {newImage && (
                <div className='preview'>
                    <h4>Preview:</h4>
                    <ProfileImage imageUrl={newImage} altText='new Profile Picture' x='150px' y='150px'/>
                </div>
            )}
            {/* uploading the new profile pic */}
            <input type='file' accept='image/*' onChange={handleImageChange}/>
            {/* save button */} 
            {newImage && <button onClick={handleSave}>Save</button>}
        </div>
    );
};

export default ProfileEditor;