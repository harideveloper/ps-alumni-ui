# Description :- Config script to inlcude the runtime environment variables

# Docker build : Injects runtime environment variable for dockerised build. 
# Development Environemt : Read the configs from .env


# global variables
RUNTIME="./runtime.js"
CONFIG=".env"

if [[ -f $RUNTIME ]];then
  echo "$(date +"%d-%m-%Y %T") Info : $RUNTIME exists"
  ls
  rm -rf $RUNTIME
  if [[ $? -gt 0 ]];then
    echo "$(date +"%d-%m-%Y %T") Error 101: Unable to remove old references of $RUNTIME, Validate build logic"
    exit
  else
    echo "$(date +"%d-%m-%Y %T") Info : Removing old references of $RUNTIME"
  fi
else
  echo "$(date +"%d-%m-%Y %T") Info : $RUNTIME exists, Proceeding Runtime Injection"
  touch $RUNTIME
  if [[ $? -gt 0 ]];then
    echo "$(date +"%d-%m-%Y %T") Error 102: Unable to create $RUNTIME, Validate build logic"
    exit
  else
    echo "$(date +"%d-%m-%Y %T") Info : New instance of $RUNTIME created successfully"
  fi
fi

# Add assignment 
echo "window._env_ = {" >> $RUNTIME
if [[ $? -gt 0 ]];then
  echo "$(date +"%d-%m-%Y %T") Error 103: Unable to load $RUNTIME config, Validate build logic"
  exit
else
  echo "$(date +"%d-%m-%Y %T") Info : Creating $RUNTIME file ...."
  # Read each line in .env file
  # Each line represents key=value pairs
  while read -r line || [[ -n "$line" ]];
  do
    # Split environment variables with `=` character
    if printf '%s\n' "$line" | grep -q -e '='; then
      NON_DEV_ENV=$(printf '%s\n' "$line" | sed -e 's/=.*//')
      DEV_ENV=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')
    fi
    # Check if any environment is passed as argument in case of docker, kubernetes build. 
    # If not read the value from .env and it's treated as development environment
    CHECK_IF_DEV=$(printf '%s\n' "${!NON_DEV_ENV}")
    if [[ -z $CHECK_IF_DEV ]];then
      CHECK_IF_DEV=${DEV_ENV}
      # Append configuration property from .env to runtime js
      echo "$(date +"%d-%m-%Y %T") Info : It's a development environment"
      echo "  $NON_DEV_ENV: \"$CHECK_IF_DEV\"," >> $RUNTIME
    else
      echo "$(date +"%d-%m-%Y %T") Info : This is not a development environment"
      echo "  $NON_DEV_ENV: \"$CHECK_IF_DEV\"," >> $RUNTIME
    fi 
  done < .env
  echo "}" >> $RUNTIME 
fi
