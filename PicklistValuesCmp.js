<aura:component controller="PickListController" access="global">
    
    <aura:attribute name="sObjectName" type="String" />
	<aura:attribute name="fieldName" type="String" />
	<aura:attribute name="picklistValues" type="Object" />
	<aura:handler name="init" value="{!this}" action="{!c.doInit}" />

</aura:component>
