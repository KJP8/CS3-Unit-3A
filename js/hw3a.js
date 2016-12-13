/* hw3a.js  */
// your solution here
window.onload = function() {
    
    // initialize global variables
    var text = document.getElementById("transcriptText");
    
    // call splitText function when button is clicked
    document.addEventListener("click", splitText);
    
    function splitText(){
        
        // get the text from the div and put each individual word into an array
        var input = text.childNodes[0].nodeValue;
        var array = input.split(" ");
        // replace the existing div text with nothing temporarily
        text.innerHTML = '';
        
        // for each word in the array...
        for (var i = 0; i < array.length; i++) {
            
            // ...create a new span element, including attributes
            var spanEl = document.createElement("SPAN");
            spanEl.setAttribute("class", "word");
            spanEl.setAttribute("id", "word" + i);
            
            // ...put each word from the array into its own span
            var newText = document.createTextNode(array[i] + " ");
            spanEl.appendChild(newText);
            
            // put new span elements with their text values into the original div
            text.appendChild(spanEl);
            
            // turn background of each word yellow on hovering over word
            spanEl.addEventListener("mouseover", function(evt) {
               evt.target.style.backgroundColor = "yellow";
            });
            
            // turn background of each word white upon moving mouse away from word
            spanEl.addEventListener("mouseout", function(evt) {
               evt.target.style.backgroundColor = "white";
            });
        }
        
    }
}
