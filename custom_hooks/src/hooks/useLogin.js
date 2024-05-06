import { useState } from 'react';

import Cookies from 'js-cookie';

export const useLogin = () => {
 
    const [isLogin, setIsLogin] = useState(Cookies.get('login') ==='true');

    const handleLogIn = () => {
        Cookies.set('login', 'true');
        setIsLogin(true);
    } 
    
    const handleLogOut = () => {
        Cookies.remove('login');
        setIsLogin(false);
    }

    return { isLogin, handleLogIn, handleLogOut }; //object return

}
