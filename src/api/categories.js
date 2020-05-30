export const getCategories = async () => {
    return new Promise((res, rej) => {
        res([
            "Personal",
            "Work",
            "Tour",
            "Gym",
            "New Office"
        ])
    })
}