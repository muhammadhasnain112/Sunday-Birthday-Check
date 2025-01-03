
function date() {

    let userdob = document.getElementById("date").value
    // console.log(userdob);

    let year = document.getElementById("year").value
    let newd = userdob.slice(4);
    let newy = new Date(year)
    //console.log(newd);
    // console.log(date);
    let day = document.getElementById("items").value
    // console.log(day);

    let Empty = [];
    for (let i = 2025; i < year; i++) {

        let date = new Date(`${i}${newd}`);

        if (date.getDay() == day) {
            Empty.push(i)
        }
    }
    let count
    if (day == 0) {
        count = `Sunday`
    } else if (day == 1) {
        count = `Monday`
    } else if (day == 2) {
        count = `Tuesday`
    } else if (day == 3) {
        count = `Wednesday`
    } else if (day == 4) {
        count = `Thursday`
    } else if (day == 5) {
        count = `Friday`
    } else if (day == 6) {
        count = `Saturday`
    }
    document.getElementById("h32").innerHTML = `Your birthday falls on a ${count} this years `
    document.getElementById("h3").innerHTML = `${Empty}`

}