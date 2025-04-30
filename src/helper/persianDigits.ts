export function ConvertToPersianDigit(str: string | number) {
    return str.toString().replace(/[0-9]/g, function (d) {
        return String.fromCharCode(d.charCodeAt(0) + 1728);
    });
}