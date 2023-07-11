

export const validatePassword = async (password: string, confirm: string) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/
    if (password.trim().length === 0) {
        return 'pass/is-empty'
    } else if (!passwordRegex.test(password)) {
        return 'pass/test-failed'
    } else if (password.length < 8) {
        return 'pass/length-failed'
    } else if (password !== confirm) {
        return 'pass/not-match'
    } else {
        return null
    }
}