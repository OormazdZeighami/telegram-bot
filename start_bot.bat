@echo off
echo ========================================
echo    Telegram Bot Management Script
echo ========================================
echo.

echo [1] Checking for running bot instances...
tasklist /FI "IMAGENAME eq node.exe" 2>NUL | find /I /N "node.exe" >NUL
if "%ERRORLEVEL%"=="0" (
    echo WARNING: Found running Node.js instances!
    echo.
    echo [2] Stopping all Node.js processes...
    taskkill /f /im node.exe >NUL 2>&1
    echo All instances stopped.
    echo.
    timeout /t 3 /nobreak >NUL
) else (
    echo No running instances found.
    echo.
)

echo [3] Starting bot...
echo.
node index.js

pause
