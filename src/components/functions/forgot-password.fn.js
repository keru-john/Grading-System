
export const fn_handleSubmit = (e, setError, users, setChangePasswordEmail) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data  = Object.fromEntries(formData.entries());
    const { email } = data;

    if(!email){
        setError('Email is required');
        return false;
    }else if(email.length < 6){
        setError('Email must be at least 6 characters');
        return false;
    }
    const user = Boolean(users) ? users.find(user => user.email === email) : false
    if(!user){
        setError('Email not found');
        return false;
    }
    setChangePasswordEmail(email);
    return true
}