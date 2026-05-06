export function getFormattedDate(){

    const now = new Date()

    const weekday = now.toLocaleDateString("en-GB", { weekday: "long" });
    const month = now.toLocaleDateString("en-GB", { month: "long" });
    const day = now.getDate();

    return `${weekday}, ${day}${getOrdinal(day)} ${month}`;
}

function getOrdinal(n: number) {

    if (n > 3 && n < 21) return "th";

    const rem = n % 10

    if(rem == 1) return 'st'
    else if(rem == 2) return 'nd'
    else if(rem == 3) return 'rd'
    else return 'th'
    
} 