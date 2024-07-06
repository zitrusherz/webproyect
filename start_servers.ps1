# Obtener la ruta base del script actual
$basePath = Split-Path -Parent $MyInvocation.MyCommand.Definition
$errorLog = "$basePath\error_log.txt"

# Función para verificar e instalar Python
function Install-Python {
    if (-not (Get-Command python -ErrorAction SilentlyContinue)) {
        Write-Output "Python no está instalado. Instalando Python..."
        Invoke-WebRequest -Uri "https://www.python.org/ftp/python/3.9.7/python-3.9.7-amd64.exe" -OutFile "$basePath\python-installer.exe"
        Start-Process -FilePath "$basePath\python-installer.exe" -ArgumentList "/quiet InstallAllUsers=1 PrependPath=1" -Wait
        Remove-Item -Force "$basePath\python-installer.exe"
    } else {
        Write-Output "Python ya está instalado."
    }
}

# Función para verificar e instalar Django
function Install-Django {
    if (-not (python -c "import django" 2>$null)) {
        Write-Output "Django no está instalado. Instalando Django..."
        python -m pip install django
    } else {
        Write-Output "Django ya está instalado."
    }
}

# Función para verificar e instalar django-cors-headers
function Install-DjangoCorsHeaders {
    if (-not (python -c "import corsheaders" 2>$null)) {
        Write-Output "django-cors-headers no está instalado. Instalando django-cors-headers..."
        python -m pip install django-cors-headers
    } else {
        Write-Output "django-cors-headers ya está instalado."
    }
}

# Función para verificar e instalar Node.js y npm
function Install-Node {
    if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
        Write-Output "Node.js no está instalado. Instalando Node.js..."
        Invoke-WebRequest -Uri "https://nodejs.org/dist/v14.17.6/node-v14.17.6-x64.msi" -OutFile "$basePath\node-installer.msi"
        Start-Process -FilePath "$basePath\node-installer.msi" -ArgumentList "/quiet" -Wait
        Remove-Item -Force "$basePath\node-installer.msi"
    } else {
        Write-Output "Node.js ya está instalado."
    }
}

# Función para buscar directorios específicos
function Find-Directory {
    param (
        [string]$baseDir,
        [string]$searchDir
    )
    Get-ChildItem -Path $baseDir -Recurse -Directory | Where-Object { $_.FullName -like "*\$searchDir" } | Select-Object -First 1 -ExpandProperty FullName
}

# Verificar e instalar las dependencias
try {
    Install-Python
    Install-Django
    Install-DjangoCorsHeaders
    Install-Node

    # Buscar los directorios backend y frontend
    $backendPath = Find-Directory -baseDir $basePath -searchDir "backend\userauth"
    $frontendPath = Find-Directory -baseDir $basePath -searchDir "frontend\citric alexandria"

    if (-not $backendPath) {
        throw "No se encontró el directorio backend\userauth"
    }
    if (-not $frontendPath) {
        throw "No se encontró el directorio frontend\citric alexandria"
    }

    # Iniciar el servidor de Django
    Write-Output "Iniciando el servidor de Django..."
    Start-Process -FilePath "python" -ArgumentList "manage.py runserver" -WorkingDirectory $backendPath

    # Iniciar el servidor de npm
    Write-Output "Iniciando el servidor de npm..."
    Start-Process -FilePath "npm" -ArgumentList "run dev" -WorkingDirectory $frontendPath

    # Mantener el script en espera mientras los servidores están en ejecución
    Write-Output "Esperando que las páginas estén abiertas..."
    while ($true) {
        Start-Sleep -Seconds 5
        if (-not (Get-Process -Name "python" -ErrorAction SilentlyContinue) -and -not (Get-Process -Name "node" -ErrorAction SilentlyContinue)) {
            Write-Output "Las páginas han sido cerradas. Deteniendo el servidor..."
            break
        }
    }
} catch {
    Write-Output "Ocurrió un error: $_"
    $_ | Out-File -FilePath $errorLog
}
