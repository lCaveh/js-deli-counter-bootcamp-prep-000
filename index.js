function takeANumber(current,name) {
  return ("Welcome, " + name + ". You are number " + (current +1) + " in line.");
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