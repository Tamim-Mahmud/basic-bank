function  getElementValueOrText(elementId){
    
    if(document.getElementById(elementId).tagName == "INPUT"){
        
        return parseFloat(document.getElementById(elementId).value);
    }
    else{
        return parseFloat(document.getElementById(elementId).innerText);
    }
}
function setElementText(elementId, elementValue){
    document.getElementById(elementId).innerText = elementValue;
}