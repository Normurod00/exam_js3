let courses = [

    {

        title: 'SMM',

        howLong: 3

    },

    {

        title: 'Dev',

        howLong: 6

    },

    {

        title: 'Graph',

        howLong: 4

    },

]

let earnings = {

    total: 0,

    max: 0,

    min: 0

}

let m = Number

let w = Number

let average_age = Number

let smm = Number

let dev = Number

let graph = Number

let students = [

    {

        sex: 'm',

        age: 14,

        payment: 1220000,

        course: {

            title: 'SMM',

        }

    },

    {

        sex: 'm',

        age: 24,

        payment: 1883000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 16,

        payment: 2190000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 19,

        payment: 718000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 15,

        payment: 2195000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 24,

        payment: 460000,

        course: {

            title: 'SMM'

        }

    },

    {

        sex: 'w',

        age: 14,

        payment: 560000,

        course: {

            title: 'SMM'

        }

    },

    {

        sex: 'w',

        age: 22,

        payment: 160000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 26,

        payment: 883000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 26,

        payment: 750000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 23,

        payment: 212000,

        course: {

            title: 'Graph',

        }

    },

    {

        sex: 'w',

        age: 24,

        payment: 883000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 27,

        payment: 190000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'w',

        age: 19,

        payment: 210000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 21,

        payment: 770000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 18,

        payment: 1200000,

        course: {

            title: 'SMM'

        }

    },

    {

        sex: 'w',

        age: 51,

        payment: 880000,

        course: {

            title: 'SMM'

        }

    },

    {

        sex: 'm',

        age: 51,

        payment: 2430000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'w',

        age: 33,

        payment: 1277000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 21,

        payment: 2750000,

        course: {

            title: 'Dev'

        }

    },

]

// ?? ???????? ?????????????? ?????????? ???????? ?????????????? ??????????, ?? ?????????????? ?????????????? ?????????????????? ??????????????????. ???????????? ???? ?????? ?????????????? ???? ??????????-???? ?????????? ?? ???????????? ???? ????????????????. ?? ?????????????????? ???? ?????????? ??????, ??????????????, ????????????, ?? ?????????? ????????, ?????????????? ?????? ??????????????.*

// 1. ???????????????? ?????????????????? ???????? howLong ???????????? ?????????? course, ?????????? ?? title. HowLong - ??????????, ???????????????????? ?????????????? ?????????????? ?????????????? ????????*

// 2. ?????????????????? ???????????????????? ?????????????? ?? ?????????????????? ???????????? ???????????????????? m ?? w*

// 3. ?????????????????? ?????????????????? ???????????????? ???????????? ?? earning.total*

// 4. ???????????? ?????? ???????????? ???????? ???????????? ???? ???????????????? ?? earning.max*

// 5. ???????????? ?????? ???????????? ???????? ???????????? ???? ???????????????? ?? earning.min*

// 6. ?????????????????? ?????????????? ?????????????????? ?????????????? ???? ???????????? ???????????? dev, smm ?? graph*

// 7. ?????????????????? ?????????????? ?????????????? ?????????????????? ?? average_age*



const setup = (arr) => {
    let m = 0
    let w = 0
    let average_age = 0
    var smm = 0
    var dev = 0
    var graph = 0
    for (let item of arr) {

        if (item.sex === 'w') {
            w = w + item.sex
        }
        else {
            m = m + item.sex
        }
    }

    var max = arr.reduce(function (prev, current) {
        if (+current.payment > +prev.payment) {
            return current;
        } else {
            return prev;
        }
    });
    earnings.max = max

    var min = arr.reduce(function (a, b) {
        if (+a.payment < +b.payment) {
            return a;
        } else {
            return b;
        }
    });
    earnings.min = min


    for (let item of arr) {
        for (let item2 of courses) {
            if (item2.title === item.course.title) {
                item.course.howLong = item2.howLong
            }

        }
        if (item.course.title === 'Dev') {
            dev++
        }
        else
            if (item.course.title === 'Graph') {
                graph++
            }
            else
                if (item.course.title === 'SMM') {
                    smm++
                }

        average_age += item.age / arr.length
        earnings.total += item.payment
    }

    console.log(arr);
    console.log(`?????????????? => ` + w.length)//2
    console.log(`?????????????????? => ` + m.length)//2
    console.log(`?????????????????? ???????????????? ???????????? => ` + earnings.total);//3
    console.log(earnings.max);//4
    console.log(earnings.min);//5
    console.log(`${dev} ???????????????? ???????????? ?? dev, ${smm} ???????????????? ???????????? ?? smm, ${graph} ???????????????? ???????????? ?? graph`); //6
    console.log(`?????????????? ?????????????? ???????? ?????????????????? => ` + Math.floor(average_age)); //7
}


setup(students)