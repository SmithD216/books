export default function assignText(page) {
    let text = [];

    switch (page) {
        case 0:
            text = ["North", "South", "East", "West"]
            break;
        default:
            text = ["Something", "Has", "Went", "Wrong"]
    }

    return text;
}