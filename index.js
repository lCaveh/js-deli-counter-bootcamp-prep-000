function takeANumber(current,name) {
  return ("Welcome, " + name + ". You are number " + (current +1) + " in line.");
}
function nowServing(katzDeliLine) {
  var first = katzDeliLine[0];
  katzDeliLine.pop(0)
}