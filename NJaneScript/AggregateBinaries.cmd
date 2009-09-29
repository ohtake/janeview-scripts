if not exist bins mkdir bins

for /f %%i in ('dir /b /ad-h') do (
	if exist %%i\bin\ (
		xcopy %%i\bin\* .\bins /s /y
	)
)
