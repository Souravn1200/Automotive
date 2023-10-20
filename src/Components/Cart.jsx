import React, { useContext } from 'react';
import { AuthContext } from './Providers/AuthProvider';

const Cart = () => {
    const {user} = useContext(AuthContext);
    const userEmail = user.user.email
    return (
        <div>
          <h3>This is cart</h3>  
         
        </div>
    );
};

export default Cart;