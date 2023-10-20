const mappendRequest = {

    signIn: async (data) => {

        const transformedData = {
            userName: data.username,
            password: data.password,
            orgId: data.orgId || null,
        };

        return transformedData;

    },

}

export default mappendRequest;