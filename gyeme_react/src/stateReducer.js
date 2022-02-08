export default function (currentState, action) {
    switch (action.type) {
        case "addUser":
            const newUser = {
                id: 4,
                name: action.username,
                password: action.password,
                role: action.role
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
    }
}