interface IProtoData {
    dt: string;
    quantity: number;
    age: number | null;
    temp: {
        temperature: string;
        city: string;
        optional?: boolean;
    }
}

const arrDate: Array<IProtoData> = [
    {
        "dt": "01-01-2021",
        "quantity": 100,
        "age": null,
        "temp": {
            "temperature": "100 degrees",
            "city": "Norway"
        }
    },
    {
        "dt": "02-01-2021",
        "quantity": 150,
        "age": 23,
        "temp": {
            "temperature": "103 degrees",
            "city": "Egypt"
        }
    },
    {
        "dt": "03-01-2021",
        "quantity": 150,
        "age": 22,
        "temp": {
            "temperature": "98 degrees",
            "city": "Kypris"
        }
    },
    {
        "dt": "03-01-2021",
        "quantity": 150,
        "age": 22,
        "temp": {
            "temperature": "98 degrees",
            "city": "Holland"
        }
    },
    {
        "dt": "03-01-2021",
        "quantity": 700,
        "age": 27,
        "temp": {
            "temperature": "50 degrees",
            "city": "Kursk",
            "optional": true
        }
    },
    {
        "dt": "03-01-2021",
        "quantity": 700,
        "age": 27,
        "temp": {
            "temperature": "50 degrees",
            "city": "Kursk",
            "optional": true
        }
    }
]

// let uniq = {}
// const newArrDate = arrDate.filter(obj => !uniq[obj.temp.city] && (uniq[obj.temp.city] = true));
// const dateSet = new Set(newArrDate);


// const dateMap = new Map();
// newArrDate.forEach((obj, index) => {
//     dateMap.set(newArrDate[index].dt + ' ' + index, obj)
// });

const dateSet = new Set();
arrDate.forEach(obj => dateSet.add(obj.dt));

console.log(dateSet);

const dateMap = new Map();
arrDate.forEach(obj => {
    const newObj = Object.assign({}, obj);
    dateMap.get(obj.dt) ? dateMap.get(obj.dt).push(newObj) : dateMap.set(obj.dt, [newObj]);
})

console.log(dateMap);