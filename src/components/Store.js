import React from 'react';

function Store() {
    const Store = ({ isLoggedIn, handleLogout }) => {
        if (!isLoggedIn) {
        return <Redirect to='/login' />;
    }
    
    return (
        <div className='store'>
            <h2>Welcome to the store!</h2>
            <button className="logout-btn">Logout</button>
        </div>
    );
}

export default Store;
