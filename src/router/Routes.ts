export const Routes = {
    // PUBLIC
    LOGIN: "/login",
    REGISTER: "/register",
    RESET_PASSWORD: "/reset-password",
    // PRIVATE
    HOME: "/",
    PRODUCTS: "/products",
    PRODUCT_DETAILS: "/:productId",
    PHONES: "/phones",
    TABLETS: "/tablets",
    LAPTOPS: "/laptops",
    TELEVISIONS: "/televisions",
    BLOGS: "/blogs",
    OTHERS: "/others",
    FAQ: "/faq",
    SUPPORT: "/support",
    CHAT: "/chat",
    MESSAGES: "/messages",
    CART: "/cart",
    // PROFILE
    PROFILE: "/profile",
    PROFILE_INFO: "/profile-info",
    WISHLIST: "/wishlist",
    ORDERS: "/orders",
    SETTINGS: "/settings",
    // DASHBOARD
    DASHBOARD: "/dashboard",
    KANBAN: "/kanban",
    CALENDAR: "/calendar",
    EMPLOYEES: "/employees",
    CUSTOMERS: "/customers",
    ADMIN_PRODUCTS: "/admin-products",
    ADMIN_ORDERS: "/admin-orders",
    ADMIN_MESSAGES: "/admin-messages",
    ADMIN_REVIEWS: "/admin-reviews",
    // NOT AUTHORIZED
    NOT_AUTHORIZED: "/not-authorized",
    // NOT FOUND
    NOT_FOUND: "*"
}