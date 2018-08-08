function takeANumber(current,name) {
  current.push(name);
  return ("Welcome, " + name + ". You are number " + (current.length) + " in line.");
}
function nowServing(katzDeliLine) {
  var first = katzDeliLine[0];
  if (katzDeliLine.length > 0) {
    katzDeliLine.shift(0);
    return first;
  } else {
    return "There is nobody waiting to be served!";
  }
}
function currentLine(katzDeliLine) {
  var str ="The line is currently: ";
  if (katzDeliLine.length >0) {
    for (var i=0;i++;i<katzDeliLine.length) {
      str.push(i + ". " + katzDeliLine[i]);
    } 
  } else {
    return 
  }
  return str;
}