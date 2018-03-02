
    let global_input = 8; // default value


    /*************************************************************
        This function intercept the keyboard event and  apply some filter.
        We only want a single digit from 1 to 9
     **/
    function weWantSingleDigit(evt){
        let charCode = (evt.which) ? evt.which : event.keyCode;
        if (charCode > 31 && (charCode < 49 || charCode > 57)) return false; // exit since we only authorise  numbers 1-9
        else {
            if (document.getElementById('quantity').value) return false; // exit since there is already a value
            global_input = charCode -48; // correct value 1 to 9
            //console.log("global_input = " + global_input);

            // Now we are going to build new html content based on the input

            let startBlock = '<div class="number"><div>'; // first half of code to inject
            let endBlock = '</div></div>'; // second half of code to inject

            let insertThere = document.getElementById('numbers_container'); // where to insert
            let whatToInsert = '';
            let iterator = makeIterator(['1', '2', '3', '4', '5', '6', '7', '8', '9']); // set the values that will be return by he iterator in this order

            for (let i=0; i<global_input; i++) whatToInsert += startBlock + iterator.next().value + endBlock;
            insertThere.innerHTML = whatToInsert; // replace html content
            return true;
        }
    }

    /**************************
     This is a simple iterator
     **/
    function makeIterator(array) {
        let nextIndex = 0;
        return {
            next: function() {
                return nextIndex < array.length ?
                    {value: array[nextIndex++], done: false} :
                    {done: true};
            }
        };
    }
