Interface Zero
==============

RPG digital stats
-----------------

[Interface Zero][interfacezero] is a cyberpunk themed pen and paper RPG. This repro takes advantages of the `gh-pages` feature of GitHub to provide a website that will be up to date every time a file is updated. The digitised chartacter sheets are layed out in the human friendly data formal [YAML][yaml].


How to add a character
----------------------
Make a copy of one of the YAML files in the [gh-pages/yaml][yamlfolder] and dave it as `your_character_name.yaml`. (Please no spaces)

When you are happy with it, add it to that folder. Finally add that file name to the list in this [Javascript file][jsfile].

To get permission to write directly to this repro contact me.


How to edit YAML
----------------
[YAML][yaml] is a human friendly data serialization standard for all programming languages.
YAML files use significant whitespace (much like the Python programming language) to group data together. The main notations to reconise are:
* A map:
  ```YAML
  key: 1

  anotherKey: 2
  
  Another Key: 2
  ```
* A list:
  ```YAML
  - 1
  
  - 2
  
  - 3
  ```
* Strings (text) which have some exta rules because of the parsing libraty that is used:
 ```YAML
  key0: This is a string no need for quotes
  key1: "A string in quotes"
  key2: 'another string in quotes'
  key3: >
      This is a multiline string.
      So you can do as much as you like, as long as it is indented correctly
  key4: "a string that needs 'escaping' because of the quote around that word"
  key5: 'a string that needs "escaping" because of the quote around that word'
  key5: "a string that needs escaping because of the last characer :"
  key6: "a string that needs escaping because of the last characer ,"
  key7: "a string that needs escaping because of the last characer ,"
  key8: >
      The multiline string can have 'all' the "crazy" characers it wasnts ::: ,,, !!!
    
  ```

Technology used
---------------
* [Twitter Bootstrap][bootstrap]
* [js-yaml][jsyaml]

[interfacezero]: http://rpg.drivethrustuff.com/product/124685/Interface-Zero-20-Full-Metal-Cyberpunk "Interface Zero homepage"
[yaml]: http://yaml.org/ "YAML specification"
[yamlvalidate]: http://yaml-online-parser.appspot.com/ "Online YAML validator"
[yamlfolder]: https://github.com/nathanrosspowell/interfacezero/tree/gh-pages/yaml "YAML data folder"
[jsfile]: https://github.com/nathanrosspowell/interfacezero/blob/gh-pages/js/yaml_lists.js "yaml_lists.js"
[bootstrap]: https://github.com/twbs/bootstrap
[jsyaml]: https://github.com/nodeca/js-yaml
