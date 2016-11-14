-include lib/resources/build/Makefile

fixme:
	@echo "Seems you forgot the checkout the 'lib' using the recursive parameter."
	@echo "Fixing it for you..."
	@git submodule update --init --recursive || git clone https://github.com/Thesis/Core.git lib

.PHONY: html

html:
	@echo "TODO: move to library"
	@echo "TODO: fix issues with subfigures"
	@echo "TODO: fix issues with index"
	@echo "TODO: enhance 'make clean'"
	pdflatex template
	pdflatex template
	biber template
	pdflatex template
	xhlatex template "myhtml,xhtml,charset=utf-8,fn-in" "-cunihtf -utf8"
	perl -i -0pe 's/<img.*\n.*alt="PICT".*//g' template.html
	perl -i -0pe 's/<hr class=".*figure".*\/>//g' template.html
	perl -i -0pe 's/<\?.*\n.*\n.*\n.*\n//' template.html
