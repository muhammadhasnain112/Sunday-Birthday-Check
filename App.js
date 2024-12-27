
function date() {

    let userdob = document.getElementById("date").value
    // console.log(userdob);

    let year = document.getElementById("year").value
    let newd = userdob.slice(4);
    // let newy = new Date(year)
    // console.log(newd);
    // console.log(date);

    let Empty = [];
    for (let i = 2025; i < year; i++) {

        let date = new Date(`${i}${newd}`);
        // console.log(date.getDay());
        if (date.getDay() == 0) {
            Empty.push(i)
        }



    }
    document.getElementById("h32").innerHTML = `Your birthday falls on a Sunday this years `
    document.getElementById("h3").innerHTML = `${Empty}`

}