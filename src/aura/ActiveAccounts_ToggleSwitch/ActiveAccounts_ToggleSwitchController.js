({
	updateActive : function(component, event, helper) {
		var isActive = component.get("v.isActive"); // Get the Attribute Value of IsActive
        component.set("v.isActive",!isActive);
	}
})