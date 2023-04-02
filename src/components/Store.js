import React from 'react';

function Store() {
    const history = useHistory();

    const handleLogout = () => {
        history.push('/login');
    };
    
    return (
        <div className='store'>
            <h2>Welcome to the store!</h2>
            <button className="logout-btn">Logout</button>
        </div>
    );
}

export default Store;
