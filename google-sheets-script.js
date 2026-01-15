// =============================================
// GOOGLE APPS SCRIPT - À COPIER DANS GOOGLE SHEETS
// =============================================
// 
// INSTRUCTIONS :
// 1. Crée un nouveau Google Sheet
// 2. Va dans Extensions > Apps Script
// 3. Supprime tout le code existant et colle ce code
// 4. Clique sur "Déployer" > "Nouveau déploiement"
// 5. Sélectionne "Application Web"
// 6. Configure :
//    - Exécuter en tant que : "Moi"
//    - Qui a accès : "Tout le monde"
// 7. Clique sur "Déployer"
// 8. Copie l'URL de déploiement
// 9. Colle l'URL dans script.js à la place de 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'
//
// =============================================

function doPost(e) {
    try {
        // Get the active spreadsheet
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

        // Parse the incoming data
        const data = JSON.parse(e.postData.contents);

        // Add headers if the sheet is empty
        if (sheet.getLastRow() === 0) {
            sheet.appendRow(['Timestamp', 'Prénom', 'Email', 'Filière']);
        }

        // Add the new row
        sheet.appendRow([
            data.timestamp || new Date().toISOString(),
            data.prenom || '',
            data.email || '',
            data.filiere || ''
        ]);

        // Return success response
        return ContentService
            .createTextOutput(JSON.stringify({ success: true }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        // Return error response
        return ContentService
            .createTextOutput(JSON.stringify({ success: false, error: error.message }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

function doGet(e) {
    return ContentService
        .createTextOutput('Major Inscription API is running')
        .setMimeType(ContentService.MimeType.TEXT);
}
