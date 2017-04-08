#!/bin/bash
#===============================================================================
#/**
# * Wilder: The Willner Builder for LaTeX papers (config file).
# * @author  : Alexander willner (willner@cs.uni-bonn.de)
# * @version : $Id: build.sh.config 423 2010-03-15 14:31:14Z willner@cs.uni-bonn.de $
# */
#===============================================================================
DEBUG=0;               # 0 = output to log, 1 = show output
DOINDEX=0;             # 0 = no index, 1 = create index
DOBIBTEX=1;            # 0 = no bibliography, 1 = create bibliography
DOOPT=1;               # 0 = no optimization, 1 = linearize PDF (i.e. fast web view)
BIN_BIB="biber -q";    # OR bibtex
LANG="en";             # e.g. en, de, ...
LANGEXT="en_US.UTF-8"  # e.g. en_US.UTF-8, de_DE.UTF-8
FILE_BASE="template";
DIR_TMP="/tmp/${FILE_BASE}/";
DIR_SRC="src";
DIR_RES="resources";
DIR_IMG="$DIR_RES/images";
DIR_LYT="$DIR_RES/layout";
DIR_ANA="$DIR_RES/analyzer";
DIR_SCR="$DIR_RES/scripts";
DIR_BLD="lib/$DIR_RES/build";
DIR_CFG="lib/$DIR_RES/config";
REQ_DIRS="$DIR_TMP $DIR_DEST $DIR_SRC $DIR_RES $DIR_TMP $DIR_IMG";
REQ_APPLICATIONS="pdflatex aspell perl epstopdf gnuplot Rscript pdfopt plantuml";
FILE_ABSTRACT="$DIR_SRC/00_abstract.tex";
FILE_INTRO="$DIR_SRC/01_introduction.tex";
FILE_CONFIG="${FILE_BASE}.config.tex";
FILE_MAIN="${FILE_BASE}.tex";
FILE_BIB="${FILE_BASE}.bib";
FILE_ACRO="${FILE_BASE}.acro.tex";
FILE_GEN_BIB="";
FILE_GEN_ACRO="";
FILE_GEN_AUTHORS="";
