var recipes = { ingredient: "milk" }

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object 
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
   object[key] = value
  return object 
}

function deleteFromObjectByKey(object, key) {
  delete object.key
  
}



