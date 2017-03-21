/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var	seuil_co2_val1;
var	seuil_0_5_val1;
var	seuil_1_0_val1;
var	seuil_tcs_val1;
var	seuil_mca_val1;
var	seuil_ir_val1;
var	seuil_humidite_val1;
var	seuil_temperature_val1;
var	seuil_pm10_val1;
var	seuil_pm2_5_val1;
var	seuil_formaldehyde_val1;
var	seuil_benzene_val1;
var	seuil_cov_totaux_val1;
var	seuil_toluene_val1;
var	seuil_ethylbenzene_val1;
var	seuil_xylenes_val1;
var	seuil_no2_val1;
var	seuil_co2_val2;
var	seuil_0_5_val2;
var	seuil_1_0_val2;
var	seuil_tcs_val2;
var	seuil_mca_val2;
var	seuil_ir_val2;
var	seuil_humidite_val2;
var	seuil_temperature_val2;
var	seuil_pm10_val2;
var	seuil_pm2_5_val2;
var	seuil_formaldehyde_val2;
var	seuil_benzene_val2;
var	seuil_cov_totaux_val2;
var	seuil_toluene_val2;
var	seuil_ethylbenzene_val2;
var	seuil_xylenes_val2;
var	seuil_no2_val2;
var	seuil_co2_val3;
var	seuil_0_5_val3;
var	seuil_1_0_val3;
var	seuil_tcs_val3;
var	seuil_mca_val3;
var	seuil_ir_val3;
var	seuil_humidite_val3;
var	seuil_temperature_val3;
var	seuil_pm10_val3;
var	seuil_pm2_5_val3;
var	seuil_formaldehyde_val3;
var	seuil_benzene_val3;
var	seuil_cov_totaux_val3;
var	seuil_toluene_val3;
var	seuil_ethylbenzene_val3;
var	seuil_xylenes_val3;
var	seuil_no2_val3;

