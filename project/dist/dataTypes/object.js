// Object declaration 
// Object literal 
var sinhvien = {
    name: "Duy",
    age: 20,
    homeTown: "Tuyên Quang"
};
var ROLE;
(function (ROLE) {
    ROLE[ROLE["STAFF"] = 0] = "STAFF";
    ROLE[ROLE["MANAGER"] = 1] = "MANAGER";
    ROLE[ROLE["USER"] = 2] = "USER";
})(ROLE || (ROLE = {}));
