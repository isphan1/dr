export const tokenConfig = (getState) => {
    // Get token from state
    const token = getState().auth.user.token;

    return token;
  };