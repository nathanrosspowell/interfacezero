if not exist %CD%\bin mkdir %CD%\bin
pushd %CD%\bin
start chrome --disable-web-security "%CD%\..\index.html"
popd