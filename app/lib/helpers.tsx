

export function capitalize(text: string, delimiter = " ") {
    if (!text) return "";

    return text.split(delimiter).map(each => each[0].toUpperCase().concat(each.substring(1))).join(delimiter);
}
