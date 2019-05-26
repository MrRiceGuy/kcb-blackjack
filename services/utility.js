module.exports = {
    ValidateUser : function(user){
        console.log(`validating ${user}`);
        return this.IsValid(user) 
            && this.IsValid(user.firstName) 
            && this.IsValid(user.lastName) 
            && this.IsValid(user.email) 
            && this.IsValid(user.password) 
            && this.IsValid(user.username)
            && this.IsValid(user.birthdate);
    },    
    IsValid : function(data){
        return data !== null && data !== undefined && data !== "";
    },
    CreateErrorResponse : function(messages){
        return {
            success : false,
            exceptions : messages,
            results : undefined
        }
    }
}