$(document).ready(function(){
    
    //Declare some variables

    var baseCurrency = 'USD';
    var baseNumber = 1;
    var targetCurrency = 'USD';
    var targetNumber;
    var url
    currencyConverter(baseCurrency, baseNumber, targetCurrency, targetNumber);

    // Want to listen to event when input field changes

    $("#baseNumber").change(function(){

        baseNumber = $(this).val()
        console.log(baseNumber)

        currencyConverter(baseCurrency, baseNumber, targetCurrency, targetNumber);
    });

    // Do the same for other fields

    $("#targetNumber").change(function(){

        targetNumber = $(this).val()

        currencyConverter2(baseCurrency, baseNumber, targetCurrency, targetNumber);
    });


    $("#targetNumber")
    function currencyConverter(baseCurrency, baseNumber, targetCurrency, targetNumber){
        
        url = "https://api.exchangeratesapi.io/latest?symbols=" + targetCurrency + "&base=" + baseCurrency;

        $.get(url,function(data){
            console.log(data.rates);

            for (let[key, value] of Object.entries(data.rates)){
                //checking to see if they match
                // console.log(key)
                // console.log(value)

                var result = value * baseNumber

                $("#targetNumber").val(result);
            }
        });
    };

    function currencyConverter2(baseCurrency, baseNumber, targetCurrency, targetNumber){
        
        url = "https://api.exchangeratesapi.io/latest?symbols=" + baseCurrency + "&base=" + targetCurrency;

        $.get(url,function(data){
            console.log(data.rates);

            for (let[key, value] of Object.entries(data.rates)){
                //checking to see if they match
                console.log(key)
                console.log(value)

                // Multiply by target number instead to reverse

                var result = value * targetNumber

                $("#baseNumber").val(result);
            };
        });

    };

    $("#base").change(function(){
            
        baseCurrency = $(this).children("option:selected").val();
        console.log(baseCurrency)

        currencyConverter(baseCurrency, baseNumber, targetCurrency, targetNumber);
    });

    $("#target").change(function(){

        targetCurrency = $(this).children("option:selected").val();
        console.log(targetCurrency);
        currencyConverter(baseCurrency, baseNumber, targetCurrency, targetNumber);

    });

});