function onLoad_prelevement (){
	var thisComponent = this;

	// creer tableau seuil
	// chercher dans l'audit les seuils
	// GetItem Audit
	getSeuil(thisComponent);
		
	// Masquer section
	thisComponent.ui.find('#section_1150').hide();
	thisComponent.ui.find('#section_1148').hide();

	showFields(thisComponent);
	mesureRealiser(thisComponent);

	if (thisComponent.isNew()) {
		//thisComponent.setValue("date",gopaas.date.dateFr());
		//thisComponent.setValue("heure",gopaas.date.time());
	}else{
		// Changer titre
		changeTitle(thisComponent);
		
	}

	/**
	 *
	 * Evénements
	 *
	 */
	thisComponent.ui.find("#combo_type").on("change", function() {
		showFields(thisComponent);
	});
	
	thisComponent.ui.find("#air_ambiant").on("change", function() {
		showFields(thisComponent);
	});
	
	thisComponent.ui.find("#soufflage").on("change", function() {
		showFields(thisComponent);
	});

	// Seuil
	thisComponent.ui.find("#cp_03m").on("change", function() {
		getColor(thisComponent,'#cp_03m');
	});

	thisComponent.ui.find("#cp_05m").on("change", function() {
		getColor(thisComponent,'#cp_05m');
	});
	
	thisComponent.ui.find("#cp_1m").on("change", function() {
		getColor(thisComponent,'#cp_1m');
	});
	

	// Mesures à réaliser
	thisComponent.ui.find("#physico_chimique").on("change", function() {
		mesureRealiser(thisComponent);
	});
	
	thisComponent.ui.find("#chimique").on("change", function() {
		mesureRealiser(thisComponent);
	});
	
	thisComponent.ui.find("#bacteriologique").on("change", function() {
		mesureRealiser(thisComponent);
	});
	
	thisComponent.ui.find("#mesure_particule").on("change", function() {
		mesureRealiser(thisComponent);
	});			

	thisComponent.ui.find("#mesure_temperature").on("change", function() {
		mesureRealiser(thisComponent);
	});			

	thisComponent.ui.find("#mesure_humidite").on("change", function() {
		mesureRealiser(thisComponent);
	});			
	
	thisComponent.ui.find("#mesure_co2").on("change", function() {
		mesureRealiser(thisComponent);
	});			
	
	thisComponent.ui.find("#co").on("change", function() {
		mesureRealiser(thisComponent);
	});			
	
	thisComponent.ui.find("#mesure_cov").on("change", function() {
		mesureRealiser(thisComponent);
	});	
	
	thisComponent.ui.find("#mesure_formaldehyde").on("change", function() {
		mesureRealiser(thisComponent);
	});	
	
	thisComponent.ui.find("#mesure_cov").on("change", function() {
		mesureRealiser(thisComponent);
	});	
	
	thisComponent.ui.find("#mesure_no2").on("change", function() {
		mesureRealiser(thisComponent);
	});	
	
	thisComponent.ui.find("#mesure_benzene").on("change", function() {
		mesureRealiser(thisComponent);
	});	
	
	thisComponent.ui.find("#mesure_toluene").on("change", function() {
		mesureRealiser(thisComponent);
	});	
	
	thisComponent.ui.find("#mesure_ethylbenzene").on("change", function() {
		mesureRealiser(thisComponent);
	});	
	
	thisComponent.ui.find("#mesure_xylenes").on("change", function() {
		mesureRealiser(thisComponent);
	});			
	
	thisComponent.ui.find('#cp_03m_cbx').on("change", function() {
		mesureRealiser(thisComponent);
	});		
	
	thisComponent.ui.find('#cp_05m_cbx').on("change", function() {
		mesureRealiser(thisComponent);
	});		
	
	thisComponent.ui.find('#cp_1m_cbx').on("change", function() {
		mesureRealiser(thisComponent);
	});		
	
	thisComponent.ui.find('#cp_2_5m_cbx').on("change", function() {
		mesureRealiser(thisComponent);
	});		
	
	thisComponent.ui.find('#cp_5m_cbx').on("change", function() {
		mesureRealiser(thisComponent);
	});		
	
	thisComponent.ui.find('#cp_10m_cbx').on("change", function() {
		mesureRealiser(thisComponent);
	});		
	
	thisComponent.ui.find('#pm0_5_cbx').on("change", function() {
		mesureRealiser(thisComponent);
	});		
	
	thisComponent.ui.find('#pm_1_cbx').on("change", function() {
		mesureRealiser(thisComponent);
	});		
	
	thisComponent.ui.find('#pm2_5_cbx').on("change", function() {
		mesureRealiser(thisComponent);
	});
	
	thisComponent.ui.find('#pm5_cbx').on("change", function() {
		mesureRealiser(thisComponent);
	});		
	
	thisComponent.ui.find('#pm10_cbx').on("change", function() {
		mesureRealiser(thisComponent);
	});		
	
	thisComponent.ui.find('#tpm_cbx').on("change", function() {
		mesureRealiser(thisComponent);
	});		
	
	thisComponent.ui.find('#mesure_flore_aerobie_totale').on("change", function() {
		mesureRealiser(thisComponent);
	});			
	
	// Ajouter bouton Générer prelevementTube (onglet Chimiques)
	thisComponent.ui.find("[name=mesure_xylenes]").closest(".form-group").append( "<button id='btn_generer1' type='button' class='btn btn-primary btn-sm' style='float: right; margin-right: 15px; margin-top: 5px;' title='Générer'> <span class='glyphicon glyphicon-saved'></span>&nbsp;<span class='hidden-xs trn'>Générer</span></button>" );
	
	thisComponent.ui.find("#btn_generer1").on('click', function(){
		if (thisComponent.isNew()) {
			gopaas.dialog.warning("Attention vous devez enregristrer le prélèvement avant de générer les fiches chimiques");
		}else{
			$.post("template_auto/prelevement/prelevement.php", {
				mode	: "prelevementTubeCreate",
				prelevement	: thisComponent.getValue("cle"),
				formaldehyde 	: thisComponent.getValue("mesure_formaldehyde"),
				cov_totaux  	: thisComponent.getValue("mesure_cov_totaux"),
				no2  			: thisComponent.getValue("mesure_no2"),
				benzene  		: thisComponent.getValue("mesure_benzene"),
				toluene  		: thisComponent.getValue("mesure_toluene"),
				ethylbenzene  	: thisComponent.getValue("mesure_ethylbenzene"),
				xylenes  		: thisComponent.getValue("mesure_xylenes")
				
			})
			.done(function(data){
				// Actualiser vue liée
				thisComponent.ui.find("#LinkPrelevementTube .datagrid-f:first").datagrid('reload');
				gopaas.dialog.notifyInfo('Génération des fiches terminée !!!');
			})
			.fail(gopaas.dialog.ajaxFail);
		}
	});
	
	// Ajouter bouton Générer prelevement_aerobio (onglet Bactériologiques) 
	thisComponent.ui.find("[name=enterobacteries]").closest(".form-group").append( "<button id='btn_generer2' type='button' class='btn btn-primary btn-sm' style='float: right; margin-right: 15px; margin-top: 5px;' title='Générer'> <span class='glyphicon glyphicon-saved'></span>&nbsp;<span class='hidden-xs trn'>Générer</span></button>" );
	
	thisComponent.ui.find("#btn_generer2").on('click', function(){
		if (thisComponent.isNew()) {
			gopaas.dialog.warning("Attention vous devez enregristrer le prélèvement avant de générer les fiches Bactériologiques");
		}else{
			$.post("template_auto/prelevement/prelevement.php", {
				mode	: "prelevementAerobioCreate",
				prelevement	: thisComponent.getValue("cle"),
				flore_aerobie_totale 	: thisComponent.getValue("mesure_flore_aerobie_totale"),
				levures_moisissures  	: thisComponent.getValue("mesure_levures_moisissures"),
				staphylococcus_aureus	: thisComponent.getValue("mesure_staphylococcus_aureus"),
				enterobacteries  		: thisComponent.getValue("enterobacteries")
				
			})
			.done(function(data){
				// Actualiser vue liée
				thisComponent.ui.find("#LinkPrelevementAerobio .datagrid-f:first").datagrid('reload');
				gopaas.dialog.notifyInfo('Génération des fiches terminée !!!');
			})
			.fail(gopaas.dialog.ajaxFail);
		}
	});
	
	return true;

}

