module.exports = api => {

    api.extendPackage({
        dependencies: {
            vuefire: "^2.2.2",
            firebase: "^7.12.0"
        }
    });

    api.injectImports(
        api.entryFile,
        `import { firestorePlugin } from 'vuefire'`
    );

    api.onCreateComplete(() => {
        let vueUseLine = `\nVue.use(firestorePlugin)`

        const fs = require('fs')

        let contentMain = fs.readFileSync(api.entryFile, { encoding: 'utf-8' })

        const lines = contentMain.split(/\r?\n/g).reverse();

        const lastImportIndex = lines.findIndex(line => line.match(/^import/));

        lines[lastImportIndex] += vueUseLine;

        // modify app
        contentMain = lines.reverse().join('\n');

        fs.writeFileSync(api.entryFile, contentMain, { encoding: 'utf-8' });
    })

    api.render('./template')

    api.exitLog('Vuefire 🔥 and firebase added to your project successfully')
    api.exitLog("Don't forget to touch src/db.js to provide your firebase project id")
    api.exitLog('Check out https://vuefire.vuejs.org/vuefire/binding-subscriptions.html#declarative-binding for usage')

};
