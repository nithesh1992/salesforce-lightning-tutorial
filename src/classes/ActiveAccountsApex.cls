public with sharing class ActiveAccountsApex {
	public ActiveAccountsApex() {

	}

    @AuraEnabled
    public static String getData(String text){
        String secondText = 'Apex';

        return text + secondText;
    }
}