function onSave_prelevement (){
	if (this.isNew()) {
		var cle = Date.now() + '_' + gsUser;
		this.setValue('cle', cle);
	}
	return true;
}

function getColor(thisComponent,field){
var val = thisComponent.ui.find(field).val();
//console.log('val : ' + val);

if(val!= '' ){
	// selon le champ
	switch(field) {
	
	
		case "#cp_05m":
			if(val<=seuil_0_5_val1){
				//console.log('seuil_0_5_val1 : ' + seuil_0_5_val1);
				// Changer couleur de fond
				thisComponent.ui.find(field).css('background-color','#E2EFDA');
			}else{
				thisComponent.ui.find(field).css('background-color','#FFB3B4');
			}

			break;

			
		case "#cp_1m":
			console.log('val: ' + val + 'seuil' + seuil_1_0_val1);
			if(val<=seuil_1_0_val1){
				// Changer couleur de fond
				thisComponent.ui.find(field).css('background-color','#E2EFDA');
			}else{
				thisComponent.ui.find(field).css('background-color','#FFB3B4');
			}

			break;			

			
		case "#teneur_co2":
			if(val<=seuil_co2_val3){
				// Changer couleur de fond
				thisComponent.ui.find(field).css('background-color','#E2EFDA');
			}else{
				thisComponent.ui.find(field).css('background-color','#FFB3B4');
			}

			break;			

		default:
			thisComponent.ui.find(field).css('background-color','#FFFFFF');
	}	

}
	
}

/**
 *
 * Afficher / Masquer les champs
 *
 */
 
