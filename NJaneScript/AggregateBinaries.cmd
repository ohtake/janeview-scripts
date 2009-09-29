setlocal

if not exist bin_Debug (
	mkdir bin_Debug
)
for /f %%i in ('dir /b /ad-h') do (
	if exist %%i\bin\Debug (
		copy %%i\bin\Debug\* bin_Debug
	)
)

if not exist bin_Release (
	mkdir bin_Release
)
for /f %%i in ('dir /b /ad-h') do (
	if exist %%i\bin\Release (
		copy %%i\bin\Release\* bin_Release
	)
)

endlocal
