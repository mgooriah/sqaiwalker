/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function onLoad_audit (){	
	var thisComponent=this;
	
	// Add action in item
	this.addTool("Rapport PDF","Rapport PDF", function() { onPrint_rapport(thisComponent); });

	
	
	/**
	 *
	 * Evénements
	 *
	 */
	thisComponent.ui.find("#tab2489").on("click", function() {
		console.log('Onglet Matériel');
		showFields(thisComponent);
	});
	
	
	
	return true;
}

function onSave_audit (){
	if (this.isNew()) {
		var cle = this.getValue('numero')+'_'+Date.now();
		this.setValue('cle', cle);
	}
	return true;
}
function onPrint_rapport(thisComponent)
{
	window.open('file/__pdf__/html2pdf.php?modele=rapport&cle='+thisComponent.getValue('cle')+'&table=audit&action=print');
}

function showFields(thisComponent){
	/**
	* 
	* TODO : Matériel
	*
	*/
	
	// si "température", "humidité", "CO2" OU "CO" a été cochée au moins une fois, proposer le matériel :CHI
	// parcourir les prelevements avec coché un de ces éléments
	var prelevementItems = thisComponent.ui.find("#LinkAuditToPrelevement .datagrid-f:first").datagrid("getData").rows;
	var nb_temperature = 0;
	var nb_humidite = 0;
	var nb_co2 = 0;
	var nb_co = 0;
	
	
	$.each(prelevementItems, function (index, item) {
		console.log(item.mesure_temperature);
		if(item.mesure_temperature === '1') nb_temperature += 1;
		if(item.mesure_humidite === '1') nb_humidite += 1;
		if(item.mesure_co2 === '1') nb_co2 += 1;
		if(item.co === '1') nb_co += 1;
	});
	
	console.log(String(nb_temperature));
	
	if((nb_temperature>0)||(nb_humidite>0)||(nb_co2>0)||(nb_co>0)){
		thisComponent.ui.find('#combo_sie_chi').closest('.form-group').closest('.form-group').show();
	}else{
		thisComponent.ui.find('#combo_sie_chi').closest('.form-group').closest('.form-group').hide();
	}
	
	// si "particules" a été cochée au moins une fois, proposer le matériel : PAR

	
	// si "COV instantanés" a été cochée au moins une fois, propose le matériel : SIE-PID-01
	
	
	// si "Formaldéhyde" a été cochée, compter le nombre de fois (et ajouter 1) et associer à "tube 165", compter le nombre de fois et associer à "corps diffusif bleu"

	
	// si "COV totaux" a été cochée, compter le nombre de fois (et ajouter 1) et associer à "tube 130" ou "tube 145" (menu déroulant) - Si "tube 130" sélectionner, 
	// compter le nombre de fois et associer "corps diffusif blanc", si "tube 145" sélectionner, compter le nombre de fois et associer "corps diffusif bleu"
	

	
	// si "NO2" a été cochée, compter le nombre de fois (et ajouter 1)  et associer à "tube 166", compter le nombre de fois et associer "corps diffusif bleu"

	
		
	// TODO : si "Benzène", "Toluène", "Ethylbenzène" OU "Xylènes" a été cochée, compter le nombre de fois et associer à "tube 130" ou "tube 145" (menu déroulant) - Si "tube 130" 
	// sélectionner, compter le nombre de fois et associer "corps diffusif blanc", si "tube 145" sélectionner, compter le nombre de fois et associer "corps diffusif bleu"
	
	
	// TODO : si "Autre polluant", reprendre la liste des autres polluants et prévoir un espace pour le nombre d'analyses et le type de tube associé et le type de corps diffusif "blanc, bleu ou jaune" (edited)

  
	// Si au moins une des mesures "chimiques (analyses laboratoire)" a été cochée au moins une fois, ajouter :
	// (x) Glacière
	// (x) pains de glace

	/*
	switch(type) {
		case 'Soufflage':
			thisComponent.ui.find('#occupation').closest(".form-group").show();
			thisComponent.ui.find('#occupation_theorique').closest(".form-group").show();
			thisComponent.ui.find('#section_1200').show();
			break;
			
		default:
		break;
	}
	*/	
}

