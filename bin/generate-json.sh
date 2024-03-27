#!/bin/bash

line=''
file="themes.json"
count=$(($(ls screenshots/*.png | wc -l)))
i=0
endOfLine=','

echo '[' >$file

for png in screenshots/*.png; do
	i=$((i + 1))

	theme=$(basename -- $png .png)

	name=${theme/prism-/}
	name=${name//-/ }
	name=($name)
	name="${name[@]^}"

	if [[ $i == $count ]]; then
		endOfLine=''
	fi

	echo "  { \"text\": \"$name\", \"value\": \"$theme\" }$endOfLine" >>$file
done

echo ']' >>$file
