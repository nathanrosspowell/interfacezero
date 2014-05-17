#!/usr/bin/python
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import os
import jsbeautifier # pip install jsbeautifier
from functools import partial
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
def get_options():
    opts = jsbeautifier.default_options()
    opts.indent_size = 2
    opts.max_preserve_newlines = 0
    opts.jslint_happy = True
    opts.eval_code = True
    opts.wrap_line_length = 79
    return opts
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
def beautify_folder(opts,js_dir):
    def path(js_file):
        return os.path.join(js_dir,js_file)
    def valid(js_file):
        right_file = js_file.endswith(".js")
        minimized =  ".min" in js_file
        boostrap = "boostrap." in js_file
        return right_file and not minimized and not boostrap
    js_files = [path(j) for j in os.listdir(js_dir) if valid(j)]
    beautify_file_partial = partial(beautify_file,opts)
    map(beautify_file_partial,js_files)        
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
def beautify_file(opts,js_file):
    raw_js = ""
    with open(js_file,'r') as read_js:
        raw_js = read_js.read();
    new_js = jsbeautifier.beautify(raw_js,opts)
    with open(js_file,'w') as write_js:
        write_js.write(new_js)
    print("Beautified",js_file) 
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
if __name__ == "__main__":
    this_dir = os.path.dirname(os.path.realpath(__file__))
    js_dir = os.path.join(this_dir,"js")
    beautify_folder(get_options(),js_dir)
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~