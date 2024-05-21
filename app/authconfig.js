export const authConfig = {
    providers:[],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        authorized({auth,request}) {
            // const isLoggedIn = auth?.user;
            // const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard")
            // const isOnWebsite = request.nextUrl.pathname.startsWith("/website")
            // if(isOnDashboard || isOnWebsite){
            //     if(isLoggedIn) return true;
            //     return false;
            // }else if(isLoggedIn){ 
            //     return Response.redirect(new URL("/website/home", request.nextUrl));
            // }
            // return true;
            // const isLoggedIn = auth?.user;
            const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard")
            const isOnHome = request.nextUrl.pathname.startsWith("/")
            // const isOnWebsite = request.nextUrl.pathname.startsWith("/website")
            if(isOnHome){
                return Response.redirect(new URL("/website/home", request.nextUrl));
            }else if(isOnDashboard){ 
                return Response.redirect(new URL("/dashboard", request.nextUrl));
            }
            return true;
        },
    },
};