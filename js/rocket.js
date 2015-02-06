$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("381Z3GQKg5ozQrxaJIuI71Y2deeEMNxX7ItMOWFg", "vsL6GaTlCEuGkh1JutUvu2n4RLPWe78Doc8fEoIS");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});