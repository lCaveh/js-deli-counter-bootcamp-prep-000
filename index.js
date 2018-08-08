function takeANumber(current,name) {
  current.push(name);
  return ("Welcome, " + name + ". You are number " + (current.index +1) + " in line.");
}
function nowServing(katzDeliLine) {
  var first = katzDeliLine[0];
  if (katzDeliLine.length > 0) {
    katzDeliLine.shift(0);
    return first;
  } else {
    return "There is nobody waiting to be served!"
  }
}