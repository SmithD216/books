export default function assignText(page) {
    let text = [];

    switch (page) {
        case 0:
            text = ["North", "South", "East", "West"]
            break;
        case 2:
            text = ["This", "Is", "Page", "Two"]
            break;
        case 3:
            text = ["This", "Is", "Page", "Three"]
            break;
        default:
            text = ["Something", "Has", "Went", "Wrong"]
    }

    return text;
}