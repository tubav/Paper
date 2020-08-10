-include lib/resources/build/Makefile

fixme:
	@echo "Seems you forgot the checkout the 'lib' using the recursive parameter."
	@echo "Fixing it for you..."
	@git submodule update --init --recursive || git clone https://github.com/tubav/Core.git lib

.PHONY: html arxiv

git-diff:
	@echo "TODO: move to library"
ifeq (, $(shell which latexpand))
	tlmgr install latexpand
endif
ifeq (, $(shell which latexdiff))
	tlmgr install latexdiff
endif
ifeq (, $(shell which git-latexdiff))
	$(error "No git-latexdiff in $(PATH), you need to install it first")
endif
	git-latexdiff --main template.tex --biber --run-biber -v HEAD --

arxiv:
	@type arxiv-collector >/dev/null 2>&1 || (echo "Run 'pip3 install arxiv-collector' first." >&2 ; exit 1)
	arxiv-collector template.tex

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
