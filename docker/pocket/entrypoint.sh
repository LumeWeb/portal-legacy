#!/bin/bash

pocket accounts list &>/dev/null

if [ "$?" -ne 0 ]; then
  pocket accounts import-raw --pwd-encrypt="0" "$POCKET_ACCOUNT_PRIVATE_KEY"
fi
pocket start --mainnet
