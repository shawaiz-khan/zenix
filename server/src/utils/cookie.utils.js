class CookieHelpers {
    static setCookies(res, tokenType, token) {
        const cookieName = tokenType === "access" ? "accessToken" : "refreshToken";

        res.cookie(cookieName, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: tokenType === "access" ? 60 * 60 * 1000 : 7 * 24 * 60 * 60 * 1000
        });
    }

    static clearCookies(res, tokenType) {
        const cookieName = tokenType === "access" ? "accessToken" : "refreshToken";

        res.clearCookie(cookieName, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });
    }
}

export default CookieHelpers;