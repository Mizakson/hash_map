// hash map project

class HashMap {
    constructor() {
        this.map = new Array(16)
    }

    // use given hash function
    hash(key) {
        key = String(key)
        let hashCode = 0
        const primeNumber = 31

        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16
        }

        return hashCode

    }

    set(key, value) {
        let keyCode = this.hash(key)

        if (this.map[keyCode] !== undefined) {
            this.map[keyCode].value = value
            return this.map
        }

        this.map[keyCode] = new Node(key, value)
        return this.map
    }

    get(key) {
        let keyCode = this.hash(key)
        if (this.map[keyCode] === undefined) {
            return null
        }

        return this.map[keyCode].value

    }

    has(key) {
        let keyCode = this.hash(key)

        if (this.map[keyCode] === undefined) {
            return false
        }

        if (this.map[keyCode].key === key) {
            return true
        }

        return false

    }

    remove(key) {
        let keyCode = this.hash(key)
        
        if (this.map[keyCode] === undefined) {
            return false
        }

        else {
            delete this.map[keyCode]
            return true
        }

    }

    length() {
        let count = 0
        for (let i = 0; i < this.map.length; i++) {
            if (this.map[i] !== undefined) count++
        }
        return count
    }

    clear() {
        this.map = new Array(16)
    }

    keys() {
        let arr = []

        for (let i = 0; i < this.map.length; i++) {
            if (this.map[i] !== undefined) arr.push(this.map[i].key)
        }

        return arr

    }

    values() {
        let arr = []

        for (let i = 0; i < this.map.length; i++) {
            if (this.map[i] !== undefined) arr.push(this.map[i].value)
        }

        return arr
    }

    entries() {
        let arr = []

        for (let i = 0; i < this.map.length; i++) {
            if (this.map[i] !== undefined) arr.push(this.map[i])
        }

        return arr
    }

}


class Node {
    constructor(key = null, value = null) {
        this.key = key
        this.value = value
    }
}


let hm = new HashMap()
hm.set("Max","Programmer")
hm.set("Wolfie","Owns a house")
hm.set("Jack","In a box")
// console.log(hm.get("Grasshopper")) null
// console.log(hm.get("Max")) Programmer
// console.log(hm.has("FLY")) false
// console.log(hm.has("Max")) true
// console.log(hm.remove("Max")) true
// console.log(hm.remove("Boo")) false
// console.log(hm.length()) 3
// console.log(hm.keys()) ["Max", "Wolfie", "Jack"]
// console.log(hm.values()) ["Programmer", "Owns a house", "In a box"]
// console.log(hm.entries()) [Node {key: ... value: ...}, Node {key: ... value: ...}, Node {key: ... value: ...}]