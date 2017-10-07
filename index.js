// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value});
}

function deleteFromDriverByKey(object, key) {
  const newDriver = Object.assign({}, object);
  delete newDriver[key]; // didn't work with newDriver.key?
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(object, key) {
  delete object[key] // didn't work with object.key
  return object
}