function showFields(thisComponent){
	/**
	* 
	* TYPE
	*
	*/
	
	thisComponent.ui.find('#section_1171').hide();
	thisComponent.ui.find('#section_1200').hide();	
	thisComponent.ui.find('#section_1201').hide();	
	thisComponent.ui.find('#section_1198').hide();
	thisComponent.ui.find('#section_1199').hide();
	
	// CTA autre
	thisComponent.ui.find('#section_1203').hide();
	thisComponent.ui.find('#section_1204').hide();
	thisComponent.ui.find('#section_1205').hide();
	
	var type 		= thisComponent.ui.find('#combo_type').val();
	var air_ambiant = thisComponent.ui.find('#air_ambiant').prop('checked');
	var soufflage 	= thisComponent.ui.find('#soufflage').prop('checked');
	
	switch(type) {
	
		case 'Soufflage':
			thisComponent.ui.find('#occupation').closest(".form-group").show();
			thisComponent.ui.find('#occupation_theorique').closest(".form-group").show();
			thisComponent.ui.find('#section_1200').show();
			break;
			
		case 'Air ambiant':
			thisComponent.ui.find('#occupation').closest(".form-group").show();
			thisComponent.ui.find('#occupation_theorique').closest(".form-group").show();
			thisComponent.ui.find('#section_1201').show();
			/*
			thisComponent.ui.find('#air_ambiant').closest(".form-group").show();
			thisComponent.ui.find('#soufflage').closest(".form-group").show();			
			
			// Masquer soufflage et titre soufflage
			if(air_ambiant){
				showAirAmbiant(thisComponent);
			}else{
				hideAirAmbiant(thisComponent);
			}

			if(soufflage){
				showSoufflage(thisComponent);
			}else{
				hideSoufflage(thisComponent);
			}
			*/		

			break;
				
		case "CTA":
			thisComponent.ui.find('#occupation').closest(".form-group").hide();
			thisComponent.ui.find('#occupation_theorique').closest(".form-group").hide();
			thisComponent.ui.find('#section_1198').show();
			thisComponent.ui.find('#section_1203').show();
			thisComponent.ui.find('#section_1204').show();
			thisComponent.ui.find('#section_1205').show();			
			/*
			hideAirAmbiant(thisComponent);
			hideSoufflage(thisComponent);
			*/
			break;

		case "Référent extérieur":
			thisComponent.ui.find('#occupation').closest(".form-group").hide();
			thisComponent.ui.find('#occupation_theorique').closest(".form-group").hide();
			thisComponent.ui.find('#section_1199').show();
			/*
			hideAirAmbiant(thisComponent);
			hideSoufflage(thisComponent);			
			*/
			break;
		
		default:

			thisComponent.ui.find('#occupation').closest(".form-group").hide();
			thisComponent.ui.find('#occupation_theorique').closest(".form-group").hide();
			thisComponent.ui.find('#section_1171').hide();
			thisComponent.ui.find('#section_1200').hide();	
			thisComponent.ui.find('#section_1201').hide();	
			thisComponent.ui.find('#section_1198').hide();
			thisComponent.ui.find('#section_1199').show();
			
			/*
			thisComponent.ui.find('#air_ambiant').closest(".form-group").hide();
			thisComponent.ui.find('#soufflage').closest(".form-group").hide();
			
			hideAirAmbiantTitle(thisComponent);
			hideSoufflage(thisComponent);			
			*/
			break;
	}
	

	
}



