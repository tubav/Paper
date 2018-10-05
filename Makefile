-include lib/resources/build/Makefile

fixme:
	@echo "Seems you forgot the checkout the 'lib' using the recursive parameter."
	@echo "Fixing it for you..."
	@git submodule update --init --recursive || git clone https://github.com/tubav/Core.git lib

.PHONY: html

html:
	@echo "TODO: move to library"
	@echo "TODO: fix issues with subfigures"
	@echo "TODO: fix issues with index"
	@echo "TODO: enhance 'make clean'"
	@echo "TODO: mention 'tlmgr install make4ht tex4ht'"
	pdflatex template
	pdflatex template
	biber template
	pdflatex template
	make4ht -u -d html template "htmlimages,htmlcolor,html5,charset=utf-8,fn-in"
	perl -i -0pe 's/<img.*\n.*alt="PICT".*//g' html/template.html
	perl -i -0pe 's/<hr class=".*figure".*\/>//g' html/template.html
	perl -i -0pe 's/<\?.*\n.*\n.*\n.*\n//' html/template.html
