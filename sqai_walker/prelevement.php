<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Script::init(array('content'=>'text/plain','param_not_empty'=>array('mode')));

$mode = $_REQUEST['mode'];

if ($mode == 'prelevementTubeCreate'){
	// On récupère les paramètres du prélèvement
	echo 'entrée dans mode = '.$mode;
	$prelevement = $_REQUEST['prelevement'];
	$formaldehyde = $_REQUEST['formaldehyde'];
	$cov_totaux = $_REQUEST['cov_totaux'];
	$no2 = $_REQUEST['no2'];
	$benzene = $_REQUEST['benzene'];
	$toluene = $_REQUEST['toluene'];
	$ethylbenzene = $_REQUEST['ethylbenzene'];
	$xylenes = $_REQUEST['xylenes'];
	$nb = 1;
	
	$query_delete = "DELETE FROM prelevement_tube where prelevement='".$prelevement."'";
	$statement = Script::$db->prepare($query_delete);
	$statement->execute();
	
	if ($formaldehyde == 'true'){
		$cle = Script::$user['cle'].'-Formaldehyde-'.date("Ymd-His");
		// Créer fiche prelevementTube tube = Formaldéhyde
		$insert = Script::$db->prepare("insert into prelevement_tube
				(cle, prelevement, tube, statut, creation_par, date_creation, heure_creation, numero, type, couleur_corps_diffusif)
				values
				(?,?,?,?,?,?,?,?,?,?);");
		$insert->execute(array($cle, $prelevement, 'Formaldéhyde', 'A réaliser', Script::$user['cle'], date("Y-m-d"), date("H:i:s"), $nb, '165', 'bleu'));
		$insert->closeCursor();
		$nb++;
	}
	
	if ($cov_totaux == 'true'){
		$cle = Script::$user['cle'].'-cov_totaux-'.date("Ymd-His");
		// Créer fiche prelevementTube tube = cov_totaux
		$insert = Script::$db->prepare("insert into prelevement_tube
				(cle, prelevement, tube, statut, creation_par, date_creation, heure_creation, numero)
				values
				(?,?,?,?,?,?,?,?);");
		$insert->execute(array($cle, $prelevement, 'COV totaux', 'A réaliser', Script::$user['cle'], date("Y-m-d"), date("H:i:s"), $nb));
		$insert->closeCursor();
		$nb++;
	}
		
	if ($no2 == 'true'){
		$cle = Script::$user['cle'].'-NO2-'.date("Ymd-His");
		// Créer fiche prelevementTube tube = NO2
		$insert = Script::$db->prepare("insert into prelevement_tube
				(cle, prelevement, tube, statut, creation_par, date_creation, heure_creation, numero, type, couleur_corps_diffusif)
				values
				(?,?,?,?,?,?,?,?,?,?);");
		$insert->execute(array($cle, $prelevement, 'NO2', 'A réaliser', Script::$user['cle'], date("Y-m-d"), date("H:i:s"), $nb, '166', 'bleu'));
		$insert->closeCursor();
		$nb++;
	}
	
	if ($benzene == 'true'){
		$cle = Script::$user['cle'].'-Benzene-'.date("Ymd-His");
		// Créer fiche prelevementTube tube = Benzène
		$insert = Script::$db->prepare("insert into prelevement_tube
				(cle, prelevement, tube, statut, creation_par, date_creation, heure_creation, numero)
				values
				(?,?,?,?,?,?,?,?);");
		$insert->execute(array($cle, $prelevement, 'Benzène', 'A réaliser', Script::$user['cle'], date("Y-m-d"), date("H:i:s"), $nb));
		$insert->closeCursor();
		$nb++;
	}
	
	if ($toluene == 'true'){
		$cle = Script::$user['cle'].'-Toluene-'.date("Ymd-His");
		// Créer fiche prelevementTube tube = Toluène
		$insert = Script::$db->prepare("insert into prelevement_tube
				(cle, prelevement, tube, statut, creation_par, date_creation, heure_creation, numero)
				values
				(?,?,?,?,?,?,?,?);");
		$insert->execute(array($cle, $prelevement, 'Toluène', 'A réaliser', Script::$user['cle'], date("Y-m-d"), date("H:i:s"), $nb));
		$insert->closeCursor();
		$nb++;
	}
	
	if ($ethylbenzene == 'true'){
		$cle = Script::$user['cle'].'-Ethylbenzene-'.date("Ymd-His");
		// Créer fiche prelevementTube tube = Ethylbenzène
		$insert = Script::$db->prepare("insert into prelevement_tube
				(cle, prelevement, tube, statut, creation_par, date_creation, heure_creation, numero)
				values
				(?,?,?,?,?,?,?,?);");
		$insert->execute(array($cle, $prelevement, 'Ethylbenzène', 'A réaliser', Script::$user['cle'], date("Y-m-d"), date("H:i:s"), $nb));
		$insert->closeCursor();
		$nb++;
	}
	
	if ($xylenes == 'true'){
		$cle = Script::$user['cle'].'-Xylene-'.date("Ymd-His");
		// Créer fiche prelevementTube tube = Xylène
		$insert = Script::$db->prepare("insert into prelevement_tube
				(cle, prelevement, tube, statut, creation_par, date_creation, heure_creation, numero)
				values
				(?,?,?,?,?,?,?,?);");
		$insert->execute(array($cle, $prelevement, 'Xylène', 'A réaliser', Script::$user['cle'], date("Y-m-d"), date("H:i:s"), $nb));
		$insert->closeCursor();
		$nb++;
	}
	
}

if ($mode == 'prelevementAerobioCreate'){
	// On récupère les paramètres du prélèvement
	echo 'entrée dans mode = '.$mode;
	$prelevement = $_REQUEST['prelevement'];
	$flore_aerobie_totale = $_REQUEST['flore_aerobie_totale'];
	$levures_moisissures = $_REQUEST['levures_moisissures'];
	$staphylococcus_aureus = $_REQUEST['staphylococcus_aureus'];
	$enterobacteries = $_REQUEST['enterobacteries'];
	
	$query_delete = "DELETE FROM prelevement_aerobio where prelevement='".$prelevement."'";
	$statement = Script::$db->prepare($query_delete);
	$statement->execute();
	
	if ($flore_aerobie_totale == 'true'){
		$cle = Script::$user['cle'].'-FloreAerobieTotale-'.date("Ymd-His");
		// Créer fiche prelevement_aerobio type = TCS : Flore aerobie totale
		$insert = Script::$db->prepare("insert into prelevement_aerobio
				(cle, prelevement, type,  creation_par, date_creation, heure_creation)
				values
				(?,?,?,?,?,?);");
		$insert->execute(array($cle, $prelevement, 'TCS : Flore aerobie totale', Script::$user['cle'], date("Y-m-d"), date("H:i:s")));
		$insert->closeCursor();
	}
	
	if ($levures_moisissures == 'true'){
		$cle = Script::$user['cle'].'-Levures-moisissures-'.date("Ymd-His");
		// Créer fiche prelevement_aerobio type = MCA : Levures/moisissures
		$insert = Script::$db->prepare("insert into prelevement_aerobio
				(cle, prelevement, type,  creation_par, date_creation, heure_creation)
				values
				(?,?,?,?,?,?);");
		$insert->execute(array($cle, $prelevement, 'MCA : Levures/moisissures', Script::$user['cle'], date("Y-m-d"), date("H:i:s")));
		$insert->closeCursor();
	}
	
	if ($staphylococcus_aureus == 'true'){
		$cle = Script::$user['cle'].'-Staphylococcus-aureus-'.date("Ymd-His");
		// Créer fiche prelevement_aerobio type = Baird Parker : Staphylococcus aureus
		$insert = Script::$db->prepare("insert into prelevement_aerobio
				(cle, prelevement, type,  creation_par, date_creation, heure_creation)
				values
				(?,?,?,?,?,?);");
		$insert->execute(array($cle, $prelevement, 'Baird Parker : Staphylococcus aureus', Script::$user['cle'], date("Y-m-d"), date("H:i:s")));
		$insert->closeCursor();
	}
	
	if ($enterobacteries == 'true'){
		$cle = Script::$user['cle'].'-Enterobacteries-'.date("Ymd-His");
		// Créer fiche prelevement_aerobio type = Baird Parker : Mac Conkey : Entérobactéries
		$insert = Script::$db->prepare("insert into prelevement_aerobio
				(cle, prelevement, type,  creation_par, date_creation, heure_creation)
				values
				(?,?,?,?,?,?);");
		$insert->execute(array($cle, $prelevement, 'Mac Conkey : Entérobactéries', Script::$user['cle'], date("Y-m-d"), date("H:i:s")));
		$insert->closeCursor();
	}
}