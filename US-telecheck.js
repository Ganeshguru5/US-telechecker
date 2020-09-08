function telecheck(str) {
if(str.indexOf("(")===-1&&str.indexOf(")")>-1){
return false
}
console.log(str.indexOf("(")-str.indexOf(")"))
if(str.indexOf(")")-str.indexOf("(")>=5){
  return false
}
if(str[0]==="-"){
  return false
}
let number=str.replace(/-| /g,"")
console.log(number)

if(number.indexOf("(")<number.indexOf(")")){
  number=  number.replace(/\(|\)/g,"")
}
if(number.length===10){
  return true
}else if(number.length===11&&number[0]==="1"){
  return true
}
return false;
}
