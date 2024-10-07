import React from 'react';
const ProfileImage = ({imageUrl, altText='Profile picture', x, y}) => {
    return (
        <div className='profilePicture'>
            <img 
                src={imageUrl}
                alt={altText}
                style={{width:y, height:y, borderRadius:'50%'}
            }/>
        </div>
    );
};
export default ProfileImage;