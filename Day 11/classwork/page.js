let obj = {
    name: "Dipankar",
    class: "B Tech",
    roll: 195,
    myfunction: function () {
        console.log(this); // this refers to the object it is a part of ,mens the parents element
        console.log(this.name, "is inside the function");
    },
    sub: ["Math", "DSA", "DBMS", "DAA"],
    newObj: {
        1: 80,
        newFun: function () {
            console.log(this)
            console.log("I am in the nested function")
        },
        nestedNewObj: {
            name: "Rishita",
            nestFun:
                function () {
                    console.log(this)
                    console.log("I am in the -nested-nested function")

                }
        }
    }
}

obj.myfunction();
obj.newObj.newFun();
obj.newObj.nestedNewObj.nestFun();
