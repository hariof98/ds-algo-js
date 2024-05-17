class TimedMap {
    constructor() {
        this.map = new Map();
    }

    set(key, value, time) {
        if (key === null || value === null || time === null) {
            throw new Error("Values are missing");
        }

        const objValue = {
            value: value,
            timeStamp: time,
        };

        //const modifiedKey = key + "" + time;

        return this.map.set(key, objValue);
    }

    get(key) {
        if (key === null) {
            throw new Error("Values are missing");
        }

        return this.map.get(key) !== undefined ? this.map.get(key) : "key is not found.";
    }

    has(key) {
        if (key === null) {
            throw new Error("Values are missing");
        }

        return this.map.has(key) ? true : false;
    }
}

const maps = new TimedMap();

console.log(maps.set("a", 10, 25));
console.log(maps.set("a2", 120, 5));
console.log(maps.set("a2", 150, 50));
console.log(maps.get("a2"));
