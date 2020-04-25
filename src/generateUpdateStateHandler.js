export default function generateUpdateStateHandler(stateKey) {
    return (state, action) => {
        return {
            ...state,
            [stateKey]: action.payload,
        };
    };
}
