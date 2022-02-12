export default function (currentState, action) {
    switch (action.type) {
        case 'setRoles':
            return {
                ...currentState,
                roles: action.data
            }
        case 'setUsers':
            return {
                ...currentState,
                users: action.data
            }
        case "addUser":
            const newUser = {
                id: 4,
                username: action.username,
                email: action.email,
                password: action.password,
                role_id: action.role
            }
            return {
                ...currentState,
                users: [newUser, ...currentState.users]
            }
        case "deleteUser":
            return {
                ...currentState,
                users: currentState.users.filter((user, index) => index !== action.payload)
            }
        case "editUser":
            return {
                ...currentState,
                users: [...currentState.users.filter(u => u.id !== action.payload.id), action.payload]
            }
    }
}