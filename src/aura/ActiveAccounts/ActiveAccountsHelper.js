({
	loadAccounts : function(component) {
        var helperTextString = "Hello!";

        console.log("Helper",helperTextString);

        var action = component.get("c.getAccountDisplayApexFunction");

        action.setParams({
            textString : helperTextString,
        });

        action.setCallback(this,function(response){

            var state = response.getState();
            var answer = response.getReturnValue();

            if(state === "SUCCESS"){
                // Gets Evaluated if No Errors.
                console.log("Callback",answer);

            }

        });

        $A.enqueueAction(action);

	}
})