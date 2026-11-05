@echo off
title Hideaway Coffee House - Upload to GitHub
color 0A
cd /d "D:\Hideway coffee house"

echo ===================================================
echo     HIDEAWAY COFFEE HOUSE - GITHUB UPLOADER
echo ===================================================
echo.
echo Target Repository: https://github.com/ketankrverma/hideway-coffee.git
echo.

set REPO_URL=https://github.com/ketankrverma/hideway-coffee.git

echo [1/3] Git remote configure kar rahe hain...
"C:\Program Files\Git\cmd\git.exe" remote remove origin >nul 2>&1
"C:\Program Files\Git\cmd\git.exe" remote add origin %REPO_URL%
"C:\Program Files\Git\cmd\git.exe" branch -M main

echo.
echo [2/3] Latest code check kar rahe hain...
"C:\Program Files\Git\cmd\git.exe" add .
"C:\Program Files\Git\cmd\git.exe" commit -m "feat: complete production-ready Hideaway Coffee House website" >nul 2>&1

echo.
echo [3/3] GitHub par push kar rahe hain...
echo (Browser me GitHub login / authorize ka prompt aayega, use approve karein)
echo.

"C:\Program Files\Git\cmd\git.exe" push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ===================================================
    echo    MUBARAK HO! Aapka project GitHub par upload ho gaya!
    echo    URL: https://github.com/ketankrverma/hideway-coffee
    echo ===================================================
) else (
    echo.
    echo [NOTE] Push complete nahi hua. Check karein ki browser me login approve kiya ya nahi.
)

echo.
pause
