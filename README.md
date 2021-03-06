Interface Zero
==============

Digital stats [website][website]
-----------------

[Interface Zero][interfacezero] is a cyberpunk themed pen and paper RPG.
The character sheets are made up of many stats, so I wanted to digitise them in some way. 
This repro used the  `gh-pages` feature of GitHub to provide a website that will be up to date every time a file is updated. 
The digitised character sheets are laid out in the human friendly data formal [YAML][yaml].
The final [website][website] is powered by the [Twitter Bootstrap][bootstrap] framework so it is viewed perfectly on all platforms, escpecially mobile.


How to add a character
----------------------
Make a copy of one of the YAML files in the [gh-pages/yaml][yamlfolder]  folder and rename it as `your_character_name.yaml`. (Please no spaces)

Edit the values and, when you are happy with it, add it to that [folder][yamlfolder].
Finally add that file name to the list in this [Javascript file][jsfile]. 
You can do all of this through the web iterface

To get permission to write directly to this repro contact [me][nathan]. 
Alternatively you can fork this repro and issue a pull-request (you are going to have to set up Git on your computer to do this).


How to edit YAML
----------------
[YAML][yaml] is a human friendly data serialization standard for all programming languages.
YAML files use significant whitespace (much like the Python programming language) to group data together. The main notations to recognise are:

* A map:

        key: 1
        anotherKey: 2.0
        Another Key: Three

* A list:

        - 1
        - 2.0
        - Three

* Strings (text) which have some extra rules because of the parsing library that is used:

        key0: This is a string no need for quotes
        key1: "A string in quotes"
        key2: 'another string in quotes'
        key3: >
            This is a multiline string.
            So you can do as much as you like, as long as it is indented correctly
        key4: "a string that needs 'escaping' because of the quote around that word"
        key5: 'a string that needs "escaping" because of the quote around that word'
        key5: "a string that needs escaping because of the last character :"
        key6: "a string that needs escaping because of the last characer ,"
        key7: "a string that needs escaping because of the last character ,"
        key8: >
            The multiline string can have 'all' the "crazy" characters it wants ::: ,,, !!!
    

* Basic nesting:

        id: # A map of main attributes (This is a comment)
            name: Rodimus Prime
            race: Autobot
        enemies: # A list of enemies. 
            - Megatron
            - Unicron
        friends: # A lists of maps of friend attribues!
            - name: Ironhide
              race: Autobot
            - name: Daniel
              race: Human

Technology used
---------------
* [Twitter Bootstrap][bootstrap]
* [js-yaml][jsyaml]
* [jQuery][jq]

[interfacezero]: http://rpg.drivethrustuff.com/product/124685/Interface-Zero-20-Full-Metal-Cyberpunk "Interface Zero homepage"
[yaml]: http://yaml.org/ "YAML specification"
[yamlvalidate]: http://yaml-online-parser.appspot.com/ "Online YAML validator"
[yamlfolder]: https://github.com/nathanrosspowell/interfacezero/tree/gh-pages/yaml "YAML data folder"
[jsfile]: https://github.com/nathanrosspowell/interfacezero/blob/gh-pages/js/yaml_lists.js "yaml_lists.js"
[bootstrap]: https://github.com/twbs/bootstrap
[jsyaml]: https://github.com/nodeca/js-yaml
[nathan]: http://nathanrosspowell.com/about_me/ "Link to personal email"
[website]: http://nathanrosspowell.github.io/interfacezero/
[jq]: http://jquery.com/
