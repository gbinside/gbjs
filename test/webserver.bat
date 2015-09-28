@echo off
cd /d %~dp0
copy /y ..\gb.js .
python -m SimpleHTTPServer 8000
