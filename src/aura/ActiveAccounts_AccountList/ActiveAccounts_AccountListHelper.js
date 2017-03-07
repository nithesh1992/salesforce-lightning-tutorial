({
	loadData : function(component) {
		console.log("I'm a helper function");

        // Create Action Object
        var action = component.get("c.getData");

        // Set Parameters (i.e. passing arguments to apex function)
        action.setParams({
            text: "Action Text"
        });

        // Create a Callback
        action.setCallback(this, function(response){

            // Get the Response Status
            var status = response.getState();

            // If successful print returned data
            if (status === "SUCCESS"){
                // get response data
                var apexText = response.getReturnValue();

                // print data to console
                console.log(apexText);
            }

        });

        $A.enqueueAction(action);

	}
})
