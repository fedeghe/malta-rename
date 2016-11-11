This plugin can be used on all files and simply renames the file to the `to` parameter passed (relative to outfolder)  

Options :  
    - **to** new name for the file  

Sample usage:  

    malta app/media/daisy.svg public/media -plugins=malta-svg2png...malta-rename[to:\"rose.png\"]  

or in the .json file :  

    "app/media/daisy.svg" : "public/media -plugins=malta-svg2png...malta-rename[to:\"rose.png\"]"

or in a script :  

    var Malta = require('malta');
    Malta.get().check([
        'app/media/daisy.svg',
        'public/media',
        '-plugins=malta-svg2png...malta-rename[to:\"rose.png\"]',
        '-options=showPath:false,watchInterval:500,verbose:0'
        ]).start(function (o) {
            var s = this;
            console.log('name : ' + o.name)
            console.log("content : \n" + o.content);
            'plugin' in o && console.log("plugin : " + o.plugin);
            console.log('=========');
            */
        });
