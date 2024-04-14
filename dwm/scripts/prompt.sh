#!/bin/bash

# Function to prompt the user for input
prompt() {
    echo -n "$1"
    read input
    echo "$input"
}

# Example usage
result=$(prompt "Enter something: ")
echo "You entered: $result"
