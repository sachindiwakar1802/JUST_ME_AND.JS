let name = "sachin";
function outerFunction() {
 // let name = "sach";

  function innerFunction(){
   // let name = "sachin001"
    console.log(name)
  }
  innerFunction();
}
outerFunction();

