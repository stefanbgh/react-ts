export const checkLikeStyle: Function = (isLiked: boolean, darkTheme: boolean, likeStyle: "color" | "stroke"): string => {
    if (likeStyle === "stroke") {
        if (isLiked) {
            if (darkTheme) {
                return "#dc2626";
            }

            return "#f87171";
        }

        if (darkTheme) {
            return "#ffffff";
        }

        return "#111827";
    }
    
    if (isLiked) {
        if (darkTheme) {
            return "#dc2626";
        }

        return "#f87171";
    }

    if (darkTheme) {
        return "#111827";
    }

    return "#ffffff";
}

