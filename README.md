[![Build Status](https://travis-ci.org/Thesis/Paper.svg?branch=master)](https://travis-ci.org/Thesis/Paper)

Sophisticated LaTeX Paper Template
==================================

Abstract
--------

During their studies most PhD students will be faced to the situation to
write a paper or other publications. Fortunately, one can find many hints,
tipps, and checklist on the Internet.

This project aims to provide a template that includes the above mentioned
instructions and is basically following the article [Tipps zum Schreiben von Konferenzpapieren](http://sdqweb.ipd.kit.edu/wiki/Tipps_zum_Schreiben_von_Konferenzpapieren).

Main Features
-------------

* PDF support: hyperlinks, ToC, annotations, native and XMP meta-data
* Language support: UTF8 encoding, support for CJK and German
* Integration: buildbot test script, TeXlipse project file, graphviz, gnuplot, R
* Build file: clean, compile, image generation, validation
* Validation: orthography (incl. project dictionary), hyphens, commas, references, todos, best practices, l2tabu, latex/bibtex warnings
* Media: examples for images, multiple images, equations, tables, algorithms
* Bibliography: multiple files, link to the source page, show unreferenced items
* Other: side notes, line numbering, overleaf.com support

Getting Started
---------------

* Setup your system (tested on Ubuntu 13.10)
```
sudo apt-get -y install git fonts-sil-gentium fonts-sil-gentium-basic texlive-fonts-extra fonts-inconsolata texlive-xetex texlive-latex-recommended texlive-latex-extra texlive-humanities texlive-science cm-super aspell gnuplot r-base graphviz
sudo add-apt-repository -y ppa:webupd8team/java
sudo apt-get update
sudo apt-get -y install oracle-java7-installer
wget http://yar.fruct.org/attachments/download/362/plantuml_7707-1_all.deb
sudo dpkg -i plantuml_7707-1_all.deb
```

* Setup your system (tested on macOS 10.12)
```
# first install brew
brew cask install mactex
brew tap homebrew/science
brew install plantuml graphviz gnuplot r aspell --with-lang-de
```


* Work with the paper
```
git clone --recursive git://github.com/Thesis/Paper.git && cd Paper && make
```

* Create a new paper
```
make rename
make clean full
make open
```

* Create a new paper manually
```
pdflatex template && pdflatex template && biber template && pdflatex template && pdflatex template
```


* Create a paper at overleaf.com
  * Create new ZIP file: ```git clone --recursive git://github.com/Thesis/Paper.git && zip -r Paper.zip Paper/```
  * Open https://www.overleaf.com/dash and upload ```Paper.zip```
  * Open project and define ```template.tex``` as main file (should work)
  * Clone project via git
  * Run ```chmod +x build.sh && make debug && make clean full open```  (should work)

Contribute
----------
Feel free to fork, push enhancements and create error reports and feature requests.

FAQ
---

#### I've an issue generating the bibliography
 * Symptom: ```read_file '/var/XXX/cache-XXX/inc/lib/Biber/LaTeX/recode_data.xml' - sysopen: No such file or directory at /var/XXX/cache-XXX/bda77484.pm line 112.```
 * Cause: Weired biber bug
 * Solution: Run ```rm -rf $(biber --cache)```

#### I've an issue with the make command or compiling not finding a file
 * Symptom: An error similar to: ```File 'lib/resources/XXX' not found```
 * Cause: You forgot to checkout the repository with the ```--recursive``` option. E.g. you downloaded the ZIP file.
 * Solution:
 Checkout the repository as stated in the command above.
 Or run ```make``` once without any parameters.
 Or run ```	@git submodule update --init --recursive```.
 Or run ```git clone https://github.com/Thesis/Core.git lib```.

References
-----------
 * [Advice Collection](http://www.csc.ncsu.edu/faculty/xie/advice.htm) written by Tao Xie and Yuan Xie
 * [Collected Advice on Research and Writing](http://www.cs.cmu.edu/afs/cs.cmu.edu/user/mleone/web/how-to.html) written by Mark Leone
 * [Writing Technical Articles](http://www.cs.columbia.edu/~hgs/etc/writing-style.html) written by Henning Schulzrinne
 * [So long, and thanks for the Ph.D.! "A graduate school survival guide"](http://www.cs.unc.edu/~azuma/hitch4.html) written by Ronald T. Azuma
 * [How to Succeed in Graduate School "A Guide for Students and Advisors"](http://www.acm.org/crossroads/xrds1-3/advice2.html) written by Marie des Jardins
 * [Using Commas from Purdue University Online Writing Lab](http://owl.english.purdue.edu/handouts/grammar/g_comma.html), [How to Use English Punctuation Correctly](http://www.wikihow.com/Use-English-Punctuation-Correctly), [Komma in Aufzählungen](http://www.ego4u.de/de/cram-up/writing/comma?08)
 * [Genitive Basics](http://www.smic.be/smic5022/genitive.htm) and [Advanced Genitive Rules](http://www.smic.be/smic5022/Genitive2.htm)
 * [Wissenschaftliches Schreiben: Aufbau](https://sdqweb.ipd.kit.edu/wiki/Wissenschaftliches_Schreiben/Aufbau) a Wiki (in Germany only) maintained by KIT.
