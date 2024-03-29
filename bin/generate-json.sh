#!/bin/bash

line=''
file="dist/themes.json"
count=$(($(ls screenshots/*.png | wc -l)))
i=0
endOfLine=','

echo '[' >$file

for png in screenshots/*.png; do
	i=$((i + 1))

	theme=$(basename -- $png .png)

	value=${theme/prism-/}
	text=${value//-/ }
	text=($text)
	text="${text[@]^}"

	if [[ $i == $count ]]; then
		endOfLine=''
	fi

	echo "  { \"text\": \"$text\", \"value\": \"$value\" }$endOfLine" >>$file
done

echo ']' >>$file