function mesureRealiser(thisComponent){
	/**
	*
	* Mesures à réaliser
	*
	*/
	
	// Sélecteur pour mesures à réaliser
	var physico_chimique 	= thisComponent.ui.find('#physico_chimique').prop('checked');
	var chimique 			= thisComponent.ui.find('#chimique').prop('checked');
	var bacteriologique 	= thisComponent.ui.find('#bacteriologique').prop('checked');
	
	
	// Physico-chimiques
	var mesure_temperature 	= thisComponent.ui.find('#mesure_temperature').prop('checked');
	var mesure_humidite 	= thisComponent.ui.find('#mesure_humidite').prop('checked');
	var mesure_co2		 	= thisComponent.ui.find('#mesure_co2').prop('checked');
	var co				 	= thisComponent.ui.find('#co').prop('checked');	
	var mesure_particule 	= thisComponent.ui.find('#mesure_particule').prop('checked');
	var mesure_cov		 	= thisComponent.ui.find('#mesure_cov').prop('checked');
	
	// Chimiques	
	var mesure_formaldehyde	= thisComponent.ui.find('#mesure_formaldehyde').prop('checked');
	var mesure_cov_totaux	= thisComponent.ui.find('#mesure_cov_totaux').prop('checked');	
	var mesure_no2			= thisComponent.ui.find('#mesure_no2').prop('checked');	
	var mesure_benzene		= thisComponent.ui.find('#mesure_benzene').prop('checked');	
	var mesure_toluene		= thisComponent.ui.find('#mesure_toluene').prop('checked');	
	var mesure_ethylbenzene	= thisComponent.ui.find('#mesure_ethylbenzene').prop('checked');	
	var mesure_xylenes		= thisComponent.ui.find('#mesure_xylenes').prop('checked');	
	
	// Bactériologique
	
	
	/* 
	// Matériel
	thisComponent.ui.find('#combo_sie_chi').closest('.form-group').closest('.form-group').hide();
	thisComponent.ui.find('#combo_sie_par').closest('.form-group').closest('.form-group').hide();
	thisComponent.ui.find('#combo_sie_pid_01').closest('.form-group').closest('.form-group').hide();
	thisComponent.ui.find('#glaciere').closest('.form-group').closest('.form-group').hide();
	thisComponent.ui.find('#pains_glace').closest('.form-group').closest('.form-group').hide();
	*/
	
	/**
	*
	* Mesures à réaliser
	*
	*/
	
	// physico_chimique
	thisComponent.ui.find('#mesure_temperature').closest('.form-group').closest('.form-group').hide();
	thisComponent.ui.find('#mesure_humidite').closest('.form-group').hide();
	thisComponent.ui.find('#mesure_co2').closest('.form-group').hide();
	thisComponent.ui.find('#co').closest('.form-group').hide();
	thisComponent.ui.find('#mesure_particule').closest('.form-group').hide();
	thisComponent.ui.find('#mesure_cov').closest('.form-group').hide();
	
	// Particules
	thisComponent.ui.find('#section_1202').hide();
	thisComponent.ui.find('#section_1207').hide();
	
	// Chimiques
	thisComponent.ui.find('#mesure_formaldehyde').closest('.form-group').hide();
	thisComponent.ui.find('#mesure_cov_totaux').closest('.form-group').hide();
	thisComponent.ui.find('#mesure_no2').closest('.form-group').hide();
	thisComponent.ui.find('#mesure_benzene').closest('.form-group').hide();
	thisComponent.ui.find('#mesure_toluene').closest('.form-group').hide();
	thisComponent.ui.find('#mesure_ethylbenzene').closest('.form-group').hide();
	thisComponent.ui.find('#mesure_xylenes').closest('.form-group').hide();
	
	// bacteriologique
	thisComponent.ui.find('#mesure_flore_aerobie_totale').closest('.form-group').hide();
	thisComponent.ui.find('#mesure_levures_moisissures').closest('.form-group').hide();
	thisComponent.ui.find('#mesure_staphylococcus_aureus').closest('.form-group').hide();
	thisComponent.ui.find('#enterobacteries').closest('.form-group').hide();
	


	
	if(physico_chimique){
	
		thisComponent.ui.find('#mesure_temperature').closest('.form-group').show();
		thisComponent.ui.find('#mesure_humidite').closest('.form-group').show();
		thisComponent.ui.find('#mesure_co2').closest('.form-group').show();
		thisComponent.ui.find('#co').closest('.form-group').show();
		thisComponent.ui.find('#mesure_particule').closest('.form-group').show();
		thisComponent.ui.find('#mesure_cov').closest('.form-group').show();	
		
		thisComponent.ui.find('#tab2493').show();
	}else{
	
		// Particules
		thisComponent.ui.find('#section_1202').hide();
		thisComponent.ui.find('#section_1207').hide();

		// Décoche les cases
		thisComponent.ui.find('#mesure_particule').prop('checked', false );
		thisComponent.ui.find('#mesure_temperature').prop('checked', false );
		thisComponent.ui.find('#mesure_humidite').prop('checked', false );
		thisComponent.ui.find('#mesure_co2').prop('checked', false );
		thisComponent.ui.find('#co').prop('checked', false );	
		thisComponent.ui.find('#mesure_cov').prop('checked', false );	
		
		thisComponent.ui.find('#tab2493').hide();
		
	}
	
	if(mesure_particule){
	
		thisComponent.ui.find('#section_1202').show();
		thisComponent.ui.find('#section_1207').show();

		
	}else{
	
		thisComponent.ui.find('#cp_03m_cbx').prop('checked', false );	
		thisComponent.ui.find('#cp_05m_cbx').prop('checked', false );	
		thisComponent.ui.find('#cp_1m_cbx').prop('checked', false );	
		thisComponent.ui.find('#cp_2_5m_cbx').prop('checked', false );	
		thisComponent.ui.find('#cp_5m_cbx').prop('checked', false );	
		thisComponent.ui.find('#cp_10m_cbx').prop('checked', false );	
		thisComponent.ui.find('#pm0_5_cbx').prop('checked', false );	
		thisComponent.ui.find('#pm_1_cbx').prop('checked', false );	
		thisComponent.ui.find('#pm2_5_cbx').prop('checked', false );	
		thisComponent.ui.find('#pm_5_cbx').prop('checked', false );	
		thisComponent.ui.find('#pm10_cbx').prop('checked', false );	
		thisComponent.ui.find('#tpm_cbx').prop('checked', false );	
		
		thisComponent.ui.find('#section_1202').hide();
		thisComponent.ui.find('#section_1207').hide();
		
		
	}
	
	if(chimique){
		thisComponent.ui.find('#mesure_formaldehyde').closest('.form-group').show();
		thisComponent.ui.find('#mesure_cov_totaux').closest('.form-group').show();
		thisComponent.ui.find('#mesure_no2').closest('.form-group').show();
		thisComponent.ui.find('#mesure_benzene').closest('.form-group').show();
		thisComponent.ui.find('#mesure_toluene').closest('.form-group').show();
		thisComponent.ui.find('#mesure_ethylbenzene').closest('.form-group').show();
		thisComponent.ui.find('#mesure_xylenes').closest('.form-group').show();
		
		thisComponent.ui.find('#tab2480').show();
		
	}else{
		thisComponent.ui.find('#mesure_formaldehyde').prop('checked', false );
		thisComponent.ui.find('#mesure_cov_totaux').prop('checked', false );
		thisComponent.ui.find('#mesure_no2').prop('checked', false );
		thisComponent.ui.find('#mesure_benzene').prop('checked', false );
		thisComponent.ui.find('#mesure_toluene').prop('checked', false );
		thisComponent.ui.find('#mesure_ethylbenzene').prop('checked', false );
		thisComponent.ui.find('#mesure_xylenes').prop('checked', false );	
		
		thisComponent.ui.find('#tab2480').hide();
	}
	
	if(bacteriologique){	
	
		thisComponent.ui.find('#mesure_flore_aerobie_totale').closest('.form-group').show();
		thisComponent.ui.find('#mesure_levures_moisissures').closest('.form-group').show();
		thisComponent.ui.find('#mesure_staphylococcus_aureus').closest('.form-group').show();
		thisComponent.ui.find('#enterobacteries').closest('.form-group').show();
		
		thisComponent.ui.find('#tab2479').show();
		
	}else{
	
		thisComponent.ui.find('#mesure_flore_aerobie_totale').prop('checked', false );
		thisComponent.ui.find('#mesure_levures_moisissures').prop('checked', false );
		thisComponent.ui.find('#mesure_staphylococcus_aureus').prop('checked', false );
		thisComponent.ui.find('#enterobacteries').prop('checked', false );
		
		thisComponent.ui.find('#tab2479').hide();
	}
	
	/**
	* 
	* Mesures Physico-chimique
	*
	*/
	var cp_03m_cbx	= thisComponent.ui.find('#cp_03m_cbx').prop('checked');
	var cp_05m_cbx	= thisComponent.ui.find('#cp_05m_cbx').prop('checked');
	var cp_1m_cbx	= thisComponent.ui.find('#cp_1m_cbx').prop('checked');
	var cp_2_5m_cbx	= thisComponent.ui.find('#cp_2_5m_cbx').prop('checked');
	var cp_5m_cbx	= thisComponent.ui.find('#cp_5m_cbx').prop('checked');
	var cp_10m_cbx	= thisComponent.ui.find('#cp_10m_cbx').prop('checked');
	var pm0_5_cbx	= thisComponent.ui.find('#pm0_5_cbx').prop('checked');
	var pm_1_cbx	= thisComponent.ui.find('#pm_1_cbx').prop('checked');
	var pm2_5_cbx	= thisComponent.ui.find('#pm2_5_cbx').prop('checked');
	var pm5_cbx		= thisComponent.ui.find('#pm5_cbx').prop('checked');
	var pm10_cbx	= thisComponent.ui.find('#pm10_cbx').prop('checked');
	var tpm_cbx		= thisComponent.ui.find('#tpm_cbx').prop('checked');
	
	
	// Masquer	
	thisComponent.ui.find('#cp_03m').closest('.form-group').hide();
	thisComponent.ui.find('#cp_05m').closest('.form-group').hide();
	thisComponent.ui.find('#cp_1m').closest('.form-group').hide();
	thisComponent.ui.find('#cp_2_5m').closest('.form-group').hide();
	thisComponent.ui.find('#cp_5m').closest('.form-group').hide();
	thisComponent.ui.find('#cp_10m').closest('.form-group').hide();
	thisComponent.ui.find('#pm0_5').closest('.form-group').hide();
	thisComponent.ui.find('#pm_1').closest('.form-group').hide();
	thisComponent.ui.find('#pm2_5').closest('.form-group').hide();
	thisComponent.ui.find('#pm5').closest('.form-group').hide();
	thisComponent.ui.find('#pm10').closest('.form-group').hide();
	thisComponent.ui.find('#tpm').closest('.form-group').hide();
	thisComponent.ui.find('#teneur_co').closest('.form-group').hide();
	thisComponent.ui.find('#teneur_co2').closest('.form-group').hide();
	thisComponent.ui.find('#temperature').closest('.form-group').hide();
	thisComponent.ui.find('#humidite_relative').closest('.form-group').hide();
	
	// Afficher
	// Concentration particulaire
	if(cp_03m_cbx)	thisComponent.ui.find('#cp_03m').closest('.form-group').show();
	if(cp_05m_cbx) thisComponent.ui.find('#cp_05m').closest('.form-group').show();
	if(cp_1m_cbx) thisComponent.ui.find('#cp_1m').closest('.form-group').show();
	if(cp_2_5m_cbx) thisComponent.ui.find('#cp_2_5m').closest('.form-group').show();
	if(cp_5m_cbx) thisComponent.ui.find('#cp_5m').closest('.form-group').show();
	if(cp_10m_cbx) thisComponent.ui.find('#cp_10m').closest('.form-group').show();
	
	// Concentration massique
	if(pm0_5_cbx) thisComponent.ui.find('#pm0_5').closest('.form-group').show();
	if(pm_1_cbx) thisComponent.ui.find('#pm_1').closest('.form-group').show();
	if(pm2_5_cbx) thisComponent.ui.find('#pm2_5').closest('.form-group').show();
	if(pm5_cbx) thisComponent.ui.find('#pm5').closest('.form-group').show();
	if(pm10_cbx) thisComponent.ui.find('#pm10').closest('.form-group').show();
	if(tpm_cbx) thisComponent.ui.find('#tpm').closest('.form-group').show();
	
	// COnfort
	if(co) thisComponent.ui.find('#teneur_co').closest('.form-group').show();
	if(mesure_co2) thisComponent.ui.find('#teneur_co2').closest('.form-group').show();
	if(mesure_temperature) thisComponent.ui.find('#temperature').closest('.form-group').show();
	if(mesure_humidite) thisComponent.ui.find('#humidite_relative').closest('.form-group').show();
	
	/**
	*
	* Récapitulatif
	*
	*/
	var mesure_flore_aerobie_totale		= thisComponent.ui.find('#mesure_flore_aerobie_totale').prop('checked');
		
	// Récap Masquer
	thisComponent.ui.find('#recap_particules').closest('.form-group').hide();
	//thisComponent.ui.find('#recap_flore_fongique').closest('.form-group').hide();
	thisComponent.ui.find('#recap_co').closest('.form-group').hide();
	thisComponent.ui.find('#recap_co2').closest('.form-group').hide();
	thisComponent.ui.find('#recap_flore_aerobie').closest('.form-group').hide();
	//thisComponent.ui.find('#recap_indice').closest('.form-group').hide();
	thisComponent.ui.find('#recap_confort_thermique').closest('.form-group').hide();	
	
	// Afficher
	if(mesure_particule) thisComponent.ui.find('#recap_particules').closest('.form-group').show();
	if(co) thisComponent.ui.find('#recap_co').closest('.form-group').show();
	if(mesure_co2) thisComponent.ui.find('#recap_co2').closest('.form-group').show();	
	if(mesure_flore_aerobie_totale) thisComponent.ui.find('#recap_flore_aerobie').closest('.form-group').show();
	if(mesure_temperature) thisComponent.ui.find('#recap_confort_thermique').closest('.form-group').show();

	
}


