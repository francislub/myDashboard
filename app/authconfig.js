export const authConfig = {
    providers:[],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        authorized({auth,request}) {
            const isLoggedIn = auth?.user;
            const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard")
            const isOnWebsite = request.nextUrl.pathname.startsWith("/website")
            if(isOnDashboard || isOnWebsite){
                // if(isLoggedIn) return true;
                return true;
            }else if(isLoggedIn){ 
                return Response.redirect(new URL("/website/home", request.nextUrl));
            }
            return true;
        },
    },
};