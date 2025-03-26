export const parseValue = (value) => {
    if (value.indexOf("var:") === 0) {
        const varValue = value.split(":")[1].split("|").join("--");    
        // Transform & parse 'var:preset|spacing|40' to ----> "preset--spacing--40"
        return `var(--wp--${varValue})` // var(--wp--preset--spacing--40)
    }
    return value;
}