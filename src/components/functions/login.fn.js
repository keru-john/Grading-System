
export const login_handleSubmit = (e, setError, users, setCurrentUser, nav) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data  = Object.fromEntries(formData.entries());
    const { email, password } = data;

    if(!email){
        setError('Email is required');
        return false;
    }else if(email.length < 6){
        setError('Email must be at least 6 characters');
        return false;
    }
    if(!password){
        setError('Password is required');
        return false;
    }
    if(password.length < 6){
        setError('Password must be at least 6 characters');
        return false;
    }
    const user = Boolean(users) ? users.find(user => user.email === email) : false
    if(!user){
        setError('Email not found');
        return false;
    }
    if(user && user.password !== password){
        setError('Password is incorrect');
        return false;
    }
    if(setCurrentUser) setCurrentUser(email);
    if(nav) nav('/');
}