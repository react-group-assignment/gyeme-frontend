export default function (currentState, action) {
    switch (action.type) {
        case "addUser":
            return {
                ...currentState,
                users: [action.data, ...currentState.users]
            }
        case "setUsers":
            return {
                ...currentState,
                users: action.data
            }
    }
}
