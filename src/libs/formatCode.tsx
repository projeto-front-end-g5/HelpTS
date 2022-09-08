export function formateCode(code:string, initial:number, canDoIt:boolean):string{
  let naoPula = canDoIt
  let actual = initial
  let newCode = code;
  let char = ""
  const ln="\n"
  if(actual >= newCode.length){
    return newCode;
  }
  if(newCode.length < 2){
    return newCode;
  }
  switch(newCode[actual]){
    case "{":
      if (newCode[actual-1] !== "$") {
          char = "{"
          newCode = newCode.substring(0, actual) + char + ln + newCode.substring(actual+1);
          actual+=2
          naoPula = true
          
      } else {
          naoPula = false
      }
      break;
    case "}":
      if(naoPula) {
          if(newCode[actual+1] !== ")"){
              char = "}"
              newCode = newCode.substring(0, actual) + ln + char + ln  + newCode.substring(actual+1);
              actual+=3  
          }
      } else {
          naoPula = true
      }
      break;
    
    case ";":
      char = ";"
      newCode = newCode.substring(0, actual) + char + ln + newCode.substring(actual+1);
      actual+=2
      break;
      
    case "i":
      if (actual+2 < newCode.length){
          if(newCode[actual+1] === "f" ){
              if (newCode[actual+2] === "(" || newCode[actual+2] === " " ){
                  char = "if"
                  newCode = newCode.substring(0, actual-1)  + ln+ char  + newCode.substring(actual+2);
                  actual+=3  
              }
          }
      }
      break;      
    default:
      break;
  }
  return formateCode(newCode, actual+1, naoPula)
}
