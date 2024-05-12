export const checkRole = (token: string): "admin" | "user" => {
    if (token === import.meta.env.VITE_ADMIN_TOKEN) {
        return "admin";
    }

    return "user";
}