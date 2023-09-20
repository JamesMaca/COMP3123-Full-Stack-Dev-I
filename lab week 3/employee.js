module.exports = class Employee{
// module.exports.Employee = class{
    constructor(eid, enm){
        this.eid = eid
        this.enm = enm
    }

    print(){
        console.log(this.eid)
        console.log(this.enm)
    }
}