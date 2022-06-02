
export const cp_handleSubmit = (e, setError, users, setUsers, changePasswordEmail) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data  = Object.fromEntries(formData.entries());
    const { password } = data;

    if(!password){
        setError('Password is required');
        return false;
    }
    if(password.length < 6){
        setError('Password must be at least 6 characters');
        return false;
    }
    setUsers(users.map(user => user.email === changePasswordEmail ? {...user, password} : user));
    return true
}