function getSeuil(thisComponent){
	if(thisComponent.getValue('audit')){
		$.get("webservice/item/get-item.php", {
			tableName	: "audit",
			itemKey  	: thisComponent.getValue('audit')
		})
		.done(function(data){
			//console.log('seuil');
			seuil_co2_val1 = data.seuil_co2_val1;
			seuil_0_5_val1 = data.seuil_0_5_val1;
			seuil_1_0_val1 = data.seuil_1_0_val1;
			console.log('seuil_0_5_val1 : ' + seuil_0_5_val1);
			seuil_tcs_val1 = data.seuil_tcs_val1;
			seuil_mca_val1 = data.seuil_mca_val1;
			seuil_ir_val1 = data.seuil_ir_val1;
			seuil_humidite_val1 = data.seuil_humidite_val1;
			seuil_temperature_val1 = data.seuil_temperature_val1;
			seuil_pm10_val1 = data.seuil_pm10_val1;
			seuil_pm2_5_val1 = data.seuil_pm2_5_val1;
			seuil_formaldehyde_val1 = data.seuil_formaldehyde_val1;
			seuil_benzene_val1 = data.seuil_benzene_val1;
			seuil_cov_totaux_val1 = data.seuil_cov_totaux_val1;
			seuil_toluene_val1 = data.seuil_toluene_val1;
			seuil_ethylbenzene_val1 = data.seuil_ethylbenzene_val1;
			seuil_xylenes_val1 = data.seuil_xylenes_val1;
			seuil_no2_val1 = data.seuil_no2_val1;
			seuil_co2_val2 = data.seuil_co2_val2;
			seuil_0_5_val2 = data.seuil_0_5_val2;
			seuil_1_0_val2 = data.seuil_1_0_val2;
			seuil_tcs_val2 = data.seuil_tcs_val2;
			seuil_mca_val2 = data.seuil_mca_val2;
			seuil_ir_val2 = data.seuil_ir_val2;
			seuil_humidite_val2 = data.seuil_humidite_val2;
			seuil_temperature_val2 = data.seuil_temperature_val2;
			seuil_pm10_val2 = data.seuil_pm10_val2;
			seuil_pm2_5_val2 = data.seuil_pm2_5_val2;
			seuil_formaldehyde_val2 = data.seuil_formaldehyde_val2;
			seuil_benzene_val2 = data.seuil_benzene_val2;
			seuil_cov_totaux_val2 = data.seuil_cov_totaux_val2;
			seuil_toluene_val2 = data.seuil_toluene_val2;
			seuil_ethylbenzene_val2 = data.seuil_ethylbenzene_val2;
			seuil_xylenes_val2 = data.seuil_xylenes_val2;
			seuil_no2_val2 = data.seuil_no2_val2;
			seuil_co2_val3 = data.seuil_co2_val3;
			seuil_0_5_val3 = data.seuil_0_5_val3;
			seuil_1_0_val3 = data.seuil_1_0_val3;
			seuil_tcs_val3 = data.seuil_tcs_val3;
			seuil_mca_val3 = data.seuil_mca_val3;
			seuil_ir_val3 = data.seuil_ir_val3;
			seuil_humidite_val3 = data.seuil_humidite_val3;
			seuil_temperature_val3 = data.seuil_temperature_val3;
			seuil_pm10_val3 = data.seuil_pm10_val3;
			seuil_pm2_5_val3 = data.seuil_pm2_5_val3;
			seuil_formaldehyde_val3 = data.seuil_formaldehyde_val3;
			seuil_benzene_val3 = data.seuil_benzene_val3;
			seuil_cov_totaux_val3 = data.seuil_cov_totaux_val3;
			seuil_toluene_val3 = data.seuil_toluene_val3;
			seuil_ethylbenzene_val3 = data.seuil_ethylbenzene_val3;
			seuil_xylenes_val3 = data.seuil_xylenes_val3;
			seuil_no2_val3 = data.seuil_no2_val3;
			
			// getColor
			getColor(thisComponent,"#cp_05m");
			getColor(thisComponent,"#cp_1m");
			
		}).fail(gopaas.dialog.ajaxFail);	
	}	
}

function changeTitle(thisComponent){
	var vTitle = 'Point ' + thisComponent.getValue('numero_point') + ' - ' + thisComponent.getValue('type') + ' - ' + thisComponent.getValue('localisation') ;
	thisComponent.ui.find('.form-horizontal > h3').html('<i class="fa fa-check-square-o"></i> '+vTitle);

}