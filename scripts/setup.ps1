$ErrorActionPreference='Stop'
python -c "import sys; assert sys.version_info.major == 3 and sys.version_info.minor >= 9"

if ($LastExitCode -ne 0) {
  echo "Incorrect python version or Python is not installed. Requires python 3.9+"
  exit 1
}

echo "Create python virtual env and setup pre-commit hook"
python -m venv venv
./venv/Scripts/activate
python -m pip install -r dev.requirements.txt
pre-commit install
if ($LastExitCode -ne 0) {
  echo "Some problems with installing pre-commit"
} else {
  echo "pre-commit hook installed successfully"
}

node --version
if ($LastExitCode -ne 0) {
  echo "Nodejs is not installed. Please install nodejs 20.11.0+ https://nodejs.org"
  exit 1
}

npm -v
if ($LastExitCode -ne 0) {
  echo "NPM is not installed. Please Install NPM"
  exit 1
}

$pnpmVersion = $(pnpm -v)
if ($LastExitCode -ne 0) {
  echo "pnpm not installed. Install pnpm"
  npm install -g pnpm
}

pnpm install
