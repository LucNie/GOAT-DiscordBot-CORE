Voici une amélioration de la documentation :

**Besoin API pour l'application Ia Prédiction**
remarque avant de commencer :
- le nom des routes sont définit comme vous le souhaitez
- je me suis référé à la documentation de BDD modèle conceptuel.docx pour les associations entre les tables
- pour les routes put, il faut que je voye avec le responsable de la BDD pour rajouter les besoin de l'IA dans la BDD ( les routes commencant par "*" sont a mettre après avoir rajouter les besoins de l'IA dans la BDD )

## Routes GET

Les routes Get sont utilisées pour récupérer des données pour les données d'entrées de l'IA de la base de données de l'IOT.
**Route GET** IOT avec parametre :
| Route | Description |
| ------ | ------ |
| /LastIot | parametre : ( ID_Champ , ID_Parcelle ) Retourne Toutes dernière données des capteurs associés à la parcelle du champ |
| /LastIot/Date | parametre : ( ID_Champ , ID_Parcelle , Date ) Retourne Toutes les première données des capteurs associés à la parcelle du champ en fonctionne de la date |
| /iot | parametre : ( ID_Champ , ID_Parcelle ) Retourne Toutes les données des capteurs associés à la parcelle du champ |
| /iot/Date | parametre : ( ID_Champ , ID_Parcelle , Date ) Retourne Toutes les données des capteurs associés à la parcelle du champ en fonctionne de la date |
| */iaQualité | parametre : ( ID_Champ , ID_Parcelle ) Retourne Toutes les données de l'IA de la prédiciton de la qualité associés à la parcelle du champ |
| */iaQualité/Date | parametre : ( ID_Champ , ID_Parcelle , Date ) Retourne Toutes les données de l'IA de la prédiciton de la qualité associés à la parcelle du champ en fonctionne de la date |
| */iaArosage | parametre : ( ID_Champ , ID_Parcelle ) Retourne Toutes les données de l'IA de la prédiciton de l'arosage associés à la parcelle du champ |
| */iaArosage/Date | parametre : ( ID_Champ , ID_Parcelle , Date ) Retourne Toutes les données de l'IA de la prédiciton de l'arosage associés à la parcelle du champ en fonctionne de la date |

Les routes Put sont utilisées pour enregistrer des données concernant les données de sorties de l'IA
qui iront dans la base de données de l'ia.
**Route PUT** IA avec parametre :
| Route | Description |
| ------ | ------ |
| */IaQualité | (parametre : date[DateHeure], iaPrédiction[Float] ) Ajoute une prédiction de l'IA dans la base de données de l'IA |
| */IaArosage | (parametre : date[DateHeure], iaArosage[boolean] ) Ajoute booléen de l'IA dans la base de données de l'IA |